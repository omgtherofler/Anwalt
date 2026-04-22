'use client';

import { useState, useEffect } from 'react';
import { A, aSans, aSerif } from '@/lib/theme';
import type { Translations } from '@/locales';

type Props = { t: Translations['header']; lang: string };

export default function Header({ t, lang }: Props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        padding: '20px 64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: `1px solid ${A.line}`,
        background: A.bg,
        position: 'sticky',
        top: 0,
        zIndex: 50,
        transition: 'box-shadow 0.2s',
        boxShadow: scrolled ? '0 1px 12px rgba(31,29,26,0.07)' : 'none',
      }}
      className="header-section"
    >
      {/* Logo */}
      <a
        href={t.logoHref}
        style={{ display: 'flex', alignItems: 'baseline', gap: 14, textDecoration: 'none' }}
      >
        <span style={{ fontFamily: aSerif, fontSize: 22, color: A.ink, letterSpacing: -0.2 }}>
          Kanzlei <span style={{ fontStyle: 'italic' }}>Kister</span>
        </span>
      </a>

      {/* Nav */}
      <nav
        style={{ display: 'flex', gap: 34, fontFamily: aSans, fontSize: 14, color: A.ink2 }}
        className="nav-links"
      >
        {t.navItems.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            style={{ cursor: 'pointer', transition: 'color 0.15s', color: A.ink2, textDecoration: 'none' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = A.ink)}
            onMouseLeave={(e) => (e.currentTarget.style.color = A.ink2)}
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Right: lang + CTA */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }} className="header-right">
        {/* Language toggle */}
        <a
          href={t.langHref}
          title={lang === 'de' ? 'Switch to English' : 'Auf Deutsch wechseln'}
          style={{
            fontFamily: aSans,
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: '0.12em',
            color: A.ink3,
            border: `1px solid ${A.line}`,
            borderRadius: 2,
            padding: '6px 10px',
            textDecoration: 'none',
            transition: 'color 0.15s, border-color 0.15s',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = A.ink;
            (e.currentTarget as HTMLElement).style.borderColor = A.ink;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = A.ink3;
            (e.currentTarget as HTMLElement).style.borderColor = A.line;
          }}
        >
          {t.langLabel}
        </a>

        {/* CTA */}
        <a
          href="#kontakt"
          style={{
            fontFamily: aSans,
            fontSize: 13,
            color: A.paper,
            background: A.ink,
            padding: '10px 18px',
            borderRadius: 2,
            cursor: 'pointer',
            letterSpacing: 0.1,
            textDecoration: 'none',
            transition: 'opacity 0.15s',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.82')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          {t.cta}
        </a>
      </div>
    </header>
  );
}
