import { Archivo, JetBrains_Mono } from 'next/font/google';

import { cn } from './utils';

// Self-hosted at build time by next/font: no requests to Google at runtime.

const archivo = Archivo({
  subsets: ['latin'],
  // Width axis powers the expanded display headings (`font-stretch`).
  axes: ['wdth'],
  variable: '--font-archivo',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

/** CSS variables consumed by `--font-sans` and `--font-mono` in globals.css. */
export const fontVariables = cn(archivo.variable, jetbrainsMono.variable);
