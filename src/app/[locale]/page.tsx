import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';

import { getLanguageAlternates } from '@/i18n/alternates';
import { getPathname } from '@/i18n/navigation';

import { About } from './_components/about';
import { Contact } from './_components/contact';
import { Experience } from './_components/experience';
import { Hero } from './_components/hero';
import { PersonJsonLd } from './_components/person-json-ld';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  return {
    alternates: {
      canonical: getPathname({ href: '/', locale }),
      languages: getLanguageAlternates('/'),
    },
  };
}

export default function HomePage() {
  return (
    <main id="main" className="flex flex-col gap-px">
      <PersonJsonLd />
      <Hero />
      <Experience index={1} />
      <About index={2} />
      <Contact index={3} />
    </main>
  );
}
