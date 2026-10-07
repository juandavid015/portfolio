import type { Localized } from './types';

type Profile = {
  name: string;
  fullName: string;
  /** Short title shown above the name. */
  headline: Localized;
  tagline: Localized;
  role: Localized;
  stack: readonly string[];
  codingSince: number;
  englishLevel: string;
  interests: Localized;
  availability: Localized;
  location: {
    country: Localized;
    /** IANA time zone used by the local-time clock. */
    timeZone: string;
  };
  email: string;
  links: {
    github: string;
    linkedin: string;
  };
  /** Paths under `public/`, one CV per locale. */
  cv: Localized;
};

export const profile: Profile = {
  name: 'Juan David',
  fullName: 'Juan David Garzón',
  headline: {
    en: 'Full-stack software engineer',
    es: 'Desarrollador de software full-stack',
  },
  tagline: {
    en: 'I look for the simplest version of a problem, then build the solution with care.',
    es: 'Busco la forma más simple de resolver un problema y la construyo con cuidado.',
  },
  role: {
    en: 'Full-stack engineer',
    es: 'Desarrollador full-stack',
  },
  stack: ['TypeScript', 'React', 'Next.js', 'PostgreSQL'],
  codingSince: 2022,
  englishLevel: 'C1',
  interests: {
    en: 'Video games, anime',
    es: 'Videojuegos, anime',
  },
  availability: {
    en: 'Open to remote roles',
    es: 'Disponible para trabajo remoto',
  },
  location: {
    country: { en: 'Colombia', es: 'Colombia' },
    timeZone: 'America/Bogota',
  },
  email: 'juandavidgr1002@gmail.com',
  links: {
    github: 'https://github.com/juandavid015',
    linkedin: 'https://www.linkedin.com/in/juan-dgr',
  },
  cv: {
    en: '/cv/juan-garzon-full-stack-engineer-en.pdf',
    es: '/cv/juan-garzon-desarrollador-full-stack-es.pdf',
  },
};
