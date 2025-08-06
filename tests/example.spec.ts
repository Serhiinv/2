
import { test, expect } from '@playwright/test';
import { smoke, jira, owner, test_name } from '../markers';

const testWithMarkers = smoke(
  jira('EX-1')(
    owner('ExampleAuthor')(
      test_name('Basic Playwright Example')(
        async ({ page }: { page: import('@playwright/test').Page }, testInfo: import('@playwright/test').TestInfo) => {
          if (testWithMarkers.jira) testInfo.annotations.push({ type: 'jira', description: testWithMarkers.jira });
          if (testWithMarkers.owner) testInfo.annotations.push({ type: 'owner', description: testWithMarkers.owner });
          if (testWithMarkers.test_name) testInfo.annotations.push({ type: 'test_name', description: testWithMarkers.test_name });

          await page.goto('https://playwright.dev/');
          await expect(page).toHaveTitle(/Playwright/);

          // Check for the main headline
          const headline = page.locator('text=Playwright enables reliable end-to-end testing');
          await expect(headline).toBeVisible();

          const getstarted = page.getByRole('link', { name: 'Get started' });
          await expect(getstarted).toBeVisible();

          // Click on the Docs nav link
          await page.getByRole('link', { name: 'Docs' }).click();
          await expect(page).toHaveURL(/.*docs/);

          // Check for the sidebar to be visible
          // const sidebar = page.locator('nav[aria-label="Sidebar"]');
          // await expect(sidebar).toBeVisible();
        }
      )
    )
  )
);
test('basic test', testWithMarkers);
