import { expect, test } from '@playwright/test';

test('each page declares its canonical URL and language alternates', async ({ page }) => {
  await page.goto('/es');

  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', /\/es$/);
  for (const hreflang of ['en', 'es', 'x-default']) {
    await expect(page.locator(`link[rel="alternate"][hreflang="${hreflang}"]`)).toHaveCount(1);
  }
  await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute('content', 'es_CO');
});

test('the page includes Person structured data', async ({ page }) => {
  await page.goto('/en');

  const json = await page.locator('script[type="application/ld+json"]').textContent();
  const person = JSON.parse(json ?? '{}') as Record<string, unknown>;

  expect(person['@type']).toBe('Person');
  expect(person.sameAs).toHaveLength(2);
});

test('robots.txt points to the sitemap, which lists both languages', async ({ request }) => {
  const robots = await (await request.get('/robots.txt')).text();
  expect(robots).toMatch(/^Sitemap: .+\/sitemap\.xml$/m);

  const sitemap = await (await request.get('/sitemap.xml')).text();
  expect(sitemap).toMatch(/<loc>[^<]+\/en<\/loc>/);
  expect(sitemap).toMatch(/<loc>[^<]+\/es<\/loc>/);
  expect(sitemap).toContain('hreflang="x-default"');
});

for (const path of ['/en/opengraph-image', '/es/opengraph-image', '/icon', '/apple-icon']) {
  test(`${path} is served as a PNG without redirects`, async ({ request }) => {
    const response = await request.get(path, { maxRedirects: 0 });

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toBe('image/png');
  });
}
