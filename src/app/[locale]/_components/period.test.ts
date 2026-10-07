import { describe, expect, it } from 'vitest';

import { formatYearMonth, formatYearRange } from './period';

describe('formatYearMonth', () => {
  it('formats as MM.YYYY', () => {
    expect(formatYearMonth('2025-09')).toBe('09.2025');
    expect(formatYearMonth('2024-12')).toBe('12.2024');
  });
});

describe('formatYearRange', () => {
  it('spans the earliest start to the latest end', () => {
    const periods = [
      { start: '2025-09', end: '2026-10' },
      { start: '2024-01', end: '2024-06' },
    ] as const;

    expect(formatYearRange(periods, 'Present')).toBe('2024 — 2026');
  });

  it('ends with the present label while any period is ongoing', () => {
    const periods = [{ start: '2025-09' }, { start: '2024-01', end: '2024-06' }] as const;

    expect(formatYearRange(periods, 'Present')).toBe('2024 — Present');
  });
});
