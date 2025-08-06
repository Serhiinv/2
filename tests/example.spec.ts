import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);

  // Check for the main headline
  const headline = page.locator('text=Playwright enables reliable end-to-end testing');
  await expect(headline).toBeVisible();

  // // Click on the Docs nav link
  // await page.getByRole('link', { name: 'Docs' }).click();
  // await expect(page).toHaveURL(/.*docs/);

  // // Check for the sidebar to be visible
  // const sidebar = page.locator('nav[aria-label="Sidebar"]');
  // await expect(sidebar).toBeVisible();
});
