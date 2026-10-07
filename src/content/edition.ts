type Hex = `#${string}`;

type PastEdition = {
  year: number;
  url: string;
};

/**
 * The edition's palette, keyed by its token in `src/app/globals.css` (without
 * the leading `--`) and listed in display order. Also used where CSS variables
 * don't exist, such as generated images.
 */
const palette = {
  ink: '#17161C',
  violet: '#5A31F4',
  lavender: '#C7B9FF',
  'paper-deep': '#E4DED0',
  paper: '#EDE8DC',
} as const satisfies Record<string, Hex>;

/** Previous yearly editions, newest first. */
const past: readonly PastEdition[] = [];

export const edition = {
  year: 2026,
  palette,
  past,
};
