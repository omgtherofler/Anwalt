import { A, aSans, aSerif, aMono } from '@/lib/theme';

const cv = [
  ['2018 — heute', 'Rechtsanwalt', 'Zulassung RAK Freiburg · eigene Mandate'],
  ['2020 — heute', 'Syndikusrechtsanwalt', 'Industrieunternehmen · Commercial & Contracts'],
  ['2016 — 2018', 'Rechtsanwalt', 'Wirtschaftskanzlei, Bereich Commercial'],
  ['2014 — 2016', 'Referendariat', 'Stationen in Industrie und Kanzlei'],
  ['2008 — 2014', 'Studium der Rechtswissenschaften', 'Schwerpunkt Wirtschaftsrecht'],
];

export default function CV() {
  return (
    <section
      id="erfahrungen"
      style={{ padding: '110px 64px', background: A.paper, borderTop: `1px solid ${A.line}` }}
      className="section-padding section-v-padding"
    >
      <div
        style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 80 }}
        className="cv-grid"
      >
        <div>
          <div style={{
            fontFamily: aSans, fontSize: 11, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: A.ink3, fontWeight: 500,
          }}>
            § 04 · Erfahrungen
          </div>
          <h2
            style={{
              fontFamily: aSerif, fontWeight: 400, fontSize: 56, lineHeight: 1.05,
              color: A.ink, margin: '24px 0 0', letterSpacing: -1,
            }}
            className="section-title"
          >
            Ausbildung<br />&amp; <span style={{ fontStyle: 'italic' }}>Erfahrungen</span>
          </h2>
          <p style={{ fontFamily: aSans, fontSize: 14, color: A.ink2, marginTop: 24, lineHeight: 1.6 }}>
            Eine chronologische Kurzfassung. Details und Publikationsliste auf Anfrage.
          </p>
        </div>

        <div>
          {cv.map((row, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '160px 1fr',
                gap: 40,
                padding: '28px 0',
                borderTop: `1px solid ${A.line}`,
                borderBottom: i === cv.length - 1 ? `1px solid ${A.line}` : 'none',
                alignItems: 'baseline',
              }}
              className="cv-row"
            >
              <div style={{ fontFamily: aMono, fontSize: 12, color: A.ink3, letterSpacing: '0.08em' }}>
                {row[0]}
              </div>
              <div>
                <div style={{ fontFamily: aSerif, fontSize: 26, color: A.ink, lineHeight: 1.2 }}>{row[1]}</div>
                <div style={{ fontFamily: aSans, fontSize: 14, color: A.ink2, marginTop: 6 }}>{row[2]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
