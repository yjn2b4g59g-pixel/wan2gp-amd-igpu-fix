<#
.SYNOPSIS
    Diagnoses why Wan2GP does not see the dedicated AMD GPU or reports the wrong VRAM.

.DESCRIPTION
    Read-only. Lists GPUs, locates Wan2GP installations, inspects each Python environment
    and prints a verdict with the matching fix.

.PARAMETER Path
    Extra Wan2GP installation directory to inspect, on top of the usual locations.

.EXAMPLE
    powershell -ExecutionPolicy Bypass -File scripts\diagnose.ps1
#>
[CmdletBinding()]
param(
    [string[]]$Path = @()
)

$ErrorActionPreference = 'Continue'
$problems = @()

function Write-Section($text) {
    Write-Host ""
    Write-Host "== $text " -ForegroundColor Cyan -NoNewline
    Write-Host ("=" * [Math]::Max(0, 74 - $text.Length)) -ForegroundColor DarkCyan
}

function Add-Problem($id, $text, $fix) {
    $script:problems += [PSCustomObject]@{ Id = $id; Text = $text; Fix = $fix }
}

Write-Host ""
Write-Host "Wan2GP AMD diagnostics" -ForegroundColor White

# ---------------------------------------------------------------- GPUs
Write-Section "Graphics adapters (as Windows sees them)"

$gpus = @(Get-CimInstance Win32_VideoController -ErrorAction SilentlyContinue)
foreach ($g in $gpus) {
    $wmiVram = if ($g.AdapterRAM) { [math]::Round($g.AdapterRAM / 1GB, 2) } else { 0 }
    Write-Host ("  {0,-38} driver {1,-18} WMI reports {2} GB" -f $g.Name, $g.DriverVersion, $wmiVram)
}

$amd = @($gpus | Where-Object { $_.AdapterCompatibility -like "*Advanced Micro*" })
if ($amd.Count -gt 1) {
    Write-Host "  -> More than one AMD adapter present. Device order matters." -ForegroundColor Yellow
}
if ($gpus | Where-Object { $_.AdapterRAM -and [math]::Round($_.AdapterRAM / 1GB, 2) -eq 4 }) {
    Write-Host "  -> A 4.00 GB reading here is the 32-bit WMI overflow, not the real size (cause 3)." -ForegroundColor DarkYellow
}

# ---------------------------------------------------------------- Pinning
Write-Section "Device pinning"

$hipUser = [Environment]::GetEnvironmentVariable("HIP_VISIBLE_DEVICES", "User")
$hipProc = $env:HIP_VISIBLE_DEVICES
$rocr = [Environment]::GetEnvironmentVariable("ROCR_VISIBLE_DEVICES", "User")

Write-Host ("  HIP_VISIBLE_DEVICES  (user)    : {0}" -f $(if ($hipUser) { $hipUser } else { "<not set>" }))
Write-Host ("  HIP_VISIBLE_DEVICES  (session) : {0}" -f $(if ($hipProc) { $hipProc } else { "<not set>" }))
Write-Host ("  ROCR_VISIBLE_DEVICES (user)    : {0}" -f $(if ($rocr) { $rocr } else { "<not set>" }))

