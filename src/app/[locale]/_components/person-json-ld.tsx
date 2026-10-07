import { useLocale } from 'next-intl';

import { profile } from '@/content/profile';
import { getPathname } from '@/i18n/navigation';
import { siteUrl } from '@/lib/site-url';

/** schema.org `Person` so search engines can link the site to its owner's profiles. */
export function PersonJsonLd() {
  const locale = useLocale();

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.fullName,
    alternateName: profile.name,
    jobTitle: profile.headline[locale],
    url: new URL(getPathname({ href: '/', locale }), siteUrl).href,
    sameAs: [profile.links.github, profile.links.linkedin],
    knowsLanguage: ['es', 'en'],
  };

  return (
    <script
      type="application/ld+json"
      // Escape `<` so the JSON can never close the script tag early.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, '\\u003c') }}
    />
  );
}
