import { A, aSans, aSerif, aMono } from '@/lib/theme';
import type { Translations } from '@/locales';

type Props = { t: Translations['hero'] };

export default function Hero({ t }: Props) {
  return (
    <section
      id="hero"
      style={{ padding: '90px 0 110px', background: A.bg }}
      className="section-v-padding snap-section"
    >
      <div className="section-inner section-padding">
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}
          className="hero-grid"
        >
          {/* Left column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 40 }}>
              <span style={{ width: 36, height: 1, background: A.ink, flexShrink: 0 }} />
              <div
                style={{
                  fontFamily: aSans,
                  fontSize: 11,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: A.ink2,
                  fontWeight: 500,
                }}
              >
                {t.eyebrow}
              </div>
            </div>

            <h1
              style={{
                fontFamily: aSerif,
                fontWeight: 400,
                fontSize: 92,
                lineHeight: 0.98,
                color: A.ink,
                margin: 0,
                letterSpacing: -2,
              }}
              className="hero-title"
            >
              {t.h1Pre}
              <br />
              {t.h1Mid}
              <span style={{ fontStyle: 'italic', color: A.accent }}>{t.h1Accent}</span>
              <br />
              {t.h1Post}
            </h1>

            <p
              style={{
                fontFamily: aSans,
                fontSize: 18,
                lineHeight: 1.55,
                color: A.ink2,
                maxWidth: 520,
                marginTop: 40,
              }}
            >
              {t.body}
            </p>

            <div
              style={{ display: 'flex', gap: 14, marginTop: 44, flexWrap: 'wrap' }}
              className="hero-ctas"
            >
              <a
                href="#kontakt"
                style={{
                  fontFamily: aSans,
                  fontSize: 14,
                  color: A.paper,
                  background: A.ink,
                  padding: '14px 22px',
                  borderRadius: 2,
                  cursor: 'pointer',
                  textDecoration: 'none',
                }}
              >
                {t.cta1}
              </a>
              <a
                href="#rechtsgebiete"
                style={{
                  fontFamily: aSans,
                  fontSize: 14,
                  color: A.ink,
                  border: `1px solid ${A.ink}`,
                  padding: '13px 22px',
                  borderRadius: 2,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  background: 'transparent',
                }}
              >
                {t.cta2}
              </a>
            </div>
          </div>

          {/* Business card */}
          <div style={{ position: 'relative', paddingTop: 40 }} className="hero-card">
            <div
              style={{
                background: A.paper,
                border: `1px solid ${A.line}`,
                padding: '44px 40px',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: -12,
                  left: 32,
                  background: A.bg,
                  padding: '0 10px',
                }}
              >
                <div
                  style={{
                    fontFamily: aSans,
                    fontSize: 11,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: A.ink3,
                    fontWeight: 500,
                  }}
                >
                  {t.card.label}
                </div>
              </div>

              <div
                style={{
                  fontFamily: aSerif,
                  fontSize: 44,
                  color: A.ink,
                  lineHeight: 1.05,
                  letterSpacing: -0.8,
                }}
              >
                {t.card.name}
              </div>
              <div
                style={{
                  fontFamily: aSerif,
                  fontStyle: 'italic',
                  fontSize: 20,
                  color: A.accent,
                  marginTop: 4,
                }}
              >
                {t.card.title}
              </div>

              <div style={{ height: 1, background: A.line, margin: '32px 0' }} />

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '110px 1fr',
                  rowGap: 14,
                  fontFamily: aSans,
                  fontSize: 14,
                }}
                className="hero-visitenkarte-grid"
              >
                {t.card.rows.map(([label, value]) => (
                  <>
                    <div key={`l-${label}`} style={{ color: A.ink3 }}>
                      {label}
                    </div>
                    <div key={`v-${label}`} style={{ color: A.ink }}>
                      {value}
                    </div>
                  </>
                ))}
              </div>

              <div style={{ height: 1, background: A.line, margin: '32px 0' }} />

              <div
                style={{
                  fontFamily: aMono,
                  fontSize: 11,
                  color: A.ink3,
                  letterSpacing: '0.08em',
                  lineHeight: 1.8,
                }}
              >
                ELEFANTENWEG 71 · 79110 FREIBURG IM BREISGAU
                <br />
                IGOR@KANZLEI-KISTER.COM · 0155 60873381
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
