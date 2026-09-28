MODS[4] = {
  short: 'Logarithmus', pos: 'meist Aufgabe 4, manchmal 6 bis 8',
  title: 'Logarithmusgleichungen und Definitionsbereiche mit ln',
  intro: String.raw`<p>In jeder Klausur steckt eine Aufgabe mit \(\ln\), \(\lg\) oder \(\log_b\): eine Gleichung lösen, Nullstellen bestimmen oder den Definitionsbereich angeben. Entscheidend sind zwei Dinge: die drei Log-Gesetze sicher anwenden und am Ende jede Lösung gegen den Definitionsbereich prüfen.</p>
  <p>Auffällig oft ist die Antwort „keine Lösung“, weil der einzige Kandidat nicht in \(D\) liegt. Das ist Absicht des Prüfers, kein Rechenfehler von dir.</p>`,
  theory: String.raw`<div class="grid2">
    <div class="card"><h3>Was ein Logarithmus ist</h3>
      <p>\(\log_b(y) = x\) heißt \(b^x = y\). Der Logarithmus fragt: Mit welcher Hochzahl wird \(b\) zu \(y\)?</p>
      <ul><li>\(\ln = \log_e\), \(\ \lg = \log_{10}\)</li>
        <li>\(\log_2 8 = 3\), \(\ \lg 1000 = 3\), \(\ \ln(e^2) = 2\), \(\ \log_3 9 = 2\)</li>
        <li>\(\log_5\left(25^{2x}\right) = \log_5\left(5^{4x}\right) = 4x\)</li></ul></div>
    <div class="card"><h3>Die drei Gesetze</h3>
      <ul><li>\(\ln(a\cdot b) = \ln a + \ln b\)</li>
        <li>\(\ln\frac ab = \ln a - \ln b\)</li>
        <li>\(\ln(a^n) = n\cdot\ln a\), also auch \(\ln\sqrt a = \frac12\ln a\)</li>
        <li><span class="falle">Falle</span>\(\ln(a+b) \ne \ln a + \ln b\) und \(\frac{\ln a}{\ln b} \ne \ln\frac ab\)</li></ul>
      <p style="margin:.5em 0 0">Gilt genauso für \(\lg\) und \(\log_b\).</p></div>
    <div class="card"><h3>Zahlen als Logarithmus schreiben</h3>
      <ul><li>\(0 = \ln 1\), \(\ 1 = \ln e\), \(\ -1 = \ln\frac1e\)</li>
        <li>\(2 = \lg 100\), \(\ 4 = \lg 10^4\)</li>
        <li>\(2\ln x = \ln(x^2)\), \(\ 2\log_4|x| = \log_4(x^2)\)</li></ul>
      <p style="margin:.5em 0 0">So bekommst du auf beiden Seiten einen einzigen Logarithmus.</p></div>
    <div class="card"><h3>Logarithmus loswerden</h3>
      <ul><li>\(\ln A = \ln B \Rightarrow A = B\)</li>
        <li>\(\ln A = c \Rightarrow A = e^c\), \(\ \lg A = c \Rightarrow A = 10^c\)</li>
        <li>Umgekehrt: \(e^A = e^B \Rightarrow A = B\), \(\ e^A = c \Rightarrow A = \ln c\) (nur für \(c \gt 0\))</li></ul></div>
    <div class="card wide"><h3>Definitionsbereich mit Logarithmus</h3>
      <ul><li>Argument \(\gt 0\), echt größer</li>
        <li>Logarithmus im Nenner: zusätzlich \(\ne 0\), also Argument \(\ne 1\)</li>
        <li>\(\sqrt{\ln(\dots)}\): der Logarithmus muss \(\ge 0\) sein</li>
        <li>\(\ln|x|\): nur \(x \ne 0\)</li>
        <li>Bruch im Argument, z.B. \(\ln\frac{9x^2-1}{-x}\): Vorzeichentabelle. Zähler und Nenner faktorisieren, die Nullstellen auf den Zahlenstrahl, in jedem Bereich das Vorzeichen bestimmen, die positiven Bereiche nehmen.</li></ul></div>
  </div>`,
  recipe: [
    ['Definitionsbereich', String.raw`Jedes Argument \(\gt 0\), Logarithmen im Nenner \(\ne 0\).`],
    ['Zahlen ausrechnen', String.raw`\(\lg 1000 = 3\), \(\ln 1 = 0\), \(e^{\ln 2} = 2\), \(\ln(e^2) = 2\).`],
    ['Zusammenfassen', String.raw`Mit den Gesetzen auf jeder Seite einen einzigen Logarithmus bauen. Zahlen als Logarithmus schreiben.`],
    ['Logarithmus weg', String.raw`\(\ln A = \ln B \Rightarrow A = B\), \(\ \ln A = c \Rightarrow A = e^c\).`],
    ['Lösen', 'Die entstandene Gleichung lösen, oft quadratisch.'],
    ['Gegen D prüfen', 'Jede Lösung, die nicht in D liegt, fliegt raus. Bleibt keine: keine Lösung.'],
  ],
  worked: [
    { src: 'Juli 2020', a: 8, tag: 'lg und quadratisch',
      q: String.raw`<p class="qt">Bestimmen Sie die Nullstellen und den Definitionsbereich von</p><div class="fbig">\[f(x) = \lg(1000x - 1050) - \ln\left(e^2\right) - \lg\left(2x^2\right).\]</div>`,
      s: [
        [String.raw`\(D\): \(1000x - 1050 \gt 0 \iff x \gt \frac{21}{20}\), und \(2x^2 \gt 0 \iff x \ne 0\). Zusammen \(D = \left(\frac{21}{20}, \infty\right)\).`, ''],
        [String.raw`\(\ln(e^2) = 2\).`, ''],
        [String.raw`\(f(x) = 0 \iff \lg(1000x - 1050) - \lg(2x^2) = 2 \iff \lg\frac{1000x - 1050}{2x^2} = 2\).`, String.raw`Minus zwischen zwei Logarithmen wird ein Bruch.`],
        [String.raw`Logarithmus weg: \(\frac{1000x-1050}{2x^2} = 10^2 = 100 \iff 1000x - 1050 = 200x^2\).`, String.raw`\(\lg A = 2\) heißt \(A = 10^2\).`],
        [String.raw`Durch 50 teilen und sortieren: \(4x^2 - 20x + 21 = 0 \iff x = \frac{20 \pm \sqrt{400 - 336}}{8} = \frac{20 \pm 8}8\).`, ''],
        [String.raw`\(x = \frac72\) und \(x = \frac32\). Beide größer als \(\frac{21}{20}\) ✓`, ''],
      ],
      r: String.raw`\(D = \left(\frac{21}{20}, \infty\right)\), Nullstellen \(x = \frac32\) und \(x = \frac72\)` },
    { src: 'Juli 2022', a: 6, tag: 'Log im Nenner',
      q: String.raw`<p class="qt">Bestimmen Sie den maximalen Definitionsbereich und die Nullstellen von</p><div class="fbig">\[h(x) = \frac{\log_4(-2x+1)}{\log_4(|x|)} - 2.\]</div>`,
      s: [
        [String.raw`\(-2x + 1 \gt 0 \iff x \lt \frac12\). \(\ |x| \gt 0 \iff x \ne 0\). Nenner: \(\log_4|x| \ne 0 \iff |x| \ne 1 \iff x \ne \pm1\).`, 'Drei Bedingungen, eine davon kommt vom Nenner.'],
        [String.raw`Zusammen: \(D = (-\infty, -1) \cup (-1, 0) \cup \left(0, \frac12\right)\). (\(x = 1\) war schon durch \(x \lt \frac12\) raus.)`, ''],
        [String.raw`\(h(x) = 0 \iff \log_4(1 - 2x) = 2\log_4|x| = \log_4(x^2)\).`, String.raw`\(2\log_4|x| = \log_4(|x|^2)\), und \(|x|^2 = x^2\).`],
        [String.raw`\(1 - 2x = x^2 \iff x^2 + 2x - 1 = 0 \iff x = -1 \pm \sqrt2\).`, ''],
        [String.raw`\(-1 + \sqrt2 \approx 0{,}41\) liegt in \((0, \frac12)\) ✓. \(\ -1 - \sqrt2 \approx -2{,}41\) liegt in \((-\infty, -1)\) ✓`, ''],
      ],
      r: String.raw`\(D = (-\infty,-1)\cup(-1,0)\cup(0,\frac12)\), Nullstellen \(x = -1 \pm \sqrt2\)` },
  ],
  ex: [
    { id: '2020-10', src: 'Oktober 2020', a: 8, lvl: 1,
      q: String.raw`<p>(a) Bestimmen Sie die Lösung(en) der Gleichung \(\ \ln(x) + \ln(x+6) = \ln(7)\).</p><p>(b) Bestimmen Sie den maximalen Definitionsbereich von \(\displaystyle f(x) = \frac{1}{\ln(x-3)}\).</p>`,
      h: [String.raw`(a) \(D\): \(x \gt 0\). Links \(\ln x + \ln(x+6) = \ln\big(x(x+6)\big)\).`, '(b) Zwei Bedingungen: Argument größer 0, und der Logarithmus im Nenner darf nicht 0 sein.'],
      s: [String.raw`(a) \(x(x+6) = 7 \iff x^2 + 6x - 7 = 0 \iff (x+7)(x-1) = 0\).`,
        String.raw`\(x = -7\) liegt nicht in \(D\). Bleibt \(x = 1\).`,
        String.raw`(b) \(x - 3 \gt 0 \iff x \gt 3\). \(\ \ln(x-3) \ne 0 \iff x - 3 \ne 1 \iff x \ne 4\).`],
      r: String.raw`(a) \(L = \{1\}\) &nbsp; (b) \(D = (3, 4) \cup (4, \infty)\)` },
    { id: '2023-07', src: 'Juli 2023', a: 7, lvl: 1,
      q: String.raw`<p>(a) Bestimmen Sie den maximalen Definitionsbereich von \(f_1(x) = \ln\left(3x^{-2} + 4\right)\) und von \(f_2(x) = \ln(x)\).</p><p>(b) Bestimmen Sie die Lösungsmenge von \(\ \ln\left(3x^{-2}+4\right) + \ln(x) = \ln(7) - \ln(x)\).</p>`,
      h: [String.raw`(a) \(\frac3{x^2} + 4\) ist für jedes \(x \ne 0\) positiv.`, String.raw`(b) \(\ln x\) nach links: \(\ln(3x^{-2}+4) + 2\ln x = \ln 7\), und \(2\ln x = \ln(x^2)\).`],
      s: [String.raw`(a) \(D_1 = \mathbb R \setminus \{0\}\), \(\ D_2 = (0, \infty)\).`,
        String.raw`(b) \(D = (0, \infty)\). \(\ \ln\left((3x^{-2}+4)\cdot x^2\right) = \ln 7\).`,
        String.raw`\((3x^{-2}+4)x^2 = 3 + 4x^2 = 7 \iff x^2 = 1 \iff x = \pm1\).`,
        String.raw`\(x = -1\) liegt nicht in \(D\).`],
      r: String.raw`(a) \(D_1 = \mathbb R\setminus\{0\}\), \(D_2 = (0,\infty)\) &nbsp; (b) \(L = \{1\}\)` },
    { id: '2023-12', src: 'Dezember 2023', a: 7, lvl: 1,
      q: String.raw`<p>(a) Bestimmen Sie die Lösung(en) von \(\ \log_7(2x-1) = 2\log_7(x)\).</p><p>(b) Bestimmen Sie den Definitionsbereich von \(\displaystyle f(x) = \ln\left(\frac{9x^2-1}{-x}\right)\).</p>`,
      h: [String.raw`(a) \(2\log_7 x = \log_7(x^2)\). \(D\): \(x \gt \frac12\).`, String.raw`(b) Bruch \(\gt 0\): Vorzeichentabelle mit den Stellen \(-\frac13\), \(0\), \(\frac13\).`],
      s: [String.raw`(a) \(2x - 1 = x^2 \iff (x-1)^2 = 0 \iff x = 1\) ✓`,
        String.raw`(b) \(x \ne 0\). \(\ 9x^2 - 1 = (3x-1)(3x+1)\).`,
        String.raw`\(x \lt -\frac13\): Zähler \(+\), \(-x\) \(+\), Bruch \(+\) ✓. \(\ -\frac13 \lt x \lt 0\): Zähler \(-\), \(-x\) \(+\), Bruch \(-\) ✗.`,
        String.raw`\(0 \lt x \lt \frac13\): Zähler \(-\), \(-x\) \(-\), Bruch \(+\) ✓. \(\ x \gt \frac13\): Zähler \(+\), \(-x\) \(-\), Bruch \(-\) ✗.`],
      r: String.raw`(a) \(L = \{1\}\) &nbsp; (b) \(D = \left(-\infty, -\frac13\right) \cup \left(0, \frac13\right)\)` },
    { id: '2024-09', src: 'September 2024', a: 4, lvl: 1,
      q: String.raw`<p>Bestimmen Sie die Lösungsmenge der Gleichung</p><div class="fbig">\[\ln(x+2) - 2\ln\left(\sqrt x\right) = \ln(x+1) - \ln(1).\]</div>`,
      h: [String.raw`\(2\ln\sqrt x = \ln\left((\sqrt x)^2\right) = \ln x\) und \(\ln 1 = 0\).`, String.raw`Links zu einem Logarithmus: \(\ln\frac{x+2}x\).`],
      s: [String.raw`\(D\): \(x \gt 0\).`,
        String.raw`\(\ln\frac{x+2}x = \ln(x+1) \iff \frac{x+2}x = x + 1 \iff x + 2 = x^2 + x \iff x^2 = 2\).`,
        String.raw`\(x = \sqrt2\). \(\ -\sqrt2\) liegt nicht in \(D\).`],
      r: String.raw`\(L = \{\sqrt2\}\)` },
    { id: '2021-07', src: 'Juli 2021', a: 7, lvl: 1,
      q: String.raw`<p>Bestimmen Sie die Lösung(en) der Gleichung</p><div class="fbig">\[\ln(x-3) = \ln\big(\lg(1000)\big) - \ln(2x-1).\]</div>`,
      h: [String.raw`\(\lg 1000 = 3\). \(D\): \(x \gt 3\).`, String.raw`\(\ln(2x-1)\) nach links: \(\ln\big((x-3)(2x-1)\big) = \ln 3\).`],
      s: [String.raw`\(D = (3, \infty)\), dann ist auch \(2x - 1 \gt 0\).`,
        String.raw`\((x-3)(2x-1) = 3 \iff 2x^2 - 7x + 3 = 3 \iff x(2x - 7) = 0\).`,
        String.raw`\(x = 0\) liegt nicht in \(D\), \(x = \frac72\) schon ✓`],
      r: String.raw`\(L = \left\{\frac72\right\}\)` },
    { id: '2023-02', src: 'Februar 2023', a: 6, lvl: 2,
      q: String.raw`<p>Bestimmen Sie die Lösungsmenge der Gleichung</p><div class="fbig">\[\sqrt{\ln(x+1) - \ln(x)} = 2.\]</div>`,
      h: [String.raw`\(\ln(x+1) - \ln x = \ln\frac{x+1}x\). \(D\): \(x \gt 0\).`, String.raw`Quadrieren: \(\ln\frac{x+1}x = 4\), dann \(e\) hoch.`],
      s: [String.raw`\(D\): \(x \gt 0\). Dann ist \(\frac{x+1}x \gt 1\), der Logarithmus positiv, die Wurzel definiert.`,
        String.raw`Quadrieren: \(\ln\frac{x+1}x = 4 \iff \frac{x+1}x = e^4\).`,
        String.raw`\(x + 1 = e^4 x \iff 1 = x(e^4 - 1) \iff x = \frac1{e^4-1}\), positiv ✓`],
      r: String.raw`\(L = \left\{\frac{1}{e^4-1}\right\}\)` },
    { id: '2020-11', src: 'November 2020', a: 7, lvl: 2,
      q: String.raw`<p>Wir betrachten für \(x \gt 0\) den Ausdruck</p><div class="fbig">\[\lg(20x) - \frac{\lg\left(\frac{x^2}2\right)}{\big(\lg(100)\big)^{-1}}.\]</div><p>(a) Vereinfachen Sie so, dass \(x\) nur noch an einer Stelle auftritt. (b) Für welche \(x\) hat der Ausdruck den Wert 4?</p>`,
      h: [String.raw`\((\lg 100)^{-1} = \frac12\). Durch \(\frac12\) teilen heißt mal 2.`, String.raw`\(2\lg\frac{x^2}2 = \lg\frac{x^4}4\). Dann \(\lg a - \lg b = \lg\frac ab\).`],
      s: [String.raw`\(\frac{\lg(x^2/2)}{1/2} = 2\lg\frac{x^2}2 = \lg\frac{x^4}4\).`,
        String.raw`\(\lg(20x) - \lg\frac{x^4}4 = \lg\frac{20x\cdot4}{x^4} = \lg\frac{80}{x^3}\).`,
        String.raw`(b) \(\lg\frac{80}{x^3} = 4 \iff \frac{80}{x^3} = 10^4 \iff x^3 = \frac1{125} \iff x = \frac15\).`],
      r: String.raw`(a) \(\lg\frac{80}{x^3}\) &nbsp; (b) \(x = \frac15\)` },
    { id: '2022-09', src: 'September 2022', a: 6, lvl: 2,
      q: String.raw`<p>Bestimmen Sie die Nullstellen von</p><p>(a) \(\displaystyle h(x) = \frac{2}{\lg(10x - 20) - 2} - 1\)</p><p>(b) \(\displaystyle f(x) = \frac{\ln(x^2-1)}{\ln(x-1)} - e^{\ln(2)}\)</p>`,
      h: [String.raw`(a) \(\frac2{\lg(10x-20) - 2} = 1 \iff \lg(10x-20) = 4\).`, String.raw`(b) \(e^{\ln 2} = 2\), und \(\ln(x^2-1) = \ln(x-1) + \ln(x+1)\).`],
      s: [String.raw`(a) \(D\): \(x \gt 2\), \(x \ne 12\). \(\ 10x - 20 = 10^4 \iff x = 1002\) ✓`,
        String.raw`(b) \(D\): \(x \gt 1\), \(x \ne 2\). \(\ f(x) = 0 \iff \ln(x^2-1) = 2\ln(x-1)\).`,
        String.raw`\(\ln(x-1) + \ln(x+1) = 2\ln(x-1) \iff \ln(x+1) = \ln(x-1) \iff x + 1 = x - 1\). Unmöglich.`],
      r: String.raw`(a) \(x = 1002\) &nbsp; (b) keine Nullstelle` },
    { id: '2022-11', src: 'November 2022', a: 6, lvl: 2,
      q: String.raw`<p>(a) Bestimmen Sie die Nullstellen von \(\ h(x) = \ln(x-1) + 1 - \ln(2x-8)\).</p><p>(b) Geben Sie den maximalen Definitionsbereich an: \(\ f(x) = \ln\left(\sqrt{x^2-9}\right) + \ln\left(x^{-1} + x^{-2}\right)\).</p>`,
      h: [String.raw`(a) \(1 = \ln e\), also \(\ln\big(e(x-1)\big) = \ln(2x-8)\). \(D\): \(x \gt 4\).`, String.raw`(b) \(x^{-1} + x^{-2} = \frac{x+1}{x^2}\). Wann ist das positiv?`],
      s: [String.raw`(a) \(D = (4, \infty)\). \(\ e(x-1) = 2x - 8 \iff x(e-2) = e - 8 \iff x = \frac{e-8}{e-2} \approx -7{,}4\). Nicht in \(D\).`,
        String.raw`Also keine Nullstelle.`,
        String.raw`(b) \(\sqrt{x^2-9} \gt 0 \iff x^2 \gt 9 \iff x \lt -3\) oder \(x \gt 3\). \(\ \frac{x+1}{x^2} \gt 0 \iff x \gt -1,\ x \ne 0\).`,
        String.raw`Beides zusammen: \(x \gt 3\).`],
      r: String.raw`(a) keine Nullstelle &nbsp; (b) \(D = (3, \infty)\)` },
    { id: '2024-11', src: 'November 2024', a: 4, lvl: 2,
      q: String.raw`<p>(a) Bestimmen Sie die Nullstelle(n) von \(\displaystyle f(x) = \ln\left(\sqrt{\frac{x^2-2x+1}{x}}\right) + \frac12\ln(x)\).</p><p>(b) Vereinfachen Sie \(\displaystyle \frac{1}{e^{-5}}\left(\frac{1}{e^5} + \frac{1}{e^{-2\ln(x)+5}}\right)\).</p>`,
      h: [String.raw`(a) \(x^2 - 2x + 1 = (x-1)^2\) und \(\ln\sqrt a = \frac12\ln a\). Dann die beiden \(\frac12\ln\) zusammenfassen.`, String.raw`(b) \(\frac1{e^{-5}} = e^5\). Ausmultiplizieren und \(e^{2\ln x} = x^2\) benutzen.`],
      s: [String.raw`(a) \(D\): \(x \gt 0\) und \(x \ne 1\).`,
        String.raw`\(f(x) = \frac12\ln\frac{(x-1)^2}x + \frac12\ln x = \frac12\ln\big((x-1)^2\big) = \ln|x-1|\).`,
        String.raw`\(\ln|x-1| = 0 \iff |x-1| = 1 \iff x = 2\) oder \(x = 0\). \(\ x = 0\) liegt nicht in \(D\).`,
        String.raw`(b) \(e^5\left(e^{-5} + e^{2\ln x - 5}\right) = 1 + e^{2\ln x} = 1 + x^2\).`],
      r: String.raw`(a) \(x = 2\) &nbsp; (b) \(1 + x^2\)` },
    { id: '2021-09', src: 'September 2021', a: 5, lvl: 3,
      q: String.raw`<p>Finden Sie alle Lösungen der Gleichung</p><div class="fbig">\[\ln\left((3x)^{-2} - 3e^4\right) = \log_5\left(25^{2x}\right)\cdot x^{-1}.\]</div>`,
      h: [String.raw`Rechts: \(25^{2x} = 5^{4x}\), also \(\log_5(25^{2x}) = 4x\). Mal \(x^{-1}\) gibt 4.`, String.raw`Links: \(\ln(\dots) = 4 \iff \dots = e^4\).`],
      s: [String.raw`Rechts \(4x\cdot\frac1x = 4\) (mit \(x \ne 0\)).`,
        String.raw`\(\frac1{9x^2} - 3e^4 = e^4 \iff \frac1{9x^2} = 4e^4\).`,
        String.raw`\(x^2 = \frac1{36e^4} \iff x = \pm\frac1{6e^2}\).`,
        String.raw`Probe \(D\): Das Argument ist dann \(e^4 \gt 0\) ✓`],
      r: String.raw`\(L = \left\{-\frac1{6e^2},\ \frac1{6e^2}\right\}\)` },
    { id: '2021-11', src: 'November 2021', a: 5, lvl: 3,
      q: String.raw`<p>Bestimmen Sie die Nullstellen und den maximalen Definitionsbereich von</p><div class="fbig">\[f(x) = \ln(x-1)\cdot\big(1 - \ln(x-3)\big)^{-1} + \sqrt{(-1)^2}.\]</div>`,
      h: [String.raw`\(\sqrt{(-1)^2} = 1\). \(D\): \(x \gt 3\) und \(1 - \ln(x-3) \ne 0\).`, String.raw`Nullstelle heißt \(\ln(x-1) = \ln(x-3) - 1\). Welche Seite ist für \(x \gt 3\) größer?`],
      s: [String.raw`\(D\): \(x \gt 3\), \(\ \ln(x-3) \ne 1 \iff x \ne 3 + e\). \(\ D = (3, 3+e) \cup (3+e, \infty)\).`,
        String.raw`\(f(x) = 0 \iff \frac{\ln(x-1)}{1 - \ln(x-3)} = -1 \iff \ln(x-1) = \ln(x-3) - 1\).`,
        String.raw`\(\ln\frac{x-1}{x-3} = -1 \iff \frac{x-1}{x-3} = \frac1e \iff x = \frac{e-3}{e-1} \approx -0{,}16\). Nicht in \(D\).`,
        String.raw`Anschaulich: Für \(x \gt 3\) ist \(\frac{x-1}{x-3} \gt 1\), der Logarithmus also positiv und nie \(-1\).`],
      r: String.raw`\(D = (3, 3+e)\cup(3+e, \infty)\), keine Nullstelle` },
    { id: '2022-02', src: 'Februar 2022', a: 6, lvl: 3,
      q: String.raw`<p>Bestimmen Sie den Definitionsbereich der Funktion</p><div class="fbig">\[g(x) = \frac{\ln(a^2 - x^2)}{\ln(2x + a)} + \ln(a)\]</div><p>in Abhängigkeit von \(a \in \mathbb R\), \(a \ge 1\).</p>`,
      h: [String.raw`Drei Bedingungen: \(a^2 - x^2 \gt 0\), \(2x + a \gt 0\), \(\ln(2x+a) \ne 0\).`, String.raw`\(\ln(2x+a) = 0 \iff 2x + a = 1 \iff x = \frac{1-a}2\).`],
      s: [String.raw`\(a^2 - x^2 \gt 0 \iff -a \lt x \lt a\).`,
        String.raw`\(2x + a \gt 0 \iff x \gt -\frac a2\).`,
        String.raw`\(2x + a \ne 1 \iff x \ne \frac{1-a}2\). Dieser Wert liegt für \(a \ge 1\) im Intervall \(\left(-\frac a2, a\right)\).`,
        String.raw`\(\ln a\) ist für \(a \ge 1\) definiert.`],
      r: String.raw`\(D = \left(-\frac a2,\ a\right) \setminus \left\{\frac{1-a}2\right\}\)` },
  ],
};
