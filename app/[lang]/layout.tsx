import type { Metadata } from 'next';
import { Instrument_Serif, Inter, JetBrains_Mono } from 'next/font/google';
import '../globals.css';
import { getT, type Lang } from '@/locales';

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

const BASE_URL = 'https://www.kanzlei-kister.com';

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const t = getT(params.lang);
  const lang = params.lang as Lang;
  const altLang = lang === 'de' ? 'en' : 'de';

  return {
    title: t.meta.title,
    description: t.meta.description,
    keywords: t.meta.keywords,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        de: '/de',
        en: '/en',
        'x-default': '/de',
      },
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      url: `${BASE_URL}/${lang}`,
      siteName: 'Kanzlei Kister',
      locale: lang === 'de' ? 'de_DE' : 'en_GB',
      alternateLocale: altLang === 'de' ? 'de_DE' : 'en_GB',
      type: 'website',
      images: [
        {
          url: `${BASE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'Kanzlei Kister — Igor Kister, Rechtsanwalt Freiburg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta.title,
      description: t.meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export async function generateStaticParams() {
  return [{ lang: 'de' }, { lang: 'en' }];
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Kanzlei Kister',
  description:
    'Rechtsanwaltskanzlei in Freiburg im Breisgau. Spezialisiert auf Vertragsrecht, Commercial, Zivilrecht und Baurecht.',
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  image: `${BASE_URL}/portrait.jpg`,
  telephone: '+4915560873381',
  email: 'Igor@kanzlei-kister.com',
  founder: {
    '@type': 'Person',
    name: 'Igor Kister',
    jobTitle: 'Rechtsanwalt',
    knowsLanguage: ['de', 'en', 'ru'],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Elefantenweg 71',
    addressLocality: 'Freiburg im Breisgau',
    postalCode: '79110',
    addressCountry: 'DE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.0,
    longitude: 7.85,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: { '@type': 'GeoCoordinates', latitude: 48.0, longitude: 7.85 },
    geoRadius: '200000',
  },
  priceRange: '€€',
  hasMap: 'https://maps.google.com/?q=Elefantenweg+71,+79110+Freiburg+im+Breisgau',
  sameAs: [],
};

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html
      lang={params.lang}
      className={`${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
