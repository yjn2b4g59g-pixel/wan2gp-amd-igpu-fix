# Wan2GP mit AMD: wenn die iGPU den GPU-Platz besetzt

Wan2GP meldet zu wenig VRAM oder stirbt mit `HIP error: invalid device function`, sobald im Rechner
neben der dedizierten Radeon auch eine integrierte GPU steckt, also bei jeder Ryzen-CPU mit Grafik.

Dieses Repo beschreibt die Ursachen und enthält Skripte, die sie finden und beheben.

Getestet auf: Ryzen 7 7800X3D (Raphael-iGPU, gfx1036) plus Radeon RX 7900 XTX (gfx1100), Windows 11,
Wan2GP sowohl unter Pinokio als auch im Wan2GP Desktop Launcher.

## Symptome

| Was du siehst | Ursache |
|---|---|
| VRAM wird als ~12 GB erkannt statt in der echten Größe deiner Karte | 1 |
| `[ERROR] Deepy preload failed: HIP error: invalid device function` | 1 |
| `HIP kernel errors might be asynchronously reported at some other API call` | 1 |
| Wan2GP wählt ein niedriges Speicherprofil (4, 4.5, 5) obwohl 16 bis 24 GB VRAM vorhanden sind | 1 oder 3 |
| `No NVIDIA GPU detected` im Desktop Launcher, alles rechnet auf dem Prozessor | 2 |
| `torch.cuda.is_available()` ist `False`, obwohl der AMD-Treiber sauber läuft | 2 |
| Der Launcher zeigt genau `VRAM 4 GB` | 3 |

## Ursache 1: PyTorch nimmt Gerät 0, und das ist die iGPU

Sind beide GPUs aktiv, zählt PyTorch sie in PCI-Reihenfolge, und die integrierte steht meistens vorn:

```
0  AMD Radeon(TM) Graphics    gfx1036   12.17 GB   <- iGPU, geteilter Arbeitsspeicher
1  AMD Radeon RX 7900 XTX     gfx1100   23.98 GB   <- die Karte, die du meinst
```

`wgp.py` liest beim Bestimmen des Speichers fest Gerät 0 aus:

```python
device_mem_capacity = torch.cuda.get_device_properties(0).total_memory / 1048576
```

Wan2GP misst also die iGPU. Daraus folgen zwei Dinge:

1. Der VRAM-Wert stimmt nicht, und jede daraus abgeleitete Profilentscheidung ist ebenfalls falsch.
2. Die Kernel stürzen ab. Die ROCm-Wheels von TheRock sind ausschließlich für `gfx110x` gebaut. Einen
   gfx1100-Kernel auf einer gfx1036-iGPU zu starten ist genau das, was
   `HIP error: invalid device function` bedeutet.

### Lösung

Die dedizierte Karte zum einzigen sichtbaren HIP-Gerät machen:

```
HIP_VISIBLE_DEVICES=1
```

Als Benutzer-Umgebungsvariable setzen, dann erbt sie jeder Launcher. Die `1` war der Wert auf dem
Referenzrechner, deinen ermittelt `scripts/diagnose.ps1`. Danach sieht PyTorch nur noch ein Gerät, und
`get_device_properties(0)` trifft die richtige Karte.

Die iGPU im BIOS abzuschalten funktioniert auch, kostet aber auf vielen Boards die Bildausgabe. Eine
Umgebungsvariable ist der bessere Handel.

### Hinweis für Pinokio

