import { A, aSans, aSerif, aMono } from '@/lib/theme';
import type { Translations } from '@/locales';

type Props = { t: Translations['cv'] };

export default function CV({ t }: Props) {
  return (
    <section
      id="erfahrungen"
      style={{ padding: '110px 0', background: A.paper, borderTop: `1px solid ${A.line}` }}
      className="section-v-padding snap-section"
    >
      <div className="section-inner section-padding">
        <div
          style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 80 }}
          className="cv-grid"
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
              }}
              className="section-title"
            >
              {t.h2Pre}
              <br />
              <span style={{ fontStyle: 'italic' }}>{t.h2Accent}</span>
            </h2>
            <p
              style={{
                fontFamily: aSans,
                fontSize: 14,
                color: A.ink2,
                marginTop: 24,
                lineHeight: 1.6,
              }}
            >
              {t.note}
            </p>
          </div>

          <div>
            {t.entries.map((row, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '180px 1fr',
                  gap: 32,
                  padding: '28px 0',
                  borderTop: `1px solid ${A.line}`,
                  borderBottom: i === t.entries.length - 1 ? `1px solid ${A.line}` : 'none',
                  alignItems: 'baseline',
                }}
                className="cv-row"
              >
                <div
                  style={{
                    fontFamily: aMono,
                    fontSize: 12,
                    color: A.ink3,
                    letterSpacing: '0.08em',
                  }}
                >
                  {row[0]}
                </div>
                <div>
                  <div
                    style={{ fontFamily: aSerif, fontSize: 26, color: A.ink, lineHeight: 1.2 }}
                    className="cv-entry-title"
                  >
                    {row[1]}
                  </div>
                  <div
                    style={{ fontFamily: aSans, fontSize: 14, color: A.ink2, marginTop: 6 }}
                  >
                    {row[2]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
