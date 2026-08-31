<#
.SYNOPSIS
    Pins HIP to the dedicated AMD GPU so Wan2GP stops measuring the integrated one.

.DESCRIPTION
    Detects which device index belongs to the dedicated card, sets HIP_VISIBLE_DEVICES as a user
    environment variable and patches the Pinokio launcher scripts. Asks before every change.

.PARAMETER DeviceIndex
    Force a device index instead of using the detected one.

.PARAMETER EnvPython
    Python executable of a Wan2GP environment, used for detection. Auto-detected when omitted.

.PARAMETER SkipPinokio
    Do not touch the Pinokio launcher scripts.

.PARAMETER Force
    Apply without asking.

.EXAMPLE
    powershell -ExecutionPolicy Bypass -File scripts\fix-device-pinning.ps1
#>
[CmdletBinding()]
param(
    [int]$DeviceIndex = -1,
    [string]$EnvPython,
    [switch]$SkipPinokio,
    [switch]$Force
)

$ErrorActionPreference = 'Stop'

function Confirm-Step($question) {
    if ($Force) { return $true }
    $a = Read-Host ("{0} [y/N]" -f $question)
    return ($a -eq 'y' -or $a -eq 'Y')
}

# ------------------------------------------------------- find a python to probe with
if (-not $EnvPython) {
    $EnvPython = @(
        "$env:USERPROFILE\pinokio\api\wan.git\app\venv\Scripts\python.exe",
        "C:\pinokio\api\wan.git\app\venv\Scripts\python.exe",
        "C:\Wan2GP\env_uv\Scripts\python.exe",
        "$env:USERPROFILE\Wan2GP\env_uv\Scripts\python.exe"
    ) | Where-Object { Test-Path $_ } | Select-Object -First 1
}

if (-not $EnvPython -or -not (Test-Path $EnvPython)) {
    Write-Host "No Wan2GP Python environment found. Pass one with -EnvPython." -ForegroundColor Red
    exit 1
}

Write-Host ("Probing with: {0}" -f $EnvPython) -ForegroundColor DarkGray

# ------------------------------------------------------- enumerate devices unfiltered
$probe = @'
import json
try:
    import torch
    devs = []
    for i in range(torch.cuda.device_count()):
        p = torch.cuda.get_device_properties(i)
        devs.append({"i": i, "name": p.name,
                     "arch": getattr(p, "gcnArchName", "?"),
                     "gb": round(p.total_memory / 1024**3, 2)})
    print("JSONSTART" + json.dumps({"devices": devs, "hip": getattr(torch.version, "hip", None)}))
except Exception as e:
    print("JSONSTART" + json.dumps({"error": "%s: %s" % (type(e).__name__, e)}))
'@

$tmp = Join-Path $env:TEMP ("wan2gp_pin_{0}.py" -f [guid]::NewGuid().ToString("N"))
Set-Content -Path $tmp -Value $probe -Encoding utf8

# clear any existing pin so we see the full list
$savedPin = $env:HIP_VISIBLE_DEVICES
$env:HIP_VISIBLE_DEVICES = $null
$raw = & $EnvPython $tmp 2>$null
$env:HIP_VISIBLE_DEVICES = $savedPin
Remove-Item $tmp -ErrorAction SilentlyContinue

$line = ($raw | Where-Object { $_ -like "JSONSTART*" } | Select-Object -First 1)
if (-not $line) {
    Write-Host "Could not query torch." -ForegroundColor Red
    exit 1
}
$info = $line.Substring(9) | ConvertFrom-Json

