<#
.SYNOPSIS
    Replaces a CUDA PyTorch stack with the ROCm gfx110x build in a Wan2GP environment.

.DESCRIPTION
    Removes torch and every CUDA-only accelerator, then installs the scottt/rocm-TheRock wheels.
    Writes a pip freeze snapshot first so the previous state can be restored. Requires Python 3.11.

.PARAMETER EnvPython
    Python executable of the Wan2GP environment. Auto-detected when omitted.

.PARAMETER DryRun
    Print what would happen and change nothing.

.PARAMETER KeepConfig
    Do not touch attention_mode in wgp_config.json.

.PARAMETER Force
    Apply without asking.

.EXAMPLE
    powershell -ExecutionPolicy Bypass -File scripts\fix-torch-rocm.ps1 -DryRun
#>
[CmdletBinding()]
param(
    [string]$EnvPython,
    [switch]$DryRun,
    [switch]$KeepConfig,
    [switch]$Force
)

$ErrorActionPreference = 'Stop'

# gfx110x: RX 7900 XTX/XT, 7900 GRE, 7800 XT, 7700 XT. Other cards need different wheels
# from https://github.com/scottt/rocm-TheRock/releases
$base = "https://github.com/scottt/rocm-TheRock/releases/download/v6.5.0rc-pytorch-gfx110x"
$wheels = @(
    "$base/torch-2.7.0a0+rocm_git3f903c3-cp311-cp311-win_amd64.whl",
    "$base/torchvision-0.22.0+9eb57cd-cp311-cp311-win_amd64.whl",
    "$base/torchaudio-2.7.0a0+52638ef-cp311-cp311-win_amd64.whl"
)

# CUDA-only packages. Leaving these installed crashes the first generation.
$cudaOnly = @(
    "torch", "torchvision", "torchaudio",
    "sageattention", "spas_sage_attn", "flash_attn",
    "nunchaku", "llamacpp-gguf-cuda", "triton-windows"
)

function Confirm-Step($question) {
    if ($Force) { return $true }
    $a = Read-Host ("{0} [y/N]" -f $question)
    return ($a -eq 'y' -or $a -eq 'Y')
}

# ------------------------------------------------------- locate environment
if (-not $EnvPython) {
    $EnvPython = @(
        "C:\Wan2GP\env_uv\Scripts\python.exe",
        "$env:USERPROFILE\Wan2GP\env_uv\Scripts\python.exe",
        "$env:USERPROFILE\pinokio\api\wan.git\app\venv\Scripts\python.exe",
        "C:\pinokio\api\wan.git\app\venv\Scripts\python.exe"
    ) | Where-Object { Test-Path $_ } | Select-Object -First 1
}

if (-not $EnvPython -or -not (Test-Path $EnvPython)) {
    Write-Host "No Wan2GP Python environment found. Pass one with -EnvPython." -ForegroundColor Red
    exit 1
}

$pyVer = (& $EnvPython -c "import sys; print('%d.%d' % sys.version_info[:2])" 2>$null)
Write-Host ("Environment : {0}" -f $EnvPython)
Write-Host ("Python      : {0}" -f $pyVer)

if ($pyVer -ne "3.11") {
    Write-Host ""
    Write-Host ("The wheels are cp311 and this environment is Python {0}." -f $pyVer) -ForegroundColor Red
    Write-Host "Recreate the environment with Python 3.11 first." -ForegroundColor Red
    exit 1
}

# ------------------------------------------------------- current state
$current = (& $EnvPython -c "import torch; print(torch.__version__, '|', getattr(torch.version,'hip',None))" 2>$null)
Write-Host ("torch now   : {0}" -f $(if ($current) { $current } else { "<not installed>" }))

$alreadyRocm = ($current -and $current -notmatch "\| None")
if ($alreadyRocm) {
    Write-Host ""
    Write-Host "This environment already has a ROCm build. Nothing to swap." -ForegroundColor Green
    if (-not $DryRun) {
        if (-not (Confirm-Step "Reinstall anyway?")) { exit 0 }
    }
}

Write-Host ""
Write-Host "Plan:" -ForegroundColor White
Write-Host ("  1. snapshot pip freeze")
Write-Host ("  2. uninstall: {0}" -f ($cudaOnly -join ", "))
Write-Host ("  3. install the three ROCm gfx110x wheels (about 1.1 GB download)")
if (-not $KeepConfig) {
    Write-Host ("  4. set attention_mode to 'auto' if it is a CUDA-only mode")
}

