export const dynamic = 'force-static';

import { SITE_URL } from '@/lib/site';

// Single-page site: only the home URL belongs in the sitemap (#anchors are not
// separate pages). Add new URLs here when feature pages / blog posts launch.
export default function sitemap() {
  return [{ url: `${SITE_URL}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 }];
}
