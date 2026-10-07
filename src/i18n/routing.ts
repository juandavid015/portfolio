import { defineRouting } from 'next-intl/routing';

const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;

/**
 * Locale resolution order (handled by `src/proxy.ts`):
 * 1. Locale prefix in the URL (`/en`, `/es`)
 * 2. Cookie with the visitor's last explicit choice
 * 3. The browser's `Accept-Language` header
 * 4. `defaultLocale`
 */
export const routing = defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'en',
  localeCookie: { maxAge: ONE_YEAR_IN_SECONDS },
});
