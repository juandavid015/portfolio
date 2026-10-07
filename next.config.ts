import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const isDev = process.env.NODE_ENV === 'development';

/**
 * Static-friendly CSP: everything is same-origin only.
 *
 * Inline scripts are allowed because Next.js streams page data to React through
 * inline `<script>` tags. The strict alternative, a per-request nonce, would
 * force every page to render on demand and give up static generation, which
 * this site has no reason to trade: it has no user input, auth or third-party
 * scripts. Hashes aren't an option either: those scripts differ per page and build.
 * Development also needs `unsafe-eval` for React's debugging tools.
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''}`,
  // The dev error overlay injects inline styles; production pages have none.
  `style-src 'self'${isDev ? " 'unsafe-inline'" : ''}`,
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  'upgrade-insecure-requests',
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: contentSecurityPolicy },
  // Two years. Add `preload` only after deciding to submit a custom domain to hstspreload.org.
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()',
  },
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  poweredByHeader: false,
  experimental: {
    // The root layout lives under `[locale]`, so unmatched URLs need a
    // standalone 404 page (`src/app/global-not-found.tsx`).
    globalNotFound: true,
  },
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
  headers() {
    return Promise.resolve([{ source: '/:path*', headers: securityHeaders }]);
  },
};

export default withNextIntl(nextConfig);