if ($info.error) {
    Write-Host ("torch failed: {0}" -f $info.error) -ForegroundColor Red
    exit 1
}
if (-not $info.hip) {
    Write-Host "This environment has a CUDA build of torch, not ROCm." -ForegroundColor Red
    Write-Host "Pinning will not help. Run scripts\fix-torch-rocm.ps1 first." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Visible HIP devices:" -ForegroundColor White
foreach ($d in $info.devices) {
    Write-Host ("  [{0}] {1,-28} {2,-9} {3} GB" -f $d.i, $d.name, $d.arch, $d.gb)
}

if ($info.devices.Count -eq 0) {
    Write-Host "No HIP devices at all. Check the driver." -ForegroundColor Red
    exit 1
}
if ($info.devices.Count -eq 1 -and $DeviceIndex -lt 0) {
    Write-Host ""
    Write-Host "Only one device is visible. Either you have no iGPU, or a pin is already in place." -ForegroundColor Green
    Write-Host ("Current user setting: {0}" -f $([Environment]::GetEnvironmentVariable("HIP_VISIBLE_DEVICES","User")))
    if (-not (Confirm-Step "Continue anyway and (re)write the pin?")) { exit 0 }
}

# ------------------------------------------------------- choose the dedicated card
if ($DeviceIndex -ge 0) {
    $target = $info.devices | Where-Object { $_.i -eq $DeviceIndex } | Select-Object -First 1
    if (-not $target) {
        Write-Host ("Device index {0} does not exist." -f $DeviceIndex) -ForegroundColor Red
        exit 1
    }
} else {
    # iGPUs are named "AMD Radeon(TM) Graphics" and use small gfx targets (gfx1036, gfx1103, gfx90c).
    # Prefer a device whose name is not the generic iGPU name; break ties by memory size.
    $target = $info.devices |
        Sort-Object @{ Expression = { $_.name -match "Radeon\(TM\) Graphics" } }, @{ Expression = { -$_.gb } } |
        Select-Object -First 1
}

Write-Host ""
Write-Host ("Target: device {0}, {1} ({2}), {3} GB" -f $target.i, $target.name, $target.arch, $target.gb) -ForegroundColor Cyan
Write-Host ("This sets HIP_VISIBLE_DEVICES={0}" -f $target.i)

if (-not (Confirm-Step "Write it as a user environment variable?")) {
    Write-Host "Nothing changed."
    exit 0
}

$before = [Environment]::GetEnvironmentVariable("HIP_VISIBLE_DEVICES", "User")
[Environment]::SetEnvironmentVariable("HIP_VISIBLE_DEVICES", "$($target.i)", "User")
Write-Host ("  was: {0}" -f $(if ($before) { $before } else { "<not set>" }))
Write-Host ("  now: {0}" -f [Environment]::GetEnvironmentVariable("HIP_VISIBLE_DEVICES", "User")) -ForegroundColor Green
Write-Host "  Applications must be restarted to inherit it." -ForegroundColor DarkGray

# ------------------------------------------------------- patch Pinokio scripts
if ($SkipPinokio) { exit 0 }

$dirs = @("$env:USERPROFILE\pinokio\api\wan.git", "C:\pinokio\api\wan.git") |
    Where-Object { Test-Path $_ } | Select-Object -Unique

foreach ($d in $dirs) {
    foreach ($f in @("start.js", "deepy.js")) {
        $p = Join-Path $d $f
        if (-not (Test-Path $p)) { continue }

        $text = Get-Content $p -Raw
        if ($text -match "HIP_VISIBLE_DEVICES") {
            Write-Host ("{0}: already pinned." -f $p) -ForegroundColor Green
            continue
        }

        Write-Host ""
        Write-Host ("{0} does not set HIP_VISIBLE_DEVICES." -f $p) -ForegroundColor Yellow
        if (-not (Confirm-Step "Patch it? A .bak copy is kept.")) { continue }

        Copy-Item $p ($p + ".bak") -Force

        $patched = $null
        if ($text -match '(?m)^(\s*)env:\s*\{') {
            # add to the existing env block
            $patched = [regex]::Replace($text, '(?m)^(\s*)env:\s*\{',
                ('${1}env: {' + "`r`n" + '${1}  HIP_VISIBLE_DEVICES: "' + $target.i + '",'), 1)
        } elseif ($text -match '(?m)^(\s*)venv:\s*"venv",') {
            # no env block: insert one next to the venv key
            $patched = [regex]::Replace($text, '(?m)^(\s*)venv:\s*"venv",',
                ('${1}venv: "venv",' + "`r`n" + '${1}env: { HIP_VISIBLE_DEVICES: "' + $target.i + '" },'), 1)
        }

        if ($patched) {
            Set-Content -Path $p -Value $patched -Encoding utf8 -NoNewline
            Write-Host ("  patched, backup at {0}.bak" -f $p) -ForegroundColor Green
        } else {
            Write-Host "  Could not find a place to insert. Add it by hand:" -ForegroundColor Yellow
            Write-Host ('    env: { HIP_VISIBLE_DEVICES: "' + $target.i + '" },')
        }
    }
}

Write-Host ""
Write-Host "Done. Restart Pinokio or the launcher completely, not just Wan2GP." -ForegroundColor White
Write-Host "A Pinokio update overwrites start.js and deepy.js; the user variable survives it." -ForegroundColor DarkGray
