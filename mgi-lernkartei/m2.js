MODS[2] = {
  short: 'Betrag', pos: 'meist Aufgabe 2',
  title: 'Betragsgleichungen, Wurzelgleichungen, Ungleichungen',
  intro: String.raw`<p>Aufgabe 2 ist fast immer eine Gleichung mit Beträgen, manchmal mit Bruch, Wurzel oder Parameter. Das Werkzeug ist jedes Mal dasselbe: die Fallunterscheidung. Sie ist Fleißarbeit, aber kein Hexenwerk.</p>
  <p>Punkte gehen an zwei Stellen verloren: wenn eine Lösung nicht gegen ihren Bereich geprüft wird, und wenn nach dem Quadrieren die Probe fehlt.</p>`,
  theory: String.raw`<div class="grid2">
    <div class="card"><h3>Was der Betrag macht</h3>
      <p>\(|a|\) ist der Abstand von \(a\) zur Null, also nie negativ.</p>
      <ul><li>\(|a| = a\), wenn \(a \ge 0\)</li><li>\(|a| = -a\), wenn \(a \lt 0\)</li></ul>
      <p style="margin-top:.6em">Beispiel: \(|x-2| = x-2\) für \(x \ge 2\), aber \(|x-2| = -(x-2) = 2-x\) für \(x \lt 2\).</p>
      <p style="margin:0">Aus Modul 1: \(|-x-3| = |x+3|\) und \(|2x-6| = 2\,|x-3|\).</p></div>
    <div class="card"><h3>Der schnelle Fall: \(|A| = c\)</h3>
      <ul><li>\(c \lt 0\): keine Lösung, ein Betrag ist nie negativ</li>
        <li>\(c = 0\): \(A = 0\)</li>
        <li>\(c \gt 0\): \(A = c\) oder \(A = -c\)</li></ul>
      <p style="margin:.6em 0 0">Beispiel: \(|x-2| = 3 \iff x-2 = 3\) oder \(x-2 = -3\), also \(x = 5\) oder \(x = -1\).</p>
      <p style="margin:.4em 0 0">Das geht nur, wenn auf der anderen Seite kein \(x\) steht. Sonst: Fallunterscheidung.</p></div>
    <div class="card wide"><h3>Die Fallunterscheidung</h3>
      <p>Jeder Betrag hat eine <b>Knickstelle</b>: die Stelle, an der sein Inhalt 0 wird. Die Knickstellen zerlegen den Zahlenstrahl in Bereiche. In jedem Bereich hat jeder Inhalt ein festes Vorzeichen, der Betrag lässt sich also ohne Strich schreiben.</p>
      <svg class="nl" viewBox="0 0 560 78" role="img" aria-label="Zahlenstrahl mit den Knickstellen ein Drittel und 2 und drei Bereichen">
        <line x1="10" y1="40" x2="550" y2="40"/>
        <line class="k" x1="200" y1="28" x2="200" y2="52"/><line class="k" x1="380" y1="28" x2="380" y2="52"/>
        <text class="kl" x="200" y="68" text-anchor="middle">x = 1/3</text><text class="kl" x="380" y="68" text-anchor="middle">x = 2</text>
        <text class="z" x="105" y="22" text-anchor="middle">Fall 1: x &lt; 1/3</text>
        <text class="z" x="290" y="22" text-anchor="middle">Fall 2: 1/3 ≤ x &lt; 2</text>
        <text class="z" x="465" y="22" text-anchor="middle">Fall 3: x ≥ 2</text>
      </svg>
      <p style="margin:0">Welches Vorzeichen ein Inhalt im Bereich hat, prüfst du mit einem <b>Testwert</b>: eine beliebige Zahl aus dem Bereich einsetzen. Ist der Inhalt positiv, fällt der Betragsstrich einfach weg. Ist er negativ, wird aus \(|A|\) die Klammer \(-(A)\).</p></div>
    <div class="card"><h3>Brüche mit Betrag</h3>
      <ul><li>Zuerst den Definitionsbereich: Nenner \(\ne 0\). Steht ein Betrag im Nenner, die Stellen ausrechnen, an denen er 0 wird (oder an denen der ganze Nenner 0 wird).</li>
        <li>Dann mit dem Nenner malnehmen und ganz normal Fälle unterscheiden.</li>
        <li><span class="falle">Falle</span>Eine Lösung kann im richtigen Bereich liegen und trotzdem aus \(D\) fallen.</li></ul></div>
    <div class="card"><h3>Wurzelgleichungen</h3>
      <ul><li>Definitionsbereich: unter jeder Wurzel \(\ge 0\)</li>
        <li>Eine Wurzel allein auf eine Seite bringen, dann beide Seiten quadrieren</li>
        <li><span class="falle">Falle</span>\((7-\sqrt a)^2 = 49 - 14\sqrt a + a\), binomische Formel, nicht \(49 - a\)</li>
        <li><span class="falle">Pflicht</span>Probe mit jeder Lösung. Quadrieren kann Scheinlösungen erzeugen, weil \((-3)^2 = 3^2\).</li></ul></div>
    <div class="card"><h3>Ungleichungen</h3>
      <ul><li>Umformen wie bei Gleichungen</li>
        <li><span class="falle">Falle</span>Beim Malnehmen oder Teilen mit einer negativen Zahl dreht sich das Zeichen: \(-3x \le 6 \iff x \ge -2\)</li>
        <li>\(x^2 \ge 3 \iff |x| \ge \sqrt3 \iff x \le -\sqrt3\) oder \(x \ge \sqrt3\)</li>
        <li>Ergebnis als Intervall: \(L = (-\infty, -\sqrt3\,] \cup [\sqrt3, \infty)\). Eckige Klammer heißt „mit Rand“, runde heißt „ohne“.</li></ul></div>
    <div class="card"><h3>Mit Parameter</h3>
      <p>Steht ein Buchstabe wie \(c\) in der Gleichung, unterscheidest du auch nach \(c\). Typisch bei \(|A| = 1 + c\): Ist \(1 + c\) negativ, null oder positiv?</p>
      <p style="margin:0">Das Ergebnis ist dann eine kleine Liste: für welche \(c\) welche Lösungsmenge gilt.</p></div>
  </div>`,
  recipe: [
    ['Definitionsbereich', String.raw`Nenner \(\ne 0\), unter der Wurzel \(\ge 0\).`],
    ['Knickstellen', String.raw`Jeden Betragsinhalt gleich 0 setzen. Vorher Minus und Faktoren aus dem Betrag ziehen, das spart Arbeit.`],
    ['Bereiche', String.raw`Zahlenstrahl an den Knickstellen zerschneiden. Zwei Knickstellen ergeben drei Fälle.`],
    ['Beträge auflösen', String.raw`In jedem Fall mit einem Testwert das Vorzeichen jedes Inhalts bestimmen. Positiv: Strich weg. Negativ: Minus davor.`],
    ['Lösen', String.raw`Die entstandene Gleichung ohne Betrag lösen, meist linear.`],
    ['Prüfen', String.raw`Liegt die Lösung im Bereich dieses Falls und in \(D\)? Sonst streichen. Nach Quadrieren immer die Probe machen.`],
    ['Lösungsmenge', String.raw`Alle gültigen Lösungen aus allen Fällen sammeln: \(L = \{\dots\}\). Bleibt nichts übrig: \(L = \emptyset\).`],
  ],
  worked: [
    { src: 'Juli 2023', a: 2, tag: 'Standard',
      q: String.raw`<p class="qt">Bestimmen Sie die Lösung(en) der Gleichung</p><div class="fbig">\[-2\,|x-2| = |-3x+1| - 40.\]</div>`,
      s: [
        [String.raw`Knickstellen: \(x - 2 = 0\) bei \(x = 2\) und \(-3x+1 = 0\) bei \(x = \frac13\).`, String.raw`An diesen Stellen wechselt der Inhalt eines Betrags sein Vorzeichen.`],
        [String.raw`Drei Bereiche: \(x \lt \frac13\), \(\frac13 \le x \lt 2\) und \(x \ge 2\).`, 'Genau das Bild vom Zahlenstrahl oben.'],
        [String.raw`<b>Fall 1</b>, \(x \lt \frac13\), Testwert \(x = 0\): \(x - 2 = -2 \lt 0\), also \(|x-2| = 2-x\). \(-3x+1 = 1 \gt 0\), also \(|-3x+1| = -3x+1\).<br>\(-2(2-x) = -3x+1-40 \iff 2x - 4 = -3x - 39 \iff 5x = -35 \iff x = -7\). Liegt im Bereich ✓`, ''],
        [String.raw`<b>Fall 2</b>, \(\frac13 \le x \lt 2\), Testwert \(x = 1\): \(|x-2| = 2-x\), \(|-3x+1| = 3x-1\).<br>\(2x - 4 = 3x - 41 \iff x = 37\). Liegt nicht im Bereich ✗`, 'Die Rechnung liefert eine Zahl, aber sie gehört zu einem anderen Fall. Also streichen.'],
        [String.raw`<b>Fall 3</b>, \(x \ge 2\): \(|x-2| = x-2\), \(|-3x+1| = 3x-1\).<br>\(-2x + 4 = 3x - 41 \iff 5x = 45 \iff x = 9\) ✓`, ''],
        [String.raw`Probe mit \(x = 9\): links \(-2\cdot7 = -14\), rechts \(|-26| - 40 = -14\) ✓`, 'Kostet 20 Sekunden und fängt Vorzeichenfehler ab.'],
      ],
      r: String.raw`\(L = \{-7,\ 9\}\)` },
    { src: 'Juli 2022', a: 2, tag: 'Wurzelgleichung',
      q: String.raw`<p class="qt">Bestimmen Sie die Lösungsmenge der Gleichung</p><div class="fbig">\[\sqrt{2x-3} = 7 - \sqrt{4+2x}.\]</div>`,
      s: [
        [String.raw`Definitionsbereich: \(2x - 3 \ge 0\) und \(4 + 2x \ge 0\), zusammen \(x \ge \frac32\).`, ''],
        [String.raw`Beide Seiten quadrieren: \(2x - 3 = 49 - 14\sqrt{4+2x} + (4 + 2x)\).`, String.raw`Rechts steht \((a-b)^2 = a^2 - 2ab + b^2\). Wer nur \(49 - (4+2x)\) schreibt, verliert die ganze Aufgabe.`],
        [String.raw`\(2x\) fällt auf beiden Seiten weg: \(-3 = 53 - 14\sqrt{4+2x} \iff 14\sqrt{4+2x} = 56 \iff \sqrt{4+2x} = 4\).`, ''],
        [String.raw`Noch einmal quadrieren: \(4 + 2x = 16 \iff x = 6\).`, ''],
        [String.raw`Probe: \(\sqrt{12-3} = 3\) und \(7 - \sqrt{16} = 3\) ✓`, 'Nach dem Quadrieren ist die Probe Pflicht, nicht Kür.'],
      ],
      r: String.raw`\(L = \{6\}\)` },
  ],
  ex: [
    { id: '2020-10', src: 'Oktober 2020', a: 5, lvl: 1,
      q: String.raw`<p>Lösen Sie die Gleichung</p><div class="fbig">\[-|2x-1| + 1 = |-3x+1|.\]</div>`,
      h: [String.raw`Knickstellen: \(x = \frac12\) und \(x = \frac13\). Das ergibt drei Bereiche.`, String.raw`Testwert für \(x \lt \frac13\): \(x = 0\) gibt \(2\cdot0-1 = -1 \lt 0\) und \(-3\cdot0+1 = 1 \gt 0\).`],
      s: [String.raw`Bereiche: \(x \lt \frac13\), \(\frac13 \le x \lt \frac12\), \(x \ge \frac12\).`,
        String.raw`Fall \(x \lt \frac13\): \(|2x-1| = 1-2x\), \(|-3x+1| = 1-3x\). \(-(1-2x) + 1 = 1-3x \iff 2x = 1-3x \iff x = \frac15\) ✓`,
        String.raw`Fall \(\frac13 \le x \lt \frac12\): \(|2x-1| = 1-2x\), \(|-3x+1| = 3x-1\). \(2x = 3x-1 \iff x = 1\) ✗`,
        String.raw`Fall \(x \ge \frac12\): \(|2x-1| = 2x-1\), \(|-3x+1| = 3x-1\). \(2 - 2x = 3x - 1 \iff x = \frac35\) ✓`],
      r: String.raw`\(L = \left\{\frac15,\ \frac35\right\}\)` },
    { id: '2022-07', src: 'Juli 2022', a: 3, lvl: 1,
      q: String.raw`<p>Bestimmen Sie die Lösung(en) der Gleichung</p><div class="fbig">\[|x-1| = 2 + |-3x-6|.\]</div>`,
      h: [String.raw`\(|-3x-6| = 3\,|x+2|\). Knickstellen bei \(x = -2\) und \(x = 1\).`, String.raw`Drei Fälle: \(x \lt -2\), \(-2 \le x \lt 1\), \(x \ge 1\).`],
      s: [String.raw`\(|-3x-6| = |-3(x+2)| = 3\,|x+2|\).`,
        String.raw`Fall \(x \lt -2\): \(1 - x = 2 + 3(-x-2) = -3x - 4 \iff 2x = -5 \iff x = -\frac52\) ✓`,
        String.raw`Fall \(-2 \le x \lt 1\): \(1 - x = 2 + 3(x+2) = 3x + 8 \iff -4x = 7 \iff x = -\frac74\) ✓`,
        String.raw`Fall \(x \ge 1\): \(x - 1 = 3x + 8 \iff x = -\frac92\) ✗`],
      r: String.raw`\(L = \left\{-\frac52,\ -\frac74\right\}\)` },
    { id: '2024-09', src: 'September 2024', a: 2, lvl: 1,
      q: String.raw`<p>Lösen Sie die Gleichung</p><div class="fbig">\[-|-x+3| = 6x + |2x+4|.\]</div>`,
      h: [String.raw`Knickstellen: \(-x+3 = 0\) bei \(x = 3\) und \(2x+4 = 0\) bei \(x = -2\).`, String.raw`Im mittleren Bereich \(-2 \le x \lt 3\) sind beide Inhalte \(\ge 0\), die Striche fallen einfach weg.`],
      s: [String.raw`Fall \(x \lt -2\): \(|-x+3| = -x+3\), \(|2x+4| = -2x-4\). \(x - 3 = 6x - 2x - 4 = 4x - 4 \iff x = \frac13\) ✗`,
        String.raw`Fall \(-2 \le x \lt 3\): \(x - 3 = 6x + 2x + 4 = 8x + 4 \iff x = -1\) ✓`,
        String.raw`Fall \(x \ge 3\): \(|-x+3| = x-3\), also \(-x + 3 = 8x + 4 \iff x = -\frac19\) ✗`,
        String.raw`Probe: links \(-|4| = -4\), rechts \(-6 + |2| = -4\) ✓`],
      r: String.raw`\(L = \{-1\}\)` },
    { id: '2020-11', src: 'November 2020', a: 3, lvl: 1,
      q: String.raw`<p>Lösen Sie die Gleichung</p><div class="fbig">\[-|2x+4| = |-x+3| - 7^2.\]</div>`,
      h: [String.raw`\(7^2 = 49\). Knickstellen bei \(x = -2\) und \(x = 3\).`, String.raw`Für \(x \lt -2\) ist \(2x+4 \lt 0\), also \(-|2x+4| = -(-(2x+4)) = 2x+4\).`],
      s: [String.raw`Fall \(x \lt -2\): \(2x + 4 = (-x+3) - 49 = -x - 46 \iff 3x = -50 \iff x = -\frac{50}3\) ✓`,
        String.raw`Fall \(-2 \le x \lt 3\): \(-2x - 4 = -x - 46 \iff x = 42\) ✗`,
        String.raw`Fall \(x \ge 3\): \(-2x - 4 = (x-3) - 49 = x - 52 \iff 3x = 48 \iff x = 16\) ✓`],
      r: String.raw`\(L = \left\{-\frac{50}3,\ 16\right\}\)` },
    { id: '2023-12', src: 'Dezember 2023', a: 2, lvl: 1,
      q: String.raw`<p>a) Bestimmen Sie die Lösung(en) der Gleichung \(\ |-2x+4| = -x+17\).</p><p>b) Bestimmen Sie die Lösung(en) der Ungleichung \(\ -3x^2 - 7 \le -16\).</p>`,
      h: [String.raw`(a) Nur ein Betrag: zwei Fälle, \(x \le 2\) und \(x \gt 2\).`, String.raw`(b) Beim Teilen durch \(-3\) dreht sich \(\le\) zu \(\ge\).`],
      s: [String.raw`(a) Fall \(x \le 2\) (Inhalt \(\ge 0\)): \(-2x + 4 = -x + 17 \iff x = -13\) ✓`,
        String.raw`(a) Fall \(x \gt 2\): \(2x - 4 = -x + 17 \iff 3x = 21 \iff x = 7\) ✓`,
        String.raw`(b) \(-3x^2 \le -9 \iff x^2 \ge 3\), Zeichen gedreht beim Teilen durch \(-3\).`,
        String.raw`\(x^2 \ge 3 \iff |x| \ge \sqrt3 \iff x \le -\sqrt3\) oder \(x \ge \sqrt3\).`],
      r: String.raw`(a) \(L = \{-13,\ 7\}\) &nbsp; (b) \(L = (-\infty, -\sqrt3\,] \cup [\sqrt3, \infty)\)` },
    { id: '2021-07', src: 'Juli 2021', a: 3, lvl: 2,
      q: String.raw`<p>Lösen Sie die Gleichung</p><div class="fbig">\[-|2x-1| = 3\cdot|4-2x| - 43.\]</div>`,
      h: [String.raw`Knickstellen \(x = \frac12\) und \(x = 2\).`, String.raw`Für \(x \ge 2\) ist \(4-2x \le 0\), also \(|4-2x| = 2x-4\).`],
      s: [String.raw`Fall \(x \lt \frac12\): \(-(1-2x) = 3(4-2x) - 43 \iff 2x - 1 = -6x - 31 \iff x = -\frac{15}4\) ✓`,
        String.raw`Fall \(\frac12 \le x \lt 2\): \(-(2x-1) = -6x - 31 \iff 4x = -32 \iff x = -8\) ✗`,
        String.raw`Fall \(x \ge 2\): \(-2x + 1 = 3(2x-4) - 43 = 6x - 55 \iff 8x = 56 \iff x = 7\) ✓`],
      r: String.raw`\(L = \left\{-\frac{15}4,\ 7\right\}\)` },
    { id: '2020-07', src: 'Juli 2020', a: 5, lvl: 2,
      q: String.raw`<p>Lösen Sie die Gleichung</p><div class="fbig">\[|-3x+5| = 8x - 20\cdot|x-9|.\]</div>`,
      h: [String.raw`Knickstellen: \(x = \frac53\) und \(x = 9\).`, String.raw`Rechte Seite für \(x \lt 9\): \(8x - 20(9-x) = 28x - 180\).`],
      s: [String.raw`Fall \(x \lt \frac53\): \(-3x + 5 = 28x - 180 \iff x = \frac{185}{31} \approx 5{,}97\) ✗`,
        String.raw`Fall \(\frac53 \le x \lt 9\): \(3x - 5 = 28x - 180 \iff 25x = 175 \iff x = 7\) ✓`,
        String.raw`Fall \(x \ge 9\): rechts \(8x - 20(x-9) = -12x + 180\). \(3x - 5 = -12x + 180 \iff x = \frac{37}3\) ✓`],
      r: String.raw`\(L = \left\{7,\ \frac{37}3\right\}\)` },
    { id: '2022-09', src: 'September 2022', a: 2, lvl: 2,
      q: String.raw`<p>Bestimmen Sie die Lösung(en) der Gleichung</p><div class="fbig">\[-|2x-6| = -\frac54x + |-x+1|.\]</div>`,
      h: [String.raw`Knickstellen \(x = 1\) und \(x = 3\).`, String.raw`Gegen das Bruchchaos: die Gleichung im Fall mit 4 malnehmen.`],
      s: [String.raw`Fall \(x \lt 1\): \(2x - 6 = -\frac54x + 1 - x = -\frac94x + 1 \iff \frac{17}4x = 7 \iff x = \frac{28}{17}\) ✗ (größer als 1)`,
        String.raw`Fall \(1 \le x \lt 3\): \(2x - 6 = -\frac54x + x - 1 = -\frac14x - 1 \iff \frac94x = 5 \iff x = \frac{20}9\) ✓`,
        String.raw`Fall \(x \ge 3\): \(-2x + 6 = -\frac14x - 1 \iff -\frac74x = -7 \iff x = 4\) ✓`],
      r: String.raw`\(L = \left\{\frac{20}9,\ 4\right\}\)` },
    { id: '2023-02', src: 'Februar 2023', a: 2, lvl: 2,
      q: String.raw`<p>Bestimmen Sie die Lösung(en) der Gleichung</p><div class="fbig">\[1 = |-3x+6| - c\]</div><p>in Abhängigkeit von \(c \in \mathbb R\).</p>`,
      h: [String.raw`Umstellen: \(|-3x+6| = 1 + c\). Ein Betrag ist nie negativ.`, String.raw`Drei Fälle für \(c\): \(1 + c \lt 0\), \(1 + c = 0\), \(1 + c \gt 0\).`],
      s: [String.raw`\(|-3x+6| = 3\,|x-2|\), also \(|x-2| = \frac{1+c}3\).`,
        String.raw`\(c \lt -1\): rechts steht etwas Negatives, keine Lösung.`,
        String.raw`\(c = -1\): \(|x-2| = 0 \iff x = 2\).`,
        String.raw`\(c \gt -1\): \(x - 2 = \pm\frac{1+c}3\), also \(x = \frac{7+c}3\) oder \(x = \frac{5-c}3\).`],
      r: String.raw`\(c \lt -1\): \(L = \emptyset\); \(\ c = -1\): \(L = \{2\}\); \(\ c \gt -1\): \(L = \left\{\frac{5-c}3,\ \frac{7+c}3\right\}\)` },
    { id: '2022-02', src: 'Februar 2022', a: 2, lvl: 2,
      q: String.raw`<p>Bestimmen Sie die Lösungsmenge der Gleichung</p><div class="fbig">\[\frac{|x^2-5| - 11}{|x+4|} = 0.\]</div>`,
      h: [String.raw`Ein Bruch ist 0, wenn der Zähler 0 ist und der Nenner nicht.`, String.raw`\(|x^2-5| = 11\) heißt \(x^2 - 5 = 11\) oder \(x^2 - 5 = -11\).`],
      s: [String.raw`\(D\): \(|x+4| \ne 0 \iff x \ne -4\).`,
        String.raw`Zähler null: \(|x^2-5| = 11\).`,
        String.raw`\(x^2 - 5 = 11 \iff x = \pm4\). \(x^2 - 5 = -11 \iff x^2 = -6\), keine Lösung.`,
        String.raw`\(x = -4\) liegt nicht in \(D\). Es bleibt \(x = 4\).`],
      r: String.raw`\(L = \{4\}\)` },
    { id: '2021-09', src: 'September 2021', a: 2, lvl: 3,
      q: String.raw`<p>Bestimmen Sie die Lösungsmenge der Gleichung</p><div class="fbig">\[\frac{2x-5}{|x-2|} = |-x+4|.\]</div>`,
      h: [String.raw`\(D\): \(x \ne 2\). Mit \(|x-2|\) malnehmen: \(2x - 5 = |x-2|\cdot|x-4|\).`, String.raw`Drei Fälle mit den Knickstellen 2 und 4. Es entstehen quadratische Gleichungen, also pq-Formel.`],
      s: [String.raw`\(D = \mathbb R\setminus\{2\}\), \(|-x+4| = |x-4|\), also \(2x - 5 = |x-2|\,|x-4|\).`,
        String.raw`Fall \(x \lt 2\): \((2-x)(4-x) = x^2 - 6x + 8\). \(x^2 - 8x + 13 = 0 \iff x = 4 \pm \sqrt3\). Beide größer als 2 ✗`,
        String.raw`Fall \(2 \lt x \lt 4\): \((x-2)(4-x) = -x^2 + 6x - 8\). \(x^2 - 4x + 3 = 0 \iff x = 1\) oder \(x = 3\). Nur \(x = 3\) liegt im Bereich ✓`,
        String.raw`Fall \(x \ge 4\): wieder \(x^2 - 8x + 13 = 0\). \(x = 4 + \sqrt3 \approx 5{,}7\) ✓, \(4 - \sqrt3\) ✗`],
      r: String.raw`\(L = \{3,\ 4+\sqrt3\}\)` },
    { id: '2021-11', src: 'November 2021', a: 2, lvl: 3,
      q: String.raw`<p>Bestimmen Sie die Lösungsmenge der Gleichung</p><div class="fbig">\[\frac{|-2x-1| - 11}{|x-5|} = 9.\]</div>`,
      h: [String.raw`\(D\): \(x \ne 5\). Dann mal \(|x-5|\): \(|2x+1| - 11 = 9\,|x-5|\).`, String.raw`Knickstellen \(-\frac12\) und \(5\). Rechne alle drei Fälle sauber durch, auch wenn am Ende nichts übrig bleibt.`],
      s: [String.raw`\(|-2x-1| = |2x+1|\), \(D = \mathbb R \setminus\{5\}\), \(|2x+1| - 11 = 9\,|x-5|\).`,
        String.raw`Fall \(x \lt -\frac12\): \(-2x - 12 = 45 - 9x \iff x = \frac{57}7\) ✗`,
        String.raw`Fall \(-\frac12 \le x \lt 5\): \(2x - 10 = 45 - 9x \iff x = 5\) ✗`,
        String.raw`Fall \(x \gt 5\): \(2x - 10 = 9x - 45 \iff x = 5\) ✗`,
        String.raw`Kontrolle: Für \(x \gt 5\) ist der Bruch \(\frac{2(x-5)}{x-5} = 2\), also nie 9.`],
      r: String.raw`\(L = \emptyset\). Auch das ist ein vollständiges Ergebnis, wenn alle Fälle dastehen.` },
    { id: '2022-11', src: 'November 2022', a: 2, lvl: 3,
      q: String.raw`<p>Bestimmen Sie die Lösung(en) der Gleichung</p><div class="fbig">\[\frac{|-3x+6| - 3}{2 - |1+x|} = 1.\]</div>`,
      h: [String.raw`\(D\): \(|1+x| \ne 2\), also \(x \ne 1\) und \(x \ne -3\).`, String.raw`Mal Nenner und umstellen: \(3\,|x-2| + |x+1| = 5\).`],
      s: [String.raw`\(D = \mathbb R \setminus \{-3,\ 1\}\).`,
        String.raw`\(|-3x+6| = 3\,|x-2|\). Mit dem Nenner malnehmen: \(3|x-2| - 3 = 2 - |x+1| \iff 3|x-2| + |x+1| = 5\).`,
        String.raw`Fall \(x \lt -1\): \(3(2-x) - (x+1) = 5 - 4x = 5 \iff x = 0\) ✗`,
        String.raw`Fall \(-1 \le x \lt 2\): \(3(2-x) + x + 1 = 7 - 2x = 5 \iff x = 1\). Im Bereich, aber nicht in \(D\) ✗`,
        String.raw`Fall \(x \ge 2\): \(3(x-2) + x + 1 = 4x - 5 = 5 \iff x = \frac52\) ✓`],
      r: String.raw`\(L = \left\{\frac52\right\}\). Die Falle war \(x = 1\).` },
    { id: '2024-11', src: 'November 2024', a: 2, lvl: 3,
      q: String.raw`<p>Bestimmen Sie die Lösungsmenge der Gleichung</p><div class="fbig">\[\sqrt{x^2+4} = 6 - |x+2|.\]</div>`,
      h: [String.raw`Links steht eine Wurzel, also muss rechts \(6 - |x+2| \ge 0\) sein.`, String.raw`Zwei Fälle, \(x \ge -2\) und \(x \lt -2\). In jedem Fall quadrieren, \(x^2\) fällt weg.`],
      s: [String.raw`\(D = \mathbb R\). Bedingung: \(6 - |x+2| \ge 0\).`,
        String.raw`Fall \(x \ge -2\): \(\sqrt{x^2+4} = 4 - x\). Quadrieren: \(x^2 + 4 = 16 - 8x + x^2 \iff x = \frac32\). Probe: \(\sqrt{\frac94 + 4} = \frac52 = 4 - \frac32\) ✓`,
        String.raw`Fall \(x \lt -2\): \(\sqrt{x^2+4} = 8 + x\). Quadrieren: \(x^2 + 4 = 64 + 16x + x^2 \iff x = -\frac{15}4\). Probe: \(\sqrt{\frac{225}{16} + 4} = \frac{17}4 = 8 - \frac{15}4\) ✓`],
      r: String.raw`\(L = \left\{-\frac{15}4,\ \frac32\right\}\)` },
  ],
};
