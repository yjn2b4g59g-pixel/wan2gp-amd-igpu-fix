MODS[5] = {
  short: 'Trigonometrie', pos: 'meist Aufgabe 5',
  title: 'Trigonometrische Gleichungen',
  intro: String.raw`<p>Aufgabe 5 sind Gleichungen mit \(\sin\) und \(\cos\), meist zwei kleine Teile (a) und (b). Einer davon hat oft gar keine Lösung, weil rechts etwas wie \(2\pi\) oder \(e^9\) steht.</p>
  <p>Punkte kosten zwei Dinge: die vergessene zweite Lösung pro Umdrehung und das fehlende \(+2k\pi\). Die Tabelle auf dem Deckblatt hilft dir, den Rest leitest du am Einheitskreis ab (siehe Modul 1).</p>`,
  theory: String.raw`<div class="grid2">
    <div class="card"><h3>Warum es unendlich viele Lösungen gibt</h3>
      <p>Sinus und Kosinus wiederholen sich alle \(2\pi\). Jede Lösung \(u\) bringt also \(u + 2\pi\), \(u + 4\pi\), \(u - 2\pi\), … mit. Man schreibt \(u + 2k\pi\), \(k \in \mathbb Z\).</p>
      <p style="margin:0">Beim Tangens ist die Periode \(\pi\): \(u + k\pi\).</p></div>
    <div class="card"><h3>Zwei Lösungen pro Umdrehung</h3>
      <ul><li>\(\sin u = a\): \(u_1 = \alpha\) und \(u_2 = \pi - \alpha\)</li>
        <li>\(\cos u = a\): \(u = \alpha\) und \(u = -\alpha\), kurz \(\pm\alpha\)</li>
        <li>jeweils \(+2k\pi\)</li></ul>
      <p style="margin:.5em 0 0">Am Einheitskreis: Ein bestimmter \(y\)-Wert (Sinus) wird an zwei Stellen erreicht, gespiegelt an der \(y\)-Achse. Ein bestimmter \(x\)-Wert (Kosinus) an zwei Stellen, gespiegelt an der \(x\)-Achse.</p></div>
    <div class="card wide"><h3>Die Standardfälle</h3>
      <div class="tscroll"><table class="tbl">
        <tr><th>\(a\)</th><th>\(\sin u = a\)</th><th>\(\cos u = a\)</th></tr>
        <tr><td>\(1\)</td><td>\(\frac\pi2\)</td><td>\(0\)</td></tr>
        <tr><td>\(\frac{\sqrt3}2\)</td><td>\(\frac\pi3,\ \frac{2\pi}3\)</td><td>\(\pm\frac\pi6\)</td></tr>
        <tr><td>\(\frac{\sqrt2}2\)</td><td>\(\frac\pi4,\ \frac{3\pi}4\)</td><td>\(\pm\frac\pi4\)</td></tr>
        <tr><td>\(\frac12\)</td><td>\(\frac\pi6,\ \frac{5\pi}6\)</td><td>\(\pm\frac\pi3\)</td></tr>
        <tr><td>\(0\)</td><td>\(k\pi\)</td><td>\(\frac\pi2 + k\pi\)</td></tr>
        <tr><td>\(-\frac12\)</td><td>\(-\frac\pi6,\ \frac{7\pi}6\)</td><td>\(\pm\frac{2\pi}3\)</td></tr>
        <tr><td>\(-\frac{\sqrt2}2\)</td><td>\(-\frac\pi4,\ \frac{5\pi}4\)</td><td>\(\pm\frac{3\pi}4\)</td></tr>
        <tr><td>\(-\frac{\sqrt3}2\)</td><td>\(-\frac\pi3,\ \frac{4\pi}3\)</td><td>\(\pm\frac{5\pi}6\)</td></tr>
        <tr><td>\(-1\)</td><td>\(-\frac\pi2\)</td><td>\(\pi\)</td></tr>
      </table></div>
      <p style="margin:0">Überall \(+2k\pi\) dazu, außer in der Zeile \(a = 0\), dort steht die Periode schon drin. Herleiten statt auswendig lernen: Bei negativem \(a\) für den Sinus \(-\alpha\) und \(\pi + \alpha\), für den Kosinus \(\pm(\pi - \alpha)\).</p></div>
    <div class="card"><h3>Keine Lösung</h3>
      <p>\(\sin\) und \(\cos\) liegen immer zwischen \(-1\) und \(1\). Steht rechts etwas außerhalb, ist \(L = \emptyset\).</p>
      <p style="margin:0">Typisch in der Klausur: \(2\pi \approx 6{,}3\), \(\ e^9\), \(\ -\pi\), \(\ \frac{2\pi}3 \approx 2{,}1\), \(\ -\sqrt2\), \(\ \frac1{\pi^{-1}} = \pi\).</p></div>
    <div class="card"><h3>Innen steht mehr als \(x\)</h3>
      <p>Bei \(\cos(2x-1) = -\frac12\) setzt du \(u = 2x - 1\), löst nach \(u\), dann nach \(x\).</p>
      <p style="margin:0"><span class="falle">Falle</span>Die Periode wird mitgeteilt: \(2x - 1 = \pm\frac{2\pi}3 + 2k\pi \iff x = \frac12 \pm \frac\pi3 + k\pi\).</p></div>
    <div class="card"><h3>Umformungen, die drankamen</h3>
      <ul><li>Produkt \(= 0\): jeden Faktor einzeln</li>
        <li>\(\tan u \cdot \cos u = \sin u\) (mit \(\cos u \ne 0\))</li>
        <li>\(\sin^2 u + \cos^2 u = 1\)</li>
        <li>\(\left(\frac1c + 1\right)^{-1} = \frac c{1+c}\) mit \(c = \cos(\dots)\)</li></ul></div>
    <div class="card"><h3>Definitionsbereich mit Winkelfunktion</h3>
      <ul><li>\(\frac1{\sin u}\): \(\sin u \ne 0 \iff u \ne k\pi\)</li>
        <li>\(\frac1{\cos u}\), \(\tan u\): \(\cos u \ne 0 \iff u \ne \frac\pi2 + k\pi\)</li>
        <li>\(\frac1{\cos u - 1}\): \(\cos u \ne 1 \iff u \ne 2k\pi\)</li></ul></div>
  </div>`,
  recipe: [
    ['Rechte Seite ausrechnen', String.raw`Konstanten auswerten, bis \(\sin(\dots) = a\) oder \(\cos(\dots) = a\) dasteht.`],
    ['Betrag prüfen', String.raw`Ist \(|a| \gt 1\), dann \(L = \emptyset\). Fertig.`],
    ['Grundwinkel', String.raw`Mit \(u\) = Inhalt der Klammer: Winkel aus der Tabelle oder vom Einheitskreis.`],
    ['Beide Lösungen', String.raw`Sinus: \(\alpha\) und \(\pi - \alpha\). Kosinus: \(\pm\alpha\). Jeweils \(+2k\pi\).`],
    ['Nach x auflösen', String.raw`Rückwärts rechnen, die Periode mitteilen oder mitmultiplizieren.`],
    ['Aufschreiben', String.raw`\(k \in \mathbb Z\) dazuschreiben. Bei \(D\)-Fragen die verbotenen Stellen als Menge angeben.`],
  ],
  worked: [
    { src: 'November 2022', a: 5, tag: 'Standard',
      q: String.raw`<p class="qt">Bestimmen Sie die Lösung(en) von</p><div class="fbig">\[\cos(2x-1) = \sin\left(-\frac\pi6\right).\]</div>`,
      s: [
        [String.raw`\(\sin\left(-\frac\pi6\right) = -\sin\frac\pi6 = -\frac12\).`, String.raw`Minus im Sinus kommt nach vorne.`],
        [String.raw`Mit \(u = 2x - 1\): \(\cos u = -\frac12 \iff u = \pm\frac{2\pi}3 + 2k\pi\).`, String.raw`\(\cos\frac\pi3 = \frac12\). Für \(-\frac12\) spiegelt man auf die linke Kreishälfte: \(\pi - \frac\pi3 = \frac{2\pi}3\). Kosinus ist symmetrisch, also \(\pm\).`],
        [String.raw`\(2x - 1 = \pm\frac{2\pi}3 + 2k\pi \iff 2x = 1 \pm \frac{2\pi}3 + 2k\pi \iff x = \frac12 \pm \frac\pi3 + k\pi\).`, String.raw`Beim Teilen durch 2 wird auch aus \(2k\pi\) ein \(k\pi\).`],
      ],
      r: String.raw`\(x = \frac12 + \frac\pi3 + k\pi\) oder \(x = \frac12 - \frac\pi3 + k\pi\), \(k \in \mathbb Z\)` },
    { src: 'September 2024', a: 5, tag: 'Produkt',
      q: String.raw`<p class="qt">Welche \(x \in \mathbb R\) lösen die folgende Gleichung?</p><div class="fbig">\[\sin(x)\cdot\left(\frac{\sqrt3}2 + \cos\left(\frac x6\right)\right) = 0\]</div>`,
      s: [
        [String.raw`Produkt ist 0: \(\sin x = 0\) oder \(\cos\frac x6 = -\frac{\sqrt3}2\).`, ''],
        [String.raw`\(\sin x = 0 \iff x = k\pi\).`, ''],
        [String.raw`\(\cos\frac x6 = -\frac{\sqrt3}2 \iff \frac x6 = \pm\frac{5\pi}6 + 2k\pi \iff x = \pm5\pi + 12k\pi\).`, String.raw`Hier wird mit 6 multipliziert, auch die Periode: \(2k\pi\cdot6 = 12k\pi\).`],
        [String.raw`\(\pm5\pi + 12k\pi = (12k \pm 5)\pi\) sind Vielfache von \(\pi\), also schon in \(k\pi\) enthalten.`, 'Zweimal hinschreiben ist nicht falsch, aber das Zusammenfassen zeigt, dass du es verstanden hast.'],
      ],
      r: String.raw`\(L = \{k\pi : k \in \mathbb Z\}\)` },
  ],
  ex: [
    { id: '2023-12', src: 'Dezember 2023', a: 5, lvl: 1,
      q: String.raw`<p>(a) Bestimmen Sie die Lösung(en) von \(\displaystyle \cos(-2x+3) = -\frac{\cos(6\pi)}2\).</p><p>(b) Bestimmen Sie die Lösung(en) von \(\displaystyle \sin(2x) = \frac{2\pi}3\).</p>`,
      h: [String.raw`\(\cos(6\pi) = 1\), rechts steht also \(-\frac12\).`, String.raw`(b) Wie groß ist \(\frac{2\pi}3\) ungefähr? Kann ein Sinus das?`],
      s: [String.raw`(a) \(-2x + 3 = \pm\frac{2\pi}3 + 2k\pi\).`,
        String.raw`\(-2x = -3 \pm \frac{2\pi}3 + 2k\pi \iff x = \frac32 \mp \frac\pi3 - k\pi\). Weil \(k\) alle ganzen Zahlen durchläuft: \(x = \frac32 \pm \frac\pi3 + k\pi\).`,
        String.raw`(b) \(\frac{2\pi}3 \approx 2{,}09 \gt 1\): \(L = \emptyset\).`],
      r: String.raw`(a) \(x = \frac32 \pm \frac\pi3 + k\pi\), \(k \in \mathbb Z\) &nbsp; (b) \(L = \emptyset\)` },
    { id: '2020-10', src: 'Oktober 2020', a: 6, lvl: 1,
      q: String.raw`<p>Bestimmen Sie die Lösungen der Gleichungen</p><p>(a) \(\displaystyle \frac12\sin(x+3) = -\frac{2^{-3}}{2^{-2} + 2^{-2}}\) &nbsp; (b) \(\cos(x+7) = e^9\)</p>`,
      h: [String.raw`Rechts: \(2^{-3} = \frac18\), \(2^{-2} + 2^{-2} = \frac12\), also \(-\frac{1/8}{1/2} = -\frac14\).`, String.raw`\(\sin u = -\frac12\): Grundwinkel \(\frac\pi6\), Lösungen \(-\frac\pi6\) und \(\frac{7\pi}6\).`],
      s: [String.raw`(a) \(\frac12\sin(x+3) = -\frac14 \iff \sin(x+3) = -\frac12\).`,
        String.raw`\(x + 3 = -\frac\pi6 + 2k\pi\) oder \(x + 3 = \frac{7\pi}6 + 2k\pi\).`,
        String.raw`\(x = -\frac\pi6 - 3 + 2k\pi\) oder \(x = \frac{7\pi}6 - 3 + 2k\pi\).`,
        String.raw`(b) \(e^9 \gt 1\): \(L = \emptyset\).`],
      r: String.raw`(a) \(x = -\frac\pi6 - 3 + 2k\pi\) oder \(x = \frac{7\pi}6 - 3 + 2k\pi\) &nbsp; (b) \(L = \emptyset\)` },
    { id: '2024-11', src: 'November 2024', a: 5, lvl: 1,
      q: String.raw`<p>Lösen Sie die Gleichungen</p><p>(a) \(\displaystyle \frac1{\sqrt2}\cos(5x+3) = \cos(-3\pi)\) &nbsp; (b) \(\displaystyle \sqrt2\cdot\sin\left(\frac{x-5}4\right) = -1\)</p>`,
      h: [String.raw`\(\cos(-3\pi) = \cos(3\pi) = \cos\pi = -1\).`, String.raw`(b) \(\sin u = -\frac1{\sqrt2} = -\frac{\sqrt2}2\) mit \(u = \frac{x-5}4\). Am Ende mal 4, auch die Periode.`],
      s: [String.raw`(a) \(\cos(5x+3) = -\sqrt2 \approx -1{,}41\): \(L = \emptyset\).`,
        String.raw`(b) \(\sin\frac{x-5}4 = -\frac{\sqrt2}2 \iff \frac{x-5}4 = -\frac\pi4 + 2k\pi\) oder \(\frac{5\pi}4 + 2k\pi\).`,
        String.raw`\(x - 5 = -\pi + 8k\pi\) oder \(5\pi + 8k\pi\).`],
      r: String.raw`(a) \(L = \emptyset\) &nbsp; (b) \(x = 5 - \pi + 8k\pi\) oder \(x = 5 + 5\pi + 8k\pi\)` },
    { id: '2023-02', src: 'Februar 2023', a: 5, lvl: 1,
      q: String.raw`<p>Bestimmen Sie die Lösung(en) von</p><p>(a) \(\displaystyle 2^{-1}\cdot\sin(-3x+9) - \cos\left(\frac{10\pi}3\right) = 0\) &nbsp; (b) \(\cos(3x-4) = 2\pi\)</p>`,
      h: [String.raw`\(\frac{10\pi}3 - 2\pi = \frac{4\pi}3\), und \(\cos\frac{4\pi}3 = -\frac12\).`, String.raw`Dann steht \(\sin(-3x+9) = -1\) da. Wo ist der Sinus \(-1\)?`],
      s: [String.raw`(a) \(\frac12\sin(-3x+9) + \frac12 = 0 \iff \sin(-3x+9) = -1\).`,
        String.raw`\(-3x + 9 = -\frac\pi2 + 2k\pi \iff -3x = -9 - \frac\pi2 + 2k\pi \iff x = 3 + \frac\pi6 - \frac{2k\pi}3\).`,
        String.raw`\(k\) durchläuft \(\mathbb Z\), also \(x = 3 + \frac\pi6 + \frac{2k\pi}3\).`,
        String.raw`(b) \(2\pi \gt 1\): \(L = \emptyset\).`],
      r: String.raw`(a) \(x = 3 + \frac\pi6 + \frac{2k\pi}3\), \(k \in \mathbb Z\) &nbsp; (b) \(L = \emptyset\)` },
    { id: '2020-11', src: 'November 2020', a: 2, lvl: 1,
      q: String.raw`<p>Bestimmen Sie die Lösungen der Gleichungen</p><p>(a) \(\displaystyle \sin(2x+1) = -\frac{\sqrt3}2\) &nbsp; (b) \(\cos(x)\cdot\sin(x-1) = 0\)</p>`,
      h: [String.raw`(a) \(\sin u = -\frac{\sqrt3}2\): \(u = -\frac\pi3\) und \(u = \frac{4\pi}3\).`, '(b) Ein Produkt ist 0, wenn ein Faktor 0 ist.'],
      s: [String.raw`(a) \(2x + 1 = -\frac\pi3 + 2k\pi\) oder \(2x + 1 = \frac{4\pi}3 + 2k\pi\).`,
        String.raw`\(x = -\frac12 - \frac\pi6 + k\pi\) oder \(x = -\frac12 + \frac{2\pi}3 + k\pi\).`,
        String.raw`(b) \(\cos x = 0 \iff x = \frac\pi2 + k\pi\). \(\ \sin(x-1) = 0 \iff x = 1 + k\pi\).`],
      r: String.raw`(a) \(x = -\frac12 - \frac\pi6 + k\pi\) oder \(x = -\frac12 + \frac{2\pi}3 + k\pi\) &nbsp; (b) \(x = \frac\pi2 + k\pi\) oder \(x = 1 + k\pi\)` },
    { id: '2023-07', src: 'Juli 2023', a: 5, lvl: 2,
      q: String.raw`<p>(a) Bestimmen Sie die Lösung(en) von \(\displaystyle \sin(3x-1) = \cos\left(-\frac{5\pi}6\right)\).</p><p>(b) Bestimmen Sie den maximalen Definitionsbereich von \(\displaystyle f(x) = \frac{\sqrt{-x}}{\cos(4x) - 1}\).</p>`,
      h: [String.raw`\(\cos(-\frac{5\pi}6) = \cos\frac{5\pi}6 = -\frac{\sqrt3}2\).`, String.raw`(b) Nenner: \(\cos(4x) = 1 \iff 4x = 2k\pi\). Dazu die Wurzel: \(x \le 0\).`],
      s: [String.raw`(a) \(3x - 1 = -\frac\pi3 + 2k\pi\) oder \(\frac{4\pi}3 + 2k\pi\).`,
        String.raw`\(x = \frac13 - \frac\pi9 + \frac{2k\pi}3\) oder \(x = \frac13 + \frac{4\pi}9 + \frac{2k\pi}3\).`,
        String.raw`(b) \(-x \ge 0 \iff x \le 0\). \(\ \cos 4x \ne 1 \iff x \ne \frac{k\pi}2\).`,
        String.raw`Zusammen: alle \(x \lt 0\) außer \(-\frac\pi2, -\pi, -\frac{3\pi}2, \dots\) (auch \(x = 0\) fällt raus).`],
      r: String.raw`(a) \(x = \frac13 - \frac\pi9 + \frac{2k\pi}3\) oder \(x = \frac13 + \frac{4\pi}9 + \frac{2k\pi}3\) &nbsp; (b) \(D = \{x \lt 0 : x \ne -\frac{k\pi}2,\ k \in \mathbb N\}\)` },
    { id: '2021-07', src: 'Juli 2021', a: 2, lvl: 2,
      q: String.raw`<p>Bestimmen Sie die Lösung(en) der Gleichungen</p><p>(a) \(\displaystyle \cos\left(\frac{2x-1}4\right) = -2^{-4}\cdot8\) &nbsp; (b) \(\displaystyle \tan(x-3)\cdot\cos(x-3) = \frac{\sqrt3}2\)</p>`,
      h: [String.raw`(a) \(-2^{-4}\cdot8 = -\frac8{16} = -\frac12\).`, String.raw`(b) \(\tan u \cdot \cos u = \frac{\sin u}{\cos u}\cos u = \sin u\), mit \(\cos u \ne 0\).`],
      s: [String.raw`(a) \(\frac{2x-1}4 = \pm\frac{2\pi}3 + 2k\pi \iff 2x - 1 = \pm\frac{8\pi}3 + 8k\pi \iff x = \frac12 \pm \frac{4\pi}3 + 4k\pi\).`,
        String.raw`(b) \(\sin(x-3) = \frac{\sqrt3}2\), dort ist \(\cos(x-3) = \pm\frac12 \ne 0\) ✓`,
        String.raw`\(x - 3 = \frac\pi3 + 2k\pi\) oder \(\frac{2\pi}3 + 2k\pi\).`],
      r: String.raw`(a) \(x = \frac12 \pm \frac{4\pi}3 + 4k\pi\) &nbsp; (b) \(x = 3 + \frac\pi3 + 2k\pi\) oder \(x = 3 + \frac{2\pi}3 + 2k\pi\)` },
    { id: '2021-09', src: 'September 2021', a: 3, lvl: 2,
      q: String.raw`<p>Bestimmen Sie die Nullstellenmenge der Funktion</p><div class="fbig">\[f(x) = \left(\cos\left(x + \frac13\right) - \frac12\right)\cdot\left(\sin(3x+1) - \frac12\right).\]</div>`,
      h: [String.raw`Produkt: entweder \(\cos(x + \frac13) = \frac12\) oder \(\sin(3x+1) = \frac12\).`, String.raw`Beim zweiten Teil am Ende durch 3 teilen, auch die Periode: \(\frac{2k\pi}3\).`],
      s: [String.raw`\(\cos\left(x + \frac13\right) = \frac12 \iff x + \frac13 = \pm\frac\pi3 + 2k\pi \iff x = -\frac13 \pm \frac\pi3 + 2k\pi\).`,
        String.raw`\(\sin(3x+1) = \frac12 \iff 3x + 1 = \frac\pi6 + 2k\pi\) oder \(\frac{5\pi}6 + 2k\pi\).`,
        String.raw`\(x = -\frac13 + \frac\pi{18} + \frac{2k\pi}3\) oder \(x = -\frac13 + \frac{5\pi}{18} + \frac{2k\pi}3\).`],
      r: String.raw`\(x = -\frac13 \pm \frac\pi3 + 2k\pi\), \(\ x = -\frac13 + \frac\pi{18} + \frac{2k\pi}3\), \(\ x = -\frac13 + \frac{5\pi}{18} + \frac{2k\pi}3\)` },
    { id: '2020-07', src: 'Juli 2020', a: 6, lvl: 2,
      q: String.raw`<p>Bestimmen Sie die Lösungen der Gleichungen</p><p>(a) \(\displaystyle \cos\left(x^2\right) = \sin\left(\frac\pi6\right)\) &nbsp; (b) \(\sin\left(x^7 - 3\right) = -\pi\)</p>`,
      h: [String.raw`(a) \(\sin\frac\pi6 = \frac12\). Mit \(u = x^2\): \(u = \pm\frac\pi3 + 2k\pi\).`, String.raw`Aber \(u = x^2\) darf nicht negativ sein. Welche \(k\) bleiben?`],
      s: [String.raw`(a) \(x^2 = \frac\pi3 + 2k\pi\) oder \(x^2 = -\frac\pi3 + 2k\pi\).`,
        String.raw`\(x^2 \ge 0\): erste Familie für \(k \ge 0\), zweite für \(k \ge 1\).`,
        String.raw`\(x = \pm\sqrt{\frac\pi3 + 2k\pi}\), \(k \in \mathbb N_0\), oder \(x = \pm\sqrt{-\frac\pi3 + 2k\pi}\), \(k \in \mathbb N\).`,
        String.raw`(b) \(|-\pi| \gt 1\): \(L = \emptyset\).`],
      r: String.raw`(a) \(x = \pm\sqrt{2k\pi + \frac\pi3}\) (\(k \ge 0\)) und \(x = \pm\sqrt{2k\pi - \frac\pi3}\) (\(k \ge 1\)) &nbsp; (b) \(L = \emptyset\)` },
    { id: '2021-11', src: 'November 2021', a: 3, lvl: 3,
      q: String.raw`<p>Bestimmen Sie alle reellen Zahlen \(x\), für die die folgende Funktion <b>nicht</b> definiert ist:</p><div class="fbig">\[f(x) = \left(\big(\cos(x-3)\big)^{-1} + 1\right)^{-1} + \sqrt3.\]</div>`,
      h: [String.raw`Zweimal hoch \(-1\), also zwei Nenner: \(\cos(x-3)\) und \(\cos(x-3)^{-1} + 1\).`, String.raw`\(\frac1{\cos u} + 1 = 0 \iff \cos u = -1\).`],
      s: [String.raw`\(\cos(x-3) = 0 \iff x - 3 = \frac\pi2 + k\pi \iff x = 3 + \frac\pi2 + k\pi\).`,
        String.raw`\(\cos(x-3)^{-1} + 1 = 0 \iff \cos(x-3) = -1 \iff x = 3 + \pi + 2k\pi\).`],
      r: String.raw`nicht definiert für \(x = 3 + \frac\pi2 + k\pi\) und \(x = 3 + \pi + 2k\pi\), \(k \in \mathbb Z\)` },
    { id: '2022-02', src: 'Februar 2022', a: 3, lvl: 3,
      q: String.raw`<p>Die Funktion \(f\) ist für alle reellen Zahlen außer \(\frac\pi2 + 3 + k\pi\) und \(\pi + 3 + 2k\pi\) definiert. Bestimmen Sie die Nullstellenmenge von</p><div class="fbig">\[f(x) = \left(\big(\cos(x-3)\big)^{-1} + 1\right)^{-1} + \frac{\frac{\sqrt3}2}{1 - \frac{\sqrt3}2}.\]</div>`,
      h: [String.raw`\(\left(\frac1c + 1\right)^{-1} = \frac c{1+c}\) mit \(c = \cos(x-3)\).`, String.raw`\(\frac c{1+c} = -\frac s{1-s}\) mit \(s = \frac{\sqrt3}2\) über Kreuz multiplizieren. Es bleibt \(c = -s\).`],
      s: [String.raw`Mit \(c = \cos(x-3)\) und \(s = \frac{\sqrt3}2\): \(f = \frac c{1+c} + \frac s{1-s}\).`,
        String.raw`\(f = 0 \iff c(1-s) = -s(1+c) \iff c - cs = -s - cs \iff c = -s\).`,
        String.raw`\(\cos(x-3) = -\frac{\sqrt3}2 \iff x - 3 = \pm\frac{5\pi}6 + 2k\pi\).`,
        String.raw`Dort ist \(\cos \ne 0\) und \(\ne -1\), die Stellen liegen in \(D\) ✓`],
      r: String.raw`\(x = 3 \pm \frac{5\pi}6 + 2k\pi\), \(k \in \mathbb Z\)` },
    { id: '2022-07', src: 'Juli 2022', a: 4, lvl: 3,
      q: String.raw`<p>Bestimmen Sie den maximalen Definitionsbereich und die Nullstelle(n) von</p><div class="fbig">\[f(x) = \frac{3\big(\cos(3x)\big)^2 + \frac2{x-2}}{3\sin(3x)} + \sin(3x).\]</div>`,
      h: [String.raw`\(D\): \(x \ne 2\) und \(\sin(3x) \ne 0\).`, String.raw`Mit \(3\sin(3x)\) malnehmen: \(3\cos^2(3x) + 3\sin^2(3x) = 3\).`],
      s: [String.raw`\(\sin 3x \ne 0 \iff 3x \ne k\pi \iff x \ne \frac{k\pi}3\). \(\ D = \mathbb R \setminus \left(\{2\} \cup \{\frac{k\pi}3 : k \in \mathbb Z\}\right)\).`,
        String.raw`\(f = 0\), mal \(3\sin 3x\): \(3\cos^2(3x) + \frac2{x-2} + 3\sin^2(3x) = 0\).`,
        String.raw`\(3 + \frac2{x-2} = 0 \iff x - 2 = -\frac23 \iff x = \frac43\).`,
        String.raw`\(\frac43 = \frac{k\pi}3\) hieße \(k\pi = 4\), kein ganzes \(k\). Also \(\frac43 \in D\) ✓`],
      r: String.raw`\(D = \mathbb R\setminus\left(\{2\}\cup\{\frac{k\pi}3\}\right)\), Nullstelle \(x = \frac43\)` },
    { id: '2022-09', src: 'September 2022', a: 5, lvl: 3,
      q: String.raw`<p>Bestimmen Sie den maximalen Definitionsbereich und die Nullstelle(n) von</p><div class="fbig">\[f(x) = \frac1{\cos\left(x^{-1}\right)} - \log_3(9).\]</div>`,
      h: [String.raw`\(\log_3 9 = 2\). \(D\): \(x \ne 0\) und \(\cos\frac1x \ne 0\).`, String.raw`Nullstelle: \(\cos\frac1x = \frac12\), also \(\frac1x = \pm\frac\pi3 + 2k\pi\). Dann Kehrwert.`],
      s: [String.raw`\(\cos\frac1x \ne 0 \iff \frac1x \ne \frac\pi2 + k\pi \iff x \ne \frac2{(2k+1)\pi}\).`,
        String.raw`\(D = \mathbb R \setminus \left(\{0\} \cup \left\{\frac2{(2k+1)\pi} : k \in \mathbb Z\right\}\right)\).`,
        String.raw`\(\frac1{\cos(1/x)} = 2 \iff \cos\frac1x = \frac12 \iff \frac1x = \pm\frac\pi3 + 2k\pi = \frac{(6k\pm1)\pi}3\).`,
        String.raw`\(x = \frac3{(6k\pm1)\pi}\). Der Nenner wird nie 0.`],
      r: String.raw`Nullstellen \(x = \frac{3}{(6k+1)\pi}\) und \(x = \frac{3}{(6k-1)\pi}\), \(k \in \mathbb Z\)` },
  ],
};
