MODS[6] = {
  short: 'Ableiten', pos: 'meist Aufgabe 6',
  title: 'Ableitungen',
  intro: String.raw`<p>Aufgabe 6 ist jedes Mal eine Ableitung, meist zusammen mit dem Definitionsbereich, manchmal mit einem Parameter wie „für welches \(a\) gilt \(f'(0) = 3\)“. Die Regeln sind überschaubar: sieben Grundableitungen und drei Regeln.</p>
  <p>Punkte gehen beim Aufräumen verloren. Auf dem Deckblatt steht: keine negativen Exponenten, keine Doppelbrüche.</p>`,
  theory: String.raw`<div class="grid2">
    <div class="card"><h3>Grundableitungen</h3>
      <div class="tscroll"><table class="tbl">
        <tr><th>\(f(x)\)</th><th>\(f'(x)\)</th></tr>
        <tr><td>Zahl \(c\)</td><td>\(0\)</td></tr>
        <tr><td>\(x^n\)</td><td>\(n\,x^{n-1}\)</td></tr>
        <tr><td>\(\sqrt x\)</td><td>\(\frac1{2\sqrt x}\)</td></tr>
        <tr><td>\(\frac1x\)</td><td>\(-\frac1{x^2}\)</td></tr>
        <tr><td>\(e^x\)</td><td>\(e^x\)</td></tr>
        <tr><td>\(\ln x\)</td><td>\(\frac1x\)</td></tr>
        <tr><td>\(\sin x\)</td><td>\(\cos x\)</td></tr>
        <tr><td>\(\cos x\)</td><td>\(-\sin x\)</td></tr>
      </table></div></div>
    <div class="card"><h3>Die drei Regeln</h3>
      <ul><li><b>Produkt:</b> \((u\cdot v)' = u'v + uv'\)</li>
        <li><b>Quotient:</b> \(\left(\frac uv\right)' = \frac{u'v - uv'}{v^2}\). Merksatz: „NAZ minus ZAN durch N-Quadrat“ (Nenner mal Ableitung Zähler minus Zähler mal Ableitung Nenner).</li>
        <li><b>Kette:</b> \(\big(f(g(x))\big)' = f'(g(x))\cdot g'(x)\), äußere Ableitung mal innere Ableitung</li></ul>
      <p style="margin:.5em 0 0">Summen und konstante Faktoren gehen einfach durch: \((3f + g)' = 3f' + g'\).</p></div>
    <div class="card"><h3>Kettenregel an Klausurbeispielen</h3>
      <ul><li>\(\left(e^{6x}\right)' = 6e^{6x}\)</li>
        <li>\(\left(\sqrt{x^2+1}\right)' = \frac{2x}{2\sqrt{x^2+1}} = \frac{x}{\sqrt{x^2+1}}\)</li>
        <li>\(\left(\sin(x^2)\right)' = 2x\cos(x^2)\)</li>
        <li>\(\left(\ln(x^2)\right)' = \frac{2x}{x^2} = \frac2x\)</li>
        <li>\(\left(e^{\sqrt{3-2x}}\right)' = e^{\sqrt{3-2x}}\cdot\frac{-2}{2\sqrt{3-2x}}\)</li>
        <li>\(\left((x^{-2}-1)^{40}\right)' = 40(x^{-2}-1)^{39}\cdot(-2x^{-3})\)</li></ul></div>
    <div class="card"><h3>Zahlen erkennen</h3>
      <p>\(\sin(10)\), \(\cos(7)\), \(e^3\), \(e^{-2}\), \(\sqrt{11}\), \(\ln a\) sind nur Zahlen.</p>
      <ul><li>Addiert: Ableitung 0, sie verschwinden.</li>
        <li>Als Faktor: bleiben stehen. \(\left(e^3\sqrt{1-x}\right)' = e^3\cdot\left(\sqrt{1-x}\right)'\)</li>
        <li>\((x\ln a)' = \ln a\)</li></ul></div>
    <div class="card"><h3>Vorher vereinfachen</h3>
      <ul><li>\(\ln\left(e^{x+1}\right) = x+1\), \(\ \ln 1 = 0\)</li>
        <li>\(x^{-1}\) im Nenner wegerweitern: \(\frac{9e^{6x}}{x^{-1}+3} = \frac{9xe^{6x}}{1+3x}\)</li>
        <li>\(\ln\frac{a}{4} = \ln a - \ln 4\), dann fällt \(\ln 4\) beim Ableiten weg</li>
        <li>\(\frac{9x^2-1}{3x} = 3x - \frac1{3x}\)</li></ul></div>
    <div class="card"><h3>Nachher aufräumen</h3>
      <ul><li>Negative Exponenten als Bruch: \(2e^{-2x} = \frac2{e^{2x}}\)</li>
        <li>Doppelbrüche erweitern: \(\frac{2x^{-3}}{9 - x^{-2}}\) mit \(x^3\) erweitern ergibt \(\frac2{9x^3 - x}\)</li>
        <li>Gemeinsame Faktoren ausklammern: \(9e^{6x}(\dots)\)</li>
        <li>Definitionsbereich dazuschreiben</li></ul></div>
  </div>`,
  recipe: [
    ['Definitionsbereich', String.raw`Nenner, Wurzeln, Logarithmen. Bei Wurzeln existiert die Ableitung nur im Inneren (\(1 - x \gt 0\) statt \(\ge 0\)).`],
    ['Zahlen erkennen', String.raw`\(\sin 6\), \(e^3\), \(\ln a\) sind Konstanten.`],
    ['Vorher vereinfachen', String.raw`\(\ln(e^{\dots})\), negative Exponenten im Nenner, Logarithmus-Gesetze.`],
    ['Struktur bestimmen', 'Summe, Produkt, Quotient oder Verkettung? Von außen nach innen denken.'],
    ['Ableiten', 'Regel anwenden, jede innere Ableitung mitnehmen.'],
    ['Aufräumen', 'Keine negativen Exponenten, keine Doppelbrüche, gemeinsame Faktoren ausklammern.'],
  ],
  worked: [
    { src: 'Februar 2023', a: 4, tag: 'Produkt und Kette',
      q: String.raw`<p class="qt">Bestimmen Sie den maximalen Definitionsbereich und die Ableitung von</p><div class="fbig">\[f(x) = \sin(x^2+1)\cdot\ln(x) + \sqrt{1-x}\cdot e^3.\]</div><p class="qt">Schreiben Sie die Ableitung ohne negative Exponenten.</p>`,
      s: [
        [String.raw`\(D\): \(\ln x\) braucht \(x \gt 0\), \(\sqrt{1-x}\) braucht \(x \le 1\). Also \(D = (0, 1]\).`, ''],
        [String.raw`\(e^3\) ist eine Zahl, bleibt als Faktor stehen.`, ''],
        [String.raw`Erster Summand, Produktregel mit \(u = \sin(x^2+1)\), \(v = \ln x\): \(u' = 2x\cos(x^2+1)\), \(v' = \frac1x\).`, String.raw`\(u'\) per Kettenregel: äußere Ableitung \(\cos(\dots)\), innere \(2x\).`],
        [String.raw`\((uv)' = 2x\cos(x^2+1)\ln x + \frac{\sin(x^2+1)}x\).`, ''],
        [String.raw`Zweiter Summand: \(\left(\sqrt{1-x}\right)' = \frac1{2\sqrt{1-x}}\cdot(-1)\), also \(-\frac{e^3}{2\sqrt{1-x}}\).`, String.raw`Die innere Ableitung von \(1-x\) ist \(-1\). Wird oft vergessen.`],
        [String.raw`\(f'(x) = 2x\cos(x^2+1)\ln x + \frac{\sin(x^2+1)}x - \frac{e^3}{2\sqrt{1-x}}\) für \(0 \lt x \lt 1\).`, ''],
      ],
      r: String.raw`\(D = (0,1]\), \(\ f'(x) = 2x\cos(x^2+1)\ln x + \frac{\sin(x^2+1)}{x} - \frac{e^3}{2\sqrt{1-x}}\)` },
    { src: 'Juli 2020', a: 7, tag: 'erst vereinfachen',
      q: String.raw`<p class="qt">Bestimmen Sie die Ableitung von</p><div class="fbig">\[f(x) = \frac{9e^{6x}}{x^{-1} + 3}\]</div><p class="qt">und geben Sie den Definitionsbereich an. Keine Doppelbrüche oder negativen Exponenten im Ergebnis.</p>`,
      s: [
        [String.raw`\(D\): \(x \ne 0\) und \(x^{-1} + 3 \ne 0 \iff x \ne -\frac13\).`, ''],
        [String.raw`Vorher mit \(x\) erweitern: \(f(x) = \frac{9xe^{6x}}{1 + 3x}\).`, 'Spart den Doppelbruch in der Ableitung.'],
        [String.raw`Quotientenregel: \(u = 9xe^{6x}\), \(u' = 9e^{6x} + 54xe^{6x} = 9e^{6x}(1+6x)\). \(\ v = 1 + 3x\), \(v' = 3\).`, String.raw`\(u'\) ist selbst ein Produkt: \((9x)'\cdot e^{6x} + 9x\cdot(e^{6x})'\).`],
        [String.raw`\(f'(x) = \frac{9e^{6x}(1+6x)(1+3x) - 27xe^{6x}}{(1+3x)^2}\).`, ''],
        [String.raw`\(9e^{6x}\) ausklammern: \((1+6x)(1+3x) - 3x = 1 + 9x + 18x^2 - 3x = 18x^2 + 6x + 1\).`, ''],
      ],
      r: String.raw`\(D = \mathbb R\setminus\{-\frac13, 0\}\), \(\ f'(x) = \frac{9e^{6x}\left(18x^2 + 6x + 1\right)}{(3x+1)^2}\)` },
  ],
  ex: [
    { id: '2023-07', src: 'Juli 2023', a: 4, lvl: 1,
      q: String.raw`<p>Bestimmen Sie den maximalen Definitionsbereich und die Ableitung von</p><div class="fbig">\[f(x) = \frac1{4 - x^{-1}} + e^{2x}.\]</div>`,
      h: [String.raw`\(D\): \(x \ne 0\) und \(4 - \frac1x \ne 0 \iff x \ne \frac14\).`, String.raw`Erst erweitern: \(\frac1{4 - x^{-1}} = \frac x{4x-1}\). Dann Quotientenregel.`],
      s: [String.raw`\(D = \mathbb R\setminus\{0, \frac14\}\).`,
        String.raw`\(\left(\frac x{4x-1}\right)' = \frac{1\cdot(4x-1) - x\cdot4}{(4x-1)^2} = -\frac1{(4x-1)^2}\).`,
        String.raw`\(\left(e^{2x}\right)' = 2e^{2x}\).`],
      r: String.raw`\(f'(x) = -\frac1{(4x-1)^2} + 2e^{2x}\)` },
    { id: '2024-09', src: 'September 2024', a: 6, lvl: 1,
      q: String.raw`<p>Bestimmen Sie den maximalen Definitionsbereich und die Ableitung von</p><div class="fbig">\[f(x) = \frac{\sin(x^2)}{x^2 - 1} + \ln(x^2).\]</div>`,
      h: [String.raw`\(D\): \(x^2 - 1 \ne 0\) und \(x^2 \gt 0\).`, String.raw`Quotientenregel mit \(u = \sin(x^2)\), \(u' = 2x\cos(x^2)\). Und \((\ln x^2)' = \frac2x\).`],
      s: [String.raw`\(D = \mathbb R \setminus \{-1, 0, 1\}\).`,
        String.raw`\(v = x^2 - 1\), \(v' = 2x\). \(\ \left(\frac uv\right)' = \frac{2x\cos(x^2)(x^2-1) - 2x\sin(x^2)}{(x^2-1)^2}\).`,
        String.raw`\((\ln x^2)' = \frac{2x}{x^2} = \frac2x\).`],
      r: String.raw`\(f'(x) = \frac{2x\left[(x^2-1)\cos(x^2) - \sin(x^2)\right]}{(x^2-1)^2} + \frac2x\)` },
    { id: '2021-09', src: 'September 2021', a: 4, lvl: 1,
      q: String.raw`<p>Bestimmen Sie den Definitionsbereich und die Ableitung von</p><div class="fbig">\[g(x) = \frac{x\cdot e^2 - e^{4x}}{1 + 4x}\]</div><p>und fassen Sie so weit wie möglich zusammen.</p>`,
      h: [String.raw`\(e^2\) ist eine Zahl: \((xe^2)' = e^2\).`, 'Quotientenregel, dann den Zähler ausmultiplizieren. Einiges hebt sich weg.'],
      s: [String.raw`\(D = \mathbb R\setminus\{-\frac14\}\).`,
        String.raw`\(u' = e^2 - 4e^{4x}\), \(v' = 4\). \(\ g' = \frac{(e^2 - 4e^{4x})(1+4x) - 4(xe^2 - e^{4x})}{(1+4x)^2}\).`,
        String.raw`Zähler: \(e^2 + 4xe^2 - 4e^{4x} - 16xe^{4x} - 4xe^2 + 4e^{4x} = e^2 - 16xe^{4x}\).`],
      r: String.raw`\(g'(x) = \frac{e^2 - 16xe^{4x}}{(1+4x)^2}\)` },
    { id: '2023-12', src: 'Dezember 2023', a: 4, lvl: 1,
      q: String.raw`<p>Bestimmen Sie die Ableitung von</p><div class="fbig">\[f(x) = e^{\frac{9x^2-1}{3x} + \sin(9)}.\]</div>`,
      h: [String.raw`Kettenregel: \(f' = e^{\dots}\cdot\) innere Ableitung. \(\sin 9\) ist eine Zahl.`, String.raw`Innen aufteilen: \(\frac{9x^2-1}{3x} = 3x - \frac1{3x}\).`],
      s: [String.raw`\(D\): \(x \ne 0\).`,
        String.raw`Innere Funktion \(3x - \frac13x^{-1} + \sin 9\), Ableitung \(3 + \frac1{3x^2} = \frac{9x^2+1}{3x^2}\).`,
        String.raw`\(f'(x) = \frac{9x^2+1}{3x^2}\cdot e^{\frac{9x^2-1}{3x} + \sin 9}\).`],
      r: String.raw`\(f'(x) = \frac{9x^2+1}{3x^2}\,e^{\frac{9x^2-1}{3x} + \sin(9)}\)` },
    { id: '2024-11', src: 'November 2024', a: 6, lvl: 1,
      q: String.raw`<p>Gegeben ist \(\displaystyle f(x) = \frac{\sin(e^x)}{x^2+1} + x\cdot\ln(a)\) mit \(a \gt 0\). Für welchen Wert von \(a\) gilt \(f'(0) = 3\)?</p>`,
      h: [String.raw`\(\ln a\) ist eine Zahl, \((x\ln a)' = \ln a\).`, String.raw`Du brauchst \(f'\) nur bei \(x = 0\). Früh einsetzen: \(e^0 = 1\), und alles mit Faktor \(x\) wird 0.`],
      s: [String.raw`Quotientenregel: \(\left(\frac{\sin(e^x)}{x^2+1}\right)' = \frac{e^x\cos(e^x)(x^2+1) - 2x\sin(e^x)}{(x^2+1)^2}\).`,
        String.raw`\(f'(0) = \frac{1\cdot\cos(1)\cdot1 - 0}{1} + \ln a = \cos 1 + \ln a\).`,
        String.raw`\(\cos 1 + \ln a = 3 \iff \ln a = 3 - \cos 1 \iff a = e^{3 - \cos 1}\).`],
      r: String.raw`\(a = e^{3 - \cos(1)}\)` },
    { id: '2022-07', src: 'Juli 2022', a: 5, lvl: 2,
      q: String.raw`<p>Bestimmen Sie den maximalen Definitionsbereich und die Ableitung von</p><div class="fbig">\[f(x) = \frac{\sqrt{x^2+9} + \sqrt{11}}{x}.\]</div>`,
      h: [String.raw`\(\sqrt{11}\) ist eine Zahl. \(\left(\sqrt{x^2+9}\right)' = \frac x{\sqrt{x^2+9}}\).`, String.raw`Nach der Quotientenregel den Doppelbruch auflösen: Zähler und Nenner mit \(\sqrt{x^2+9}\) malnehmen.`],
      s: [String.raw`\(D = \mathbb R\setminus\{0\}\).`,
        String.raw`\(f'(x) = \frac{\frac{x}{\sqrt{x^2+9}}\cdot x - \left(\sqrt{x^2+9} + \sqrt{11}\right)}{x^2}\).`,
        String.raw`Mit \(\sqrt{x^2+9}\) erweitern. Zähler: \(x^2 - (x^2+9) - \sqrt{11}\sqrt{x^2+9} = -9 - \sqrt{11}\sqrt{x^2+9}\).`],
      r: String.raw`\(f'(x) = -\frac{9 + \sqrt{11}\,\sqrt{x^2+9}}{x^2\sqrt{x^2+9}}\)` },
    { id: '2022-09', src: 'September 2022', a: 4, lvl: 2,
      q: String.raw`<p>Bestimmen Sie den maximalen Definitionsbereich und die Ableitung von</p><div class="fbig">\[f(x) = e^{\sqrt{3-2x}} + \frac{e^x - \cos(7)}{x}.\]</div>`,
      h: [String.raw`\(D\): \(3 - 2x \ge 0\) und \(x \ne 0\).`, String.raw`Kettenregel doppelt: \(\left(e^{\sqrt{3-2x}}\right)' = e^{\sqrt{3-2x}}\cdot\frac{-2}{2\sqrt{3-2x}}\).`],
      s: [String.raw`\(D = (-\infty, 0) \cup \left(0, \frac32\right]\).`,
        String.raw`Erster Teil: \(-\frac{e^{\sqrt{3-2x}}}{\sqrt{3-2x}}\) (für \(x \lt \frac32\)).`,
        String.raw`Zweiter Teil: \(\frac{e^x\cdot x - (e^x - \cos 7)}{x^2} = \frac{(x-1)e^x + \cos 7}{x^2}\).`],
      r: String.raw`\(f'(x) = -\frac{e^{\sqrt{3-2x}}}{\sqrt{3-2x}} + \frac{(x-1)e^x + \cos(7)}{x^2}\)` },
    { id: '2020-10', src: 'Oktober 2020', a: 7, lvl: 2,
      q: String.raw`<p>Bestimmen Sie die Ableitung von</p><div class="fbig">\[f(x) = \frac1{e^{-2x} + 1} - \sqrt{x^2+1}.\]</div><p>Keine Doppelbrüche und keine negativen Exponenten im Ergebnis.</p>`,
      h: [String.raw`\(\left(\frac1v\right)' = -\frac{v'}{v^2}\) mit \(v = e^{-2x} + 1\), \(v' = -2e^{-2x}\).`, String.raw`Negativen Exponenten loswerden: Zähler und Nenner mit \(e^{4x}\) malnehmen.`],
      s: [String.raw`\(D = \mathbb R\).`,
        String.raw`\(\left(\frac1{e^{-2x}+1}\right)' = \frac{2e^{-2x}}{(e^{-2x}+1)^2}\).`,
        String.raw`Mal \(\frac{e^{4x}}{e^{4x}}\): Zähler \(2e^{2x}\), Nenner \(\left((e^{-2x}+1)e^{2x}\right)^2 = (1 + e^{2x})^2\).`,
        String.raw`\(\left(\sqrt{x^2+1}\right)' = \frac x{\sqrt{x^2+1}}\).`],
      r: String.raw`\(f'(x) = \frac{2e^{2x}}{(e^{2x}+1)^2} - \frac{x}{\sqrt{x^2+1}}\)` },
    { id: '2022-02', src: 'Februar 2022', a: 5, lvl: 2,
      q: String.raw`<p>Bestimmen Sie die Ableitung von \(f: \mathbb R\setminus\{1\} \to \mathbb R\) mit</p><div class="fbig">\[f(x) = \frac{e^{2x}}{x-1} - \ln\left(e^{x+1}\right)\cdot2\cdot\left(e^{4x} + \ln(1)\right).\]</div>`,
      h: [String.raw`Erst vereinfachen: \(\ln(e^{x+1}) = x + 1\), \(\ln 1 = 0\).`, String.raw`Also \(f(x) = \frac{e^{2x}}{x-1} - 2(x+1)e^{4x}\). Quotienten- und Produktregel.`],
      s: [String.raw`\(f(x) = \frac{e^{2x}}{x-1} - 2(x+1)e^{4x}\).`,
        String.raw`\(\left(\frac{e^{2x}}{x-1}\right)' = \frac{2e^{2x}(x-1) - e^{2x}}{(x-1)^2} = \frac{e^{2x}(2x-3)}{(x-1)^2}\).`,
        String.raw`\(\left(2(x+1)e^{4x}\right)' = 2e^{4x} + 8(x+1)e^{4x} = 2e^{4x}(4x+5)\).`],
      r: String.raw`\(f'(x) = \frac{e^{2x}(2x-3)}{(x-1)^2} - 2(4x+5)e^{4x}\)` },
    { id: '2021-11', src: 'November 2021', a: 4, lvl: 2,
      q: String.raw`<p>Bestimmen Sie den maximalen Definitionsbereich und die Ableitung von</p><div class="fbig">\[g(x) = \frac{\sqrt{-x^2+1}\cdot4\cos(7)}{x}\]</div><p>und fassen Sie so weit wie möglich zusammen.</p>`,
      h: [String.raw`\(4\cos 7\) ist ein konstanter Faktor, er bleibt stehen.`, String.raw`Quotientenregel für \(\frac{\sqrt{1-x^2}}x\), dann mit \(\sqrt{1-x^2}\) erweitern.`],
      s: [String.raw`\(D\): \(1 - x^2 \ge 0\), \(x \ne 0\). \(\ D = [-1, 0) \cup (0, 1]\).`,
        String.raw`\(\left(\sqrt{1-x^2}\right)' = -\frac x{\sqrt{1-x^2}}\).`,
        String.raw`\(\left(\frac{\sqrt{1-x^2}}x\right)' = \frac{-\frac{x^2}{\sqrt{1-x^2}} - \sqrt{1-x^2}}{x^2} = \frac{-x^2 - (1-x^2)}{x^2\sqrt{1-x^2}} = -\frac1{x^2\sqrt{1-x^2}}\).`],
      r: String.raw`\(g'(x) = -\frac{4\cos(7)}{x^2\sqrt{1-x^2}}\) für \(x \in (-1,0)\cup(0,1)\)` },
    { id: '2020-11', src: 'November 2020', a: 6, lvl: 3,
      q: String.raw`<p>Bestimmen Sie den Definitionsbereich und die Ableitung von</p><div class="fbig">\[f(x) = e^{-2}\cdot\ln\left(\frac{9 - x^{-2}}4\right).\]</div><p>Keine Doppelbrüche und keine negativen Exponenten im Ergebnis.</p>`,
      h: [String.raw`\(D\): \(\frac{9 - x^{-2}}4 \gt 0 \iff 9 \gt \frac1{x^2} \iff |x| \gt \frac13\).`, String.raw`\(\ln\frac{9-x^{-2}}4 = \ln(9 - x^{-2}) - \ln 4\). Kettenregel, innere Ableitung \(2x^{-3}\).`],
      s: [String.raw`\(D = \left(-\infty, -\frac13\right) \cup \left(\frac13, \infty\right)\).`,
        String.raw`\(f'(x) = e^{-2}\cdot\frac{2x^{-3}}{9 - x^{-2}}\).`,
        String.raw`Mit \(x^3\) erweitern: \(\frac{2}{9x^3 - x}\). Und \(e^{-2} = \frac1{e^2}\).`],
      r: String.raw`\(f'(x) = \frac{2}{e^2\,(9x^3 - x)}\)` },
    { id: '2021-07', src: 'Juli 2021', a: 6, lvl: 3,
      q: String.raw`<p>Bestimmen Sie die Ableitung von</p><div class="fbig">\[f(x) = \frac{xe^{-2} + e^{-2}}{x + e^{-2}} + xe^{-2x}.\]</div><p>Keine Doppelbrüche und keine negativen Exponenten im Ergebnis.</p>`,
      h: [String.raw`Erster Bruch: \(e^{-2}\) ausklammern, \(\frac{e^{-2}(x+1)}{x + e^{-2}}\). Quotientenregel.`, String.raw`Aufräumen: Zähler und Nenner mit \(e^4\) malnehmen, \((x + e^{-2})^2e^4 = (e^2x + 1)^2\).`],
      s: [String.raw`\(D\): \(x \ne -e^{-2}\).`,
        String.raw`\(\left(\frac{e^{-2}(x+1)}{x+e^{-2}}\right)' = e^{-2}\cdot\frac{(x + e^{-2}) - (x+1)}{(x+e^{-2})^2} = \frac{e^{-2}(e^{-2} - 1)}{(x + e^{-2})^2}\).`,
        String.raw`Mit \(e^4\) erweitern: \(\frac{1 - e^2}{(e^2x + 1)^2}\).`,
        String.raw`\(\left(xe^{-2x}\right)' = e^{-2x} - 2xe^{-2x} = \frac{1 - 2x}{e^{2x}}\).`],
      r: String.raw`\(f'(x) = \frac{1 - e^2}{(e^2x + 1)^2} + \frac{1 - 2x}{e^{2x}}\)` },
    { id: '2022-11', src: 'November 2022', a: 4, lvl: 3,
      q: String.raw`<p>Bestimmen Sie den maximalen Definitionsbereich und die Ableitung von</p><div class="fbig">\[f(x) = \left(e^{3x} + \sin(6)\right)\cdot\left(x^{-2} - 1\right)^{40}.\]</div><p>Schreiben Sie die Ableitung ohne negative Exponenten.</p>`,
      h: [String.raw`Produktregel. Für \((x^{-2}-1)^{40}\) Kettenregel: \(40(x^{-2}-1)^{39}\cdot(-2x^{-3})\).`, String.raw`Zum Schluss \(x^{-2} - 1 = \frac{1-x^2}{x^2}\) einsetzen und \(\frac{(1-x^2)^{39}}{x^{81}}\) ausklammern.`],
      s: [String.raw`\(D = \mathbb R\setminus\{0\}\).`,
        String.raw`\(f' = 3e^{3x}(x^{-2}-1)^{40} + \left(e^{3x} + \sin 6\right)\cdot40(x^{-2}-1)^{39}\cdot(-2x^{-3})\).`,
        String.raw`\((x^{-2}-1)^{40} = \frac{(1-x^2)^{40}}{x^{80}}\) und \((x^{-2}-1)^{39}x^{-3} = \frac{(1-x^2)^{39}}{x^{81}}\).`,
        String.raw`\(f' = \frac{3e^{3x}(1-x^2)^{40}}{x^{80}} - \frac{80\left(e^{3x} + \sin 6\right)(1-x^2)^{39}}{x^{81}}\).`],
      r: String.raw`\(f'(x) = \frac{(1-x^2)^{39}}{x^{81}}\left[3xe^{3x}(1-x^2) - 80\left(e^{3x} + \sin(6)\right)\right]\)` },
  ],
};
