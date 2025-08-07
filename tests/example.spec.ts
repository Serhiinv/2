
import { test, expect } from '@playwright/test';

import { smoke, jira, owner, test_name } from '../markers';





interface WithMarkers {
  markers?: {
    jira?: string;
    owner?: string;
    test_name?: string;
  };
}
const originalTest = async function ({ page }: { page: import('@playwright/test').Page }, testInfo: import('@playwright/test').TestInfo) {
  const markerObj = originalTestWithMarkers as WithMarkers;
  if (markerObj.markers?.jira) testInfo.annotations.push({ type: 'jira', description: String(markerObj.markers.jira) });
  if (markerObj.markers?.owner) testInfo.annotations.push({ type: 'owner', description: String(markerObj.markers.owner) });
  if (markerObj.markers?.test_name) testInfo.annotations.push({ type: 'test_name', description: String(markerObj.markers.test_name) });

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
const originalTestWithMarkers = smoke(
  jira('EX-1')(
    owner('ExampleAuthor')(
      test_name('Basic Playwright Example')(wrappedTest)
    )
  )
);
test('basic test', originalTest);