Pinokio startet Wan2GP über eigene Skripte. Die Variable gehört in den `env`-Block von `start.js` und
`deepy.js` unter `C:\pinokio\api\wan.git\`:

```js
env: {
  SERVER_NAME: "127.0.0.1",
  SERVER_PORT: port,
  HIP_VISIBLE_DEVICES: "1"
},
```

Ein Pinokio-Update überschreibt diese Dateien. Deshalb ist die Benutzer-Umgebungsvariable der
dauerhafte Teil der Lösung und der Eingriff in die Skripte nur die Absicherung.

## Ursache 2: Der CUDA-Build von PyTorch ist installiert

Ein eigenständiges Problem mit ähnlichem Erscheinungsbild. Wenn deine Umgebung das hier meldet:

```
torch 2.10.0+cu130
cuda build 13.0 | hip None
is_available False
count 0
```

dann ist der NVIDIA-Build installiert. Der spricht eine Radeon nie an, alles läuft still auf dem
Prozessor. Der Wan2GP Desktop Launcher bietet bei der Einrichtung ROCm an, hinterlegt in
`setup_config.json`:

```json
"rocm65": { "label": "ROCm 6.5 (TheRock)" }
```

Daran klickt man leicht vorbei und landet bei `cu128` oder `cu130`.

### Lösung

Die drei Torch-Pakete gegen die gfx110x-Builds von
[scottt/rocm-TheRock](https://github.com/scottt/rocm-TheRock) tauschen und alle CUDA-Beschleuniger
mit entfernen. `scripts/fix-torch-rocm.ps1` erledigt das. Von Hand:

```powershell
python -m pip uninstall -y torch torchvision torchaudio sageattention spas_sage_attn flash_attn nunchaku llamacpp-gguf-cuda triton-windows
```

```powershell
python -m pip install https://github.com/scottt/rocm-TheRock/releases/download/v6.5.0rc-pytorch-gfx110x/torch-2.7.0a0+rocm_git3f903c3-cp311-cp311-win_amd64.whl https://github.com/scottt/rocm-TheRock/releases/download/v6.5.0rc-pytorch-gfx110x/torchvision-0.22.0+9eb57cd-cp311-cp311-win_amd64.whl https://github.com/scottt/rocm-TheRock/releases/download/v6.5.0rc-pytorch-gfx110x/torchaudio-2.7.0a0+52638ef-cp311-cp311-win_amd64.whl
```

Die Wheels sind `cp311`, die Umgebung muss also auf Python 3.11 laufen.

**Die Deinstallationsliste ist wichtig.** Sage Attention, SpargeAttn, Flash Attention, Nunchaku, die
CUDA-GGUF-Kernel und triton-windows gibt es nur für NVIDIA. Bleiben sie installiert, gibt es
Importfehler oder einen Absturz bei der ersten Generierung, keinen sauberen Rückfall.

Danach `attention_mode` in `wgp_config.json` auf `auto` setzen. Steht dort noch `sage2`, nachdem Sage
Attention entfernt wurde, scheitert das erste Video:

```json
"attention_mode": "auto",
```

## Ursache 3: Die 4 GB VRAM sind ein Windows-Fehler, nicht deine Karte

Programme, die den VRAM über WMI auslesen (`Win32_VideoController.AdapterRAM`), melden für jede Karte
über 4 GB **genau 4 GB**. Das Feld ist ein vorzeichenbehafteter 32-Bit-Wert und läuft über. Der Wan2GP
Desktop Launcher liest so aus, deshalb steht in seinem Systemblock `VRAM 4 GB` neben einer korrekt
benannten RX 7900 XTX, und deshalb empfiehlt sein Auto-Tune anschließend ein zu niedriges Profil.

Diesen Wert ignorieren. Es zählt `torch.cuda.mem_get_info()`:

```
VRAM frei/gesamt: 23.8 / 24.0 GB
```

An der Karte selbst ist nichts zu reparieren. Nach den Fixes für Ursache 1 und 2 den Auto-Tune erneut
laufen lassen oder das Profil von Hand setzen.

## Fallstrick: immer nur ein Wan2GP gleichzeitig

Bei zwei Installationen, etwa Pinokio und Desktop Launcher, nie beide auf dieselbe Karte loslassen.
Der zweite Prozess bricht nicht mit einer verständlichen Meldung ab, sondern dreht mit 100 Prozent
eines Kerns in einer HIP-Warteschleife und kehrt nie zurück. Auf dem Referenzrechner hat das 17
Minuten Fehlersuche gekostet, bis der erste Prozess als noch laufend entdeckt wurde.

## Das passende Speicherprofil

Sobald der VRAM richtig erkannt wird, greift die Profilmatrix wie vorgesehen:

| VRAM \ RAM | ab 64 GB | ab 32 GB | unter 32 GB |
|---|---|---|---|
| **ab 24 GB** | P1 | P3 | P3+ (3.5) |
| **12 bis 23 GB** | P2 | P4 | P5 |
| **unter 12 GB** | P4 | P4+ | P5 |

Profil 3 lädt das gesamte Modell in den VRAM. Profil 3.5 macht dasselbe ohne reservierten
Arbeitsspeicher, das ist die richtige Wahl bei viel VRAM und knappem RAM.

## Skripte

PowerShell, und keines davon verändert etwas ohne Rückfrage.

| Skript | Was es tut |
|---|---|
| `scripts/diagnose.ps1` | Listet GPUs, findet Wan2GP-Installationen, prüft Torch-Build, Pinning und Konfiguration und sagt am Ende, was faul ist |
| `scripts/fix-device-pinning.ps1` | Setzt `HIP_VISIBLE_DEVICES` auf deine dedizierte Karte und patcht die Pinokio-Skripte |
| `scripts/fix-torch-rocm.ps1` | Tauscht den CUDA-Torch gegen die ROCm-gfx110x-Wheels, mit `-DryRun` zum Vorabschauen |

Hier anfangen:

```powershell
powershell -ExecutionPolicy Bypass -File scripts\diagnose.ps1
```

## Prüfen, ob es gewirkt hat

```powershell
python -c "import torch; print(torch.__version__, torch.version.hip); import torch.cuda as c; print(c.device_count(), c.get_device_name(0)); f,t=c.mem_get_info(); print('%.1f/%.1f GB' % (f/1024**3, t/1024**3))"
```

So sieht ein repariertes System aus:

```
2.7.0a0+git3f903c3 6.5.25214-5ea90b8c4
1 AMD Radeon RX 7900 XTX
23.8/24.0 GB
```

Ein Gerät, der richtige Name, die echte Speichergröße.

## Andere gfx-Ziele

Die Wheel-Adressen oben sind gfx110x und decken RX 7900 XTX/XT, 7900 GRE, 7800 XT und 7700 XT ab.
Andere Architekturen brauchen andere Builds von derselben Release-Seite. `HSA_OVERRIDE_GFX_VERSION`
wird oft empfohlen, um eine nicht unterstützte Karte auf ein unterstütztes Ziel zu zwingen. Das ist
ein anderes Problem als die Geräteauswahl und kein Ersatz für `HIP_VISIBLE_DEVICES`.

## Dank

Wan2GP stammt von [deepbeepmeep](https://github.com/deepbeepmeep/Wan2GP). Die Windows-ROCm-Wheels für
PyTorch baut [scottt](https://github.com/scottt/rocm-TheRock).
