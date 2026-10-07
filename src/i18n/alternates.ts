import type { Locale } from 'next-intl';

import { getPathname } from './navigation';
import { routing } from './routing';

/** Open Graph locale per app locale. */
export const ogLocales = {
  en: 'en_US',
  es: 'es_CO',
} as const satisfies Record<Locale, string>;

/**
 * Localized paths of one page, keyed by `hreflang`. `x-default` points to the
 * unprefixed path, where the proxy picks the visitor's language.
 */
export function getLanguageAlternates(href: string): Record<string, string> {
  return {
    ...Object.fromEntries(routing.locales.map((locale) => [locale, getPathname({ href, locale })])),
    'x-default': href,
  };
}
