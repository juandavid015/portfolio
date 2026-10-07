import type { MetadataRoute } from 'next';

import { siteUrl } from '@/lib/site-url';

// Vercel already sends `X-Robots-Tag: noindex` for preview deployments.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: new URL('/sitemap.xml', siteUrl).href,
  };
}