if ($DryRun) {
    Write-Host ""
    Write-Host "Dry run, nothing changed." -ForegroundColor Cyan
    exit 0
}

Write-Host ""
Write-Host "Close Wan2GP and every launcher first: loaded DLLs cannot be replaced." -ForegroundColor Yellow
$busy = @(Get-CimInstance Win32_Process -Filter "Name='python.exe'" -ErrorAction SilentlyContinue |
    Where-Object { $_.CommandLine -like "*wgp.py*" })
if ($busy.Count -gt 0) {
    foreach ($b in $busy) { Write-Host ("  running: PID {0}" -f $b.ProcessId) -ForegroundColor Yellow }
    if (-not (Confirm-Step "Wan2GP is running. Continue regardless?")) { exit 0 }
}

if (-not (Confirm-Step "Proceed?")) { exit 0 }

# ------------------------------------------------------- snapshot
$stamp = Get-Date -Format "yyyyMMdd-HHmmss"
$snap = Join-Path (Split-Path $EnvPython -Parent) ("pip-freeze-before-rocm-$stamp.txt")
& $EnvPython -m pip freeze > $snap 2>$null
Write-Host ("Snapshot: {0}" -f $snap) -ForegroundColor DarkGray

# ------------------------------------------------------- uninstall
Write-Host ""
Write-Host "Uninstalling CUDA packages..." -ForegroundColor White
& $EnvPython -m pip uninstall -y @cudaOnly 2>&1 |
    Where-Object { $_ -match "Successfully uninstalled|not installed" } |
    ForEach-Object { Write-Host ("  {0}" -f $_) }

# ------------------------------------------------------- install
Write-Host ""
Write-Host "Installing ROCm wheels..." -ForegroundColor White
& $EnvPython -m pip install --no-cache-dir @wheels 2>&1 | Select-Object -Last 6

$after = (& $EnvPython -c "import torch; print(torch.__version__, '|', getattr(torch.version,'hip',None))" 2>$null)
if ($after -match "\| None" -or -not $after) {
    Write-Host ""
    Write-Host "Install did not produce a ROCm build. Restore with:" -ForegroundColor Red
    Write-Host ("  {0} -m pip install -r {1}" -f $EnvPython, $snap)
    exit 1
}
Write-Host ("torch now: {0}" -f $after) -ForegroundColor Green

# ------------------------------------------------------- config
if (-not $KeepConfig) {
    $root = Split-Path (Split-Path (Split-Path $EnvPython -Parent) -Parent) -Parent
    foreach ($cand in @((Join-Path $root "wgp_config.json"), (Join-Path (Split-Path $EnvPython -Parent | Split-Path | Split-Path) "wgp_config.json"))) {
        if (-not (Test-Path $cand)) { continue }
        try {
            $c = Get-Content $cand -Raw -Encoding UTF8 | ConvertFrom-Json
            if ($c.attention_mode -in @("sage", "sage2", "sage2++", "flash")) {
                Copy-Item $cand ($cand + ".bak") -Force
                $c.attention_mode = "auto"
                $c | ConvertTo-Json -Depth 100 | Set-Content $cand -Encoding utf8
                Write-Host ("attention_mode set to 'auto' in {0} (backup kept)" -f $cand) -ForegroundColor Green
            }
        } catch { }
        break
    }
}

# ------------------------------------------------------- verify
Write-Host ""
Write-Host "Verifying..." -ForegroundColor White
& $EnvPython -c @"
import torch
print('  hip build :', torch.version.hip)
print('  devices   :', torch.cuda.device_count())
for i in range(torch.cuda.device_count()):
    p = torch.cuda.get_device_properties(i)
    print('   [%d] %s %s %.2f GB' % (i, p.name, getattr(p, 'gcnArchName', '?'), p.total_memory/1024**3))
a = torch.randn(512, 512, device='cuda'); b = torch.randn(512, 512, device='cuda')
(a @ b).sum().item(); torch.cuda.synchronize()
f, t = torch.cuda.mem_get_info()
print('  matmul ok, VRAM %.1f/%.1f GB' % (f/1024**3, t/1024**3))
"@ 2>&1 | Where-Object { $_ -notmatch "Warning" }

Write-Host ""
Write-Host "If more than one device is listed, run scripts\fix-device-pinning.ps1 next." -ForegroundColor White
Write-Host ("Rollback: {0} -m pip install -r {1}" -f $EnvPython, $snap) -ForegroundColor DarkGray
