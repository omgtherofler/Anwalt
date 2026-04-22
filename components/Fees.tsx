import { A, aSans, aSerif, aMono } from '@/lib/theme';
import type { Translations } from '@/locales';

type Props = { t: Translations['fees'] };

export default function Fees({ t }: Props) {
  return (
    <section
      id="honorar"
      style={{ padding: '110px 0', background: A.bgAlt, borderTop: `1px solid ${A.line}` }}
      className="section-v-padding snap-section"
    >
      <div className="section-inner section-padding" style={{ maxWidth: 960, margin: '0 auto' }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
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
              margin: '24px 0 20px',
              letterSpacing: -1,
            }}
            className="section-title"
          >
            {t.h2Pre}{' '}
            <span style={{ fontStyle: 'italic' }}>{t.h2Accent}</span>
          </h2>
          <p
            style={{
              fontFamily: aSans,
              fontSize: 16,
              color: A.ink2,
              maxWidth: 560,
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            {t.subtitle}
          </p>
        </div>

        {/* Pricing cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            border: `1px solid ${A.ink}`,
            gap: 0,
          }}
          className="fees-grid"
        >
          {t.plans.map((plan, i) => (
            <div
              key={plan.t}
              style={{
                padding: '48px 44px',
                position: 'relative',
                background: plan.recommended ? A.ink : A.paper,
                color: plan.recommended ? A.paper : A.ink,
                borderRight: i === 0 ? `1px solid ${A.line}` : 'none',
              }}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  style={{
                    position: 'absolute',
                    top: -11,
                    left: 36,
                    background: plan.recommended ? A.accent : A.bgAlt,
                    border: `1px solid ${plan.recommended ? A.accent : A.line}`,
                    fontFamily: aMono,
                    fontSize: 10,
                    letterSpacing: '0.14em',
                    color: plan.recommended ? A.paper : A.ink3,
                    padding: '3px 10px',
                  }}
                >
                  {plan.recommended ? t.recommended : plan.badge}
                </div>
              )}

              {/* Title */}
              <div
                style={{
                  fontFamily: aSans,
                  fontSize: 11,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  color: plan.recommended ? 'rgba(250,248,243,0.6)' : A.ink3,
                }}
              >
                {plan.t}
              </div>

              {/* Price */}
              <div
                style={{
                  fontFamily: aSerif,
                  fontSize: 72,
                  lineHeight: 1,
                  marginTop: 20,
                  letterSpacing: -2,
                  color: plan.recommended ? A.paper : A.ink,
                }}
                className="fees-price"
              >
                {plan.p}
              </div>
              <div
                style={{
                  fontFamily: aMono,
                  fontSize: 11,
                  marginTop: 8,
                  letterSpacing: '0.08em',
                  color: plan.recommended ? 'rgba(250,248,243,0.55)' : A.ink3,
                }}
              >
                {plan.u}
              </div>

              <div
                style={{
                  height: 1,
                  margin: '32px 0',
                  background: plan.recommended ? 'rgba(250,248,243,0.15)' : A.line,
                }}
              />

              <p
                style={{
                  fontFamily: aSans,
                  fontSize: 15,
                  lineHeight: 1.65,
                  margin: 0,
                  color: plan.recommended ? 'rgba(250,248,243,0.8)' : A.ink2,
                }}
              >
                {plan.d}
              </p>

              {/* Credit hint for Erstberatung */}
              {!plan.recommended && (
                <div
                  style={{
                    marginTop: 24,
                    padding: '12px 16px',
                    background: A.bgAlt,
                    border: `1px solid ${A.line}`,
                    fontFamily: aMono,
                    fontSize: 11,
                    letterSpacing: '0.06em',
                    color: A.accent,
                  }}
                >
                  {t.creditNote}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* RVG note */}
        <div
          style={{
            marginTop: 28,
            padding: '20px 24px',
            background: A.paper,
            border: `1px solid ${A.line}`,
            display: 'flex',
            gap: 20,
            alignItems: 'center',
          }}
          className="fees-note"
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 18,
              background: A.accent,
              color: A.paper,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: aSerif,
              fontSize: 18,
              flexShrink: 0,
            }}
          >
            §
          </div>
          <div style={{ fontFamily: aSans, fontSize: 14, lineHeight: 1.6, color: A.ink2 }}>
            {t.rvgNote}
          </div>
        </div>
      </div>
    </section>
  );
}
