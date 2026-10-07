import { useLocale, useTranslations } from 'next-intl';

import { profile } from '@/content/profile';

export function Contact({ index }: { index: number }) {
  const t = useTranslations('Contact');
  const tSections = useTranslations('Sections');
  const locale = useLocale();

  const links = [
    { label: t('github'), href: profile.links.github },
    { label: t('linkedin'), href: profile.links.linkedin },
    { label: t('cv'), href: profile.cv[locale] },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="flex scroll-mt-4 flex-wrap items-end justify-between gap-8 bg-background px-8 py-11"
    >
      <div className="flex flex-col gap-3.5">
        <p className="type-label">
          {String(index).padStart(2, '0')} — {tSections('contact')}
        </p>
        <h2
          id="contact-heading"
          className="text-[clamp(36px,5vw,72px)] leading-[0.95] type-display tracking-[-0.03em]"
        >
          {t('heading')}
        </h2>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex min-h-11 items-center text-[clamp(20px,2.2vw,30px)] font-semibold break-all text-primary underline underline-offset-4 hover:text-foreground"
        >
          {profile.email}
        </a>
      </div>

      <ul className="flex flex-wrap gap-x-7 gap-y-1 type-label">
        {links.map(({ label, href }) => (
          <li key={label}>
            <a href={href} className="inline-flex min-h-11 items-center hover:text-primary">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
