import { expect, test } from '@playwright/test';

test('unknown paths return a 404 in both languages', async ({ page }) => {
  const response = await page.goto('/en/does-not-exist');

  expect(response?.status()).toBe(404);
  await expect(page.getByRole('heading', { name: 'Page not found' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Página no encontrada' })).toBeVisible();
});

test('each 404 message links home in its own language', async ({ page }) => {
  await page.goto('/en/does-not-exist');

  await expect(page.getByRole('link', { name: 'Back to home' })).toHaveAttribute('href', '/en');
  await expect(page.getByRole('link', { name: 'Volver al inicio' })).toHaveAttribute('href', '/es');
});
