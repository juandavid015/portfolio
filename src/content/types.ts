import type { Locale } from 'next-intl';

/**
 * Content vs. messages:
 * - `src/content` is what the portfolio says about its owner (profile,
 *   experience, about). Records keep every translation side by side, so a
 *   missing locale is a type error at the exact field.
 * - `src/i18n/messages` is interface copy owned by the design (labels,
 *   section titles, buttons).
 */
export type Localized<T = string> = Readonly<Record<Locale, T>>;

type Month = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12';

/** ISO 8601 year and month, e.g. `2025-09`. */
export type YearMonth = `${number}-${Month}`;

export type Period = {
  start: YearMonth;
  /** Omitted while the role is ongoing. */
  end?: YearMonth;
};
