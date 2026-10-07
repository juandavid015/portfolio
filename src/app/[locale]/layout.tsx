import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages, getTranslations } from 'next-intl/server';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { routing } from '@/i18n/routing';
import { fontVariables } from '@/lib/fonts';

import '../globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata');

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function LocaleLayout({ children }: LayoutProps<'/[locale]'>) {
  const locale = await getLocale();
  const messages = await getMessages();
  const t = await getTranslations('Layout');

  return (
    <html lang={locale} className={fontVariables}>
      <body className="px-4 py-6 sm:px-6 sm:py-10 lg:px-10">
        <a
          href="#main"
          className="sr-only bg-primary px-4 py-3 type-label text-primary-foreground focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-10"
        >
          {t('skipToContent')}
        </a>
        {/* Only client components' messages are sent to the browser. */}
        <NextIntlClientProvider messages={{ LocaleSwitcher: messages.LocaleSwitcher }}>
          <div className="mx-auto flex max-w-340 flex-col gap-px border bg-foreground">
            <SiteHeader />
            {children}
            <SiteFooter />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
