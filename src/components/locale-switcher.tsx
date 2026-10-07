'use client';

import { useLocale, useTranslations } from 'next-intl';

import { Link, usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { cn } from '@/lib/utils';

/** Links to the current page in every locale. Choosing one stores it in the locale cookie. */
export function LocaleSwitcher({ className }: { className?: string }) {
  const t = useTranslations('LocaleSwitcher');
  const currentLocale = useLocale();
  const pathname = usePathname();

  return (
    <nav aria-label={t('label')} className={cn('flex gap-3', className)}>
      {routing.locales.map((locale) => {
        const isCurrent = locale === currentLocale;

        return (
          <Link
            key={locale}
            href={pathname}
            locale={locale}
            lang={locale}
            hrefLang={locale}
            aria-label={t(locale)}
            aria-current={isCurrent ? 'true' : undefined}
            className={cn(
              'inline-flex min-h-11 items-center hover:text-primary',
              isCurrent && 'underline decoration-2 underline-offset-4',
            )}
          >
            {locale}
          </Link>
        );
      })}
    </nav>
  );
}
