import type { MetadataRoute } from 'next';

import { getLanguageAlternates } from '@/i18n/alternates';
import { getPathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { siteUrl } from '@/lib/site-url';

const pages = ['/'];

function absolute(path: string) {
  return new URL(path, siteUrl).href;
}

/** One entry per page and locale, each listing every language version (hreflang). */
export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((href) => {
    const languages = Object.fromEntries(
      Object.entries(getLanguageAlternates(href)).map(([hreflang, path]) => [
        hreflang,
        absolute(path),
      ]),
    );

    return routing.locales.map((locale) => ({
      url: absolute(getPathname({ href, locale })),
      alternates: { languages },
    }));
  });
}
