import type { MetadataRoute } from 'next';

const BASE = 'https://www.kanzlei-kister.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const langs = ['de', 'en'];
  const routes = ['', '/impressum', '/datenschutz'];

  return langs.flatMap((lang) =>
    routes.map((route) => ({
      url: `${BASE}/${lang}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'monthly' : 'yearly',
      priority: route === '' ? 1.0 : 0.5,
      alternates: {
        languages: Object.fromEntries(langs.map((l) => [l, `${BASE}/${l}${route}`])),
      },
    }))
  ) as MetadataRoute.Sitemap;
}
