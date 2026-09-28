/* Modul 1 aus dem MGI Klausurtrainer übernommen: Werkzeugkasten, Schnelltest, Übungen, Rezept, Musterlösungen. */
const DRILL = [
  [String.raw`-2^2`, -4, '−4', String.raw`Die Potenz kommt vor dem Minus: \(-(2^2) = -4\).`],
  [String.raw`(-2)^2`, 4, '4', String.raw`Hier steht die Klammer: \((-2)\cdot(-2) = 4\).`],
  [String.raw`4^0`, 1, '1', String.raw`Alles hoch 0 ist 1.`],
  [String.raw`3^{-2}`, 1/9, '1/9', String.raw`Negativer Exponent heißt Kehrwert: \(\frac{1}{3^2} = \frac19\).`],
  [String.raw`\left(\tfrac12\right)^{-3}`, 8, '8', String.raw`\(\left(\frac1a\right)^{-n} = a^n\), also \(2^3 = 8\).`],
  [String.raw`\left(2^{-1}+3^{-1}\right)^{-1}`, 6/5, '6/5', String.raw`\(\frac12 + \frac13 = \frac56\), davon der Kehrwert: \(\frac65\).`],
  [String.raw`\dfrac{\frac12}{\frac16}`, 3, '3', String.raw`Durch einen Bruch teilen heißt mit dem Kehrwert malnehmen: \(\frac12 \cdot 6 = 3\).`],
  [String.raw`\ln(e)`, 1, '1', String.raw`\(e^1 = e\), also \(\ln e = 1\).`],
  [String.raw`\ln(1)`, 0, '0', String.raw`\(e^0 = 1\), also \(\ln 1 = 0\).`],
  [String.raw`\ln\left(\tfrac1e\right)`, -1, '−1', String.raw`\(\frac1e = e^{-1}\), und \(\ln\left(e^{-1}\right) = -1\).`],
  [String.raw`e^{\ln 4}`, 4, '4', String.raw`\(e\) und \(\ln\) heben sich auf.`],
  [String.raw`e^{-\ln 2}`, 1/2, '1/2', String.raw`\(-\ln 2 = \ln\left(2^{-1}\right) = \ln\frac12\), also \(e^{\ln\frac12} = \frac12\).`],
  [String.raw`e^{2\ln 3}`, 9, '9', String.raw`\(2\ln 3 = \ln\left(3^2\right) = \ln 9\).`],
  [String.raw`\lg\left(\tfrac{1}{10}\right)`, -1, '−1', String.raw`\(\lg\) hat die Basis 10, und \(\frac{1}{10} = 10^{-1}\).`],
  [String.raw`\log_3(9)`, 2, '2', String.raw`\(3^2 = 9\).`],
  [String.raw`\sin\left(-\tfrac{\pi}{2}\right)`, -1, '−1', String.raw`\(\sin(-x) = -\sin x\) und \(\sin\frac\pi2 = 1\).`],
  [String.raw`\cos(6\pi)`, 1, '1', String.raw`\(6\pi\) sind drei volle Umdrehungen, also wie \(\cos 0 = 1\).`],
  [String.raw`\sin\left(\tfrac{5\pi}{2}\right)`, 1, '1', String.raw`\(\frac{5\pi}{2} - 2\pi = \frac\pi2\), und \(\sin\frac\pi2 = 1\).`],
  [String.raw`\sin\left(\tfrac{15\pi}{2}\right)`, -1, '−1', String.raw`\(\frac{15\pi}{2} - 6\pi = \frac{3\pi}{2}\). Dort ist man ganz unten am Einheitskreis.`],
  [String.raw`\tan\left(\tfrac{\pi}{4}\right)`, 1, '1', String.raw`Steht in der Tabelle auf dem Deckblatt.`],
  [String.raw`\cos\left(-\tfrac{\pi}{3}\right)`, 1/2, '1/2', String.raw`\(\cos(-x) = \cos x\) und \(\cos\frac\pi3 = \frac12\).`],
  [String.raw`\sin\left(\tfrac{7\pi}{6}\right)`, -1/2, '−1/2', String.raw`\(\frac{7\pi}{6} = \pi + \frac\pi6\). Die halbe Umdrehung dreht das Vorzeichen: \(-\sin\frac\pi6 = -\frac12\).`],
];
const EX = [
  { id: '2020-10', src: 'Oktober 2020', lvl: 1,
    task: 'Geben Sie den maximalen Definitionsbereich der folgenden Funktion an und skizzieren Sie ihren Graphen!',
    f: String.raw`f(x) = -\sqrt{(2-x)^2} + 1`,
    hints: [String.raw`Was ergibt \(\sqrt{a^2}\)? Achtung, nicht einfach \(a\).`,
            String.raw`\(\sqrt{(2-x)^2} = |2-x| = |x-2|\). Welche Grundfunktion steht jetzt da, und wohin ist sie verschoben?`],
    steps: [String.raw`\((2-x)^2\) ist nie negativ, die Wurzel geht also immer: \(D = \mathbb{R}\).`,
            String.raw`\(\sqrt{(2-x)^2} = |2-x| = |x-2|\), also \(f(x) = -|x-2| + 1\).`,
            String.raw`Umgedrehtes V, um 2 nach rechts, um 1 nach oben. Spitze bei \((2\,|\,1)\).`,
            String.raw`Nullstellen: \(|x-2| = 1 \iff x = 1\) oder \(x = 3\).`,
            String.raw`Keine Asymptoten.`],
    res: String.raw`\(f(x) = -|x-2| + 1\), \(D = \mathbb{R}\), keine Asymptoten`,
    plot: { curves: [{ f: x => -Math.abs(x - 2) + 1 }], pts: [{ x: 2, y: 1, l: '(2|1)' }, { x: 1, y: 0 }, { x: 3, y: 0 }] } },

  { id: '2021-11', src: 'November 2021', lvl: 1,
    task: 'Vereinfachen Sie die Funktionsvorschrift der folgenden Funktion, geben Sie den maximalen Definitionsbereich an und skizzieren Sie ihren Graphen!',
    f: String.raw`f(x) = -\left|-x-1\right| + \frac{2}{e^{-\ln(2)} + \frac12}`,
    hints: [String.raw`\(e^{-\ln 2}\): schreib \(-\ln 2\) als \(\ln\left(2^{-1}\right)\). Dann heben sich \(e\) und \(\ln\) auf.`,
            String.raw`\(|-x-1| = |-(x+1)| = |x+1|\).`],
    steps: [String.raw`\(e^{-\ln 2} = e^{\ln\frac12} = \frac12\). Nenner: \(\frac12 + \frac12 = 1\), der Bruch ist also \(\frac21 = 2\).`,
            String.raw`\(|-x-1| = |x+1|\), also \(f(x) = -|x+1| + 2\), \(D = \mathbb{R}\).`,
            String.raw`Umgedrehtes V, um 1 nach links, um 2 nach oben. Spitze bei \((-1\,|\,2)\).`,
            String.raw`Nullstellen: \(|x+1| = 2 \iff x = 1\) oder \(x = -3\). Keine Asymptoten.`],
    res: String.raw`\(f(x) = -|x+1| + 2\), \(D = \mathbb{R}\), keine Asymptoten`,
    plot: { curves: [{ f: x => -Math.abs(x + 1) + 2 }], pts: [{ x: -1, y: 2, l: '(−1|2)' }, { x: 1, y: 0 }, { x: -3, y: 0 }] } },

  { id: '2023-02', src: 'Februar 2023', lvl: 1,
    task: 'Vereinfachen Sie die folgende Funktion, berechnen Sie ihre Nullstellen und skizzieren Sie ihren Graphen.',
    f: String.raw`f(x) = x^2 - 2x + 1 - e^{\ln(4)}`,
    hints: [String.raw`\(e^{\ln a} = a\).`, String.raw`\(x^2 - 2x + 1\) ist eine binomische Formel.`],
    steps: [String.raw`\(e^{\ln 4} = 4\) und \(x^2 - 2x + 1 = (x-1)^2\), also \(f(x) = (x-1)^2 - 4\).`,
            String.raw`Normalparabel, um 1 nach rechts, um 4 nach unten. Scheitel \((1\,|\,-4)\).`,
            String.raw`Nullstellen: \((x-1)^2 = 4 \iff x - 1 = \pm 2 \iff x = 3\) oder \(x = -1\).`,
            String.raw`y-Achsenabschnitt: \(f(0) = -3\). \(D = \mathbb{R}\), keine Asymptoten.`],
    res: String.raw`\(f(x) = (x-1)^2 - 4\), Nullstellen \(x_1 = -1\), \(x_2 = 3\)`,
    plot: { curves: [{ f: x => (x - 1) ** 2 - 4 }], pts: [{ x: 1, y: -4, l: '(1|−4)', dy: 16 }, { x: -1, y: 0 }, { x: 3, y: 0 }, { x: 0, y: -3 }] } },

  { id: '2022-09', src: 'September 2022', lvl: 1,
    task: 'Vereinfachen Sie die folgende Funktion und skizzieren Sie ihren Graphen.',
    f: String.raw`f(x) = -x^2 - 4\sin\left(-\frac{\pi}{2}\right) - 4^0 + 2x`,
    hints: [String.raw`\(\sin\left(-\frac\pi2\right) = -\sin\frac\pi2 = -1\) und \(4^0 = 1\).`,
            String.raw`Quadratische Ergänzung: \(-x^2 + 2x + 3 = -\left(x^2 - 2x\right) + 3\). Ergänze in der Klammer zu \((x-1)^2\).`],
    steps: [String.raw`\(-4\cdot(-1) = +4\) und \(4^0 = 1\), also \(f(x) = -x^2 + 2x + 3\).`,
            String.raw`\(-\left(x^2 - 2x + 1\right) + 1 + 3 = -(x-1)^2 + 4\). In der Klammer wird \(+1\) ergänzt. Wegen des Minus davor ist das in Wahrheit \(-1\), deshalb außen \(+1\) zum Ausgleich.`,
            String.raw`Nach unten offene Parabel, Scheitel \((1\,|\,4)\).`,
            String.raw`Nullstellen: \((x-1)^2 = 4 \iff x = -1\) oder \(x = 3\). \(f(0) = 3\).`],
    res: String.raw`\(f(x) = -(x-1)^2 + 4 = -x^2 + 2x + 3\), keine Asymptoten`,
    plot: { curves: [{ f: x => -((x - 1) ** 2) + 4 }], pts: [{ x: 1, y: 4, l: '(1|4)' }, { x: -1, y: 0 }, { x: 3, y: 0 }, { x: 0, y: 3 }] } },

  { id: '2023-12', src: 'Dezember 2023', lvl: 2,
    task: 'Vereinfachen Sie die folgende Funktion und skizzieren Sie ihren Graphen. Geben Sie ebenfalls den Definitionsbereich an.',
    f: String.raw`f(x) = \sqrt{-x+3} + \tan\left(\frac{\pi}{4}\right)`,
    hints: [String.raw`\(\tan\frac\pi4\) steht in der Tabelle auf dem Deckblatt.`,
            String.raw`\(\sqrt{-x+3} = \sqrt{-(x-3)}\): \(\sqrt x\), an der y-Achse gespiegelt und um 3 nach rechts.`],
    steps: [String.raw`\(\tan\frac\pi4 = 1\), also \(f(x) = \sqrt{3-x} + 1\).`,
            String.raw`\(D\): \(3 - x \ge 0 \iff x \le 3\), also \(D = (-\infty, 3]\).`,
            String.raw`Startpunkt \((3\,|\,1)\) als voller Punkt, von dort nach links: \(f(2) = 2\), \(f(-1) = 3\).`,
            String.raw`Keine Nullstellen, weil \(f(x) \ge 1\). Keine Asymptoten.`],
    res: String.raw`\(f(x) = \sqrt{3-x} + 1\), \(D = (-\infty, 3]\), keine Asymptoten`,
    plot: { curves: [{ f: x => Math.sqrt(3 - x) + 1, to: 3 }], pts: [{ x: 3, y: 1, l: '(3|1)' }, { x: 2, y: 2 }, { x: -1, y: 3 }] } },

  { id: '2023-07', src: 'Juli 2023', lvl: 2,
    task: 'Geben Sie den maximalen Definitionsbereich der folgenden Funktion an und skizzieren Sie ihren Graphen.',
    f: String.raw`f(x) = \sqrt{-x+4} - \sin\left(\frac{5\pi}{2}\right)`,
    hints: [String.raw`\(\frac{5\pi}{2} = 2\pi + \frac\pi2\). Eine volle Umdrehung ändert nichts.`,
            String.raw`\(\sqrt{-x+4} = \sqrt{-(x-4)}\): Wurzel nach links, Start bei \(x = 4\).`],
    steps: [String.raw`\(\sin\frac{5\pi}{2} = \sin\frac\pi2 = 1\), also \(f(x) = \sqrt{4-x} - 1\).`,
            String.raw`\(D\): \(4 - x \ge 0 \iff x \le 4\), also \(D = (-\infty, 4]\).`,
            String.raw`Startpunkt \((4\,|\,-1)\), nach links: \(f(3) = 0\), \(f(0) = 1\), \(f(-5) = 2\).`,
            String.raw`Nullstelle \(x = 3\). Keine Asymptoten.`],
    res: String.raw`\(f(x) = \sqrt{4-x} - 1\), \(D = (-\infty, 4]\), keine Asymptoten`,
    plot: { curves: [{ f: x => Math.sqrt(4 - x) - 1, to: 4 }], pts: [{ x: 4, y: -1, l: '(4|−1)', dy: 16 }, { x: 3, y: 0 }, { x: 0, y: 1 }] } },

  { id: '2020-07', src: 'Juli 2020', lvl: 2,
    task: 'Geben Sie den Definitionsbereich der folgenden Funktion an und skizzieren Sie ihren Graphen!',
    f: String.raw`f(x) = \sqrt{-2^2 - x}`,
    hints: [String.raw`Falle: \(-2^2\) ist nicht \((-2)^2\). Die Potenz wird vor dem Minus gerechnet.`,
            String.raw`\(-2^2 = -4\), also \(f(x) = \sqrt{-4-x} = \sqrt{-(x+4)}\).`],
    steps: [String.raw`\(-2^2 = -(2^2) = -4\), also \(f(x) = \sqrt{-4-x}\).`,
            String.raw`\(D\): \(-4 - x \ge 0 \iff x \le -4\), also \(D = (-\infty, -4]\).`,
            String.raw`\(\sqrt{-(x+4)}\): Wurzel an der y-Achse gespiegelt, um 4 nach links. Start \((-4\,|\,0)\), \(f(-5) = 1\), \(f(-8) = 2\).`,
            String.raw`Nullstelle \(x = -4\), keine Asymptoten. Wer \((-2)^2 = 4\) rechnet, landet bei \(\sqrt{4-x}\) und verliert fast alle Punkte.`],
    res: String.raw`\(f(x) = \sqrt{-4-x}\), \(D = (-\infty, -4]\), keine Asymptoten`,
    plot: { curves: [{ f: x => Math.sqrt(-4 - x), to: -4 }], pts: [{ x: -4, y: 0, l: '(−4|0)', dy: 16 }, { x: -5, y: 1 }] } },

  { id: '2021-09', src: 'September 2021', lvl: 2,
    task: 'Geben Sie den maximalen Definitionsbereich der folgenden Funktion an und skizzieren Sie ihren Graphen!',
    f: String.raw`f(x) = \left(\frac{1}{\sqrt2}\right)^{-2x} - \frac{2 - \ln(e)}{3^{-1}}`,
    hints: [String.raw`\(\left(\frac1a\right)^{-n} = a^n\), also \(\left(\frac{1}{\sqrt2}\right)^{-2x} = \left(\sqrt2\right)^{2x}\). Und \(\left(\sqrt2\right)^2 = 2\).`,
            String.raw`\(\ln e = 1\). Durch \(3^{-1} = \frac13\) teilen heißt mal 3.`],
    steps: [String.raw`\(\left(\frac{1}{\sqrt2}\right)^{-2x} = \left(\sqrt2\right)^{2x} = \left(\left(\sqrt2\right)^2\right)^x = 2^x\).`,
            String.raw`\(\frac{2-1}{\frac13} = 1 \cdot 3 = 3\), also \(f(x) = 2^x - 3\), \(D = \mathbb{R}\).`,
            String.raw`\(2^x\) um 3 nach unten. Waagerechte Asymptote \(y = -3\) für \(x \to -\infty\).`,
            String.raw`Punkte: \(f(0) = -2\), \(f(1) = -1\), \(f(2) = 1\). Die Nullstelle \(x = \log_2 3\) liegt zwischen 1 und 2.`],
    res: String.raw`\(f(x) = 2^x - 3\), \(D = \mathbb{R}\), Asymptote \(y = -3\)`,
    plot: { curves: [{ f: x => 2 ** x - 3 }], asym: [{ h: -3 }], pts: [{ x: 0, y: -2 }, { x: 1, y: -1 }, { x: 2, y: 1, l: '(2|1)', anchor: 'end', dx: -7 }] } },

  { id: '2021-07', src: 'Juli 2021', lvl: 2,
    task: 'Geben Sie den maximalen Definitionsbereich und den dazu passenden Wertebereich der folgenden Funktion an und skizzieren Sie ihren Graphen!',
    f: String.raw`f(x) = 1 - e^{-x+2}`,
    hints: [String.raw`\(e^{-x+2} = e^{-(x-2)}\): \(e^x\) an der y-Achse gespiegelt und um 2 nach rechts.`,
            String.raw`Das Minus vor dem \(e\) spiegelt an der x-Achse, \(+1\) schiebt nach oben. Die Asymptote \(y = 0\) wandert mit.`],
    steps: [String.raw`\(D = \mathbb{R}\), die e-Funktion geht überall.`,
            String.raw`\(e^{-(x-2)}\) ist immer \(\gt 0\) und geht für \(x \to \infty\) gegen 0. Mit Minus davor: immer \(\lt 0\). Mit \(+1\): immer \(\lt 1\).`,
            String.raw`Waagerechte Asymptote \(y = 1\), Wertebereich \(W = (-\infty, 1)\).`,
            String.raw`Punkte: \(f(2) = 1 - e^0 = 0\) ist die Nullstelle, \(f(3) = 1 - \frac1e \approx 0{,}6\), \(f(1) = 1 - e \approx -1{,}7\). Die Näherungen nur zum Zeichnen, im Ergebnis exakt.`],
    res: String.raw`\(D = \mathbb{R}\), \(W = (-\infty, 1)\), Asymptote \(y = 1\)`,
    plot: { curves: [{ f: x => 1 - Math.exp(-x + 2) }], asym: [{ h: 1 }], pts: [{ x: 2, y: 0, l: '(2|0)', dy: 16 }, { x: 3, y: 1 - 1 / Math.E }, { x: 1, y: 1 - Math.E }] } },

  { id: '2024-11', src: 'November 2024', lvl: 3,
    task: '(a) Vereinfachen Sie die Funktionsvorschrift. (b) Skizzieren Sie den Funktionsgraphen von f. Eventuelle Asymptoten von f sind auch mit einzuzeichnen.',
    f: String.raw`f(x) = \frac{|2x-6|}{\lg\left(\frac{1}{10}\right)} - \sin\left(\frac{15\pi}{2}\right)`,
    hints: [String.raw`\(\lg\left(\frac{1}{10}\right) = \lg\left(10^{-1}\right) = -1\).`,
            String.raw`\(\frac{15\pi}{2} = 7{,}5\pi\). Zieh \(6\pi\) ab (drei volle Umdrehungen), dann bleibt \(\frac{3\pi}{2}\).`],
    steps: [String.raw`\(\lg\frac{1}{10} = -1\), also \(\frac{|2x-6|}{-1} = -|2x-6|\).`,
            String.raw`\(\sin\frac{15\pi}{2} = \sin\frac{3\pi}{2} = -1\), das Minus davor macht daraus \(+1\).`,
            String.raw`\(f(x) = -|2x-6| + 1 = -2|x-3| + 1\) (Faktor 2 aus dem Betrag gezogen).`,
            String.raw`Steiles umgedrehtes V mit Steigung \(\pm 2\), Spitze \((3\,|\,1)\).`,
            String.raw`Nullstellen: \(|x-3| = \frac12 \iff x = \frac52\) oder \(x = \frac72\). Keine Asymptoten.`],
    res: String.raw`\(f(x) = -2|x-3| + 1\), \(D = \mathbb{R}\), keine Asymptoten`,
    plot: { curves: [{ f: x => -2 * Math.abs(x - 3) + 1 }], pts: [{ x: 3, y: 1, l: '(3|1)' }, { x: 2.5, y: 0 }, { x: 3.5, y: 0 }] } },

  { id: '2022-07', src: 'Juli 2022', lvl: 3,
    task: 'Berechnen Sie die Nullstellen der folgenden Funktion und skizzieren Sie ihren Graphen! (In dieser Klausur war die x-Achse in π-Schritten beschriftet.)',
    f: String.raw`f(x) = 2\sin(x - \pi) + 2`,
    hints: [String.raw`\(\sin(x - \pi) = -\sin x\). Eine halbe Umdrehung dreht das Vorzeichen um.`,
            String.raw`\(f(x) = 2 - 2\sin x\). Null wird das genau dann, wenn \(\sin x = 1\).`],
    steps: [String.raw`\(\sin(x-\pi) = -\sin x\), also \(f(x) = 2 - 2\sin x\).`,
            String.raw`\(\sin x\) liegt zwischen \(-1\) und \(1\), also liegt \(f\) zwischen 0 und 4.`,
            String.raw`Nullstellen: \(\sin x = 1 \iff x = \frac\pi2 + 2k\pi\), \(k \in \mathbb{Z}\).`,
            String.raw`Hochpunkte mit Wert 4 bei \(x = -\frac\pi2 + 2k\pi\). \(f(0) = f(\pi) = 2\). Keine Asymptoten.`],
    res: String.raw`\(f(x) = 2 - 2\sin x\), Nullstellen \(x = \frac\pi2 + 2k\pi\), \(k \in \mathbb{Z}\)`,
    plot: { xmin: -2 * PI, xmax: 2 * PI, xstep: PI / 2, ymin: -1, ymax: 5, ux: 64 / PI, uy: 30,
      xlabels: [{ v: -2 * PI, t: '−2π' }, { v: -PI, t: '−π' }, { v: PI, t: 'π' }, { v: 2 * PI, t: '2π' }],
      curves: [{ f: x => 2 - 2 * Math.sin(x) }],
      pts: [{ x: PI / 2, y: 0 }, { x: -3 * PI / 2, y: 0 }, { x: -PI / 2, y: 4 }, { x: 3 * PI / 2, y: 4 }, { x: 0, y: 2 }] } },

  { id: '2020-11', src: 'November 2020', lvl: 3,
    task: 'Geben Sie den Definitionsbereich der folgenden Funktion an und skizzieren Sie ihren Graphen! Gibt es hebbare Definitionslücken und/oder Polstellen?',
    f: String.raw`f(x) = \frac{x-2}{x^2-4} - \frac{1}{2^{-1} + 2^{-1}}`,
    hints: [String.raw`Definitionsbereich zuerst, vor dem Kürzen: \(x^2 - 4 = 0\) bei \(x = 2\) und \(x = -2\).`,
            String.raw`\(x^2 - 4 = (x-2)(x+2)\). Welcher Faktor kürzt sich weg, welcher bleibt im Nenner?`],
    steps: [String.raw`\(2^{-1} + 2^{-1} = \frac12 + \frac12 = 1\), der zweite Bruch ist also 1.`,
            String.raw`\(D = \mathbb{R} \setminus \{-2,\, 2\}\).`,
            String.raw`\(\frac{x-2}{(x-2)(x+2)} = \frac{1}{x+2}\), also \(f(x) = \frac{1}{x+2} - 1\) für \(x \ne 2\).`,
            String.raw`\(x = 2\): Der Faktor kürzt sich weg, also <b>hebbare Lücke</b>. Loch bei \(\left(2\,|\,\frac14 - 1\right) = \left(2\,|\,-\frac34\right)\), offener Kreis.`,
            String.raw`\(x = -2\): bleibt im Nenner, also <b>Polstelle mit Vorzeichenwechsel</b>. Asymptoten \(x = -2\) und \(y = -1\).`,
            String.raw`Nullstelle: \(\frac{1}{x+2} = 1 \iff x = -1\).`],
    res: String.raw`\(f(x) = \frac{1}{x+2} - 1\), \(D = \mathbb{R}\setminus\{-2, 2\}\), hebbare Lücke bei 2, Pol bei \(-2\)`,
    plot: { curves: [{ f: x => 1 / (x + 2) - 1, breaks: [-2] }], asym: [{ v: -2 }, { h: -1 }],
      pts: [{ x: 2, y: -0.75, open: true, l: '(2|−3/4)', dy: 18 }, { x: -1, y: 0 }] } },

  { id: '2022-02', src: 'Februar 2022', lvl: 3,
    task: 'Vereinfachen Sie die Funktionsvorschrift der folgenden Funktion, geben Sie den maximalen Definitionsbereich an und skizzieren Sie ihren Graphen!',
    f: String.raw`f(x) = \left(\sqrt{-x \cdot 2^{-1} + 1}\right)^2 - \frac{e^{-\ln(2)}}{2^{-1} - 3^{-1}}`,
    hints: [String.raw`Was unter der Wurzel steht, muss \(\ge 0\) sein. Das gilt weiter, auch wenn die Wurzel durch das Quadrat verschwindet.`,
            String.raw`\(2^{-1} - 3^{-1} = \frac12 - \frac13 = \frac16\) und \(e^{-\ln 2} = \frac12\).`],
    steps: [String.raw`\(D\): \(-\frac x2 + 1 \ge 0 \iff x \le 2\), also \(D = (-\infty, 2]\).`,
            String.raw`\(\left(\sqrt a\right)^2 = a\) für \(a \ge 0\), also bleibt \(-\frac x2 + 1\).`,
            String.raw`\(\frac{\frac12}{\frac16} = \frac12 \cdot 6 = 3\), also \(f(x) = -\frac x2 + 1 - 3 = -\frac x2 - 2\).`,
            String.raw`Das ist nur eine halbe Gerade: Steigung \(-\frac12\), y-Achsenabschnitt \(-2\), sie endet bei \((2\,|\,-3)\) mit vollem Punkt.`,
            String.raw`Nullstelle \(x = -4\). Keine Asymptoten.`],
    res: String.raw`\(f(x) = -\frac{x}{2} - 2\), \(D = (-\infty, 2]\), keine Asymptoten`,
    plot: { curves: [{ f: x => -x / 2 - 2, to: 2 }], pts: [{ x: 2, y: -3, l: '(2|−3)', dy: 16 }, { x: 0, y: -2 }, { x: -4, y: 0 }] } },
];
MODS[1] = {
  short: 'Graph', pos: 'immer Aufgabe 1', title: 'Funktion vereinfachen und Graph skizzieren', ex: EX,
  theory: String.raw`  <div class="card" style="margin:18px 0">
    <h3>Was auf dem Deckblatt steht</h3>
    <ul class="rules-exam">
      <li>Ergebnisse exakt angeben, also \(\sqrt2\) statt 1,41</li>
      <li>Kein Bleistift, keine Hilfsmittel, kein Taschenrechner</li>
      <li>Bekannte Werte wie \(\sin\left(\frac{2\pi}{3}\right)\) oder \(\ln 1\) ausrechnen</li>
      <li>Brüche gekürzt, keine Doppelbrüche</li>
      <li>Keine Potenzen mit negativem Exponenten im Ergebnis</li>
      <li>Alle Rechnungen verständlich hinschreiben</li>
    </ul>
  </div>

  <div class="grid2">
    <div class="card">
      <h3>Potenzen</h3>
      <ul>
        <li>\(a^0 = 1\), also \(4^0 = 1\)</li>
        <li>\(a^{-1} = \frac{1}{a}\) und \(a^{-n} = \frac{1}{a^n}\), also \(3^{-2} = \frac19\)</li>
        <li>\(\left(\frac1a\right)^{-n} = a^n\), also \(\left(\frac12\right)^{-3} = 8\)</li>
        <li>\(a^m \cdot a^n = a^{m+n}\) und \(\left(a^m\right)^n = a^{m\cdot n}\)</li>
        <li>\(a^{1/2} = \sqrt a\)</li>
        <li><span class="falle">Falle</span>\(-2^2 = -(2^2) = -4\), aber \((-2)^2 = 4\). Die Potenz wird vor dem Minus gerechnet.</li>
      </ul>
    </div>
    <div class="card">
      <h3>Brüche</h3>
      <ul>
        <li>Addieren nur mit gleichem Nenner: \(\frac12 + \frac13 = \frac36 + \frac26 = \frac56\)</li>
        <li>Durch einen Bruch teilen heißt mit dem Kehrwert malnehmen: \(\dfrac{a}{\frac13} = 3a\)</li>
        <li>Doppelbruch auflösen: \(\dfrac{\frac12}{\frac16} = \frac12 \cdot 6 = 3\)</li>
        <li>Mit \(x\) genauso: \(\frac1x + \frac12 = \frac{2}{2x} + \frac{x}{2x} = \frac{x+2}{2x}\)</li>
        <li>Hoch \(-1\) heißt Kehrwert: \(\left(\frac{x+2}{2x}\right)^{-1} = \frac{2x}{x+2}\)</li>
      </ul>
    </div>
    <div class="card">
      <h3>Wurzel und Betrag</h3>
      <ul>
        <li><span class="falle">Falle</span>\(\sqrt{a^2} = |a|\), nicht \(a\). Also \(\sqrt{(x-2)^2} = |x-2|\)</li>
        <li>\(\left(\sqrt a\right)^2 = a\), aber nur für \(a \ge 0\). Der Definitionsbereich bleibt eingeschränkt.</li>
        <li>\(|a| = a\) für \(a \ge 0\) und \(|a| = -a\) für \(a \lt 0\)</li>
        <li>Minus im Betrag ist egal: \(|-x-3| = |-(x+3)| = |x+3|\)</li>
        <li>Faktor rausziehen: \(|2x-6| = |2(x-3)| = 2\,|x-3|\)</li>
      </ul>
    </div>
    <div class="card">
      <h3>Logarithmus und \(e\)</h3>
      <ul>
        <li>\(\ln e = 1\) und \(\ln 1 = 0\)</li>
        <li>\(e\) und \(\ln\) heben sich auf: \(\ln\left(e^a\right) = a\) und \(e^{\ln a} = a\)</li>
        <li>Faktor wird Exponent: \(n \ln a = \ln\left(a^n\right)\), also \(e^{-\ln 2} = e^{\ln(2^{-1})} = \frac12\)</li>
        <li>\(\ln\left(\frac1e\right) = \ln\left(e^{-1}\right) = -1\)</li>
        <li>\(\lg\) ist der Logarithmus zur Basis 10: \(\lg 10 = 1\), \(\lg\left(\frac1{10}\right) = -1\)</li>
        <li>\(\log_b\left(b^n\right) = n\), also \(\log_3 9 = 2\)</li>
      </ul>
    </div>

    <div class="card wide">
      <h3>Trigonometrie</h3>
      <div class="trigwrap">
        <div>
          <p>Diese Tabelle steht auf dem Deckblatt jeder Klausur. Du musst sie nicht auswendig lernen, aber alle anderen Werte daraus ableiten können.</p>
          <div class="tscroll">
          <table class="trig">
            <tr><th>\(\alpha\)</th><td>\(0\)</td><td>\(\frac{\pi}{6}\)</td><td>\(\frac{\pi}{4}\)</td><td>\(\frac{\pi}{3}\)</td><td>\(\frac{\pi}{2}\)</td></tr>
            <tr><th>\(\sin\alpha\)</th><td>\(0\)</td><td>\(\frac12\)</td><td>\(\frac{\sqrt2}{2}\)</td><td>\(\frac{\sqrt3}{2}\)</td><td>\(1\)</td></tr>
            <tr><th>\(\cos\alpha\)</th><td>\(1\)</td><td>\(\frac{\sqrt3}{2}\)</td><td>\(\frac{\sqrt2}{2}\)</td><td>\(\frac12\)</td><td>\(0\)</td></tr>
            <tr><th>\(\tan\alpha\)</th><td>\(0\)</td><td>\(\frac{1}{\sqrt3}\)</td><td>\(1\)</td><td>\(\sqrt3\)</td><td class="nd">n. def.</td></tr>
          </table>
          </div>
          <ul>
            <li><b>Volle Umdrehungen streichen:</b> \(\sin(x + 2\pi) = \sin x\). Beispiel: \(\frac{15\pi}{2} - 6\pi = \frac{3\pi}{2}\), also \(\sin\left(\frac{15\pi}{2}\right) = \sin\left(\frac{3\pi}{2}\right) = -1\)</li>
            <li><b>Minus im Argument:</b> \(\sin(-x) = -\sin x\) und \(\cos(-x) = \cos x\)</li>
            <li><b>Halbe Umdrehung dreht das Vorzeichen:</b> \(\sin(x - \pi) = -\sin x\) und \(\cos(x - \pi) = -\cos x\)</li>
            <li>\(\tan x = \dfrac{\sin x}{\cos x}\)</li>
          </ul>
        </div>
        <figure style="margin:0">
          <svg class="uc" viewBox="0 0 300 250" role="img" aria-label="Einheitskreis mit den Punkten bei 0, pi halbe, pi und drei pi halbe">
            <line class="ax" x1="30" y1="125" x2="270" y2="125"/>
            <line class="ax" x1="150" y1="22" x2="150" y2="228"/>
            <circle class="c" cx="150" cy="125" r="85"/>
            <line class="d" x1="150" y1="125" x2="223.6" y2="82.5"/>
            <line class="d" x1="223.6" y1="82.5" x2="223.6" y2="125"/>
            <line class="d" x1="223.6" y1="82.5" x2="150" y2="82.5"/>
            <circle class="p" cx="235" cy="125" r="4"/>
            <circle class="p" cx="150" cy="40" r="4"/>
            <circle class="p" cx="65" cy="125" r="4"/>
            <circle class="p" cx="150" cy="210" r="4"/>
            <circle class="p" cx="223.6" cy="82.5" r="3.5"/>
            <text x="241" y="118">0</text><text class="s" x="241" y="141">(1|0)</text>
            <text x="157" y="33">π/2</text><text class="s" x="190" y="33">(0|1)</text>
            <text x="59" y="118" text-anchor="end">π</text><text class="s" x="59" y="141" text-anchor="end">(−1|0)</text>
            <text x="157" y="226">3π/2</text><text class="s" x="199" y="226">(0|−1)</text>
            <text x="229" y="78">π/6</text>
            <text class="s" x="187" y="140" text-anchor="middle">cos</text>
            <text class="s" x="146" y="106" text-anchor="end">sin</text>
          </svg>
          <figcaption style="font-size:14px;color:var(--ink-soft)">Einheitskreis: cos ist der x-Wert, sin der y-Wert des Punkts. Bei \(\frac{3\pi}{2}\) ist man ganz unten, also \(\sin = -1\), \(\cos = 0\).</figcaption>
        </figure>
      </div>
    </div>

    <div class="card wide">
      <h3>Definitionsbereich</h3>
      <ul>
        <li>Nenner \(\ne 0\)</li>
        <li>Unter der Wurzel \(\ge 0\)</li>
        <li>Im Logarithmus \(\gt 0\)</li>
        <li>\(x^{-1}\) heißt \(\frac1x\), also \(x \ne 0\)</li>
        <li><span class="falle">Falle</span>Immer an der <b>Originalfunktion</b> bestimmen, bevor du kürzt oder quadrierst. Nach dem Kürzen sieht man die Lücke nicht mehr, sie ist aber trotzdem da.</li>
      </ul>
    </div>
  </div>
  <h3 style="margin-top:22px">Verschieben, spiegeln, strecken</h3>
  <div class="grid2" style="margin-bottom:22px">
    <div class="card">
      <ul>
        <li>\(g(x) + e\): um \(e\) nach <b>oben</b> (bei \(e \lt 0\) nach unten)</li>
        <li>\(g(x - d)\): um \(d\) nach <b>rechts</b></li>
        <li>\(-g(x)\): an der x-Achse spiegeln, oben und unten tauschen</li>
        <li>\(g(-x)\): an der y-Achse spiegeln, links und rechts tauschen</li>
        <li>\(a \cdot g(x)\): in y-Richtung strecken</li>
      </ul>
    </div>
    <div class="card">
      <p><span class="falle">Merksatz</span>Was in der Klammer bei \(x\) passiert, wirkt <b>umgekehrt</b>. \(x - 3\) schiebt nach rechts, \(x + 3\) nach links.</p>
      <p style="margin:0">Steht ein Minus vor dem \(x\), erst ausklammern: \(\sqrt{-x+3} = \sqrt{-(x-3)}\). Das ist \(\sqrt{x}\), an der y-Achse gespiegelt und um 3 nach rechts geschoben.</p>
    </div>
  </div>`,
  recipe: [
    ['Zahlen-Ballast ausrechnen', String.raw`Alles ohne \(x\) ist eine Zahl: \(\sin\), \(\ln\), \(\lg\), \(e^{\ln}\), negative Exponenten.`],
    ['Definitionsbereich an der Originalfunktion', 'Vor dem Kürzen und vor dem Quadrieren.'],
    ['Vereinfachen', 'Bis eine Grundfunktion mit Verschiebung dasteht: Minus und Faktor aus dem Betrag, Scheitelform, kürzen, Minus vor x ausklammern.'],
    ['Grundfunktion ablesen', 'Spitze, Scheitel, Startpunkt oder Kreuzung der Asymptoten bestimmen.'],
    ['Nullstellen und Hilfspunkte', 'Nullstellen, f(0) und zwei bis drei weitere Punkte.'],
    ['Zeichnen', 'Asymptoten gestrichelt, Loch als offener Kreis, Randpunkt voll, Punkte beschriften.'],
    ['Ergebnis hinschreiben', 'f(x), D, Asymptoten oder ausdrücklich keine, Nullstellen falls gefragt.'],
  ],
  worked: [
    { src: 'November 2022', a: 1, tag: 'leicht',
      q: String.raw`<p class="qt">Vereinfachen Sie die folgende Funktion, berechnen Sie ihre Nullstellen und skizzieren Sie ihren Graphen. Eventuelle Asymptoten müssen auch eingezeichnet werden.</p><div class="fbig">\[f(x) = -\left|-x-3\right| + \ln\left(e^4\right)\]</div>`,
      s: [
        [String.raw`\(\ln\left(e^4\right) = 4\)`, String.raw`\(\ln\) und \(e\) heben sich auf.`],
        [String.raw`\(|-x-3| = |-(x+3)| = |x+3|\)`, 'Der Betrag misst den Abstand zur Null. Ein Minus davor ändert daran nichts.'],
        [String.raw`\(f(x) = -|x+3| + 4\), \(D = \mathbb{R}\)`, 'Beim Betrag gibt es keine verbotenen Stellen.'],
        [String.raw`Grundfunktion \(|x|\), das V. Das Minus vorne klappt es nach unten, \(x+3\) schiebt um 3 nach <b>links</b>, \(+4\) um 4 nach oben. Spitze bei \((-3\,|\,4)\).`, 'Links und rechts der Spitze fällt der Graph mit Steigung 1 ab.'],
        [String.raw`\(-|x+3| + 4 = 0 \iff |x+3| = 4 \iff x+3 = 4 \text{ oder } x+3 = -4\), also \(x_1 = 1\), \(x_2 = -7\)`, String.raw`Ein Betrag gleich 4 heißt: der Inhalt ist 4 oder \(-4\).`],
        ['Asymptoten: keine. Schreib das ausdrücklich hin.', ''],
      ],
      r: String.raw`\(f(x) = -|x+3| + 4\), \(D = \mathbb{R}\), Nullstellen \(x_1 = -7\), \(x_2 = 1\), keine Asymptoten`,
      plot: { xmin: -8, xmax: 3, ymin: -3, ymax: 5, ux: 28, curves: [{ f: x => -Math.abs(x + 3) + 4 }],
        pts: [{ x: -3, y: 4, l: '(−3|4)' }, { x: 1, y: 0, l: '(1|0)', dy: 16 }, { x: -7, y: 0, l: '(−7|0)', dy: 16, anchor: 'middle', dx: 0 }] } },
    { src: 'September 2024', a: 1, tag: 'schwer',
      q: String.raw`<p class="qt">(a) Vereinfachen Sie die Funktionsvorschrift. (b) Bestimmen Sie den maximalen Definitionsbereich von \(f\). (c) Skizzieren Sie den Funktionsgraphen von \(f\). Eventuelle Asymptoten von \(f\) sind auch mit einzuzeichnen.</p><div class="fbig">\[f(x) = \lg(10) + \left(x^{-1} + 2^{-1}\right)^{-1} \cdot \frac{1}{2x}\]</div>`,
      s: [
        [String.raw`<b>Definitionsbereich zuerst</b>, an der Originalfunktion: \(x^{-1} = \frac1x\) und \(\frac{1}{2x}\) verlangen \(x \ne 0\). Die Klammer mit \({}^{-1}\) darf nicht 0 werden: \(\frac1x + \frac12 = 0 \iff x = -2\). Also \(D = \mathbb{R} \setminus \{-2,\, 0\}\).`, String.raw`Das ist Teil (b). Rechnest du ihn erst nach dem Vereinfachen, übersiehst du \(x = 0\).`],
        [String.raw`\(\lg(10) = 1\)`, ''],
        [String.raw`\(x^{-1} + 2^{-1} = \frac1x + \frac12 = \frac{2}{2x} + \frac{x}{2x} = \frac{x+2}{2x}\)`, String.raw`Hauptnenner \(2x\).`],
        [String.raw`\(\left(\frac{x+2}{2x}\right)^{-1} = \frac{2x}{x+2}\)`, String.raw`Hoch \(-1\) heißt Kehrwert.`],
        [String.raw`\(\frac{2x}{x+2} \cdot \frac{1}{2x} = \frac{1}{x+2}\), also \(f(x) = \frac{1}{x+2} + 1\)`, String.raw`\(2x\) kürzt sich weg. Das ist Teil (a).`],
        [String.raw`Grundfunktion \(\frac1x\), um 2 nach links, um 1 nach oben. Senkrechte Asymptote \(x = -2\), waagerechte Asymptote \(y = 1\).`, ''],
        [String.raw`<b>Loch bei \(x = 0\):</b> Dort wäre \(\frac{1}{0+2} + 1 = \frac32\). Weil \(0 \notin D\), zeichnest du bei \(\left(0\,|\,\frac32\right)\) einen offenen Kreis.`, 'Das ist eine hebbare Lücke. Wer sie vergisst, verliert Punkte, obwohl der Rest stimmt.'],
        [String.raw`Hilfspunkte: \(f(-3) = 0\), \(f(-1) = 2\), \(f(-4) = \frac12\), \(f(2) = \frac54\)`, ''],
      ],
      r: String.raw`\(f(x) = \frac{1}{x+2} + 1\), \(D = \mathbb{R} \setminus \{-2, 0\}\), Asymptoten \(x = -2\) und \(y = 1\), Loch bei \(\left(0\,|\,\frac32\right)\)`,
      plot: { curves: [{ f: x => 1 / (x + 2) + 1, breaks: [-2] }], asym: [{ v: -2 }, { h: 1 }],
        pts: [{ x: 0, y: 1.5, open: true, l: '(0|3/2)' }, { x: -3, y: 0, l: '(−3|0)', dy: 16, anchor: 'end', dx: -6 }, { x: -1, y: 2, l: '(−1|2)' }] } },
  ],
};
