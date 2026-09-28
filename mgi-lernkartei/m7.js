MODS[7] = {
  short: 'Integrieren', pos: 'meist Aufgabe 7',
  title: 'Bestimmte Integrale',
  intro: String.raw`<p>Aufgabe 7 ist ein bestimmtes Integral. Der Trick ist fast immer derselbe: Der Integrand sieht wild aus, lässt sich aber <b>vor dem Integrieren</b> kürzen. Danach bleiben nur Potenzen, \(\frac1x\), \(e^x\), Sinus, Kosinus und Konstanten.</p>
  <p>In einigen Klausuren steckt ein Parameter drin („Für welches \(k\) gilt …“). Dann rechnest du das Integral mit dem Parameter aus und löst am Ende nach ihm auf.</p>`,
  theory: String.raw`<div class="grid2">
    <div class="card"><h3>Stammfunktionen</h3>
      <div class="tscroll"><table class="tbl">
        <tr><th>\(f(x)\)</th><th>\(F(x)\)</th></tr>
        <tr><td>Zahl \(c\)</td><td>\(cx\)</td></tr>
        <tr><td>\(x^n\) (\(n \ne -1\))</td><td>\(\frac{x^{n+1}}{n+1}\)</td></tr>
        <tr><td>\(\frac1x\)</td><td>\(\ln|x|\)</td></tr>
        <tr><td>\(\frac1{x-a}\)</td><td>\(\ln|x-a|\)</td></tr>
        <tr><td>\(\frac1{x^2} = x^{-2}\)</td><td>\(-\frac1x\)</td></tr>
        <tr><td>\(\frac1{x^3} = x^{-3}\)</td><td>\(-\frac1{2x^2}\)</td></tr>
        <tr><td>\(e^x\), \(\ e^{ax}\)</td><td>\(e^x\), \(\ \frac1ae^{ax}\)</td></tr>
        <tr><td>\(\sin x\)</td><td>\(-\cos x\)</td></tr>
        <tr><td>\(\cos x\)</td><td>\(\sin x\)</td></tr>
      </table></div>
      <p style="margin:0">Kontrolle: \(F\) ableiten muss \(f\) ergeben.</p></div>
    <div class="card"><h3>Hauptsatz</h3>
      <p>\(\displaystyle\int_a^b f(x)\,dx = F(b) - F(a)\), oben minus unten.</p>
      <ul><li>Summandenweise integrieren, Faktoren bleiben stehen</li>
        <li>Konstanten: \(\int_a^b c\,dx = c\cdot(b-a)\). Beispiel \(\int_2^4 e^2\,dx = 2e^2\)</li>
        <li><span class="falle">Falle</span>Beim Einsetzen der unteren Grenze Klammern setzen: \(-\left(\frac12 - 3\right)\)</li>
        <li><span class="falle">Falle</span>\(\int f\cdot g \ne \int f \cdot \int g\), \(\ \int\frac1{x^2}\) ist kein \(\ln\)</li></ul></div>
    <div class="card wide"><h3>Vor dem Integrieren vereinfachen</h3>
      <div class="tscroll"><table class="tbl">
        <tr><th>Muster aus der Klausur</th><th>vereinfacht</th><th>Werkzeug</th></tr>
        <tr><td>\(\frac{x^2-9}{x-3}\)</td><td>\(x + 3\)</td><td>3. binomische Formel</td></tr>
        <tr><td>\(\frac{x^2-16}{-x+4}\)</td><td>\(-(x+4)\)</td><td>\(-x+4 = -(x-4)\)</td></tr>
        <tr><td>\(\frac{x^2+2x-3}{x+3}\)</td><td>\(x - 1\)</td><td>pq-Formel: Nullstellen \(-3\) und \(1\)</td></tr>
        <tr><td>\(\frac{x+2}{x^2+4x+4}\)</td><td>\(\frac1{x+2}\)</td><td>1. binomische Formel</td></tr>
        <tr><td>\(\frac{x+2}{x^2}\)</td><td>\(\frac1x + \frac2{x^2}\)</td><td>Bruch aufteilen</td></tr>
        <tr><td>\(\frac{4-2x}{\frac1x - \frac12}\)</td><td>\(4x\)</td><td>Doppelbruch auflösen</td></tr>
        <tr><td>\(\frac2{e^{-x}}\), \(\ x^3(2x)^{-2}\)</td><td>\(2e^x\), \(\ \frac x4\)</td><td>negative Exponenten</td></tr>
        <tr><td>\(\sqrt{(x-3)^2}\)</td><td>\(|x-3|\)</td><td>an der Knickstelle aufteilen</td></tr>
      </table></div>
      <p style="margin:0">Die Stelle, die beim Kürzen verschwindet (z.B. \(x = 3\) bei \(\frac{x^2-9}{x-3}\)), ist eine hebbare Lücke. Sie ändert am Integral nichts, auch wenn sie wie 2024 genau auf einer Grenze liegt.</p></div>
    <div class="card"><h3>Mit Parameter</h3>
      <p>Der Parameter ist nur eine Zahl: \(\int_1^2 e^2k\,dx = e^2k\). Integral ganz normal ausrechnen, gleich der Vorgabe setzen, nach dem Parameter auflösen, Bedingung wie \(c \lt 2\) prüfen.</p></div>
    <div class="card"><h3>Betrag im Integral</h3>
      <p>\(\int_2^4 |x-3|\,dx = \int_2^3 (3-x)\,dx + \int_3^4 (x-3)\,dx = \frac12 + \frac12 = 1\).</p>
      <p style="margin:0">Anschaulich: zwei Dreiecke mit Grundseite 1 und Höhe 1.</p></div>
  </div>`,
  recipe: [
    ['Vereinfachen', String.raw`Kürzen, Doppelbrüche auflösen, Brüche aufteilen, negative Exponenten umschreiben, Konstanten ausrechnen.`],
    ['Stammfunktion', 'Summandenweise mit der Tabelle, Parameter und Konstanten wie Zahlen behandeln.'],
    ['Einsetzen', String.raw`\(F(b) - F(a)\), die untere Grenze in Klammern.`],
    ['Zusammenfassen', String.raw`\(\ln 1 = 0\), \(e^0 = 1\), Brüche kürzen, exakt stehen lassen (\(\sin 1\), \(\ln 3\), \(e^2\)).`],
    ['Parameter', 'Falls gefragt: Ergebnis gleich Vorgabe setzen, auflösen, Nebenbedingung prüfen.'],
  ],
  worked: [
    { src: 'November 2021', a: 7, tag: 'kürzen',
      q: String.raw`<p class="qt">Berechnen Sie das Integral</p><div class="fbig">\[\int_2^4 \frac{x^2 + 2x - 3}{x+3} + e^2\,dx.\]</div>`,
      s: [
        [String.raw`Zähler faktorisieren: \(x^2 + 2x - 3 = 0 \iff x = -1 \pm \sqrt{1+3} = -1 \pm 2\), also \((x+3)(x-1)\).`, String.raw`Hat der Nenner die Form \(x + 3\), probiere zuerst, ob \(x = -3\) den Zähler null macht.`],
        [String.raw`\(\frac{(x+3)(x-1)}{x+3} = x - 1\). Integrand: \(x - 1 + e^2\).`, ''],
        [String.raw`Stammfunktion: \(F(x) = \frac{x^2}2 - x + e^2x\).`, String.raw`\(e^2\) ist eine Zahl, integriert wird daraus \(e^2x\).`],
        [String.raw`\(F(4) - F(2) = (8 - 4 + 4e^2) - (2 - 2 + 2e^2) = 4 + 2e^2\).`, ''],
      ],
      r: String.raw`\(4 + 2e^2\)` },
    { src: 'September 2024', a: 7, tag: 'Parameter',
      q: String.raw`<p class="qt">Berechnen Sie \(k \in \mathbb R\), so dass gilt:</p><div class="fbig">\[\int_1^2 \frac{x^2-4}{x^3 - 2x^2} + e^2\cdot k\,dx = \ln(2).\]</div>`,
      s: [
        [String.raw`\(\frac{(x-2)(x+2)}{x^2(x-2)} = \frac{x+2}{x^2} = \frac1x + \frac2{x^2}\).`, 'Erst kürzen, dann in zwei einfache Brüche aufteilen.'],
        [String.raw`\(e^2k\) ist eine Konstante.`, ''],
        [String.raw`\(F(x) = \ln x - \frac2x + e^2kx\).`, String.raw`\(\int 2x^{-2}\,dx = 2\cdot\frac{x^{-1}}{-1} = -\frac2x\).`],
        [String.raw`\(F(2) - F(1) = (\ln 2 - 1 + 2e^2k) - (0 - 2 + e^2k) = \ln 2 + 1 + e^2k\).`, ''],
        [String.raw`\(\ln 2 + 1 + e^2k = \ln 2 \iff k = -\frac1{e^2}\).`, ''],
      ],
      r: String.raw`\(k = -\frac{1}{e^2}\)` },
  ],
  ex: [
    { id: '2022-11', src: 'November 2022', a: 7, lvl: 1,
      q: String.raw`<p>Berechnen Sie das Integral</p><div class="fbig">\[\int_{-1}^2 \frac{x^2-9}{x-3} + e^{-7}\,dx.\]</div>`,
      h: [String.raw`\(x^2 - 9 = (x-3)(x+3)\).`, String.raw`\(e^{-7}\) ist eine Zahl, über ein Intervall der Länge 3: \(3e^{-7}\).`],
      s: [String.raw`\(\frac{x^2-9}{x-3} = x + 3\).`,
        String.raw`\(\left[\frac{x^2}2 + 3x + e^{-7}x\right]_{-1}^2 = (2 + 6 + 2e^{-7}) - \left(\frac12 - 3 - e^{-7}\right)\).`,
        String.raw`\(= 8 + \frac52 + 3e^{-7}\).`],
      r: String.raw`\(\frac{21}2 + \frac3{e^7}\)` },
    { id: '2021-07', src: 'Juli 2021', a: 4, lvl: 1,
      q: String.raw`<p>Berechnen Sie das Integral</p><div class="fbig">\[\int_{-3}^1 \frac{x^2-9}{x-3} - 2^2\cdot\sin\left(\pi^2\right)dx.\]</div>`,
      h: [String.raw`Kürzen wie immer: \(\frac{x^2-9}{x-3} = x + 3\).`, String.raw`\(4\sin(\pi^2)\) ist eine Zahl. \(\sin(\pi^2)\) lässt sich nicht weiter ausrechnen, bleibt stehen.`],
      s: [String.raw`\(\int_{-3}^1 (x+3)\,dx = \left[\frac{x^2}2 + 3x\right]_{-3}^1 = \frac72 - \left(-\frac92\right) = 8\).`,
        String.raw`\(-4\sin(\pi^2)\cdot(1 - (-3)) = -16\sin(\pi^2)\).`],
      r: String.raw`\(8 - 16\sin\left(\pi^2\right)\)` },
    { id: '2023-07', src: 'Juli 2023', a: 6, lvl: 1,
      q: String.raw`<p>Berechnen Sie das Integral</p><div class="fbig">\[\int_{-2}^{-1} \frac{x^2 - 16}{-x+4} - \big(\sin(1)\big)^2\,dx.\]</div>`,
      h: [String.raw`\(-x + 4 = -(x-4)\) und \(x^2 - 16 = (x-4)(x+4)\).`, String.raw`Also \(\frac{x^2-16}{-x+4} = -(x+4)\).`],
      s: [String.raw`Integrand: \(-x - 4 - \sin^2 1\).`,
        String.raw`\(\left[-\frac{x^2}2 - 4x\right]_{-2}^{-1} = \left(-\frac12 + 4\right) - (-2 + 8) = -\frac52\).`,
        String.raw`\(-\sin^2(1)\cdot1\).`],
      r: String.raw`\(-\frac52 - \sin^2(1)\)` },
    { id: '2020-11', src: 'November 2020', a: 4, lvl: 1,
      q: String.raw`<p>Berechnen Sie das Integral (ohne Doppelbrüche und negative Exponenten im Ergebnis)</p><div class="fbig">\[\int_{-1}^0 \frac{x^2-1}{x-1} + \frac1{\cos(7) - 3^{-2}}\,dx.\]</div>`,
      h: [String.raw`\(\frac{x^2-1}{x-1} = x + 1\).`, String.raw`Der zweite Summand ist eine Konstante. Mit 9 erweitern: \(\frac9{9\cos 7 - 1}\).`],
      s: [String.raw`\(\int_{-1}^0 (x+1)\,dx = \left[\frac{x^2}2 + x\right]_{-1}^0 = 0 - \left(\frac12 - 1\right) = \frac12\).`,
        String.raw`Konstante \(\frac9{9\cos 7 - 1}\) mal Intervalllänge 1.`,
        String.raw`Zusammen: \(\frac12 + \frac9{9\cos 7 - 1} = \frac{9\cos 7 + 17}{18\cos 7 - 2}\).`],
      r: String.raw`\(\frac12 + \frac{9}{9\cos(7) - 1} = \frac{9\cos(7) + 17}{18\cos(7) - 2}\)` },
    { id: '2023-02', src: 'Februar 2023', a: 7, lvl: 1,
      q: String.raw`<p>Berechnen Sie das Integral</p><div class="fbig">\[\int_4^8 x^3\cdot(2x)^{-2} + \frac{x^2-9}{x-3} + \sqrt7\,dx.\]</div>`,
      h: [String.raw`\((2x)^{-2} = \frac1{4x^2}\), also \(x^3(2x)^{-2} = \frac x4\).`, String.raw`Zusammen: \(\frac x4 + x + 3 + \sqrt7 = \frac54x + 3 + \sqrt7\).`],
      s: [String.raw`Integrand \(\frac54x + 3 + \sqrt7\).`,
        String.raw`\(\left[\frac58x^2\right]_4^8 = 40 - 10 = 30\).`,
        String.raw`\((3 + \sqrt7)\cdot4 = 12 + 4\sqrt7\).`],
      r: String.raw`\(42 + 4\sqrt7\)` },
    { id: '2022-09', src: 'September 2022', a: 7, lvl: 2,
      q: String.raw`<p>Berechnen Sie das Integral</p><div class="fbig">\[\int_1^2 \frac{x^2 + x - 12}{x-3} + \sin(1) + \frac{\left(2^{-1} + 4^{-1}\right)^{-1}}{x^3}\,dx.\]</div>`,
      h: [String.raw`\(x^2 + x - 12 = (x-3)(x+4)\) und \(\left(2^{-1}+4^{-1}\right)^{-1} = \left(\frac34\right)^{-1} = \frac43\).`, String.raw`\(\int \frac43x^{-3}\,dx = \frac43\cdot\frac{x^{-2}}{-2} = -\frac2{3x^2}\).`],
      s: [String.raw`Integrand: \(x + 4 + \sin 1 + \frac43x^{-3}\).`,
        String.raw`\(\left[\frac{x^2}2 + 4x\right]_1^2 = 10 - \frac92 = \frac{11}2\).`,
        String.raw`\(\sin 1\cdot 1\).`,
        String.raw`\(\left[-\frac2{3x^2}\right]_1^2 = -\frac16 + \frac23 = \frac12\).`],
      r: String.raw`\(6 + \sin(1)\)` },
    { id: '2022-02', src: 'Februar 2022', a: 7, lvl: 2,
      q: String.raw`<p>Berechnen Sie das Integral</p><div class="fbig">\[\int_{-1}^0 \left(\frac2{e^{-x}} + \sin(x) + \frac{e^2}{x-1}\right)dx.\]</div>`,
      h: [String.raw`\(\frac2{e^{-x}} = 2e^x\).`, String.raw`\(\int\frac{e^2}{x-1}\,dx = e^2\ln|x-1|\). An beiden Grenzen ist \(x-1\) negativ, deshalb der Betrag.`],
      s: [String.raw`\(\int_{-1}^0 2e^x\,dx = 2 - \frac2e\).`,
        String.raw`\(\int_{-1}^0 \sin x\,dx = [-\cos x]_{-1}^0 = -1 + \cos(-1) = \cos 1 - 1\).`,
        String.raw`\(e^2\left[\ln|x-1|\right]_{-1}^0 = e^2(\ln 1 - \ln 2) = -e^2\ln 2\).`],
      r: String.raw`\(1 - \frac2e + \cos(1) - e^2\ln(2)\)` },
    { id: '2021-09', src: 'September 2021', a: 7, lvl: 2,
      q: String.raw`<p>Berechnen Sie das Integral</p><div class="fbig">\[\int_{-1}^1 \left(\frac{x^2-4}{x+2} + \frac{2^{-1}}{\cos\left(\frac\pi4\right)} + \frac{x+2}{x^2-4}\right)dx.\]</div>`,
      h: [String.raw`Beide Brüche mit \(x^2 - 4 = (x-2)(x+2)\) kürzen: \(x - 2\) und \(\frac1{x-2}\).`, String.raw`\(\frac{2^{-1}}{\cos(\pi/4)} = \frac{1/2}{\sqrt2/2} = \frac{\sqrt2}2\).`],
      s: [String.raw`Integrand: \(x - 2 + \frac{\sqrt2}2 + \frac1{x-2}\).`,
        String.raw`\(\left[\frac{x^2}2 - 2x\right]_{-1}^1 = \left(\frac12 - 2\right) - \left(\frac12 + 2\right) = -4\).`,
        String.raw`\(\frac{\sqrt2}2\cdot2 = \sqrt2\).`,
        String.raw`\(\left[\ln|x-2|\right]_{-1}^1 = \ln 1 - \ln 3 = -\ln 3\).`],
      r: String.raw`\(-4 + \sqrt2 - \ln(3)\)` },
    { id: '2022-07', src: 'Juli 2022', a: 7, lvl: 2,
      q: String.raw`<p>Berechnen Sie das Integral</p><div class="fbig">\[\int_{-2}^{-1} e^3 + \frac{4 - 2x}{\frac1x - \frac12}\,dx.\]</div>`,
      h: [String.raw`\(\frac1x - \frac12 = \frac{2-x}{2x}\).`, String.raw`\(\frac{4-2x}{\frac{2-x}{2x}} = 2(2-x)\cdot\frac{2x}{2-x} = 4x\).`],
      s: [String.raw`Integrand \(e^3 + 4x\).`,
        String.raw`\(\left[e^3x + 2x^2\right]_{-2}^{-1} = (-e^3 + 2) - (-2e^3 + 8) = e^3 - 6\).`],
      r: String.raw`\(e^3 - 6\)` },
    { id: '2020-07', src: 'Juli 2020', a: 4, lvl: 3,
      q: String.raw`<p>Berechnen Sie das Integral</p><div class="fbig">\[\int_2^4 \sqrt{(x-3)^2} + \frac{2x^{-3} + 1}{2x^{-1}}\,dx.\]</div>`,
      h: [String.raw`\(\sqrt{(x-3)^2} = |x-3|\). An der Knickstelle 3 aufteilen.`, String.raw`\(\frac{2x^{-3}+1}{2x^{-1}} = \left(\frac2{x^3} + 1\right)\cdot\frac x2 = \frac1{x^2} + \frac x2\).`],
      s: [String.raw`\(\int_2^4 |x-3|\,dx = \int_2^3 (3-x)\,dx + \int_3^4 (x-3)\,dx = \frac12 + \frac12 = 1\).`,
        String.raw`\(\int_2^4 x^{-2}\,dx = \left[-\frac1x\right]_2^4 = -\frac14 + \frac12 = \frac14\).`,
        String.raw`\(\int_2^4 \frac x2\,dx = \left[\frac{x^2}4\right]_2^4 = 4 - 1 = 3\).`],
      r: String.raw`\(\frac{17}4\)` },
    { id: '2023-12', src: 'Dezember 2023', a: 6, lvl: 3,
      q: String.raw`<p>Berechnen Sie</p><div class="fbig">\[\int_1^2 \left(\frac{2x}{x^{-1} + 4x^{-2}}\right)^{-1} + 3\,dx.\]</div>`,
      h: [String.raw`Hoch \(-1\) ist der Kehrwert: \(\frac{x^{-1} + 4x^{-2}}{2x}\).`, String.raw`Durch \(2x\) teilen: \(\frac1{2x^2} + \frac2{x^3}\).`],
      s: [String.raw`Integrand: \(\frac12x^{-2} + 2x^{-3} + 3\).`,
        String.raw`\(\left[-\frac1{2x}\right]_1^2 = -\frac14 + \frac12 = \frac14\).`,
        String.raw`\(\left[-\frac1{x^2}\right]_1^2 = -\frac14 + 1 = \frac34\).`,
        String.raw`\(3\cdot1 = 3\).`],
      r: String.raw`\(4\)` },
    { id: '2020-10', src: 'Oktober 2020', a: 4, lvl: 3,
      q: String.raw`<p>Für welches \(k \in \mathbb R\) gilt</p><div class="fbig">\[\int_{-1}^0 \frac{x+2}{x^2 + 4x + 4} + kx\,dx = \ln(2) - 1\ ?\]</div>`,
      h: [String.raw`\(x^2 + 4x + 4 = (x+2)^2\), also \(\frac{x+2}{(x+2)^2} = \frac1{x+2}\).`, String.raw`\(\int_{-1}^0 \frac1{x+2}\,dx = \ln 2 - \ln 1\) und \(\int_{-1}^0 kx\,dx = -\frac k2\).`],
      s: [String.raw`\(\left[\ln|x+2|\right]_{-1}^0 = \ln 2\).`,
        String.raw`\(k\left[\frac{x^2}2\right]_{-1}^0 = k\left(0 - \frac12\right) = -\frac k2\).`,
        String.raw`\(\ln 2 - \frac k2 = \ln 2 - 1 \iff k = 2\).`],
      r: String.raw`\(k = 2\)` },
    { id: '2024-11', src: 'November 2024', a: 7, lvl: 3,
      q: String.raw`<p>Bestimmen Sie eine reelle Zahl \(c\) mit \(c \lt 2\), die</p><div class="fbig">\[\int_c^2 \frac{x^2-4}{x-2} + c\,dx = -\frac{15}2\]</div><p>erfüllt.</p>`,
      h: [String.raw`\(\frac{x^2-4}{x-2} = x + 2\). \(c\) steht im Integranden und in der Grenze.`, String.raw`Stammfunktion \(\frac{x^2}2 + (2+c)x\). Nach dem Einsetzen bleibt \(6 - \frac32c^2\).`],
      s: [String.raw`\(\left[\frac{x^2}2 + (2+c)x\right]_c^2\).`,
        String.raw`Oben: \(2 + 2(2+c) = 6 + 2c\). Unten: \(\frac{c^2}2 + (2+c)c = \frac32c^2 + 2c\).`,
        String.raw`Differenz: \(6 - \frac32c^2 = -\frac{15}2 \iff c^2 = 9 \iff c = \pm3\).`,
        String.raw`Nur \(c = -3\) erfüllt \(c \lt 2\).`],
      r: String.raw`\(c = -3\)` },
  ],
};
