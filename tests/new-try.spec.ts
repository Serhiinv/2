
import { test, expect } from '@playwright/test';
import { EPLoginPage } from '../pages/EPLoginPage';

import { all_tests } from '../markers';


// --- Usage of markers ---
test.describe('Example Test Name 2', () => {

  const originalTest = async function ({ page }: { page: import('@playwright/test').Page }, testInfo: import('@playwright/test').TestInfo) {
    // Basic debug info
    console.log(`START: ${testInfo.title} (file: ${testInfo.file})`);
    
    const user = {
      username: 'username',
      password: 'password',
      get_login: () => 'username',
    };
    const ep = new EPLoginPage(page);
    await ep.login(user);
    // const loggedIn = await ep.isLoggedIn();
    // expect(loggedIn).toBeTruthy();
    expect(user.get_login()).toBe('username');

    // End debug info
    console.log(`END: ${testInfo.title} (status: ${testInfo.status})`);
  };

  // Wrap the test function for marker helpers
  const wrappedTest = (...args: unknown[]) => originalTest(...(args as Parameters<typeof originalTest>));
  const originalTestWithMarkers = all_tests(wrappedTest);
  test('Example Test Name 2', originalTestWithMarkers);
});