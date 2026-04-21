import { A, aSans, aSerif, aMono } from '@/lib/theme';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{ padding: '90px 64px 110px', background: A.bg }}
      className="section-padding section-v-padding"
    >
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}
        className="hero-grid"
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 40 }}>
            <span style={{ width: 36, height: 1, background: A.ink, flexShrink: 0 }} />
            <div style={{
              fontFamily: aSans, fontSize: 11, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: A.ink2, fontWeight: 500,
            }}>
              Rechtsanwaltskanzlei · Freiburg im Breisgau
            </div>
          </div>

          <h1
            style={{
              fontFamily: aSerif, fontWeight: 400, fontSize: 92, lineHeight: 0.98,
              color: A.ink, margin: 0, letterSpacing: -2,
            }}
            className="hero-title"
          >
            Recht, das<br />
            den <span style={{ fontStyle: 'italic', color: A.accent }}>Maschinenraum</span><br />
            versteht.
          </h1>

          <p style={{
            fontFamily: aSans, fontSize: 18, lineHeight: 1.55, color: A.ink2,
            maxWidth: 520, marginTop: 40,
          }}>
            Igor Kister berät Unternehmen und Privatpersonen in Vertrags-,
            Commercial-, Zivil- und Baurecht. Pragmatische Beratung mit Blick
            für wirtschaftliche Zusammenhänge — klar, verlässlich, ohne
            überflüssige Paragrafenprosa.
          </p>

          <div style={{ display: 'flex', gap: 14, marginTop: 44, flexWrap: 'wrap' }} className="hero-ctas">
            <a
              href="#kontakt"
              style={{
                fontFamily: aSans, fontSize: 14, color: A.paper, background: A.ink,
                padding: '14px 22px', borderRadius: 2, cursor: 'pointer', textDecoration: 'none',
              }}
            >
              Erstgespräch vereinbaren
            </a>
            <a
              href="#rechtsgebiete"
              style={{
                fontFamily: aSans, fontSize: 14, color: A.ink, border: `1px solid ${A.ink}`,
                padding: '13px 22px', borderRadius: 2, cursor: 'pointer', textDecoration: 'none',
                background: 'transparent',
              }}
            >
              Rechtsgebiete ansehen
            </a>
          </div>
        </div>

        <div style={{ position: 'relative', paddingTop: 40 }} className="hero-card">
          <div style={{
            background: A.paper,
            border: `1px solid ${A.line}`,
            padding: '44px 40px',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute', top: -12, left: 32,
              background: A.bg, padding: '0 10px',
            }}>
              <div style={{
                fontFamily: aSans, fontSize: 11, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: A.ink3, fontWeight: 500,
              }}>
                Kanzlei
              </div>
            </div>

            <div style={{ fontFamily: aSerif, fontSize: 44, color: A.ink, lineHeight: 1.05, letterSpacing: -0.8 }}>
              Igor Kister
            </div>
            <div style={{ fontFamily: aSerif, fontStyle: 'italic', fontSize: 20, color: A.accent, marginTop: 4 }}>
              Rechtsanwalt
            </div>

            <div style={{ height: 1, background: A.line, margin: '32px 0' }} />

            <div style={{
              display: 'grid', gridTemplateColumns: '110px 1fr',
              rowGap: 14, fontFamily: aSans, fontSize: 14,
            }} className="hero-visitenkarte-grid">
              <div style={{ color: A.ink3 }}>Schwerpunkte</div>
              <div style={{ color: A.ink }}>Vertragsrecht · Commercial · Baurecht · Zivilrecht</div>
              <div style={{ color: A.ink3 }}>Mandanten</div>
              <div style={{ color: A.ink }}>Unternehmen und Privatpersonen</div>
              <div style={{ color: A.ink3 }}>Sprachen</div>
              <div style={{ color: A.ink }}>Deutsch · Englisch · Russisch</div>
              <div style={{ color: A.ink3 }}>Zulassung</div>
              <div style={{ color: A.ink }}>Rechtsanwaltskammer Freiburg</div>
            </div>

            <div style={{ height: 1, background: A.line, margin: '32px 0' }} />

            <div style={{ fontFamily: aMono, fontSize: 11, color: A.ink3, letterSpacing: '0.08em', lineHeight: 1.8 }}>
              ELEFANTENWEG 71 · 79110 FREIBURG IM BREISGAU<br />
              KANZLEI@KISTER-LAW.DE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
