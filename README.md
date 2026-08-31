# Wan2GP on AMD: when the iGPU steals the GPU slot

Wan2GP reports the wrong VRAM, or dies with `HIP error: invalid device function`, on AMD systems
that have both an integrated GPU (Ryzen APU) and a dedicated Radeon card.

This repo documents the causes and ships scripts to detect and fix them.

Verified on: Ryzen 7 7800X3D (Raphael iGPU, gfx1036) + Radeon RX 7900 XTX (gfx1100), Windows 11,
Wan2GP running under both Pinokio and the Wan2GP Desktop Launcher.

## Symptoms

| What you see | Cause |
|---|---|
| VRAM detected as ~12 GB (or whatever your shared memory is) instead of your card's real size | 1 |
| `[ERROR] Deepy preload failed: HIP error: invalid device function` | 1 |
| `HIP kernel errors might be asynchronously reported at some other API call` | 1 |
| Wan2GP picks a low memory profile (4, 4.5, 5) although you have 16-24 GB VRAM | 1 or 3 |
| `No NVIDIA GPU detected` in the Desktop Launcher, generation runs on CPU only | 2 |
| `torch.cuda.is_available()` is `False` on a healthy AMD driver | 2 |
| Launcher shows exactly `VRAM 4 GB` | 3 |

## Cause 1: PyTorch picks device 0, which is your iGPU

With both GPUs enabled, PyTorch enumerates them in PCI order and the integrated GPU usually
comes first:

```
0  AMD Radeon(TM) Graphics    gfx1036   12.17 GB   <- iGPU, shared system RAM
1  AMD Radeon RX 7900 XTX     gfx1100   23.98 GB   <- the card you want
```

`wgp.py` reads device 0 unconditionally when it sizes memory:

```python
device_mem_capacity = torch.cuda.get_device_properties(0).total_memory / 1048576
```

So Wan2GP measures the iGPU. Two things follow:

1. The VRAM number is wrong, and every memory-profile decision derived from it is wrong.
2. Kernels crash. The ROCm/TheRock wheels are built for `gfx110x` only. Dispatching a gfx1100
   kernel onto a gfx1036 iGPU is exactly what `HIP error: invalid device function` means.

### Fix

Make the dedicated card the only visible HIP device:

```
HIP_VISIBLE_DEVICES=1
```

Set it as a user environment variable so every launcher inherits it. Index `1` is what it was on
the reference machine; run `scripts/diagnose.ps1` to get yours. Afterwards PyTorch sees a single
device and `get_device_properties(0)` hits the right card.

Disabling the iGPU in the BIOS also works, but many boards route display output through it, so
that is a worse trade than one environment variable.

### Pinokio note

