import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

import { edition } from './edition';
import { experience } from './experience';

describe('edition palette', () => {
  // Generated images read the palette from TypeScript; the page reads it from CSS.
  const css = readFileSync(new URL('../app/globals.css', import.meta.url), 'utf8');

  it.each(Object.entries(edition.palette))('matches --%s in globals.css', (token, hex) => {
    const declared = new RegExp(`--${token}:\\s*(#[0-9a-f]{6});`, 'i').exec(css)?.[1];

    expect(declared?.toLowerCase()).toBe(hex.toLowerCase());
  });
});

describe('experience', () => {
  it.each(experience.map((entry) => [entry.company, entry.period] as const))(
    '%s ends after it starts',
    (_company, { start, end }) => {
      if (end !== undefined) {
        expect(end >= start).toBe(true);
      }
    },
  );
});
