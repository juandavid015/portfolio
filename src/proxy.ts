import createMiddleware from 'next-intl/middleware';

import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Everything except API routes, Next.js/Vercel internals, generated icons
  // (`src/app/icon.tsx`, `src/app/apple-icon.tsx`) and files with an extension.
  matcher: '/((?!api|_next|_vercel|icon$|apple-icon$|.*\\..*).*)',
};
