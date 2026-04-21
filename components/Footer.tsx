import { A, aSans, aSerif, aMono } from '@/lib/theme';

export default function Footer() {
  return (
    <footer
      style={{ padding: '50px 64px 36px', background: A.bg, borderTop: `1px solid ${A.line}` }}
      className="section-padding"
    >
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'end' }}
        className="footer-grid"
      >
        <div>
          <div style={{ fontFamily: aSerif, fontSize: 28, color: A.ink, letterSpacing: -0.3 }}>
            Kanzlei <span style={{ fontStyle: 'italic' }}>Kister</span>
          </div>
          <div style={{ fontFamily: aMono, fontSize: 11, color: A.ink3, letterSpacing: '0.1em', marginTop: 8 }}>
            IGOR KISTER · RECHTSANWALT · FREIBURG IM BREISGAU
          </div>
        </div>

        <div
          style={{ display: 'flex', gap: 28, fontFamily: aSans, fontSize: 13, color: A.ink2 }}
          className="footer-links"
        >
          <a href="/impressum" style={{ color: A.ink2, textDecoration: 'none', transition: 'color 0.15s' }} className="footer-link">
            Impressum
          </a>
          <a href="/datenschutz" style={{ color: A.ink2, textDecoration: 'none', transition: 'color 0.15s' }} className="footer-link">
            Datenschutz
          </a>
          <a href="/impressum#berufsrecht" style={{ color: A.ink2, textDecoration: 'none', transition: 'color 0.15s' }} className="footer-link">
            Berufsrechtliche Hinweise
          </a>
        </div>
      </div>

      <div
        style={{
          marginTop: 28, paddingTop: 20, borderTop: `1px solid ${A.line}`,
          fontFamily: aMono, fontSize: 10, color: A.ink3, letterSpacing: '0.1em',
          display: 'flex', justifyContent: 'space-between',
        }}
        className="footer-bottom"
      >
        <span>© 2026 IGOR KISTER</span>
        <span>DESIGN N° 01 / EDITORIAL SERIF</span>
      </div>
    </footer>
  );
}
