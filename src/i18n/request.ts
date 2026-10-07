import { hasLocale, type Locale, type Messages } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import * as rootParams from 'next/root-params';

import { routing } from './routing';

/**
 * One loader per locale. `satisfies` makes every catalog type-check against
 * the English one, so a missing translation fails `pnpm typecheck`.
 */
const messageLoaders = {
  en: () => import('./messages/en.json'),
  es: () => import('./messages/es.json'),
} satisfies Record<Locale, () => Promise<{ default: Messages }>>;

export default getRequestConfig(async ({ locale }) => {
  // `locale` is only set when passed explicitly (e.g. `getTranslations({ locale })`);
  // otherwise it comes from the `[locale]` root segment.
  const requested = locale ?? (await rootParams.locale());

  if (!hasLocale(routing.locales, requested)) {
    notFound();
  }

  const { default: messages } = await messageLoaders[requested]();

  return { locale: requested, messages };
});
