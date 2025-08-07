
import { test, expect } from '@playwright/test';

import { smoke } from '../markers';





const originalTest = async function ({ page }: { page: import('@playwright/test').Page }, testInfo: import('@playwright/test').TestInfo) {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);

  // Check for the main headline
  const headline = page.locator('text=Playwright enables reliable end-to-end testing');
  await expect(headline).toBeVisible();

  // Check for the main headline again
  const headline2 = page.locator('text=Playwright enables reliable end-to-end testing');
  await expect(headline2).toBeVisible();

  const getstarted = page.getByRole('link', { name: 'Get started' });
  await expect(getstarted).toBeVisible();

  // Click on the Docs nav link
  await page.getByRole('link', { name: 'Docs' }).click();
  await expect(page).toHaveURL(/.*docs/);

  // Check for the sidebar to be visible
  // const sidebar = page.locator('nav[aria-label="Sidebar"]');
  // await expect(sidebar).toBeVisible();
};

// Wrap the test function for marker helpers
const wrappedTest = (...args: unknown[]) => originalTest(...(args as Parameters<typeof originalTest>));
const originalTestWithMarkers = smoke(wrappedTest);
test('basic test', originalTest);