if (-not $hipUser -and $amd.Count -gt 1) {
    Add-Problem 1 "Two AMD GPUs and no HIP_VISIBLE_DEVICES: PyTorch will use device 0, likely the iGPU." `
                  "Run scripts\fix-device-pinning.ps1"
}

# ---------------------------------------------------------------- Installations
Write-Section "Wan2GP installations"

$candidates = @(
    "$env:USERPROFILE\pinokio\api\wan.git\app",
    "C:\pinokio\api\wan.git\app",
    "C:\Wan2GP",
    "$env:USERPROFILE\Wan2GP"
) + $Path

$found = @()
foreach ($c in ($candidates | Select-Object -Unique)) {
    if (Test-Path (Join-Path $c "wgp.py")) {
        $py = @(
            (Join-Path $c "venv\Scripts\python.exe"),
            (Join-Path $c "env_uv\Scripts\python.exe"),
            (Join-Path $c ".venv\Scripts\python.exe")
        ) | Where-Object { Test-Path $_ } | Select-Object -First 1

        $found += [PSCustomObject]@{ Dir = $c; Python = $py }
        Write-Host ("  {0}" -f $c) -ForegroundColor White
        Write-Host ("     python: {0}" -f $(if ($py) { $py } else { "<no environment found>" }))
    }
}

if ($found.Count -eq 0) {
    Write-Host "  No installation found. Pass one with -Path <directory>." -ForegroundColor Yellow
}
if ($found.Count -gt 1) {
    Write-Host "  -> Several installations. Changes to one never affect the other, and running two" -ForegroundColor Yellow
    Write-Host "     of them against the same card at once makes the second one hang." -ForegroundColor Yellow
}

# ---------------------------------------------------------------- Per environment
$probe = @'
import json, sys
out = {}
try:
    import torch
    out["torch"] = torch.__version__
    out["hip"] = getattr(torch.version, "hip", None)
    out["cuda"] = torch.version.cuda
    out["available"] = bool(torch.cuda.is_available())
    devs = []
    try:
        for i in range(torch.cuda.device_count()):
            p = torch.cuda.get_device_properties(i)
            devs.append({"i": i, "name": p.name,
                         "arch": getattr(p, "gcnArchName", "?"),
                         "gb": round(p.total_memory / 1024**3, 2)})
    except Exception as e:
        out["dev_error"] = "%s: %s" % (type(e).__name__, e)
    out["devices"] = devs
except Exception as e:
    out["import_error"] = "%s: %s" % (type(e).__name__, e)
print("JSONSTART" + json.dumps(out))
'@

foreach ($inst in $found) {
    Write-Section ("Environment: " + $inst.Dir)

    if (-not $inst.Python) {
        Write-Host "  No Python environment, skipping." -ForegroundColor Yellow
        continue
    }

    $tmp = Join-Path $env:TEMP ("wan2gp_probe_{0}.py" -f [guid]::NewGuid().ToString("N"))
    Set-Content -Path $tmp -Value $probe -Encoding utf8
    $raw = & $inst.Python $tmp 2>$null
    Remove-Item $tmp -ErrorAction SilentlyContinue

    $line = ($raw | Where-Object { $_ -like "JSONSTART*" } | Select-Object -First 1)
    if (-not $line) {
        Write-Host "  Could not query torch in this environment." -ForegroundColor Yellow
        continue
    }
    $info = $line.Substring(9) | ConvertFrom-Json

    if ($info.import_error) {
        Write-Host ("  torch import failed: {0}" -f $info.import_error) -ForegroundColor Red
        Add-Problem 2 ("torch is not importable in " + $inst.Dir) "Reinstall the environment, then run scripts\fix-torch-rocm.ps1"
        continue
    }

    Write-Host ("  torch {0}" -f $info.torch)
    Write-Host ("  ROCm/HIP build : {0}" -f $(if ($info.hip) { $info.hip } else { "no" }))
    Write-Host ("  CUDA build     : {0}" -f $(if ($info.cuda) { $info.cuda } else { "no" }))
    Write-Host ("  GPU available  : {0}" -f $info.available)

    foreach ($d in $info.devices) {
        Write-Host ("     [{0}] {1,-28} {2,-9} {3} GB" -f $d.i, $d.name, $d.arch, $d.gb)
    }

    if ($info.cuda -and -not $info.hip) {
        Add-Problem 2 ("CUDA build of torch installed in " + $inst.Dir + " - it cannot use a Radeon at all") `
                      ("Run: scripts\fix-torch-rocm.ps1 -EnvPython """ + $inst.Python + """")
    }
    if ($info.hip -and $info.devices.Count -gt 1) {
        $first = $info.devices[0]
        Add-Problem 1 ("Device 0 in " + $inst.Dir + " is " + $first.name + " (" + $first.arch + "). Wan2GP reads device 0.") `
                      "Run scripts\fix-device-pinning.ps1"
    }
    if ($info.hip -and $info.devices.Count -eq 1) {
        Write-Host "  -> Single visible device, correct." -ForegroundColor Green
    }

    # -------------------------------------------------------- config
    $cfg = Join-Path $inst.Dir "wgp_config.json"
    if (Test-Path $cfg) {
        try {
            $c = Get-Content $cfg -Raw -Encoding UTF8 | ConvertFrom-Json
            Write-Host ("  attention_mode : {0}" -f $c.attention_mode)
            Write-Host ("  profiles       : video {0} / image {1} / audio {2}" -f $c.video_profile, $c.image_profile, $c.audio_profile)

            if ($c.attention_mode -in @("sage", "sage2", "sage2++", "flash")) {
                Add-Problem 4 ("attention_mode is '" + $c.attention_mode + "', which is NVIDIA-only") `
                              ("Set attention_mode to 'auto' in " + $cfg)
            }
        } catch {
            Write-Host "  wgp_config.json could not be parsed." -ForegroundColor Yellow
        }
    }
}

# ---------------------------------------------------------------- Pinokio scripts
Write-Section "Pinokio launcher scripts"

$pinokioDirs = @("$env:USERPROFILE\pinokio\api\wan.git", "C:\pinokio\api\wan.git") |
    Where-Object { Test-Path $_ } | Select-Object -Unique

if ($pinokioDirs.Count -eq 0) {
    Write-Host "  No Pinokio installation of Wan2GP found."
} else {
    foreach ($d in $pinokioDirs) {
        foreach ($f in @("start.js", "deepy.js")) {
            $p = Join-Path $d $f
            if (Test-Path $p) {
                $has = (Get-Content $p -Raw) -match "HIP_VISIBLE_DEVICES"
                $mark = if ($has) { "pinned" } else { "NOT pinned" }
                $col = if ($has) { "Green" } else { "Yellow" }
                Write-Host ("  {0,-52} {1}" -f $p, $mark) -ForegroundColor $col
                if (-not $has) {
                    Add-Problem 1 ($f + " does not set HIP_VISIBLE_DEVICES") "Run scripts\fix-device-pinning.ps1"
                }
            }
        }
    }
}

# ---------------------------------------------------------------- Running processes
Write-Section "Running Wan2GP processes"

$running = @(Get-CimInstance Win32_Process -Filter "Name='python.exe'" -ErrorAction SilentlyContinue |
    Where-Object { $_.CommandLine -like "*wgp.py*" })

if ($running.Count -eq 0) {
    Write-Host "  None."
} else {
    foreach ($r in $running) {
        Write-Host ("  PID {0}: {1}" -f $r.ProcessId, $r.CommandLine.Trim())
    }
    if ($running.Count -gt 1) {
        Add-Problem 5 "More than one Wan2GP process is running against the same GPU" `
                      "Stop all but one, otherwise the others hang in a HIP spin-wait"
    }
}

# ---------------------------------------------------------------- Verdict
Write-Section "Verdict"

if ($problems.Count -eq 0) {
    Write-Host "  Nothing found. If Wan2GP still misreports VRAM, check the number it prints at" -ForegroundColor Green
    Write-Host "  startup against torch.cuda.mem_get_info() and open an issue with both values." -ForegroundColor Green
} else {
    $i = 0
    foreach ($p in ($problems | Sort-Object Id)) {
        $i++
        Write-Host ("  {0}. [cause {1}] {2}" -f $i, $p.Id, $p.Text) -ForegroundColor Yellow
        Write-Host ("     fix: {0}" -f $p.Fix)
    }
}
Write-Host ""
