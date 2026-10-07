import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { NotFoundMessage } from '@/components/not-found-message';
import { buttonVariants } from '@/components/ui/button';
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
      <body className="px-4 py-6 sm:px-6 sm:py-10 lg:px-10">
        <main className="mx-auto grid max-w-340 gap-px border bg-foreground md:grid-cols-2">
          {translations.map(({ locale, t }) => (
            <NotFoundMessage
              key={locale}
              lang={locale}
              title={t('title')}
              description={t('description')}
              action={
                // Plain anchor: this page renders outside the locale-aware navigation.
                <a href={`/${locale}`} className={buttonVariants({ variant: 'outline' })}>
                  {t('backHome')}
                </a>
              }
            />
          ))}
        </main>
      </body>
    </html>
  );
}
