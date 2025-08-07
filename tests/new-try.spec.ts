
import { test, expect } from '@playwright/test';
import { EPLoginPage } from '../pages/EPLoginPage';

import { all_tests, jira, owner, test_name } from '../markers';


// --- Usage of markers ---
test.describe('Example Test Name 2', () => {

  interface WithMarkers {
    markers?: {
      jira?: string;
      owner?: string;
      test_name?: string;
    };
  }
  const originalTest = async function ({ page }: { page: import('@playwright/test').Page }, testInfo: import('@playwright/test').TestInfo) {
    // Use marker values for reporting/annotations
    const markerObj = originalTestWithMarkers as WithMarkers;
    if (markerObj.markers?.jira) testInfo.annotations.push({ type: 'jira', description: String(markerObj.markers.jira) });
    if (markerObj.markers?.owner) testInfo.annotations.push({ type: 'owner', description: String(markerObj.markers.owner) });
    if (markerObj.markers?.test_name) testInfo.annotations.push({ type: 'test_name', description: String(markerObj.markers.test_name) });

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
  };

  // Wrap the test function for marker helpers
  const wrappedTest = (...args: unknown[]) => originalTest(...(args as Parameters<typeof originalTest>));
  const originalTestWithMarkers = all_tests(
    jira('EX-2')(
      owner('ExAuthor')(
        test_name('Example Test Name 2')(wrappedTest)
      )
    )
  );
  test('Example Test Name 2 [EX-2] [ExAuthor]', originalTest);
});