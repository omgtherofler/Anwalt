import { A, aSans, aSerif, aMono } from '@/lib/theme';

const plans = [
  {
    t: 'Erstgespräch',
    p: '150 €',
    u: 'zzgl. USt · bis 60 Min.',
    d: 'Einschätzung Ihres Anliegens, mögliche Strategien, Aufwand. Kein Kleingedrucktes.',
    recommended: false,
  },
  {
    t: 'Festpreis',
    p: 'ab 450 €',
    u: 'pro Vorgang · zzgl. USt',
    d: 'Vertragsprüfung, AGB-Anpassung, einmalige Mandate mit klarem Umfang. Sie wissen vorher, was kommt.',
    recommended: true,
  },
  {
    t: 'Stundensatz',
    p: '290 €',
    u: 'pro Zeitstunde · zzgl. USt',
    d: 'Für laufende Beratung und Mandate, deren Umfang sich erst im Verfahren zeigt.',
    recommended: false,
  },
];

export default function Fees() {
  return (
    <section
      id="honorar"
      style={{ padding: '110px 64px', background: A.bgAlt }}
      className="section-padding section-v-padding snap-section"
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 70 }}>
          <div style={{
            fontFamily: aSans, fontSize: 11, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: A.ink3, fontWeight: 500,
          }}>
            § 05 · Honorar
          </div>
          <h2
            style={{
              fontFamily: aSerif, fontWeight: 400, fontSize: 56, lineHeight: 1.05,
              color: A.ink, margin: '24px 0 20px', letterSpacing: -1,
            }}
            className="section-title"
          >
            Transparent. <span style={{ fontStyle: 'italic' }}>Kein Überraschungsmoment.</span>
          </h2>
          <p style={{ fontFamily: aSans, fontSize: 16, color: A.ink2, maxWidth: 620, margin: '0 auto', lineHeight: 1.6 }}>
            Je nach Mandatstyp biete ich Festpreis, Stundensatz oder die
            gesetzliche RVG-Vergütung an. Die Wahl besprechen wir offen — vor dem
            ersten Schritt.
          </p>
        </div>

        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, border: `1px solid ${A.ink}` }}
          className="fees-grid"
        >
          {plans.map((c, i) => (
            <div
              key={i}
              style={{
                padding: '40px 32px',
                borderRight: i < 2 ? `1px solid ${A.line}` : 'none',
                background: c.recommended ? A.ink : 'transparent',
                color: c.recommended ? A.paper : A.ink,
                position: 'relative',
              }}
            >
              {c.recommended && (
                <div style={{
                  position: 'absolute', top: -10, left: 32, background: A.accent,
                  fontFamily: aMono, fontSize: 10, color: A.paper, letterSpacing: '0.12em',
                  padding: '4px 10px',
                }}>
                  EMPFOHLEN
                </div>
              )}
              <div style={{
                fontFamily: aSans, fontSize: 11, letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: c.recommended ? 'rgba(250,248,243,0.6)' : A.ink3,
                fontWeight: 500,
              }}>
                {c.t}
              </div>
              <div
                style={{
                  fontFamily: aSerif, fontSize: 56, lineHeight: 1, marginTop: 24,
                  color: c.recommended ? A.paper : A.ink, letterSpacing: -1.2,
                }}
                className="fees-price"
              >
                {c.p}
              </div>
              <div style={{
                fontFamily: aMono, fontSize: 11, marginTop: 8,
                color: c.recommended ? 'rgba(250,248,243,0.6)' : A.ink3,
                letterSpacing: '0.08em',
              }}>
                {c.u}
              </div>
              <div style={{
                height: 1, margin: '28px 0',
                background: c.recommended ? 'rgba(250,248,243,0.18)' : A.line,
              }} />
              <p style={{
                fontFamily: aSans, fontSize: 14, lineHeight: 1.65, margin: 0,
                color: c.recommended ? 'rgba(250,248,243,0.8)' : A.ink2,
              }}>
                {c.d}
              </p>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 32, padding: '20px 24px', background: A.paper, border: `1px solid ${A.line}`,
          display: 'flex', gap: 20, alignItems: 'center',
        }} className="fees-note">
          <div style={{
            width: 36, height: 36, borderRadius: 18, background: A.accent,
            color: A.paper, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: aSerif, fontSize: 18, flexShrink: 0,
          }}>§</div>
          <div style={{ fontFamily: aSans, fontSize: 14, lineHeight: 1.6, color: A.ink2 }}>
            Bei gerichtlichen Verfahren erfolgt die Abrechnung nach RVG. Eine Rechtsschutzversicherung
            deckt häufig große Teile der Kosten — ich prüfe das für Sie kostenfrei.
          </div>
        </div>
      </div>
    </section>
  );
}
