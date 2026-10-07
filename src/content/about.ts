import type { Localized } from './types';

type Principle = {
  title: Localized;
  description: Localized;
};

type About = {
  origin: {
    lead: Localized;
    body: Localized;
  };
  principles: readonly Principle[];
};

export const about: About = {
  origin: {
    lead: {
      en: 'I started programming in 2022 out of curiosity and never stopped.',
      es: 'Empecé a programar en 2022 por curiosidad y no he parado desde entonces.',
    },
    body: {
      en: "When something catches my attention I can't leave it half understood. I need to know how it actually works. I also distrust complicated things: most of them have a simple pattern underneath, and I'd rather find it than ship the complicated version.",
      es: 'Cuando algo me llama la atención, no me quedo con una idea a medias: necesito entender cómo funciona de verdad. También desconfío de lo complicado. Casi siempre hay un patrón simple detrás, y prefiero encontrarlo antes que entregar la versión enredada.',
    },
  },
  principles: [
    {
      title: {
        en: 'Understand it first',
        es: 'Entender antes de construir',
      },
      description: {
        en: "I don't build on something I only half understand.",
        es: 'No construyo sobre algo que solo entiendo a medias.',
      },
    },
    {
      title: {
        en: 'Find the simple version',
        es: 'Buscar la versión simple',
      },
      description: {
        en: 'Most complexity hides a pattern. Finding it is the work.',
        es: 'Detrás de casi toda complejidad hay un patrón. Encontrarlo es el verdadero trabajo.',
      },
    },
    {
      title: {
        en: 'Finish it properly',
        es: 'Terminar bien las cosas',
      },
      description: {
        en: 'Measure before optimizing. Enforce the rules that matter where the data lives, not only in the interface.',
        es: 'Mido antes de optimizar y aplico las reglas críticas donde viven los datos, no solo en la interfaz.',
      },
    },
  ],
};
