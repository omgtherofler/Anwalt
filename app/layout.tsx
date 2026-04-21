import type { Metadata } from 'next';
import { Instrument_Serif, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

const inter = Inter({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kanzlei Kister — Rechtsanwalt Freiburg im Breisgau',
  description:
    'Igor Kister, Rechtsanwalt in Freiburg im Breisgau. Beratung in Vertragsrecht, Commercial, Zivilrecht und Baurecht. Pragmatisch, klar und verlässlich.',
  keywords: ['Rechtsanwalt', 'Freiburg', 'Vertragsrecht', 'Commercial', 'Baurecht', 'Zivilrecht'],
  openGraph: {
    title: 'Kanzlei Kister',
    description: 'Rechtsanwalt Igor Kister — Freiburg im Breisgau',
    type: 'website',
    locale: 'de_DE',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="de"
      className={`${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
