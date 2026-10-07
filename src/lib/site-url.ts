/**
 * Absolute origin for canonical URLs, Open Graph and the sitemap, resolved at build time:
 * 1. `SITE_URL`, for a custom domain
 * 2. The Vercel production URL (also used by preview builds, so canonicals point to production)
 * 3. Local development
 */
function resolveSiteUrl() {
  if (process.env.SITE_URL) {
    return process.env.SITE_URL;
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return 'http://localhost:3000';
}

/** Throws at build time if the configured value isn't a valid URL. */
export const siteUrl = new URL(resolveSiteUrl());
