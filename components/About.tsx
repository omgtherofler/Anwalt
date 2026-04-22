import Image from 'next/image';
import { A, aSans, aSerif, aMono } from '@/lib/theme';
import type { Translations } from '@/locales';

type Props = { t: Translations['about'] };

export default function About({ t }: Props) {
  return (
    <section
      id="profil"
      style={{ padding: '110px 0', background: A.bgAlt, borderTop: `1px solid ${A.line}` }}
      className="section-v-padding snap-section"
    >
      <div className="section-inner section-padding">
        <div
          style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: 80 }}
          className="about-grid"
        >
          <div className="about-portrait">
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
            <div
              style={{
                marginTop: 28,
                width: 200,
                aspectRatio: '3/4',
                position: 'relative',
                overflow: 'hidden',
                border: `1px solid ${A.line}`,
              }}
            >
              <Image
                src="/portrait.jpg"
                alt="Igor Kister, Rechtsanwalt"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                sizes="200px"
                priority
              />
            </div>
            <div
              style={{
                marginTop: 14,
                fontFamily: aMono,
                fontSize: 10,
                color: A.ink3,
                letterSpacing: '0.1em',
              }}
            >
              {t.figCaption}
            </div>
          </div>

          <div style={{ paddingTop: 28 }}>
            <h2
              style={{
                fontFamily: aSerif,
                fontWeight: 400,
                fontSize: 56,
                lineHeight: 1.05,
                color: A.ink,
                margin: 0,
                letterSpacing: -1,
              }}
              className="about-title"
            >
              {t.h2Pre}
              <br />
              <span style={{ fontStyle: 'italic', color: A.accent }}>{t.h2Accent}</span>.
            </h2>

            <div
              style={{
                marginTop: 40,
                fontFamily: aSerif,
                fontSize: 22,
                lineHeight: 1.55,
                color: A.ink,
                maxWidth: 680,
              }}
              className="about-body"
            >
              {t.body}
            </div>

            <div
              style={{
                marginTop: 32,
                fontFamily: aSans,
                fontSize: 15,
                lineHeight: 1.7,
                color: A.ink2,
                maxWidth: 620,
                columnCount: 2,
                columnGap: 40,
              }}
              className="about-2col"
            >
              {t.body2}
            </div>

            <div
              style={{ marginTop: 44, display: 'flex', gap: 32, flexWrap: 'wrap' }}
              className="about-principles"
            >
              {t.principles.map((x, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    fontFamily: aSans,
                    fontSize: 14,
                    color: A.ink,
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: 3,
                      background: A.accent,
                      flexShrink: 0,
                    }}
                  />
                  {x}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
