MODS[3] = {
  short: 'Brüche', pos: 'meist Aufgabe 3',
  title: 'Definitionsbereich, Nullstellen, Polstellen, Asymptoten',
  intro: String.raw`<p>Aufgabe 3 fragt nach Definitionsbereich und Nullstellen einer Funktion. Meist ist es ein Bruch mit negativen Exponenten, manchmal mit Wurzel oder mit Parameter. Seit 2023 kommt fast immer dazu: Welche Art von Definitionslücke ist es, und welche Asymptote hat die Funktion?</p>
  <p>Das Grundmuster: auflösen, faktorisieren, kürzen, einordnen. Wer sauber faktorisiert, hat die Aufgabe fast geschenkt.</p>`,
  theory: String.raw`<div class="grid2">
    <div class="card"><h3>Negative Exponenten und Doppelbrüche</h3>
      <ul><li>\(x^{-1} = \frac1x\), \(\ (a+b)^{-1} = \frac1{a+b}\)</li>
        <li><span class="falle">Falle</span>\((a+b)^{-1} \ne a^{-1} + b^{-1}\)</li>
        <li>Doppelbruch mit dem Nenner der kleinen Brüche erweitern: \(\dfrac{4}{\frac1x + 2} = \dfrac{4\cdot x}{\left(\frac1x+2\right)\cdot x} = \dfrac{4x}{1+2x}\)</li>
        <li>\(\left(\frac1x + \frac1{c^2}\right)^{-1} = \dfrac{xc^2}{c^2 + x}\) (erst Hauptnenner, dann Kehrwert)</li></ul></div>
    <div class="card"><h3>Definitionsbereich</h3>
      <ul><li>Jeder Nenner \(\ne 0\), auch die inneren in einem Doppelbruch</li>
        <li>\(x^{-1}\) oder \(x^{-2}\) im Term: \(x \ne 0\)</li>
        <li>Unter der Wurzel \(\ge 0\), im Nenner unter der Wurzel sogar \(\gt 0\)</li>
        <li>Im Logarithmus \(\gt 0\)</li>
        <li><span class="falle">Falle</span>Immer an der Originalfunktion bestimmen. Nach dem Kürzen sieht man eine Lücke nicht mehr.</li></ul></div>
    <div class="card"><h3>Nullstellen</h3>
      <ul><li>Ein Bruch ist 0, wenn der Zähler 0 ist und der Nenner nicht.</li>
        <li>Satz vom Nullprodukt: \(a\cdot b = 0 \iff a = 0\) oder \(b = 0\)</li>
        <li><span class="falle">Falle</span>Nie durch \(x\) teilen, sondern \(x\) ausklammern. Sonst geht die Lösung \(x = 0\) verloren.</li>
        <li>Jeden Kandidaten gegen \(D\) prüfen. Was nicht in \(D\) liegt, ist keine Nullstelle.</li></ul></div>
    <div class="card"><h3>Faktorisieren</h3>
      <ul><li>Ausklammern: \(4x^3 - 36x = 4x(x^2-9)\)</li>
        <li>3. binomische Formel: \(x^2 - 9 = (x-3)(x+3)\)</li>
        <li>1. und 2. binomische Formel: \(x^2 + 4x + 4 = (x+2)^2\)</li>
        <li>pq-Formel: \(x^2 + px + q = 0 \Rightarrow x = -\frac p2 \pm \sqrt{\left(\frac p2\right)^2 - q}\), dann \((x-x_1)(x-x_2)\)</li>
        <li>Grad 3: eine Nullstelle raten (die Kandidaten aus dem Nenner zuerst probieren), dann Polynomdivision</li></ul></div>
    <div class="card wide"><h3>Art der Definitionslücke</h3>
      <p>Zähler und Nenner faktorisieren, gemeinsame Faktoren kürzen. Dann schaust du für jede Lücke \(x_0\), was vom Faktor \((x - x_0)\) im Nenner übrig ist:</p>
      <div class="tscroll"><table class="tbl">
        <tr><th>Nach dem Kürzen</th><th>Art</th><th>Im Graphen</th></tr>
        <tr><td>\((x-x_0)\) ist ganz aus dem Nenner verschwunden</td><td>hebbare Lücke</td><td>Loch, offener Kreis</td></tr>
        <tr><td>\((x-x_0)^1\), \((x-x_0)^3\), … ungerade Potenz</td><td>Polstelle mit Vorzeichenwechsel</td><td>links \(-\infty\), rechts \(+\infty\) (oder umgekehrt)</td></tr>
        <tr><td>\((x-x_0)^2\), \((x-x_0)^4\), … gerade Potenz</td><td>Polstelle ohne Vorzeichenwechsel</td><td>beide Seiten gehen in dieselbe Richtung</td></tr>
      </table></div>
      <p style="margin:0">Beispiel: \(\frac{(x-3)(x+2)}{(x+2)^2} = \frac{x-3}{x+2}\). Bei \(x = -2\) bleibt \((x+2)^1\), also Polstelle mit Vorzeichenwechsel.</p></div>
    <div class="card"><h3>Asymptote für \(x \to \pm\infty\)</h3>
      <p>Grad von Zähler und Nenner vergleichen:</p>
      <ul><li>Zähler kleiner: \(y = 0\)</li>
        <li>Gleich groß: \(y = \) Verhältnis der Vorfaktoren der höchsten Potenzen, z.B. \(\frac{4x^2-36}{x^2-4x+4} \to y = 4\)</li>
        <li>Zähler um eins größer: schiefe Asymptote, per Polynomdivision</li></ul></div>
    <div class="card"><h3>Polynomdivision</h3>
      <p>\((x^2 - x - 5) : (x - 3)\):</p>
      <ol style="margin:0;padding-left:1.2em"><li>\(x^2 : x = x\). Abziehen: \(x\cdot(x-3) = x^2 - 3x\), Rest \(2x - 5\).</li>
        <li>\(2x : x = 2\). Abziehen: \(2\cdot(x-3) = 2x - 6\), Rest \(1\).</li>
        <li>Ergebnis: \(x + 2 + \frac{1}{x-3}\). Der Rest-Bruch geht gegen 0, die Asymptote ist \(y = x + 2\).</li></ol></div>
    <div class="card wide"><h3>Mit Parameter</h3>
      <p style="margin:0">Rechne ganz normal mit dem Buchstaben. Am Ende zwei Fragen: Wo teile ich durch etwas, das 0 werden kann (dann Sonderfall)? Und für welchen Parameterwert fällt der Kandidat genau auf eine verbotene Stelle aus \(D\) (dann entfällt diese Nullstelle)?</p></div>
  </div>`,
  recipe: [
    ['Auflösen', String.raw`Negative Exponenten als Brüche schreiben, Konstanten ausrechnen (\(\sqrt{144} = 12\), \(-3^2 = -9\)).`],
    ['Definitionsbereich', String.raw`An der Originalfunktion: alle Nenner, auch innere, Wurzeln, Logarithmen.`],
    ['Ein Bruch', String.raw`Doppelbrüche erweitern, alles auf einen Hauptnenner bringen.`],
    ['Faktorisieren', 'Zähler und Nenner zerlegen: ausklammern, binomische Formeln, pq-Formel, Polynomdivision.'],
    ['Kürzen und einordnen', 'Faktor ganz weg: hebbare Lücke. Bleibt ungerade: Pol mit Vorzeichenwechsel. Bleibt gerade: Pol ohne.'],
    ['Nullstellen', String.raw`Zähler der gekürzten Form gleich 0, jeden Kandidaten gegen \(D\) prüfen.`],
    ['Asymptote', 'Falls gefragt: Gradvergleich oder Polynomdivision.'],
  ],
  worked: [
    { src: 'November 2024', a: 3, tag: 'Lücken und Asymptote',
      q: String.raw`<p class="qt">Wir betrachten \(\displaystyle f(x) = \frac{x^3 + 2x^2 - 8x - 15}{x^2 - 9}\).</p><p class="qt">(a) Bestimmen Sie den maximalen Definitionsbereich und entscheiden Sie bei den Lücken, ob es eine hebbare Lücke, eine Polstelle mit oder ohne Vorzeichenwechsel ist. (b) Bestimmen Sie die Asymptote für \(x \to \pm\infty\).</p>`,
      s: [
        [String.raw`Nenner: \(x^2 - 9 = (x-3)(x+3)\), also \(D = \mathbb R \setminus \{-3,\ 3\}\).`, ''],
        [String.raw`Zähler an den Lücken testen: \(x = 3\): \(27 + 18 - 24 - 15 = 6 \ne 0\). \(\ x = -3\): \(-27 + 18 + 24 - 15 = 0\).`, String.raw`Ist der Zähler an einer Lücke 0, steckt der Faktor auch im Zähler. Hier also \((x+3)\).`],
        [String.raw`Polynomdivision \((x^3 + 2x^2 - 8x - 15) : (x+3) = x^2 - x - 5\).`, String.raw`Schritte: \(x^3 : x = x^2\), Rest \(-x^2 - 8x\). Dann \(-x^2 : x = -x\), Rest \(-5x - 15\). Dann \(-5x : x = -5\), Rest 0.`],
        [String.raw`\(f(x) = \frac{(x+3)(x^2-x-5)}{(x-3)(x+3)} = \frac{x^2-x-5}{x-3}\) für \(x \ne -3\).`, ''],
        [String.raw`\(x = -3\): Faktor ganz weg, <b>hebbare Lücke</b>. \(\ x = 3\): \((x-3)^1\) bleibt, Zähler dort \(1 \ne 0\), <b>Polstelle mit Vorzeichenwechsel</b>.`, ''],
        [String.raw`(b) Zählergrad 2, Nennergrad 1: schiefe Asymptote. \((x^2 - x - 5) : (x-3) = x + 2\) Rest 1, also \(f(x) = x + 2 + \frac1{x-3}\).`, String.raw`Für \(x \to \pm\infty\) geht \(\frac1{x-3}\) gegen 0.`],
      ],
      r: String.raw`\(D = \mathbb R\setminus\{-3, 3\}\), hebbare Lücke bei \(-3\), Pol mit VZW bei \(3\), Asymptote \(y = x + 2\)` },
    { src: 'Oktober 2020', a: 3, tag: 'negative Exponenten',
      q: String.raw`<p class="qt">Bestimmen Sie die Nullstellen und den maximalen Definitionsbereich von</p><div class="fbig">\[f(x) = \frac{4}{x^{-1}+2} - \frac{1}{4+x^{-1}}.\]</div>`,
      s: [
        [String.raw`\(D\): \(x \ne 0\). Innere Nenner: \(\frac1x + 2 = 0 \iff x = -\frac12\), \(\ 4 + \frac1x = 0 \iff x = -\frac14\). Also \(D = \mathbb R \setminus \{-\frac12,\ -\frac14,\ 0\}\).`, 'Die inneren Nenner vergisst man am leichtesten.'],
        [String.raw`Mit \(x\) erweitern: \(\frac{4}{\frac1x+2} = \frac{4x}{1+2x}\) und \(\frac1{4+\frac1x} = \frac{x}{4x+1}\).`, ''],
        [String.raw`\(f(x) = \frac{4x}{2x+1} - \frac{x}{4x+1} = x\left(\frac{4}{2x+1} - \frac{1}{4x+1}\right)\)`, String.raw`Ausklammern statt durch \(x\) teilen.`],
        [String.raw`\(x = 0\) liegt nicht in \(D\). Klammer: \(\frac4{2x+1} = \frac1{4x+1} \iff 4(4x+1) = 2x+1 \iff 14x = -3 \iff x = -\frac3{14}\).`, ''],
        [String.raw`\(-\frac3{14}\) ist weder \(-\frac12\) noch \(-\frac14\) noch 0, liegt also in \(D\) ✓`, ''],
      ],
      r: String.raw`\(D = \mathbb R\setminus\{-\frac12, -\frac14, 0\}\), einzige Nullstelle \(x = -\frac{3}{14}\)` },
  ],
  ex: [
    { id: '2023-12', src: 'Dezember 2023', a: 3, lvl: 1,
      q: String.raw`<p>Bestimmen Sie den maximalen Definitionsbereich und die Nullstellen von</p><div class="fbig">\[g(x) = -3^2\cdot\frac{x-3}{x^2-9} - 3.\]</div><p>Geben Sie bei den Definitionslücken auch die Art an und ob ein Vorzeichenwechsel stattfindet.</p>`,
      h: [String.raw`\(-3^2 = -9\), nicht \(+9\). Und \(x^2 - 9 = (x-3)(x+3)\).`, 'Nach dem Kürzen: Welcher Faktor ist aus dem Nenner verschwunden, welcher ist noch da?'],
      s: [String.raw`\(D = \mathbb R \setminus \{-3,\ 3\}\).`,
        String.raw`\(\frac{x-3}{(x-3)(x+3)} = \frac1{x+3}\), also \(g(x) = -\frac9{x+3} - 3\) für \(x \ne 3\).`,
        String.raw`\(x = 3\): <b>hebbare Lücke</b>. \(\ x = -3\): \((x+3)^1\) bleibt, <b>Polstelle mit Vorzeichenwechsel</b>.`,
        String.raw`Nullstelle: \(-\frac9{x+3} = 3 \iff x + 3 = -3 \iff x = -6\) ✓`],
      r: String.raw`\(D = \mathbb R\setminus\{-3, 3\}\), hebbar bei 3, Pol mit VZW bei \(-3\), Nullstelle \(x = -6\)` },
    { id: '2023-02', src: 'Februar 2023', a: 3, lvl: 1,
      q: String.raw`<p>Bestimmen Sie den maximalen Definitionsbereich von</p><div class="fbig">\[f(x) = \frac{x^2 - x - 6}{x^2 + 4x + 4} - 6.\]</div><p>Geben Sie bei den Lücken die Art an und berechnen Sie die Nullstellen.</p>`,
      h: [String.raw`\(x^2 - x - 6 = (x-3)(x+2)\), der Nenner ist \((x+2)^2\).`, String.raw`Nach dem Kürzen bleibt \((x+2)\) einmal im Nenner. Ungerade Potenz heißt?`],
      s: [String.raw`\(D = \mathbb R \setminus \{-2\}\).`,
        String.raw`Kürzen: \(f(x) = \frac{x-3}{x+2} - 6\).`,
        String.raw`\(x = -2\): \((x+2)^1\) bleibt, <b>Polstelle mit Vorzeichenwechsel</b>.`,
        String.raw`Nullstelle: \(\frac{x-3}{x+2} = 6 \iff x - 3 = 6x + 12 \iff x = -3\) ✓`],
      r: String.raw`\(D = \mathbb R\setminus\{-2\}\), Pol mit VZW bei \(-2\), Nullstelle \(x = -3\)` },
    { id: '2024-09', src: 'September 2024', a: 3, lvl: 1,
      q: String.raw`<p>Bestimmen Sie den maximalen Definitionsbereich und die Nullstellen der Funktion</p><div class="fbig">\[f(x) = \frac{x^2 - 8x + 16}{x-4} + \sqrt{x-2}.\]</div>`,
      h: [String.raw`\(D\): \(x - 2 \ge 0\) und \(x \ne 4\).`, String.raw`\(x^2 - 8x + 16 = (x-4)^2\). Danach Wurzel isolieren, quadrieren, Probe.`],
      s: [String.raw`\(D = [2, 4) \cup (4, \infty)\).`,
        String.raw`\(\frac{(x-4)^2}{x-4} = x - 4\), also \(f(x) = x - 4 + \sqrt{x-2}\).`,
        String.raw`\(\sqrt{x-2} = 4 - x\). Quadrieren: \(x - 2 = 16 - 8x + x^2 \iff x^2 - 9x + 18 = 0 \iff x = 3\) oder \(x = 6\).`,
        String.raw`Probe: \(f(3) = -1 + 1 = 0\) ✓. \(\ f(6) = 2 + 2 = 4\) ✗, Scheinlösung vom Quadrieren.`],
      r: String.raw`\(D = [2,4)\cup(4,\infty)\), Nullstelle \(x = 3\)` },
    { id: '2020-11', src: 'November 2020', a: 5, lvl: 1,
      q: String.raw`<p>Bestimmen Sie die Nullstellen der Funktion \(g\) und die Stellen, an denen sie nicht definiert ist:</p><div class="fbig">\[g(x) = \frac{\left(2e^{2x} - \frac2e\right)\cdot x^2}{\frac12(x^2+7) - 4x}.\]</div>`,
      h: [String.raw`Nenner: \(\frac12(x^2+7) - 4x = \frac12(x^2 - 8x + 7)\), dann pq-Formel.`, String.raw`Zähler ist ein Produkt: \(x^2 = 0\) oder \(2e^{2x} = \frac2e\).`],
      s: [String.raw`Nenner: \(\frac12(x-1)(x-7)\). Nicht definiert bei \(x = 1\) und \(x = 7\).`,
        String.raw`\(x^2 = 0 \iff x = 0\).`,
        String.raw`\(2e^{2x} = \frac2e \iff e^{2x} = e^{-1} \iff x = -\frac12\).`,
        String.raw`Beide liegen in \(D\).`],
      r: String.raw`Nullstellen \(x = 0\) und \(x = -\frac12\); nicht definiert bei \(x = 1\) und \(x = 7\)` },
    { id: '2023-07', src: 'Juli 2023', a: 3, lvl: 2,
      q: String.raw`<p>Bestimmen Sie den maximalen Definitionsbereich und die Nullstellen von</p><div class="fbig">\[f(x) = \frac{4}{8x + \sqrt{(-12)^2}} - x^{-2}.\]</div><p>Geben Sie bei den Lücken die Art an und ob ein Vorzeichenwechsel stattfindet.</p>`,
      h: [String.raw`\(\sqrt{(-12)^2} = 12\), also \(\frac4{8x+12} = \frac1{2x+3}\).`, String.raw`Auf einen Nenner: \(\frac{x^2 - (2x+3)}{x^2(2x+3)}\). \(x^2\) ist eine gerade Potenz.`],
      s: [String.raw`\(f(x) = \frac1{2x+3} - \frac1{x^2}\), \(D = \mathbb R \setminus \{-\frac32,\ 0\}\).`,
        String.raw`\(f(x) = \frac{x^2 - 2x - 3}{x^2(2x+3)} = \frac{(x-3)(x+1)}{x^2(2x+3)}\). Nichts kürzt sich.`,
        String.raw`\(x = 0\): gerade Potenz, <b>Pol ohne Vorzeichenwechsel</b>. \(\ x = -\frac32\): einfach, <b>Pol mit Vorzeichenwechsel</b>.`,
        String.raw`Nullstellen \(x = 3\) und \(x = -1\).`],
      r: String.raw`\(D = \mathbb R\setminus\{-\frac32, 0\}\), Nullstellen \(-1\) und \(3\)` },
    { id: '2022-02', src: 'Februar 2022', a: 4, lvl: 2,
      q: String.raw`<p>Bestimmen Sie den Definitionsbereich von</p><div class="fbig">\[g(x) = \cos\left(-\frac\pi6\right) + \frac{\frac12 - x^{-2}}{\sqrt{4-x^2}}\]</div><p>sowie die Stellen \(x\), an denen \(g\) den Wert \(\sqrt{\frac34}\) annimmt.</p>`,
      h: [String.raw`Die Wurzel steht im Nenner, also \(4 - x^2 \gt 0\), echt größer.`, String.raw`\(\cos(-\frac\pi6) = \frac{\sqrt3}2 = \sqrt{\frac34}\). Der Bruch muss also 0 werden.`],
      s: [String.raw`\(x \ne 0\) wegen \(x^{-2}\), und \(-2 \lt x \lt 2\). \(\ D = (-2, 0) \cup (0, 2)\).`,
        String.raw`\(g(x) = \frac{\sqrt3}2 \iff \frac{\frac12 - x^{-2}}{\sqrt{4-x^2}} = 0 \iff \frac1{x^2} = \frac12 \iff x^2 = 2\).`,
        String.raw`\(x = \pm\sqrt2\), beide in \(D\).`],
      r: String.raw`\(D = (-2,0)\cup(0,2)\), \(x = -\sqrt2\) und \(x = \sqrt2\)` },
    { id: '2021-09', src: 'September 2021', a: 6, lvl: 2,
      q: String.raw`<p>Bestimmen Sie den Definitionsbereich und die Nullstellen der Funktion</p><div class="fbig">\[f(x) = \sqrt{x+2s} - s\cdot\sqrt{\frac3x}\]</div><p>in Abhängigkeit von \(s \in \mathbb R\), \(s \gt 0\).</p>`,
      h: [String.raw`\(\frac3x \ge 0\) mit \(x \ne 0\) heißt \(x \gt 0\).`, String.raw`Wurzel rüber, quadrieren, mit \(x\) malnehmen: \(x^2 + 2sx - 3s^2 = 0\).`],
      s: [String.raw`\(x \gt 0\), dann ist auch \(x + 2s \gt 0\). \(\ D = (0, \infty)\).`,
        String.raw`\(\sqrt{x+2s} = s\sqrt{\frac3x}\). Beide Seiten \(\ge 0\), quadrieren: \(x + 2s = \frac{3s^2}x\).`,
        String.raw`\(x^2 + 2sx - 3s^2 = 0 \iff (x+3s)(x-s) = 0\).`,
        String.raw`\(x = -3s \lt 0\) liegt nicht in \(D\). Bleibt \(x = s\).`],
      r: String.raw`\(D = (0,\infty)\), Nullstelle \(x = s\)` },
    { id: '2020-07', src: 'Juli 2020', a: '2 und 3', lvl: 2,
      q: String.raw`<p>(a) Bestimmen Sie die Nullstellen von \(\displaystyle f(x) = \frac{6x}{x^{-1}+2x} - 16^{2^{-2}}\).</p><p>(b) Bestimmen Sie den Definitionsbereich und (c) die Nullstellen von</p><div class="fbig">\[g(x) = \frac{c^{-1}}{x^{-1} - c^{-1}} + \left(x^{-1} + 3^{-1}\right)^{-1}, \quad c \in \mathbb R\setminus\{0\}.\]</div>`,
      h: [String.raw`(a) \(16^{2^{-2}} = 16^{1/4} = 2\). Mit \(x\) erweitern: \(\frac{6x^2}{1+2x^2}\).`, String.raw`(c) \(\frac{c^{-1}}{x^{-1}-c^{-1}} = \frac{x}{c-x}\) (mit \(xc\) erweitern) und \((x^{-1}+3^{-1})^{-1} = \frac{3x}{x+3}\). Dann \(x\) ausklammern.`],
      s: [String.raw`(a) \(D\): \(x \ne 0\). \(\frac{6x^2}{1+2x^2} = 2 \iff 6x^2 = 2 + 4x^2 \iff x = \pm1\).`,
        String.raw`(b) \(x \ne 0\), \(\ x^{-1} \ne c^{-1} \iff x \ne c\), \(\ x^{-1} + 3^{-1} \ne 0 \iff x \ne -3\). \(\ D = \mathbb R\setminus\{-3, 0, c\}\).`,
        String.raw`(c) \(g(x) = \frac{x}{c-x} + \frac{3x}{x+3} = x\left(\frac1{c-x} + \frac3{x+3}\right)\). \(x = 0\) liegt nicht in \(D\).`,
        String.raw`Klammer: \(x + 3 = -3(c-x) \iff 2x = 3 + 3c \iff x = \frac{3(c+1)}2\).`,
        String.raw`Gegen \(D\) prüfen: \(c = -1\) liefert \(x = 0\) ✗, \(c = -3\) liefert \(x = -3\) ✗.`],
      r: String.raw`(a) \(x = \pm1\). (b) \(D = \mathbb R\setminus\{-3, 0, c\}\). (c) \(x = \frac{3(c+1)}2\) für \(c \notin \{-3, -1\}\), sonst keine Nullstelle` },
    { id: '2021-07', src: 'Juli 2021', a: 5, lvl: 2,
      q: String.raw`<p>Bestimmen Sie den maximalen Definitionsbereich von</p><div class="fbig">\[f(x) = \frac{x-1}{\dfrac{1}{x^{-1}+1} + \dfrac{8}{-12x^{-2}-4}}.\]</div>`,
      h: [String.raw`Innere Nenner zuerst: \(x^{-1}\), \(x^{-1}+1\), \(-12x^{-2} - 4\). Dann darf der große Nenner nicht 0 werden.`, String.raw`\(\frac1{x^{-1}+1} = \frac x{1+x}\) und \(\frac8{-12x^{-2}-4} = -\frac{2x^2}{x^2+3}\). Auf einen Nenner, Zähler faktorisieren.`],
      s: [String.raw`\(x \ne 0\). \(\ x^{-1} + 1 \ne 0 \iff x \ne -1\). \(\ -12x^{-2} - 4\) ist immer negativ, nie 0.`,
        String.raw`Großer Nenner: \(\frac{x}{x+1} - \frac{2x^2}{x^2+3} = \frac{x(x^2+3) - 2x^2(x+1)}{(x+1)(x^2+3)} = \frac{-x^3 - 2x^2 + 3x}{(x+1)(x^2+3)}\).`,
        String.raw`\(-x(x^2 + 2x - 3) = -x(x+3)(x-1)\), null bei \(0\), \(-3\), \(1\).`,
        String.raw`Bei \(x = 1\) ist auch der Zähler \(x - 1\) null. Trotzdem nicht definiert, denn 0 durch 0 geht nicht.`],
      r: String.raw`\(D = \mathbb R\setminus\{-3, -1, 0, 1\}\)` },
    { id: '2020-10', src: 'Oktober 2020', a: 2, lvl: 3,
      q: String.raw`<p>Bestimmen Sie die Nullstellen von</p><div class="fbig">\[f(x) = \frac{1}{\sqrt{x^2+4}} - k\]</div><p>in Abhängigkeit von \(k \in \mathbb R\).</p>`,
      h: [String.raw`\(\sqrt{x^2+4} \ge 2\), also liegt \(\frac1{\sqrt{x^2+4}}\) immer in \((0, \frac12]\).`, String.raw`Für passende \(k\): \(\sqrt{x^2+4} = \frac1k\), quadrieren.`],
      s: [String.raw`\(D = \mathbb R\). Nullstelle heißt \(\frac1{\sqrt{x^2+4}} = k\). Links nur Werte in \((0, \frac12]\), der größte bei \(x = 0\).`,
        String.raw`\(k \le 0\) oder \(k \gt \frac12\): keine Nullstelle.`,
        String.raw`\(k = \frac12\): \(\sqrt{x^2+4} = 2 \iff x = 0\).`,
        String.raw`\(0 \lt k \lt \frac12\): \(x^2 + 4 = \frac1{k^2} \iff x = \pm\sqrt{\frac1{k^2} - 4} = \pm\frac{\sqrt{1-4k^2}}{k}\).`],
      r: String.raw`keine für \(k \le 0\) oder \(k \gt \frac12\); \(x = 0\) für \(k = \frac12\); \(x = \pm\frac{\sqrt{1-4k^2}}k\) für \(0 \lt k \lt \frac12\)` },
    { id: '2022-09', src: 'September 2022', a: 3, lvl: 3,
      q: String.raw`<p>Bestimmen Sie die Lösungsmenge der Gleichung</p><div class="fbig">\[\sqrt{x^{-2} + 2^{-2}} = 2k\]</div><p>in Abhängigkeit von \(k \in (0, \infty)\).</p>`,
      h: [String.raw`Quadrieren ist erlaubt, beide Seiten sind \(\ge 0\): \(\frac1{x^2} + \frac14 = 4k^2\).`, String.raw`\(\frac1{x^2}\) muss positiv sein. Das klappt nur für bestimmte \(k\).`],
      s: [String.raw`\(D\): \(x \ne 0\).`,
        String.raw`\(\frac1{x^2} = 4k^2 - \frac14 = \frac{16k^2 - 1}4\).`,
        String.raw`Links steht etwas Positives, also braucht es \(16k^2 - 1 \gt 0 \iff k \gt \frac14\).`,
        String.raw`Dann \(x^2 = \frac4{16k^2-1}\), also \(x = \pm\frac2{\sqrt{16k^2-1}}\).`],
      r: String.raw`\(0 \lt k \le \frac14\): \(L = \emptyset\); \(\ k \gt \frac14\): \(L = \left\{\pm\frac{2}{\sqrt{16k^2-1}}\right\}\)` },
    { id: '2022-11', src: 'November 2022', a: 3, lvl: 3,
      q: String.raw`<p>Bestimmen Sie den maximalen Definitionsbereich und die Nullstellen von</p><div class="fbig">\[f(x) = \left(x^{-1} + c^{-2}\right)^{-1} - 1\]</div><p>in Abhängigkeit von \(c \in (0, \infty)\).</p>`,
      h: [String.raw`\(D\): \(x \ne 0\) und die Klammer \(\ne 0\): \(\frac1x + \frac1{c^2} \ne 0 \iff x \ne -c^2\).`, String.raw`\(\left(\frac1x + \frac1{c^2}\right)^{-1} = \frac{xc^2}{x+c^2}\). Gleich 1 setzen. Vorsicht beim Teilen durch \(c^2 - 1\).`],
      s: [String.raw`\(D = \mathbb R\setminus\{-c^2,\ 0\}\).`,
        String.raw`\(\frac{xc^2}{x+c^2} = 1 \iff xc^2 = x + c^2 \iff x(c^2 - 1) = c^2\).`,
        String.raw`\(c = 1\): \(0 = 1\), keine Nullstelle.`,
        String.raw`\(c \ne 1\): \(x = \frac{c^2}{c^2-1}\). Nie 0, und \(= -c^2\) nur für \(c = 0\). Liegt also in \(D\).`],
      r: String.raw`\(D = \mathbb R\setminus\{-c^2, 0\}\); Nullstelle \(x = \frac{c^2}{c^2-1}\) für \(c \ne 1\), keine für \(c = 1\)` },
    { id: '2021-11', src: 'November 2021', a: 6, lvl: 3,
      q: String.raw`<p>Geben Sie in Abhängigkeit von \(c \in \mathbb R\) die Nullstellen der Funktion \(f: \mathbb R\setminus\{-8\} \to \mathbb R\) an. Für welche \(c\) hat \(f\) nur eine Nullstelle?</p><div class="fbig">\[f(x) = \frac{2^{3^2}\cdot2^{-10}\cdot x^2 + c\cdot x}{4 + \frac x2} + 3x\]</div>`,
      h: [String.raw`\(2^{3^2} = 2^9\), nicht \(2^6\). Also \(2^9\cdot2^{-10} = \frac12\).`, String.raw`Alles auf den Nenner \(x + 8\): \(f(x) = \frac{2x(2x + c + 12)}{x+8}\).`],
      s: [String.raw`Zähler \(\frac{x^2}2 + cx\), Nenner \(\frac{x+8}2\). Bruch: \(\frac{x^2 + 2cx}{x+8}\).`,
        String.raw`Plus \(3x = \frac{3x^2 + 24x}{x+8}\): \(f(x) = \frac{4x^2 + (2c+24)x}{x+8} = \frac{2x(2x + c + 12)}{x+8}\).`,
        String.raw`Nullstellen: \(x_1 = 0\), \(x_2 = -\frac{c+12}2\).`,
        String.raw`\(x_2 = x_1\) bei \(c = -12\). \(\ x_2 = -8\) (nicht in \(D\)) bei \(c = 4\).`],
      r: String.raw`Für \(c \notin \{-12, 4\}\): \(x = 0\) und \(x = -\frac{c+12}2\). Nur eine Nullstelle (\(x = 0\)) für \(c = -12\) und \(c = 4\)` },
  ],
};
