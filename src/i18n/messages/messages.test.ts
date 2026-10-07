import { describe, expect, it } from 'vitest';

import en from './en.json';
import es from './es.json';

/** Dot paths of every leaf message, e.g. `Hero.downloadCv`. */
function keysOf(messages: object, prefix = ''): string[] {
  return Object.entries(messages).flatMap(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    return typeof value === 'object' && value !== null ? keysOf(value as object, path) : [path];
  });
}

// Typecheck already fails on a key missing from es.json; this also catches leftovers.
describe('message catalogs', () => {
  it('es.json has exactly the keys of en.json', () => {
    expect(keysOf(es).sort()).toEqual(keysOf(en).sort());
  });
});
