import { A, aSans, aSerif, aMono } from '@/lib/theme';
import type { Translations } from '@/locales';

type Props = { t: Translations['practice'] };

export default function Practice({ t }: Props) {
  return (
    <section
      id="rechtsgebiete"
      style={{ padding: '110px 0', background: A.bg }}
      className="section-v-padding snap-section"
    >
      <div className="section-inner section-padding">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 60,
          }}
          className="practice-header"
        >
          <div>
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
              {t.eyebrow}
            </div>
            <h2
              style={{
                fontFamily: aSerif,
                fontWeight: 400,
                fontSize: 56,
                lineHeight: 1.05,
                color: A.ink,
                margin: '24px 0 0',
                letterSpacing: -1,
                maxWidth: 700,
              }}
              className="section-title"
            >
              {t.h2Pre}
              <span style={{ fontStyle: 'italic' }}>{t.h2Accent}</span>.
            </h2>
          </div>
          <div
            style={{
              fontFamily: aSans,
              fontSize: 14,
              color: A.ink2,
              maxWidth: 320,
              lineHeight: 1.6,
            }}
          >
            {t.aside}
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            borderTop: `1px solid ${A.ink}`,
          }}
          className="practice-grid"
        >
          {t.areas.map((p, i) => (
            <div
              key={p.n}
              style={{
                padding: '40px 40px 48px',
                borderRight: i % 2 === 0 ? `1px solid ${A.line}` : 'none',
                borderBottom: i < 2 ? `1px solid ${A.line}` : 'none',
                background: A.bg,
                transition: 'background 0.2s',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: aMono, fontSize: 11, letterSpacing: '0.1em', color: A.ink3 }}>
                  § {p.n}
                </span>
                <span style={{ fontFamily: aSerif, fontSize: 18, color: A.accent }}>↗</span>
              </div>
              <h3
                style={{
                  fontFamily: aSerif,
                  fontWeight: 400,
                  fontSize: 42,
                  color: A.ink,
                  margin: '14px 0 18px',
                  letterSpacing: -0.6,
                }}
                className="practice-title"
              >
                {p.t}
              </h3>
              <p
                style={{
                  fontFamily: aSans,
                  fontSize: 15,
                  lineHeight: 1.65,
                  color: A.ink2,
                  maxWidth: 520,
                  margin: 0,
                }}
              >
                {p.d}
              </p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 24 }}>
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: aMono,
                      fontSize: 11,
                      letterSpacing: '0.05em',
                      color: A.ink2,
                      padding: '4px 10px',
                      border: `1px solid ${A.line}`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
