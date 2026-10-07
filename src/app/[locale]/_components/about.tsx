import { useLocale, useTranslations } from 'next-intl';

import { about } from '@/content/about';
import { edition } from '@/content/edition';

import { Section } from './section';

export function About({ index }: { index: number }) {
  const t = useTranslations('About');
  const tSections = useTranslations('Sections');
  const locale = useLocale();

  return (
    <Section
      id="about"
      index={index}
      title={tSections('about')}
      meta={t('revision', { year: String(edition.year) })}
    >
      <div className="grid gap-px lg:grid-cols-3">
        <div className="flex flex-col gap-4.5 bg-background p-6">
          <h3 className="type-label">{t('origin')}</h3>
          <p className="text-2xl leading-tight font-semibold tracking-[-0.01em] text-pretty font-stretch-[112%]">
            {about.origin.lead[locale]}
          </p>
          <p className="leading-normal text-pretty text-muted-foreground">
            {about.origin.body[locale]}
          </p>
        </div>

        <div className="flex flex-col gap-4 bg-background p-6">
          <h3 className="type-label">{t('howIWork')}</h3>
          <ol>
            {about.principles.map((principle, position) => (
              <li key={principle.title.en} className="flex gap-4 border-t py-3.5">
                <span
                  aria-hidden="true"
                  className="w-7 shrink-0 font-mono text-xs leading-5.5 text-primary"
                >
                  {String(position + 1).padStart(2, '0')}
                </span>
                <div className="flex flex-col gap-0.75">
                  <h4 className="text-[17px] font-bold">{principle.title[locale]}</h4>
                  <p className="text-[15px] leading-[1.45] text-muted-foreground">
                    {principle.description[locale]}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex flex-col gap-4 bg-background p-6">
          <h3 className="type-label">{t('palette')}</h3>
          <ul className="flex flex-wrap gap-3.5 font-mono text-[10px] tracking-[0.04em]">
            {Object.entries(edition.palette).map(([token, hex]) => (
              <li key={token} className="flex flex-col items-center gap-2">
                {/* The swatch shows the token itself, so the palette can't drift from globals.css. */}
                <span
                  aria-hidden="true"
                  className="size-10 rounded-full border"
                  style={{ backgroundColor: `var(--${token})` }}
                />
                {hex.slice(1)}
              </li>
            ))}
          </ul>

          <h3 className="mt-3 type-label">{t('editions')}</h3>
          <ul className="font-mono text-[13px] tracking-[0.04em]">
            <li className="flex min-h-11 items-center justify-between gap-3 border-t">
              <span>{edition.year}</span>
              <span className="inline-flex items-center gap-2">
                <span aria-hidden="true" className="size-2.25 rounded-full bg-primary" />
                {t('currentEdition')}
              </span>
            </li>
            {edition.past.map(({ year, url }) => (
              <li key={year}>
                <a
                  href={url}
                  className="flex min-h-11 items-center justify-between gap-3 border-t hover:text-primary"
                >
                  <span>{year}</span>
                  <span aria-hidden="true">→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
