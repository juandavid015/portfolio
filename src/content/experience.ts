import type { Localized, Period } from './types';

export type ExperienceEntry = {
  company: string;
  period: Period;
  role: Localized;
  /** One line about the company or the engagement. */
  summary: Localized;
  /** Entries with highlights get the expanded layout. */
  highlights?: readonly Localized[];
};

/** Rendered in this order. */
export const experience: readonly ExperienceEntry[] = [
  {
    company: 'Grayola',
    period: { start: '2025-09', end: '2026-10' },
    role: {
      en: 'Full-stack developer',
      es: 'Desarrollador full-stack',
    },
    summary: {
      en: 'Design platform used by teams at HubSpot, Rockstart and Latam Fintech.',
      es: 'Plataforma de diseño que usan equipos de HubSpot, Rockstart y Latam Fintech.',
    },
    highlights: [
      {
        en: 'Owned billing and payments end to end: Stripe subscriptions, client credits, designer payouts and promotions.',
        es: 'Tuve a mi cargo la facturación y los pagos de punta a punta: suscripciones con Stripe, créditos de clientes, pagos a diseñadores y promociones.',
      },
      {
        en: 'Built the AI pricing engine that automatically quotes 72% of client briefs. An LLM classifies each brief; deterministic code sets the price.',
        es: 'Desarrollé el motor de precios con IA que cotiza automáticamente el 72% de los briefs de clientes. Un LLM clasifica cada brief; el precio lo calcula código determinista.',
      },
      {
        en: 'Built the API endpoints behind the activation and retention email campaigns run by ops and marketing.',
        es: 'Desarrollé los endpoints de API detrás de las campañas de correo de activación y retención que manejan operaciones y marketing.',
      },
    ],
  },
  {
    company: 'Suuper',
    period: { start: '2024-10', end: '2025-07' },
    role: {
      en: 'Full-stack developer, then frontend lead',
      es: 'Desarrollador full-stack, luego líder de frontend',
    },
    summary: {
      en: 'A Grayola spin-off built for agencies.',
      es: 'Un spin-off de Grayola creado para agencias.',
    },
    highlights: [
      {
        en: 'Helped build the product from scratch, then was promoted to frontend lead, leading two developers.',
        es: 'Ayudé a construir el producto desde cero y luego me ascendieron a líder de frontend, a cargo de dos desarrolladores.',
      },
      {
        en: 'Made nearly every page load faster by reworking data fetching: query optimization, caching, server components and prefetching.',
        es: 'Hice que casi todas las páginas cargaran más rápido al rehacer la obtención de datos: optimización de consultas, caché, server components y precarga.',
      },
    ],
  },
  {
    company: 'Haxor',
    period: { start: '2025-08', end: '2025-09' },
    role: {
      en: 'Frontend developer',
      es: 'Desarrollador frontend',
    },
    summary: {
      en: 'Short contract on a cybersecurity product built on agentic AI. Redesigned its main chat interface.',
      es: 'Contrato corto en un producto de ciberseguridad basado en IA agéntica. Rediseñé su interfaz principal de chat.',
    },
  },
  {
    company: 'DASCalendar',
    period: { start: '2024-01', end: '2024-06' },
    role: {
      en: 'Frontend developer intern',
      es: 'Desarrollador frontend (pasantía)',
    },
    summary: {
      en: 'Frontend internship at a startup from 500 Global LatAm, batch 18.',
      es: 'Pasantía de frontend en una startup de 500 Global LatAm, batch 18.',
    },
  },
];
