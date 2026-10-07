import type messages from './messages/en.json';
import type { routing } from './routing';

// English is the source catalog: its shape types every `t()` key.
declare module 'next-intl' {
  // Module augmentation relies on interface declaration merging.
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
  }
}
