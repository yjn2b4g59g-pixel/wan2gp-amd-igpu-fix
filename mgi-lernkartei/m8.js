MODS[8] = {
  short: 'Vektoren', pos: 'immer Aufgabe 8',
  title: 'Vektoren, Geraden, Ebenen',
  intro: String.raw`<p>Aufgabe 8 ist immer Vektorrechnung. Die Zutaten sind wenige: Länge, Skalarprodukt, Winkel, Kreuzprodukt, Geraden und Ebenen. Oft sind die Komponenten verkleidet, etwa \(\ln 1\), \(\sin(7\pi)\) oder \(2^{-2}\). Dann gilt wieder der Werkzeugkasten aus Modul 1.</p>
  <p>Die meisten Teilaufgaben sind Übersetzungsarbeit: Aus „senkrecht“ wird „Skalarprodukt gleich 0“, aus „senkrecht zu beiden“ wird „Kreuzprodukt“.</p>`,
  theory: String.raw`<div class="grid2">
    <div class="card"><h3>Rechnen, Länge</h3>
      <ul><li>Komponentenweise: \(\begin{pmatrix}1\\2\\3\end{pmatrix} + 2\begin{pmatrix}0\\1\\-1\end{pmatrix} = \begin{pmatrix}1\\4\\1\end{pmatrix}\)</li>
        <li>Länge: \(|a| = \sqrt{a_1^2 + a_2^2 + a_3^2}\)</li>
        <li>Beispiel: \(\left|\begin{pmatrix}0\\\sqrt3\\-1\end{pmatrix}\right| = \sqrt{0 + 3 + 1} = 2\)</li></ul></div>
    <div class="card"><h3>Skalarprodukt und Winkel</h3>
      <ul><li>\(a\cdot b = a_1b_1 + a_2b_2 + a_3b_3\), das Ergebnis ist eine Zahl</li>
        <li><b>Orthogonal</b> (senkrecht) \(\iff a\cdot b = 0\)</li>
        <li><b>Winkel:</b> \(\cos\varphi = \dfrac{a\cdot b}{|a|\,|b|}\), dann \(\varphi\) aus der Tabelle: \(\frac{\sqrt3}2 \to \frac\pi6\), \(\ \frac{\sqrt2}2 \to \frac\pi4\), \(\ \frac12 \to \frac\pi3\), \(\ -\frac12 \to \frac{2\pi}3\)</li></ul></div>
    <div class="card wide"><h3>Kreuzprodukt</h3>
      <div class="fbig">\[a \times b = \begin{pmatrix}a_2b_3 - a_3b_2\\ a_3b_1 - a_1b_3\\ a_1b_2 - a_2b_1\end{pmatrix}\]</div>
      <ul><li>Merkhilfe: Für die erste Zeile Zeilen 2 und 3 über Kreuz, für die zweite Zeilen 3 und 1, für die dritte Zeilen 1 und 2.</li>
        <li>Das Ergebnis steht <b>senkrecht auf \(a\) und auf \(b\)</b>. Kontrolle: Skalarprodukt mit \(a\) und mit \(b\) muss 0 sein.</li>
        <li>Nur in 3D. Die Reihenfolge zählt: \(b \times a = -(a \times b)\).</li></ul></div>
    <div class="card"><h3>Geraden</h3>
      <ul><li>\(g: \vec x = \vec p + \lambda\,\vec u\), Stützvektor plus Vielfaches des Richtungsvektors</li>
        <li>Durch \(A\) und \(B\): \(\vec x = A + \lambda(B - A)\)</li>
        <li><b>Punktprobe:</b> \(C = \vec p + \lambda\vec u\) zeilenweise lösen. Liegt \(C\) drauf, kommt in jeder Zeile dasselbe \(\lambda\) heraus.</li>
        <li>Senkrechte Richtung zu \(\vec u\): Skalarprodukt 0, z.B. zwei Komponenten tauschen, eine davon negieren, die dritte 0: zu \((5, 3, 1)\) passt \((0, 1, -3)\).</li>
        <li>Parallel zur \(x_1x_2\)-Ebene: Richtungsvektor mit dritter Komponente 0.</li></ul></div>
    <div class="card"><h3>Ebenen</h3>
      <ul><li>Parameterform: \(\vec x = \vec p + \lambda\vec u + \mu\vec v\)</li>
        <li>Normalenvektor \(\vec n = \vec u \times \vec v\)</li>
        <li>Normalenform: \(\vec n\cdot(\vec x - \vec p) = 0\)</li>
        <li>Koordinatenform: \(n_1x_1 + n_2x_2 + n_3x_3 = d\) mit \(d = \vec n\cdot\vec p\)</li>
        <li><b>Hessesche Normalform:</b> durch \(|\vec n|\) teilen, Vorzeichen so, dass \(d \ge 0\): \(\frac{n_1x_1 + n_2x_2 + n_3x_3 - d}{|\vec n|} = 0\)</li>
        <li>Punkt in Ebene: in die Koordinatenform einsetzen, oder in der Parameterform nach \(\lambda, \mu\) auflösen</li>
        <li>Gerade senkrecht zur Ebene: Richtungsvektor \(\vec n\)</li></ul></div>
    <div class="card wide"><h3>Lage zweier Geraden</h3>
      <ol style="margin:0;padding-left:1.2em"><li>Sind die Richtungsvektoren Vielfache voneinander? Wenn ja: parallel oder identisch. Punktprobe mit dem Stützpunkt der einen Geraden in der anderen: liegt drauf, also identisch; sonst echt parallel.</li>
        <li>Wenn nein: gleichsetzen und das Gleichungssystem lösen. Lösung gefunden, also Schnittpunkt; Widerspruch, also windschief.</li></ol></div>
  </div>`,
  recipe: [
    ['Komponenten ausrechnen', String.raw`\(\ln 1 = 0\), \(\sin(7\pi) = 0\), \(2^{-2} = \frac14\), \(\sqrt{(-2)^2} = 2\), Doppelbrüche auflösen.`],
    ['Frage übersetzen', 'senkrecht: Skalarprodukt 0 · Winkel: cos-Formel · senkrecht zu beiden: Kreuzprodukt · Länge: Wurzel der Quadratsumme · Ebene in Normalenform: Kreuzprodukt der Richtungen.'],
    ['Rechnen', 'Parameter ausklammern statt teilen, sonst geht eine Lösung verloren.'],
    ['Kontrollieren', 'Kreuzprodukt mit beiden Vektoren skalar multiplizieren (muss 0 sein), Punktprobe, Nebenbedingungen wie c ≥ 2.'],
    ['Antwortsatz', String.raw`„\(P\) liegt nicht in \(E\).“ „Die Geraden sind identisch.“ Auf dem Deckblatt steht: Die Rechnung muss dastehen, nicht nur das Ergebnis.`],
  ],
  worked: [
    { src: 'September 2021', a: 8, tag: 'Länge, Winkel, Kreuzprodukt',
      q: String.raw`<p class="qt">Gegeben sind \(a = \begin{pmatrix}\ln(1)\\ \sqrt3\\ \cos(\pi)\end{pmatrix}\) und \(b = \begin{pmatrix}2^{-\frac12}\\ 1\\ \sin\left(\frac{4\pi}3\right)\end{pmatrix}\). a) Längen. b) Winkel. c) \(a\times b\).</p>`,
      s: [
        [String.raw`Komponenten: \(a = (0,\ \sqrt3,\ -1)\), \(\ b = \left(\frac{\sqrt2}2,\ 1,\ -\frac{\sqrt3}2\right)\).`, String.raw`\(2^{-1/2} = \frac1{\sqrt2} = \frac{\sqrt2}2\) und \(\sin\frac{4\pi}3 = -\frac{\sqrt3}2\).`],
        [String.raw`\(|a| = \sqrt{0 + 3 + 1} = 2\), \(\ |b| = \sqrt{\frac12 + 1 + \frac34} = \sqrt{\frac94} = \frac32\).`, ''],
        [String.raw`\(a\cdot b = 0 + \sqrt3 + (-1)\left(-\frac{\sqrt3}2\right) = \frac{3\sqrt3}2\).`, ''],
        [String.raw`\(\cos\varphi = \frac{3\sqrt3/2}{2\cdot\frac32} = \frac{\sqrt3}2\), also \(\varphi = \frac\pi6\).`, ''],
        [String.raw`\(a\times b = \begin{pmatrix}\sqrt3\cdot(-\frac{\sqrt3}2) - (-1)\cdot1\\ (-1)\cdot\frac{\sqrt2}2 - 0\\ 0\cdot1 - \sqrt3\cdot\frac{\sqrt2}2\end{pmatrix} = \begin{pmatrix}-\frac12\\ -\frac{\sqrt2}2\\ -\frac{\sqrt6}2\end{pmatrix}\).`, ''],
        [String.raw`Kontrolle: \(a\cdot(a\times b) = 0 - \frac{\sqrt6}2 + \frac{\sqrt6}2 = 0\) ✓`, 'Zehn Sekunden, fängt fast jeden Vorzeichenfehler.'],
      ],
      r: String.raw`\(|a| = 2\), \(|b| = \frac32\), \(\varphi = \frac\pi6\), \(a\times b = \left(-\frac12,\ -\frac{\sqrt2}2,\ -\frac{\sqrt6}2\right)\)` },
    { src: 'November 2024', a: 8, tag: 'Ebene, Lage',
      q: String.raw`<p class="qt">\(E: \vec x = \begin{pmatrix}1\\-2\\1\end{pmatrix} + \lambda\begin{pmatrix}3\\-2\\-1\end{pmatrix} + \mu\begin{pmatrix}-2\\1\\2\end{pmatrix}\), \(\ g_1: \vec x = \begin{pmatrix}1\\0\\-1\end{pmatrix} + s\begin{pmatrix}2\\-6\\-4\end{pmatrix}\), \(\ g_2: \vec x = \begin{pmatrix}3\\-6\\-5\end{pmatrix} + t\begin{pmatrix}-3\\9\\6\end{pmatrix}\).</p><p class="qt">(a) Hessesche Normalform von \(E\), liegt \(P = (-1, 4, 3)\) auf \(E\)? (b) Lagebeziehung von \(g_1\) und \(g_2\).</p>`,
      s: [
        [String.raw`\(\vec n = \begin{pmatrix}3\\-2\\-1\end{pmatrix}\times\begin{pmatrix}-2\\1\\2\end{pmatrix} = \begin{pmatrix}(-2)\cdot2 - (-1)\cdot1\\ (-1)(-2) - 3\cdot2\\ 3\cdot1 - (-2)(-2)\end{pmatrix} = \begin{pmatrix}-3\\-4\\-1\end{pmatrix}\).`, ''],
        [String.raw`\(d = \vec n\cdot\vec p = -3 + 8 - 1 = 4\). Koordinatenform: \(-3x_1 - 4x_2 - x_3 = 4\).`, ''],
        [String.raw`\(|\vec n| = \sqrt{9 + 16 + 1} = \sqrt{26}\). HNF: \(\frac{-3x_1 - 4x_2 - x_3 - 4}{\sqrt{26}} = 0\).`, String.raw`\(d = 4 \ge 0\), das Vorzeichen passt so.`],
        [String.raw`\(P\) einsetzen: \(3 - 16 - 3 - 4 = -20 \ne 0\). \(P\) liegt nicht auf \(E\).`, String.raw`Nebenbei: Der Abstand ist \(\frac{20}{\sqrt{26}}\).`],
        [String.raw`(b) \(\begin{pmatrix}-3\\9\\6\end{pmatrix} = -\frac32\begin{pmatrix}2\\-6\\-4\end{pmatrix}\). Die Richtungen sind parallel.`, ''],
        [String.raw`Punktprobe \((3,-6,-5)\) in \(g_1\): \(1 + 2s = 3 \Rightarrow s = 1\), \(\ 0 - 6s = -6\) ✓, \(\ -1 - 4s = -5\) ✓.`, 'Gleiches s in allen Zeilen, also liegt der Punkt drauf.'],
      ],
      r: String.raw`HNF \(\frac{-3x_1 - 4x_2 - x_3 - 4}{\sqrt{26}} = 0\), \(P \notin E\), \(g_1\) und \(g_2\) sind identisch` },
  ],
  ex: [
    { id: '2022-09', src: 'September 2022', a: 8, lvl: 1,
      q: String.raw`<p>a) Für welche \(c \in \mathbb R\) hat \(v = \begin{pmatrix}c\\3\end{pmatrix}\) die Länge 5? Die Rechnung muss angegeben werden.</p><p>b) Bestimmen Sie \(a \in \mathbb R\) so, dass \(u = \begin{pmatrix}\frac1{a^{-1}+4^{-1}}\\ a\\ \ln(1)\end{pmatrix}\) und \(w = \begin{pmatrix}1\\2\\3\end{pmatrix}\) orthogonal sind.</p>`,
      h: [String.raw`(a) \(|v| = \sqrt{c^2 + 9}\).`, String.raw`(b) \(\frac1{a^{-1}+4^{-1}} = \frac{4a}{a+4}\), \(\ln 1 = 0\). Skalarprodukt 0, dann \(a\) ausklammern.`],
      s: [String.raw`(a) \(\sqrt{c^2+9} = 5 \iff c^2 = 16 \iff c = \pm4\).`,
        String.raw`(b) \(u = \left(\frac{4a}{a+4},\ a,\ 0\right)\) mit \(a \ne 0\), \(a \ne -4\).`,
        String.raw`\(u\cdot w = \frac{4a}{a+4} + 2a = a\left(\frac4{a+4} + 2\right) = 0\).`,
        String.raw`\(a = 0\) ist verboten. \(\frac4{a+4} = -2 \iff a = -6\).`,
        String.raw`Kontrolle: \(u = (12, -6, 0)\), \(u\cdot w = 12 - 12 = 0\) ✓`],
      r: String.raw`(a) \(c = \pm4\) &nbsp; (b) \(a = -6\)` },
    { id: '2022-11', src: 'November 2022', a: 8, lvl: 1,
      q: String.raw`<p>a) Für welche \(c \in \mathbb R\) hat \(v = \begin{pmatrix}3\\ \sqrt{c^2+4}\\ \sqrt2\end{pmatrix}\) die Länge 4?</p><p>b) Bestimmen Sie das Vektorprodukt von \(u = \begin{pmatrix}1\\0\\3\end{pmatrix}\) und \(w = \begin{pmatrix}-2\\ \sin(1)\\ 4\end{pmatrix}\).</p>`,
      h: [String.raw`(a) \(|v|^2 = 9 + (c^2 + 4) + 2\).`, String.raw`(b) Erste Komponente \(u_2w_3 - u_3w_2\), zweite \(u_3w_1 - u_1w_3\), dritte \(u_1w_2 - u_2w_1\).`],
      s: [String.raw`(a) \(\sqrt{c^2 + 15} = 4 \iff c^2 = 1 \iff c = \pm1\).`,
        String.raw`(b) \(0\cdot4 - 3\sin 1 = -3\sin 1\).`,
        String.raw`\(3\cdot(-2) - 1\cdot4 = -10\).`,
        String.raw`\(1\cdot\sin 1 - 0\cdot(-2) = \sin 1\).`],
      r: String.raw`(a) \(c = \pm1\) &nbsp; (b) \(u\times w = \left(-3\sin(1),\ -10,\ \sin(1)\right)\)` },
    { id: '2022-07', src: 'Juli 2022', a: 8, lvl: 1,
      q: String.raw`<p>a) Geben Sie eine Gerade \(g_1\) durch \(A = (1, 2, 3)\) und \(B = (6, 5, 4)\) an und eine weitere Gerade \(g_2\), die \(g_1\) im Punkt \(A\) senkrecht schneidet.</p><p>b) Liegt \(C = (5, 3, 1)\) auf \(g_1\)?</p>`,
      h: [String.raw`Richtungsvektor \(\vec{AB} = B - A\).`, String.raw`Einen Vektor senkrecht zu \((5, 3, 1)\): Skalarprodukt 0. Zum Beispiel erste Komponente 0 und die anderen passend wählen.`],
      s: [String.raw`\(\vec{AB} = (5, 3, 1)\), \(\ g_1: \vec x = (1,2,3) + \lambda(5,3,1)\).`,
        String.raw`\(r = (0, 1, -3)\): \(r\cdot(5,3,1) = 0 + 3 - 3 = 0\) ✓. \(\ g_2: \vec x = (1,2,3) + \mu(0,1,-3)\).`,
        String.raw`(b) \((5,3,1) = (1,2,3) + \lambda(5,3,1)\): erste Zeile \(\lambda = \frac45\), zweite Zeile \(\lambda = \frac13\). Widerspruch.`],
      r: String.raw`\(C\) liegt nicht auf \(g_1\). Für \(g_2\) gibt es viele richtige Antworten.` },
    { id: '2023-07', src: 'Juli 2023', a: 8, lvl: 1,
      q: String.raw`<p>a) Bestimmen Sie \(c \in \mathbb R\setminus\{0, -1\}\) so, dass \(v = \begin{pmatrix}c\\ \frac1{c^{-1}+1}\end{pmatrix}\) und \(w = \begin{pmatrix}-1\\ -2^2\end{pmatrix}\) orthogonal sind.</p><p>b) Geben Sie eine Gerade an, die durch \((1, 2, 3)\) geht und parallel zur \(x\)-\(y\)-Ebene ist.</p>`,
      h: [String.raw`\(-2^2 = -4\) und \(\frac1{c^{-1}+1} = \frac c{1+c}\).`, String.raw`(b) Parallel zur \(x\)-\(y\)-Ebene heißt: Der Richtungsvektor hat keine \(z\)-Komponente.`],
      s: [String.raw`\(v\cdot w = -c - \frac{4c}{1+c} = -c\left(1 + \frac4{1+c}\right) = 0\).`,
        String.raw`\(c = 0\) ist ausgeschlossen. \(1 + \frac4{1+c} = 0 \iff 1 + c = -4 \iff c = -5\).`,
        String.raw`(b) \(g: \vec x = (1,2,3) + \lambda(1, 0, 0)\). Die \(z\)-Koordinate bleibt immer 3.`],
      r: String.raw`(a) \(c = -5\) &nbsp; (b) z.B. \(\vec x = (1,2,3) + \lambda(1,0,0)\)` },
    { id: '2023-12', src: 'Dezember 2023', a: 8, lvl: 2,
      q: String.raw`<p>a) Bestimmen Sie \(c \in \mathbb R\setminus(-2, 2)\) so, dass \(v = \begin{pmatrix}\sqrt{c^2-4}\\ -2^2\end{pmatrix}\) und \(w = \begin{pmatrix}\log_4(4)\\ 1\end{pmatrix}\) orthogonal sind.</p><p>b) Für welches \(a \in \mathbb R\) geht \(g: \vec x = \begin{pmatrix}\frac1{a - 2^{-1}}\\ 4\end{pmatrix} + \lambda\begin{pmatrix}2\\6\end{pmatrix}\) durch \(P = \begin{pmatrix}1\\-2\end{pmatrix}\)?</p>`,
      h: [String.raw`\(\log_4 4 = 1\), \(-2^2 = -4\). Skalarprodukt: \(\sqrt{c^2-4} - 4 = 0\).`, String.raw`(b) Aus der zweiten Zeile \(\lambda\) bestimmen, dann in die erste einsetzen.`],
      s: [String.raw`(a) \(\sqrt{c^2-4} = 4 \iff c^2 = 20 \iff c = \pm2\sqrt5\). Beide liegen außerhalb von \((-2, 2)\) ✓`,
        String.raw`(b) Zweite Zeile: \(4 + 6\lambda = -2 \iff \lambda = -1\).`,
        String.raw`Erste Zeile: \(\frac1{a - \frac12} - 2 = 1 \iff \frac1{a - \frac12} = 3 \iff a = \frac12 + \frac13 = \frac56\).`],
      r: String.raw`(a) \(c = \pm2\sqrt5\) &nbsp; (b) \(a = \frac56\)` },
    { id: '2023-02', src: 'Februar 2023', a: 8, lvl: 2,
      q: String.raw`<p>a) Bestimme \(c \in \mathbb R\setminus\{-2\}\) so, dass \(v = \begin{pmatrix}\frac1{c^{-1}+2^{-1}}\\ 3\end{pmatrix}\) und \(w = \begin{pmatrix}2\\1\end{pmatrix}\) orthogonal sind.</p><p>b) Bestimmen Sie für \(c \ge 2\) das Vektorprodukt \(u = a\times b\) von \(a = \begin{pmatrix}\sqrt{c^2-4}\\ 1\\ -4^2\end{pmatrix}\), \(b = \begin{pmatrix}2^{-3}\\ 0\\ 2\end{pmatrix}\). Für welches \(c\) ist die zweite Komponente von \(u\) gleich \(-12\)?</p>`,
      h: [String.raw`(a) \(\frac1{c^{-1}+2^{-1}} = \frac{2c}{c+2}\).`, String.raw`(b) \(a = (\sqrt{c^2-4},\ 1,\ -16)\), \(b = (\frac18,\ 0,\ 2)\). Zweite Komponente: \(a_3b_1 - a_1b_3\).`],
      s: [String.raw`(a) \(v\cdot w = \frac{4c}{c+2} + 3 = 0 \iff 4c = -3(c+2) \iff c = -\frac67\).`,
        String.raw`(b) \(-4^2 = -16\), \(2^{-3} = \frac18\).`,
        String.raw`\(a\times b = \left(1\cdot2 - (-16)\cdot0,\ (-16)\cdot\frac18 - \sqrt{c^2-4}\cdot2,\ 0 - 1\cdot\frac18\right) = \left(2,\ -2 - 2\sqrt{c^2-4},\ -\frac18\right)\).`,
        String.raw`\(-2 - 2\sqrt{c^2-4} = -12 \iff \sqrt{c^2-4} = 5 \iff c^2 = 29\), mit \(c \ge 2\): \(c = \sqrt{29}\).`],
      r: String.raw`(a) \(c = -\frac67\) &nbsp; (b) \(u = \left(2,\ -2-2\sqrt{c^2-4},\ -\frac18\right)\), \(c = \sqrt{29}\)` },
    { id: '2020-11', src: 'November 2020', a: 8, lvl: 2,
      q: String.raw`<p>Gegeben sind \(a = \begin{pmatrix}-3\\ \frac{-2^2}{-3}\\ 1\end{pmatrix}\), \(b = \begin{pmatrix}0\\ \frac56\\ -\frac{2^{-2}}{4^{-1}+1}\cdot5\end{pmatrix}\), \(c = \begin{pmatrix}\frac{\sqrt2}2\\ \frac{\sqrt2}3\\ -\frac1{\sqrt8}\end{pmatrix}\), \(d = \begin{pmatrix}0\\ \sin(7\pi)\\ 2\end{pmatrix}\), \(s = \begin{pmatrix}\ln(1)\\ -2\sqrt3\\ -2\end{pmatrix}\).</p><p>(a) Bestimmen Sie \(v = \frac12 a - 4b + \sqrt2\,c\). (b) Welchen Winkel schließen \(d\) und \(s\) ein? (Bogenmaß)</p>`,
      h: [String.raw`\(\frac{-2^2}{-3} = \frac43\), \(-\frac{2^{-2}}{4^{-1}+1}\cdot5 = -1\), \(-\frac1{\sqrt8} = -\frac{\sqrt2}4\), \(\sin(7\pi) = 0\), \(\ln 1 = 0\).`, String.raw`(b) \(\cos\varphi = \frac{d\cdot s}{|d|\,|s|}\).`],
      s: [String.raw`\(a = (-3, \frac43, 1)\), \(b = (0, \frac56, -1)\), \(c = (\frac{\sqrt2}2, \frac{\sqrt2}3, -\frac{\sqrt2}4)\), \(d = (0,0,2)\), \(s = (0, -2\sqrt3, -2)\).`,
        String.raw`\(\frac12a = (-\frac32, \frac23, \frac12)\), \(\ 4b = (0, \frac{10}3, -4)\), \(\ \sqrt2c = (1, \frac23, -\frac12)\).`,
        String.raw`\(v = \left(-\frac32 + 1,\ \frac23 - \frac{10}3 + \frac23,\ \frac12 + 4 - \frac12\right) = \left(-\frac12,\ -2,\ 4\right)\).`,
        String.raw`(b) \(d\cdot s = -4\), \(|d| = 2\), \(|s| = \sqrt{12 + 4} = 4\). \(\cos\varphi = -\frac12\), also \(\varphi = \frac{2\pi}3\).`],
      r: String.raw`(a) \(v = \left(-\frac12, -2, 4\right)\) &nbsp; (b) \(\varphi = \frac{2\pi}3\)` },
    { id: '2021-11', src: 'November 2021', a: 8, lvl: 2,
      q: String.raw`<p>Gegeben sind \(u = \begin{pmatrix}9\\7\\ \frac{36}{6+c^{-1}}\end{pmatrix}\) und \(w = \begin{pmatrix}-3\\4\\-1\end{pmatrix}\).</p><p>a) Bestimmen Sie \(c\) so, dass \(u\) und \(w\) senkrecht sind. b) Parameterdarstellung der Geraden durch \(w\) und den Ursprung. c) Eine Gerade, die orthogonal zur Geraden aus b) ist und sie in \(w\) schneidet.</p>`,
      h: [String.raw`(a) \(u\cdot w = -27 + 28 - \frac{36}{6+c^{-1}} = 0\).`, String.raw`(c) Richtung \(r\) mit \(r\cdot w = 0\), z.B. die ersten zwei Komponenten von \(w\) tauschen und ein Vorzeichen ändern.`],
      s: [String.raw`(a) \(1 - \frac{36}{6 + \frac1c} = 0 \iff 6 + \frac1c = 36 \iff c = \frac1{30}\).`,
        String.raw`(b) \(g: \vec x = \lambda\,(-3, 4, -1)\).`,
        String.raw`(c) \(r = (4, 3, 0)\): \(r\cdot w = -12 + 12 + 0 = 0\) ✓. \(\ h: \vec x = (-3, 4, -1) + \mu(4, 3, 0)\).`],
      r: String.raw`(a) \(c = \frac1{30}\) &nbsp; (b) \(\vec x = \lambda(-3,4,-1)\) &nbsp; (c) z.B. \(\vec x = (-3,4,-1) + \mu(4,3,0)\)` },
    { id: '2021-07', src: 'Juli 2021', a: 8, lvl: 3,
      q: String.raw`<p>Gegeben sind \(v = \begin{pmatrix}1\\ 7\\ -2^{-3^2}\end{pmatrix}\) und \(w = \begin{pmatrix}\frac{3c^2}{6c-12}\\ 1\\ \frac1{-2^{10}}\end{pmatrix}\) mit \(c \in \mathbb R\setminus\{2\}\).</p><p>(a) Bestimmen Sie \(u = v - 2w\). (b) Für welche \(c\) ist die erste Komponente von \(u\) gleich 2?</p>`,
      h: [String.raw`\(-2^{-3^2} = -2^{-9} = -\frac1{512}\) und \(\frac1{-2^{10}} = -\frac1{1024}\). Die dritte Komponente von \(u\) wird 0.`, String.raw`(b) \(1 - \frac{c^2}{c-2} = 2\), mal \((c-2)\), quadratische Gleichung.`],
      s: [String.raw`\(u = \left(1 - \frac{6c^2}{6c-12},\ 7 - 2,\ -\frac1{512} + \frac2{1024}\right)\).`,
        String.raw`\(\frac{6c^2}{6c-12} = \frac{c^2}{c-2}\), \(\ \frac2{1024} = \frac1{512}\). Also \(u = \left(\frac{-c^2 + c - 2}{c-2},\ 5,\ 0\right)\).`,
        String.raw`(b) \(1 - \frac{c^2}{c-2} = 2 \iff -c^2 = c - 2 \iff c^2 + c - 2 = 0 \iff (c+2)(c-1) = 0\).`],
      r: String.raw`(a) \(u = \left(\frac{-c^2+c-2}{c-2},\ 5,\ 0\right)\) &nbsp; (b) \(c = -2\) oder \(c = 1\)` },
    { id: '2022-02', src: 'Februar 2022', a: 8, lvl: 3,
      q: String.raw`<p>In Abhängigkeit von \(s \in \mathbb R\): \(a = \begin{pmatrix}s-2\\ \sin\left(\frac{3\pi}2\right)\\ \sqrt{(-2)^2}\end{pmatrix}\), \(b = \begin{pmatrix}2^{-2}\\ 1+s\\ \cos\left(\frac{4\pi}3\right)\end{pmatrix}\).</p><p>a) Skalarprodukt in Abhängigkeit von \(s\). b) Für welches \(s\) sind \(a\) und \(b\) senkrecht? c) Ein Vektor, der zu \(a\) und \(b\) senkrecht steht.</p>`,
      h: [String.raw`\(\sin\frac{3\pi}2 = -1\), \(\sqrt{(-2)^2} = 2\), \(2^{-2} = \frac14\), \(\cos\frac{4\pi}3 = -\frac12\).`, String.raw`(c) Senkrecht zu beiden heißt \(a\times b\).`],
      s: [String.raw`\(a = (s-2,\ -1,\ 2)\), \(\ b = \left(\frac14,\ 1+s,\ -\frac12\right)\).`,
        String.raw`(a) \(a\cdot b = \frac{s-2}4 - (1+s) - 1 = -\frac34s - \frac52\).`,
        String.raw`(b) \(-\frac34s - \frac52 = 0 \iff s = -\frac{10}3\).`,
        String.raw`(c) \(a\times b = \left((-1)(-\frac12) - 2(1+s),\ 2\cdot\frac14 - (s-2)(-\frac12),\ (s-2)(1+s) + \frac14\right)\).`,
        String.raw`\(= \left(-2s - \frac32,\ \frac{s-1}2,\ s^2 - s - \frac74\right)\).`],
      r: String.raw`(a) \(-\frac34s - \frac52\) &nbsp; (b) \(s = -\frac{10}3\) &nbsp; (c) \(\left(-2s - \frac32,\ \frac{s-1}2,\ s^2 - s - \frac74\right)\)` },
    { id: '2024-09', src: 'September 2024', a: 8, lvl: 3,
      q: String.raw`<p>(a) Für welchen Wert von \(c\) schließen \(a = \begin{pmatrix}2\\-\sqrt3\\1\end{pmatrix}\) und \(b = \begin{pmatrix}c\\0\\3\end{pmatrix}\) einen Winkel von \(\frac\pi4\) ein?</p><p>(b) Bestimmen Sie eine Normalform der Ebene \(E: \vec x = \begin{pmatrix}4\\-1\\3\end{pmatrix} + \lambda\begin{pmatrix}2\\2\\3\end{pmatrix} + \mu\begin{pmatrix}1\\2\\1\end{pmatrix}\).</p>`,
      h: [String.raw`(a) \(\cos\frac\pi4 = \frac{\sqrt2}2\), \(|a| = \sqrt8 = 2\sqrt2\). Es entsteht \(2c + 3 = 2\sqrt{c^2+9}\). Quadrieren, Probe.`, String.raw`(b) \(\vec n = (2,2,3)\times(1,2,1)\).`],
      s: [String.raw`(a) \(a\cdot b = 2c + 3\), \(|a| = 2\sqrt2\), \(|b| = \sqrt{c^2+9}\).`,
        String.raw`\(\frac{2c+3}{2\sqrt2\sqrt{c^2+9}} = \frac{\sqrt2}2 \iff 2c + 3 = 2\sqrt{c^2+9}\).`,
        String.raw`Quadrieren: \(4c^2 + 12c + 9 = 4c^2 + 36 \iff c = \frac94\). Probe: \(2c + 3 = \frac{15}2\) und \(2\sqrt{\frac{81}{16} + 9} = \frac{15}2\) ✓`,
        String.raw`(b) \(\vec n = (2\cdot1 - 3\cdot2,\ 3\cdot1 - 2\cdot1,\ 2\cdot2 - 2\cdot1) = (-4, 1, 2)\).`,
        String.raw`\(\vec n\cdot\vec p = -16 - 1 + 6 = -11\).`],
      r: String.raw`(a) \(c = \frac94\) &nbsp; (b) \(\begin{pmatrix}-4\\1\\2\end{pmatrix}\cdot\left(\vec x - \begin{pmatrix}4\\-1\\3\end{pmatrix}\right) = 0\), also \(-4x_1 + x_2 + 2x_3 = -11\)` },
  ],
};
