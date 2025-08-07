import { test, expect } from '@playwright/test';

const testOne = async function ({ page }: { page: import('@playwright/test').Page }) {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
};

const testTwo = async function ({ page }: { page: import('@playwright/test').Page }) {
  await page.goto('https://playwright.dev/docs/intro');
  await expect(page).toHaveURL(/.*docs\/intro/);
};


test('Test with all_tests marker #1 @all_tests', testOne);
test('Test with all_tests marker #2 @all_tests', testTwo);
