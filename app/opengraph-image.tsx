import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Kanzlei Kister — Igor Kister, Rechtsanwalt Freiburg';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#1f1d1a',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          fontFamily: 'Georgia, serif',
          position: 'relative',
        }}
      >
        {/* Decorative § */}
        <div
          style={{
            position: 'absolute',
            right: -40,
            top: -60,
            fontSize: 560,
            color: 'rgba(250,248,243,0.04)',
            lineHeight: 1,
            fontFamily: 'Georgia, serif',
          }}
        >
          §
        </div>

        {/* Top: eyebrow */}
        <div
          style={{
            fontSize: 13,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(250,248,243,0.5)',
            fontFamily: 'monospace',
          }}
        >
          RECHTSANWALT · FREIBURG IM BREISGAU
        </div>

        {/* Center: name */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div
            style={{
              fontSize: 88,
              fontWeight: 400,
              color: '#faf8f3',
              lineHeight: 0.95,
              letterSpacing: -2,
              fontFamily: 'Georgia, serif',
            }}
          >
            Kanzlei
          </div>
          <div
            style={{
              fontSize: 88,
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#b8936a',
              lineHeight: 0.95,
              letterSpacing: -2,
              fontFamily: 'Georgia, serif',
            }}
          >
            Kister
          </div>
        </div>

        {/* Bottom: tagline + separator */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div
            style={{
              width: 48,
              height: 1,
              background: 'rgba(250,248,243,0.3)',
            }}
          />
          <div
            style={{
              fontSize: 20,
              color: 'rgba(250,248,243,0.65)',
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
            }}
          >
            Vertragsrecht · Commercial · Zivilrecht · Baurecht
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
