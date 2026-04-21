'use client';

import { A, aSans, aSerif } from '@/lib/theme';

const navItems = [
  { label: 'Profil', href: '#profil' },
  { label: 'Rechtsgebiete', href: '#rechtsgebiete' },
  { label: 'Erfahrungen', href: '#erfahrungen' },
  { label: 'Honorar', href: '#honorar' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Header() {
  return (
    <header style={{
      padding: '22px 64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: `1px solid ${A.line}`,
      background: A.bg,
      position: 'sticky',
      top: 0,
      zIndex: 10,
    }} className="header-section">
      <a href="/" style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: 14,
        textDecoration: 'none',
      }}>
        <span style={{ fontFamily: aSerif, fontSize: 22, color: A.ink, letterSpacing: -0.2 }}>
          Kanzlei <span style={{ fontStyle: 'italic' }}>Kister</span>
        </span>
      </a>

      <nav style={{ display: 'flex', gap: 34, fontFamily: aSans, fontSize: 14, color: A.ink2 }} className="nav-links">
        {navItems.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            style={{
              cursor: 'pointer',
              transition: 'color 0.15s',
              color: A.ink2,
              textDecoration: 'none',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = A.ink)}
            onMouseLeave={e => (e.currentTarget.style.color = A.ink2)}
          >
            {label}
          </a>
        ))}
      </nav>

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
        onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
      >
        Erstgespräch anfragen →
      </a>
    </header>
  );
}
