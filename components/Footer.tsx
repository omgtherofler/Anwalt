'use client';

import { A, aSans, aSerif, aMono } from '@/lib/theme';
import type { Translations } from '@/locales';

type Props = { t: Translations['footer'] };

export default function Footer({ t }: Props) {
  return (
    <footer
      style={{
        padding: '50px 64px 36px',
        background: A.bg,
        borderTop: `1px solid ${A.line}`,
      }}
      className="section-padding"
    >
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'end' }}
        className="footer-grid"
      >
        <div>
          <div
            style={{ fontFamily: aSerif, fontSize: 28, color: A.ink, letterSpacing: -0.3 }}
          >
            Kanzlei <span style={{ fontStyle: 'italic' }}>Kister</span>
          </div>
          <div
            style={{
              fontFamily: aMono,
              fontSize: 11,
              color: A.ink3,
              letterSpacing: '0.1em',
              marginTop: 8,
            }}
          >
            {t.tagline}
          </div>
        </div>

        <nav
          style={{ display: 'flex', gap: 28, fontFamily: aSans, fontSize: 13, color: A.ink2 }}
          className="footer-links"
        >
          {t.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{ color: A.ink2, textDecoration: 'none', transition: 'color 0.15s' }}
              className="footer-link"
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) =>
                (e.currentTarget.style.color = A.ink)
              }
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) =>
                (e.currentTarget.style.color = A.ink2)
              }
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div
        style={{
          marginTop: 28,
          paddingTop: 20,
          borderTop: `1px solid ${A.line}`,
          fontFamily: aMono,
          fontSize: 10,
          color: A.ink3,
          letterSpacing: '0.1em',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 8,
        }}
        className="footer-bottom"
      >
        <span>{t.copyright}</span>
        <span>{t.design}</span>
      </div>
    </footer>
  );
}
