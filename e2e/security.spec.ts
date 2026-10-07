import { expect, test } from '@playwright/test';

test('pages are served with the security headers', async ({ request }) => {
  const response = await request.get('/en');
  const headers = response.headers();

  expect(headers['content-security-policy']).toContain("default-src 'self'");
  expect(headers['content-security-policy']).toContain("frame-ancestors 'none'");
  expect(headers['strict-transport-security']).toContain('max-age=');
  expect(headers['x-content-type-options']).toBe('nosniff');
  expect(headers['referrer-policy']).toBe('strict-origin-when-cross-origin');
  expect(headers['cross-origin-opener-policy']).toBe('same-origin');
  expect(headers['permissions-policy']).toContain('camera=()');
  expect(headers['x-powered-by']).toBeUndefined();
});

test('the CSP blocks nothing the site itself needs', async ({ page }) => {
  const violations: string[] = [];
  page.on('console', (message) => {
    if (message.type() === 'error' && message.text().includes('Content Security Policy')) {
      violations.push(message.text());
    }
  });

  await page.goto('/en');
  await page
    .getByRole('navigation', { name: 'Language' })
    .getByRole('link', { name: 'Español' })
    .click();
  await expect(page).toHaveURL(/\/es$/);

  expect(violations).toEqual([]);
});
