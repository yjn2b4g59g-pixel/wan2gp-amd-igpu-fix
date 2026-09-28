# Winkelwerk

Interaktives Werkzeug für die trigonometrischen Funktionen und ihre Umkehrfunktionen. Es besteht aus einer einzigen Datei (`index.html`) ohne Abhängigkeiten. Zum Starten die Datei im Browser öffnen.

## Modus „Winkel → Wert“

- Einheitskreis mit ziehbarem Punkt P(cos α | sin α). Sinus, Kosinus und Tangens sind als farbige Strecken eingezeichnet.
- Graphen von sin, cos und tan über −360° bis 360°, jeweils ein- und ausblendbar. Im Graphen kann α ebenfalls gezogen werden.
- Wertetabelle für sin, cos, tan und cot mit exakten Werten (z. B. √3/2), Dezimalwert und Vorzeichen, dazu Quadrant, Bezugswinkel und die Probe sin²α + cos²α = 1.
- Rückweg: arcsin(sin α), arccos(cos α) und arctan(tan α). Das Werkzeug zeigt, wann dabei nicht wieder α herauskommt und warum.

## Modus „Wert → Winkel“

- arcsin, arccos und arctan mit Hauptwert in Grad und im Bogenmaß.
- Am Einheitskreis sind der Wertebereich, der Hauptwert und die zweite Lösung markiert.
- Graph der Umkehrfunktion als Spiegelbild der eingeschränkten Ausgangsfunktion an y = x, beide Achsen gleich skaliert.
- Alle Lösungen in [0°; 360°) und die allgemeine Lösung (z. B. α = 30° + k · 360° oder α = 150° + k · 360°).
- Definitions- und Wertebereich, Probe und Zusammenhänge wie arcsin x + arccos x = 90°.

## Eingabe

- Grad oder Bogenmaß umschalten. Im Bogenmaß werden Winkel als Vielfache von π angezeigt.
- Winkel lassen sich als `135`, `-45`, `22,5`, `2π/3` oder `pi/6` eintippen, Werte als `0,5`, `-√3/2` oder `sqrt2/2`.
- „Einrasten“ rastet Winkel in 15°-Schritten ein und Werte auf besonderen Werten wie √2/2.
