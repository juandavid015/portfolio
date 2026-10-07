import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const WCAG_AA = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];

for (const path of ['/en', '/es', '/en/does-not-exist']) {
  test(`${path} has no WCAG 2.2 AA violations`, async ({ page }) => {
    await page.goto(path);

    const { violations } = await new AxeBuilder({ page }).withTags(WCAG_AA).analyze();

    expect(violations).toEqual([]);
  });
}
