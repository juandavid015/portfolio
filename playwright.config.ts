import { defineConfig, devices } from '@playwright/test';

const PORT = 3100;
const baseURL = `http://localhost:${PORT}`;
const isCI = Boolean(process.env.CI);

/** End-to-end tests run against a production build, the same output visitors get. */
export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  reporter: isCI ? [['github'], ['html', { open: 'never' }]] : 'list',
  use: {
    baseURL,
    locale: 'en-US',
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
    {
      name: 'mobile',
      use: { ...devices['Pixel 7'] },
      // Only what depends on the viewport; HTTP-level checks run once.
      testMatch: /(home|a11y)\.spec\.ts/,
    },
  ],
  webServer: {
    command: `pnpm build && pnpm start --port ${PORT}`,
    url: `${baseURL}/en`,
    reuseExistingServer: !isCI,
    timeout: 300_000,
  },
});
