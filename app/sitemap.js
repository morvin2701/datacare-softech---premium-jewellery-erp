export const dynamic = 'force-static';

import { SITE_URL } from '@/lib/site';
import { landingPages } from '@/lib/landing';

// Home + the landing pages in lib/landing.js (#anchors are not separate pages).
export default function sitemap() {
  const now = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    ...landingPages.map((p) => ({ url: `${SITE_URL}/${p.slug}/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 })),
  ];
}
