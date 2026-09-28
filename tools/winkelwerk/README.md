# Winkelwerk

Interaktives Werkzeug für die trigonometrischen Funktionen, ihre Umkehrfunktionen und die wichtigsten Sätze. Es besteht aus einer einzigen Datei (`index.html`) ohne Abhängigkeiten. Zum Starten die Datei im Browser öffnen.

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

## Modus „Sätze“

Jeder Satz wird in einer Figur gezeigt und mit den eingestellten Werten live nachgerechnet. Dazu gibt es jeweils einen Hinweis, wofür man ihn braucht.

- **Grundbeziehungen:** trigonometrischer Pythagoras, tan α = sin α / cos α, 1 + tan²α = 1/cos²α, negativer Winkel, Supplement- und Komplementwinkel, Periodizität, Drehung um 90°.
- **Additionstheoreme:** sin(α ± β), cos(α ± β), tan(α + β) und die Summenformeln sin α + sin β und cos α + cos β. α und β lassen sich am Kreis ziehen.
- **Doppel- und Halbwinkel:** sin 2α, cos 2α (alle drei Formen), tan 2α, Potenzreduktion für sin² und cos², halber Winkel mit Vorzeichen nach Quadrant, tan(α/2) über den Umfangswinkelsatz.
- **Sinus- und Kosinussatz:** Dreieck mit ziehbaren Ecken und Vorlagen. Enthält Winkelsumme, Sinussatz mit Umkreis, Kosinussatz (mit Pythagoras als Sonderfall), Flächenformel, Projektionssatz und die Definitionen im rechtwinkligen Dreieck.

## Eingabe

- Grad oder Bogenmaß umschalten. Im Bogenmaß werden Winkel als Vielfache von π angezeigt.
- Winkel lassen sich als `135`, `-45`, `22,5`, `2π/3` oder `pi/6` eintippen, Werte als `0,5`, `-√3/2` oder `sqrt2/2`.
- „Einrasten“ rastet Winkel in 15°-Schritten ein und Werte auf besonderen Werten wie √2/2.