Pinokio launches Wan2GP through its own scripts. Add the variable to the `env` block in both
`start.js` and `deepy.js` under `C:\pinokio\api\wan.git\`:

```js
env: {
  SERVER_NAME: "127.0.0.1",
  SERVER_PORT: port,
  HIP_VISIBLE_DEVICES: "1"
},
```

A Pinokio update overwrites these files, which is why the user-level environment variable is the
durable half of the fix and the script edit is the belt and braces half.

## Cause 2: the CUDA build of PyTorch is installed

A separate problem with a similar visible outcome. If your environment reports this:

```
torch 2.10.0+cu130
cuda build 13.0 | hip None
is_available False
count 0
```

then the NVIDIA build is installed. It will never touch a Radeon, and everything silently runs on
the CPU. The Wan2GP Desktop Launcher offers ROCm at setup time, listed in `setup_config.json`:

```json
"rocm65": { "label": "ROCm 6.5 (TheRock)" }
```

It is easy to click past that and end up on `cu128` or `cu130`.

### Fix

Swap the three torch packages for the [scottt/rocm-TheRock](https://github.com/scottt/rocm-TheRock)
gfx110x builds and remove every CUDA-only accelerator alongside them. `scripts/fix-torch-rocm.ps1`
does this. The manual equivalent:

```powershell
python -m pip uninstall -y torch torchvision torchaudio sageattention spas_sage_attn flash_attn nunchaku llamacpp-gguf-cuda triton-windows
```

```powershell
python -m pip install https://github.com/scottt/rocm-TheRock/releases/download/v6.5.0rc-pytorch-gfx110x/torch-2.7.0a0+rocm_git3f903c3-cp311-cp311-win_amd64.whl https://github.com/scottt/rocm-TheRock/releases/download/v6.5.0rc-pytorch-gfx110x/torchvision-0.22.0+9eb57cd-cp311-cp311-win_amd64.whl https://github.com/scottt/rocm-TheRock/releases/download/v6.5.0rc-pytorch-gfx110x/torchaudio-2.7.0a0+52638ef-cp311-cp311-win_amd64.whl
```

Those wheels are `cp311`, so the environment has to be Python 3.11.

**The uninstall list matters.** Sage Attention, SpargeAttn, Flash Attention, Nunchaku, the CUDA GGUF
kernels and triton-windows are NVIDIA-only. Leaving them installed produces import errors or a crash
at the first generation, not a graceful fallback.

Then set `attention_mode` back to `auto` in `wgp_config.json`. If it still says `sage2` after Sage
Attention is gone, the first video fails:

```json
"attention_mode": "auto",
```

## Cause 3: the 4 GB VRAM readout is a Windows bug, not your card

Tools that read VRAM through WMI (`Win32_VideoController.AdapterRAM`) report **exactly 4 GB** for any
card larger than that, because the field is a signed 32-bit value and overflows. The Wan2GP Desktop
Launcher reads it that way, which is why its System panel shows `VRAM 4 GB` next to a correctly named
RX 7900 XTX, and why its auto-tune then recommends a low memory profile.

Ignore that number. `torch.cuda.mem_get_info()` is the one that counts:

```
VRAM free/total: 23.8 / 24.0 GB
```

Nothing to fix on the card itself. Re-run the launcher's auto-tune after fixing causes 1 and 2, or
set the profile by hand.

## Gotcha: run only one Wan2GP at a time

With two installations (say Pinokio and the Desktop Launcher), do not point both at the same card.
The second process gives no clear error: it spins at 100% of one CPU core inside a HIP wait and never
returns. That cost 17 minutes of debugging on the reference machine before the first process was
found still running.

## Picking the memory profile

Once VRAM is detected correctly, the profile matrix applies as intended:

| VRAM \ RAM | 64 GB and up | 32 GB and up | under 32 GB |
|---|---|---|---|
| **24 GB and up** | P1 | P3 | P3+ (3.5) |
| **12 to 23 GB** | P2 | P4 | P5 |
| **under 12 GB** | P4 | P4+ | P5 |

Profile 3 loads the whole model into VRAM. Profile 3.5 does the same without reserved system RAM,
which is what you want when VRAM is plentiful and RAM is tight.

## Scripts

PowerShell, and none of them take a destructive action without asking.

| Script | What it does |
|---|---|
| `scripts/diagnose.ps1` | Lists GPUs, finds Wan2GP installs, reports the torch build, the pinning state and the config, then prints what is wrong |
| `scripts/fix-device-pinning.ps1` | Sets `HIP_VISIBLE_DEVICES` to your dedicated card and patches the Pinokio launcher scripts |
| `scripts/fix-torch-rocm.ps1` | Replaces the CUDA torch stack with the ROCm gfx110x wheels, with a `-DryRun` mode |

Start here:

```powershell
powershell -ExecutionPolicy Bypass -File scripts\diagnose.ps1
```

## Verifying the fix

```powershell
python -c "import torch; print(torch.__version__, torch.version.hip); import torch.cuda as c; print(c.device_count(), c.get_device_name(0)); f,t=c.mem_get_info(); print('%.1f/%.1f GB' % (f/1024**3, t/1024**3))"
```

Expected on a fixed system:

```
2.7.0a0+git3f903c3 6.5.25214-5ea90b8c4
1 AMD Radeon RX 7900 XTX
23.8/24.0 GB
```

One device, the right name, the real VRAM size.

## Other gfx targets

The wheel URLs above are gfx110x, covering RX 7900 XTX/XT, 7900 GRE, 7800 XT and 7700 XT. Other
architectures need different builds from the same release page. `HSA_OVERRIDE_GFX_VERSION` is
sometimes suggested to force an unsupported card onto a supported target; that is a different
problem from device selection and not a substitute for `HIP_VISIBLE_DEVICES`.

## Credits

Wan2GP is by [deepbeepmeep](https://github.com/deepbeepmeep/Wan2GP). The Windows ROCm PyTorch wheels
are built by [scottt](https://github.com/scottt/rocm-TheRock).

German version: [README.de.md](README.de.md)
