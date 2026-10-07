import { useTranslations } from 'next-intl';

import { edition } from '@/content/edition';

export function SiteFooter() {
  const t = useTranslations('Footer');

  return (
    <footer className="flex flex-wrap justify-between gap-x-4 gap-y-2 bg-background px-5 py-3.5 type-label">
      <span>© {edition.year} juandgr</span>
      <span>{t('madeIn')}</span>
    </footer>
  );
}
