import { useTranslations } from 'next-intl';

import { NotFoundMessage } from '@/components/not-found-message';
import { buttonVariants } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';

export default function NotFound() {
  const t = useTranslations('NotFound');

  return (
    <main id="main" className="flex flex-col">
      <NotFoundMessage
        title={t('title')}
        description={t('description')}
        action={
          <Link href="/" className={buttonVariants({ variant: 'outline' })}>
            {t('backHome')}
          </Link>
        }
      />
    </main>
  );
}
