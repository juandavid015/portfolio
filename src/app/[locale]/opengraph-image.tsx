import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { hasLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ImageResponse } from 'next/og';

import { edition } from '@/content/edition';
import { profile } from '@/content/profile';
import { routing } from '@/i18n/routing';
import { siteUrl } from '@/lib/site-url';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const alt = profile.name;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Static instances: the image renderer doesn't support variable fonts.
const [archivo, jetbrainsMono] = await Promise.all([
  readFile(join(process.cwd(), 'assets/fonts/Archivo-ExpandedExtraBold.ttf')),
  readFile(join(process.cwd(), 'assets/fonts/JetBrainsMono-Regular.ttf')),
]);

const { ink, paper, violet } = edition.palette;

const label = {
  fontFamily: 'JetBrains Mono',
  fontSize: 24,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
} as const;

export default async function OpenGraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: 'Header' });

  return new ImageResponse(
    <div style={{ display: 'flex', width: '100%', height: '100%', padding: 40, background: paper }}>
      <div
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '36px 44px',
          border: `2px solid ${ink}`,
          color: ink,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', ...label }}>
          <span>{t('edition', { year: String(edition.year) })}</span>
          <span>{siteUrl.host}</span>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'Archivo',
            fontSize: 168,
            lineHeight: 0.86,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
          }}
        >
          {profile.name.split(' ').map((word) => (
            <span key={word}>{word}</span>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, ...label }}>
          <span style={{ width: 16, height: 16, borderRadius: 8, background: violet }} />
          <span>{profile.headline[locale]}</span>
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: 'Archivo', data: archivo, weight: 800, style: 'normal' },
        { name: 'JetBrains Mono', data: jetbrainsMono, weight: 400, style: 'normal' },
      ],
    },
  );
}
