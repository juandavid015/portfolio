import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { routing } from '@/i18n/routing';
import { fontVariables } from '@/lib/fonts';

import './globals.css';

export const metadata: Metadata = {
  title: '404',
};

/**
 * 404 for URLs that match no route. It renders outside the `[locale]` layout,
 * so the visitor's locale is unknown: the message is shown in every locale.
 */
export default async function GlobalNotFound() {
  const translations = await Promise.all(
    routing.locales.map(async (locale) => ({
      locale,
      t: await getTranslations({ locale, namespace: 'NotFound' }),
    })),
  );

  return (
    <html lang={routing.defaultLocale} className={fontVariables}>
      <body>
        <main>
          {translations.map(({ locale, t }) => (
            <section key={locale} lang={locale}>
              <h1>{t('title')}</h1>
              <p>{t('description')}</p>
              <a href={`/${locale}`}>{t('backHome')}</a>
            </section>
          ))}
        </main>
      </body>
    </html>
  );
}
