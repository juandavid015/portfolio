type Swatch = {
  /** Palette token in `src/app/globals.css`, without the leading `--`. */
  token: string;
  hex: `#${string}`;
};

type PastEdition = {
  year: number;
  url: string;
};

type Edition = {
  year: number;
  palette: readonly Swatch[];
  /** Previous yearly editions, newest first. */
  past: readonly PastEdition[];
};

export const edition: Edition = {
  year: 2026,
  palette: [
    { token: 'ink', hex: '#17161C' },
    { token: 'violet', hex: '#5A31F4' },
    { token: 'lavender', hex: '#C7B9FF' },
    { token: 'paper-deep', hex: '#E4DED0' },
    { token: 'paper', hex: '#EDE8DC' },
  ],
  past: [],
};
