import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: 180,
        height: 180,
        background: '#1f1d1a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span
        style={{
          fontFamily: 'Georgia, serif',
          fontStyle: 'italic',
          fontSize: 110,
          color: '#faf8f3',
          lineHeight: 1,
          marginTop: 8,
        }}
      >
        §
      </span>
    </div>,
    { ...size }
  );
}
