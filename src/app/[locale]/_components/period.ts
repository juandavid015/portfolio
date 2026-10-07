import type { Period, YearMonth } from '@/content/types';

/** `2025-09` → `09.2025` */
export function formatYearMonth(value: YearMonth) {
  const [year, month] = value.split('-');
  return `${month}.${year}`;
}

function yearOf(value: YearMonth) {
  return Number(value.slice(0, 4));
}

/** Years spanned by all periods, e.g. `2024 — 2026`; `present` replaces the end while any is ongoing. */
export function formatYearRange(periods: readonly Period[], present: string) {
  const firstYear = Math.min(...periods.map(({ start }) => yearOf(start)));
  const ends = periods.map(({ end }) => end);

  if (ends.some((end) => end === undefined)) {
    return `${firstYear} — ${present}`;
  }

  const lastYear = Math.max(...ends.filter((end) => end !== undefined).map(yearOf));
  return `${firstYear} — ${lastYear}`;
}
