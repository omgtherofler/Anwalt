import { A, aSans, aSerif, aMono } from '@/lib/theme';

const cv = [
  ['seit 11/2022', 'Kanzlei Kister', 'Eigene Kanzlei · Vertragsrecht, Commercial, Zivilrecht, Baurecht'],
  ['seit 11/2022', 'Syndikusrechtsanwalt', 'IMS Gear SE & Co. KGaA · Legal, Insurance & Compliance'],
  ['01/2020 – 10/2022', 'Rechtsanwalt', 'Schotten und Partner mbB / Haver & Mailänder · Öffentliches Wirtschaftsrecht, Bau- und Energierecht'],
  ['2017 – 2019', 'Referendariat', 'Landgericht Heilbronn · 2. Juristische Staatsprüfung'],
  ['2010 – 2017', 'Studium der Rechtswissenschaften', 'Universität Freiburg & ELTE Budapest · Schwerpunkt Arbeits- und Sozialrecht'],
  ['nebenläufig', 'B.Sc. Psychologie', 'Fernuniversität Hagen'],
];

export default function CV() {
  return (
    <section
      id="erfahrungen"
      style={{ padding: '110px 64px', background: A.paper, borderTop: `1px solid ${A.line}` }}
      className="section-padding section-v-padding snap-section"
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
            Eine chronologische Kurzfassung. Details auf Anfrage.
          </p>
        </div>

        <div>
          {cv.map((row, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '180px 1fr',
                gap: 32,
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
                <div style={{ fontFamily: aSerif, fontSize: 26, color: A.ink, lineHeight: 1.2 }} className="cv-entry-title">{row[1]}</div>
                <div style={{ fontFamily: aSans, fontSize: 14, color: A.ink2, marginTop: 6 }}>{row[2]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
