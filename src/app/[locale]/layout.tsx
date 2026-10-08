import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages, getTranslations } from 'next-intl/server';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { profile } from '@/content/profile';
import { ogLocales } from '@/i18n/alternates';
import { routing } from '@/i18n/routing';
import { fontVariables } from '@/lib/fonts';
import { siteUrl } from '@/lib/site-url';

import '../globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/**
 * Site-wide defaults. Pages add their own `alternates` (canonical and hreflang),
 * and `opengraph-image.tsx` in this segment supplies the share image.
 */
export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations('Metadata');
  const title = t('title');
  const description = t('description');

  return {
    metadataBase: siteUrl,
    title,
    description,
    authors: [{ name: profile.fullName, url: siteUrl }],
    creator: profile.fullName,
    // Search Console ownership token; the tag is omitted when the variable is unset.
    verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
    openGraph: {
      type: 'website',
      siteName: profile.name,
      title,
      description,
      locale: ogLocales[locale],
      alternateLocale: routing.locales
        .filter((other) => other !== locale)
        .map((other) => ogLocales[other]),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
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
