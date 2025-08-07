import { test, expect } from '@playwright/test';
import { all_tests } from '../markers';

const testOne = async function ({ page }: { page: import('@playwright/test').Page }) {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
};

const testTwo = async function ({ page }: { page: import('@playwright/test').Page }) {
  await page.goto('https://playwright.dev/docs/intro');
  await expect(page).toHaveURL(/.*docs\/intro/);
};

const testOneWithMarker = all_tests((...args: unknown[]) => testOne(...(args as Parameters<typeof testOne>)));
const testTwoWithMarker = all_tests((...args: unknown[]) => testTwo(...(args as Parameters<typeof testTwo>)));

test('Test with all_tests marker #1', testOne);
test('Test with all_tests marker #2', testTwo);
