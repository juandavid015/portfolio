import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/en');
});

test('renders every section', async ({ page }) => {
  await expect(page.getByRole('heading', { level: 1, name: 'Juan David' })).toBeVisible();

  for (const name of ['01 — Experience', '02 — About', 'Have a role in mind?']) {
    await expect(page.getByRole('heading', { level: 2, name })).toBeVisible();
  }
});

test('has no horizontal overflow', async ({ page }) => {
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );

  expect(overflow).toBe(0);
});

test('the local-time clock ticks once the page hydrates', async ({ page }) => {
  const clock = page.locator('time').filter({ hasText: /^\d{2}:\d{2}:\d{2}$/ });
  const initial = await clock.textContent();

  await expect(clock).not.toHaveText(initial ?? '', { timeout: 3_000 });
});

test('the CV link serves a PDF', async ({ page, request }) => {
  const href = await page.getByRole('link', { name: /Download CV/ }).getAttribute('href');
  const response = await request.get(href ?? '');

  expect(response.status()).toBe(200);
  expect(response.headers()['content-type']).toBe('application/pdf');
});

test('the skip link is the first focusable element and targets the main content', async ({
  page,
  isMobile,
}) => {
  test.skip(isMobile, 'Keyboard navigation');

  await page.keyboard.press('Tab');

  const skipLink = page.getByRole('link', { name: 'Skip to content' });
  await expect(skipLink).toBeFocused();
  await expect(skipLink).toBeVisible();
  await expect(skipLink).toHaveAttribute('href', '#main');
});
