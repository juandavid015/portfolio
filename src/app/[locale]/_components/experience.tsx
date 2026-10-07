import { useLocale, useTranslations } from 'next-intl';

import { experience, type ExperienceEntry } from '@/content/experience';
import type { Period, YearMonth } from '@/content/types';

import { Section } from './section';

/** `2025-09` → `09.2025` */
function formatYearMonth(value: YearMonth) {
  const [year, month] = value.split('-');
  return `${month}.${year}`;
}

function yearOf(value: YearMonth) {
  return Number(value.slice(0, 4));
}

/** Span of years covered by all entries, e.g. `2024 — 2026`. */
function yearRange(entries: readonly ExperienceEntry[], present: string) {
  const starts = entries.map(({ period }) => yearOf(period.start));
  const ends = entries.map(({ period }) => period.end);
  const isOngoing = ends.some((end) => end === undefined);
  const lastEnd = Math.max(...ends.filter((end) => end !== undefined).map(yearOf));

  return `${Math.min(...starts)} — ${isOngoing ? present : lastEnd}`;
}

export function Experience({ index }: { index: number }) {
  const t = useTranslations('Experience');
  const tSections = useTranslations('Sections');

  return (
    <Section
      id="experience"
      index={index}
      title={tSections('experience')}
      meta={yearRange(experience, t('present'))}
    >
      {experience.map((entry) => (
        <ExperienceItem key={entry.company} entry={entry} />
      ))}
    </Section>
  );
}

function ExperienceItem({ entry }: { entry: ExperienceEntry }) {
  const t = useTranslations('Experience');
  const locale = useLocale();
  const { company, period, role, summary, highlights } = entry;
  const isFeatured = highlights !== undefined;

  return (
    <article className="grid gap-px lg:grid-cols-[minmax(380px,1fr)_minmax(0,2fr)]">
      <header className="flex flex-col gap-2.5 bg-background px-6 py-7">
        <PeriodLabel period={period} present={t('present')} />
        <h3
          className={
            isFeatured
              ? 'text-[clamp(30px,3vw,42px)] leading-none type-display tracking-[-0.02em]'
              : 'text-2xl leading-none type-display tracking-[-0.01em]'
          }
        >
          {company}
        </h3>
        <p className="font-semibold">{role[locale]}</p>
        {isFeatured ? <p className="text-sm text-muted-foreground">{summary[locale]}</p> : null}
      </header>

      {isFeatured ? (
        <ol className="flex flex-col gap-4 bg-background px-6 py-7 text-[17px] leading-[1.45] sm:px-8">
          {highlights.map((highlight, position) => (
            <li key={highlight.en} className="flex gap-3.5">
              <span aria-hidden="true" className="font-mono text-xs leading-6.25 text-primary">
                {String(position + 1).padStart(2, '0')}
              </span>
              <span className="text-pretty">{highlight[locale]}</span>
            </li>
          ))}
        </ol>
      ) : (
        <p className="flex items-center bg-background px-6 py-7 text-muted-foreground sm:px-8">
          {summary[locale]}
        </p>
      )}
    </article>
  );
}

function PeriodLabel({ period, present }: { period: Period; present: string }) {
  const end = period.end ? formatYearMonth(period.end) : present;

  return (
    <p className="font-mono text-xs tracking-[0.08em]">
      <time dateTime={period.start}>{formatYearMonth(period.start)}</time>
      {' — '}
      {period.end ? <time dateTime={period.end}>{end}</time> : end}
    </p>
  );
}
