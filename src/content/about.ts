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
      es: 'Empecé a programar en 2022 por curiosidad y nunca paré.',
    },
    body: {
      en: "When something catches my attention I can't leave it half understood. I need to know how it actually works. I also distrust complicated things: most of them have a simple pattern underneath, and I'd rather find it than ship the complicated version.",
      es: 'Cuando algo me llama la atención no puedo dejarlo entendido a medias. Necesito saber cómo funciona de verdad. También desconfío de lo complicado: casi siempre hay un patrón simple debajo, y prefiero encontrarlo antes que entregar la versión complicada.',
    },
  },
  principles: [
    {
      title: {
        en: 'Understand it first',
        es: 'Primero, entenderlo',
      },
      description: {
        en: "I don't build on something I only half understand.",
        es: 'No construyo sobre algo que entiendo a medias.',
      },
    },
    {
      title: {
        en: 'Find the simple version',
        es: 'Encontrar la versión simple',
      },
      description: {
        en: 'Most complexity hides a pattern. Finding it is the work.',
        es: 'Casi toda complejidad esconde un patrón. Encontrarlo es el trabajo.',
      },
    },
    {
      title: {
        en: 'Finish it properly',
        es: 'Terminarlo bien',
      },
      description: {
        en: 'Measure before optimizing. Put the important rules in the database, not just the UI.',
        es: 'Medir antes de optimizar. Poner las reglas importantes en la base de datos, no solo en la interfaz.',
      },
    },
  ],
};
