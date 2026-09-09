# Vorkurs Mathematik — Lernprogramm

Interaktives Lernprogramm zum Skript *Vorkurs Mathematik* (Prof. Dr. Norbert Franken,
FH Aachen, Fachbereich Aerospace & Automotive Engineering, WS 2026/27).

## Inhalt

`vorkurs-mathematik.html` ist eine eigenständige Seite ohne externe Abhängigkeiten
(abgesehen von Google Fonts). Sie führt in 16 Lektionen durch den kompletten Stoff des
Skripts und prüft nach jeder Lektion mit einer Lernkontrolle nach.

| Kapitel | Lektionen |
|---|---|
| 1 Grundlagen | Mengen · Terme und Rechenregeln · Summen, Produkte, Binomialkoeffizient · Aussagenlogik · Bruchrechnung |
| 2 Potenzen, Wurzeln, Logarithmen | Potenzen · Wurzeln · Logarithmen |
| 3 Trigonometrie | Rechtwinkliges Dreieck · Einheitskreis |
| 4 Gleichungen und Ungleichungen | Lineare und quadratische Gleichungen · Wurzel-, Exponential- und Logarithmusgleichungen · Lineare Gleichungssysteme · Ungleichungen |
| 5 Reelle Funktionen | Funktionsbegriff, Injektivität und Surjektivität · Eigenschaften und zusammengesetzte Funktionen |

Insgesamt 74 Erklärschritte und 128 Prüfungsfragen, dazu eine Abschlussprüfung mit
24 zufällig gezogenen Fragen aus allen Kapiteln.

## Aufbau der Seite

* **Formelsatz** — eine kleine TeX-Teilmenge (`\frac`, `\sqrt`, `\binom`, Indizes,
  Exponenten, Symbolmakros) wird zur Laufzeit in HTML übersetzt. Variablen werden
  kursiv, Zahlen und Operatoren aufrecht gesetzt.
* **Fragetypen** — Einfachauswahl, Mehrfachauswahl und freie Eingabe. Jede Frage
  liefert nach dem Prüfen eine Begründung, auch bei richtiger Antwort.
* **Bestehensgrenze** — 70 Prozent pro Lernkontrolle.
* **Fortschritt** — wird im `localStorage` des Browsers gehalten (Schlüssel
  `vorkurs-mathe-v1`) und lässt sich in der Seitenleiste zurücksetzen.

## Benutzen

Datei im Browser öffnen. Tastatur: `Enter` löst die Hauptaktion aus, die Tasten
`1`–`9` wählen in Auswahlfragen eine Antwort.
