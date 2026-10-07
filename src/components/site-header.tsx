import { useTranslations } from 'next-intl';

import { edition } from '@/content/edition';
import { Link } from '@/i18n/navigation';

import { LocaleSwitcher } from './locale-switcher';
import { Logo } from './logo';

const sections = ['experience', 'about', 'contact'] as const;

export function SiteHeader() {
  const t = useTranslations('Header');
  const tSections = useTranslations('Sections');

  return (
    <header className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 bg-background px-5 py-3.5 type-label">
      <div className="flex items-center gap-3.5">
        <Link href="/" aria-label={t('homeLabel')} className="inline-flex min-h-11 items-center">
          <Logo className="h-5.25 w-auto" />
        </Link>
        <span>{t('editionShort', { year: String(edition.year).slice(-2) })}</span>
      </div>

      <span className="max-md:hidden">{t('edition', { year: String(edition.year) })}</span>

      <div className="flex flex-wrap items-center gap-x-7">
        <nav aria-label={t('navLabel')}>
          <ul className="flex flex-wrap gap-x-7">
            {sections.map((section) => (
              <li key={section}>
                <Link
                  href={{ pathname: '/', hash: section }}
                  className="inline-flex min-h-11 items-center hover:text-primary"
                >
                  {tSections(section)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <LocaleSwitcher />
      </div>
    </header>
  );
}
