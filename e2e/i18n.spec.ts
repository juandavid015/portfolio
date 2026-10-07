import { expect, test } from '@playwright/test';

test.describe('language detection on /', () => {
  test('sends English browsers to /en', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveURL(/\/en$/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  });

  test.describe('with a Spanish browser', () => {
    test.use({ locale: 'es-CO' });

    test('sends it to /es', async ({ page }) => {
      await page.goto('/');

      await expect(page).toHaveURL(/\/es$/);
      await expect(page.locator('html')).toHaveAttribute('lang', 'es');
    });
  });

  test.describe('with an unsupported language', () => {
    test.use({ locale: 'fr-FR' });

    test('falls back to /en', async ({ page }) => {
      await page.goto('/');

      await expect(page).toHaveURL(/\/en$/);
    });
  });
});

test('the language switcher changes the language and remembers the choice', async ({ page }) => {
  await page.goto('/en');

  await page
    .getByRole('navigation', { name: 'Language' })
    .getByRole('link', { name: 'Español' })
    .click();

  await expect(page).toHaveURL(/\/es$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'es');
  await expect(page).toHaveTitle(/Desarrollador/);

  // The choice now outranks the browser's English Accept-Language.
  await page.goto('/');
  await expect(page).toHaveURL(/\/es$/);
});
