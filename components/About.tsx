import { A, aSans, aSerif, aMono } from '@/lib/theme';

const principles = [
  'Klarheit vor Jargon',
  'Risiko priorisieren, nicht katalogisieren',
  'Erreichbar, auch werktags',
  'Festpreis, wo möglich',
];

export default function About() {
  return (
    <section
      id="profil"
      style={{ padding: '110px 64px', background: A.bgAlt, borderTop: `1px solid ${A.line}` }}
      className="section-padding section-v-padding"
    >
      <div
        style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: 80 }}
        className="about-grid"
      >
        <div>
          <div style={{
            fontFamily: aSans, fontSize: 11, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: A.ink3, fontWeight: 500,
          }}>
            § 02 · Zur Person
          </div>
          <div style={{
            marginTop: 28, width: 200, aspectRatio: '3/4',
            background: `repeating-linear-gradient(135deg, ${A.ink} 0px, ${A.ink} 1px, transparent 1px, transparent 8px), ${A.paper}`,
            border: `1px solid ${A.line}`,
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute', inset: 12,
              border: `1px dashed ${A.ink3}`,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              background: 'rgba(250,248,243,0.85)',
            }}>
              <div style={{ fontFamily: aMono, fontSize: 10, color: A.ink3, letterSpacing: '0.12em' }}>PORTRAIT</div>
              <div style={{ fontFamily: aMono, fontSize: 9, color: A.ink3, marginTop: 4 }}>→ hi-res foto, 3:4</div>
            </div>
          </div>
          <div style={{ marginTop: 14, fontFamily: aMono, fontSize: 10, color: A.ink3, letterSpacing: '0.1em' }}>
            FIG. 01 — IGOR KISTER, RA
          </div>
        </div>

        <div style={{ paddingTop: 28 }}>
          <h2
            style={{
              fontFamily: aSerif, fontWeight: 400, fontSize: 56, lineHeight: 1.05,
              color: A.ink, margin: 0, letterSpacing: -1,
            }}
            className="about-title"
          >
            Recht, das in der<br />
            <span style={{ fontStyle: 'italic', color: A.accent }}>Praxis bestehen muss</span>.
          </h2>

          <div
            style={{
              marginTop: 40, fontFamily: aSerif, fontSize: 22, lineHeight: 1.55,
              color: A.ink, maxWidth: 680,
            }}
            className="about-body"
          >
            Ich berate Unternehmen und Privatpersonen in Fragen, die selten
            nur juristisch sind — sondern meist auch wirtschaftlich, operativ
            und menschlich. Klarheit geht mir über formale Eleganz; verhandelbare
            Verträge über abschreckende Klauseltürme.
          </div>

          <div
            style={{
              marginTop: 32, fontFamily: aSans, fontSize: 15, lineHeight: 1.7,
              color: A.ink2, maxWidth: 620, columnCount: 2, columnGap: 40,
            }}
            className="about-2col"
          >
            Daneben arbeite ich als Syndikusrechtsanwalt in der Industrie.
            Dieser zweite Blickwinkel — aus dem Inneren eines Unternehmens heraus —
            fließt unaufdringlich in meine Mandatsarbeit ein. Die Folge ist
            Beratung, die Risiken nicht nur auflistet, sondern priorisiert, und
            Kommunikation, die ohne Floskeln auskommt.
          </div>

          <div style={{ marginTop: 44, display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            {principles.map((x, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: aSans, fontSize: 14, color: A.ink }}>
                <span style={{ width: 6, height: 6, borderRadius: 3, background: A.accent, flexShrink: 0 }} />
                {x}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
