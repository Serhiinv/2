import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  expect: {
    timeout: 5000
  },
  fullyParallel: true,
  forbidOnly: typeof process !== 'undefined' && !!process.env.CI,
  retries: typeof process !== 'undefined' && process.env.CI ? 2 : 0,
  workers: typeof process !== 'undefined' && process.env.CI ? 1 : undefined as unknown as number,
  // reporter: [
  //   ['list'],
  //   ['allure-playwright', {
  //     detail: true,
  //     outputFolder: 'allure-results',
  //     suiteTitle: false
  //   }]
  // ],
  reporter: [['html', { open: 'never', outputFolder: 'playwright-report' }]],
  use: {
    trace: 'on-first-retry',
    baseURL: 'https://playwright.dev/',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});