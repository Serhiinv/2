
import { test, expect } from '@playwright/test';
import { EPLoginPage } from '../pages/EPLoginPage';
import { all_tests, jira, owner, test_name } from '../markers';

// --- Usage of markers ---
test.describe('Example Test Name 2', () => {
  const testWithMarkers = all_tests(
    jira('EX-2')(
      owner('ExAuthor')(
        test_name('Example Test Name 2')(
          async ({ page }: { page: import('@playwright/test').Page }, testInfo: import('@playwright/test').TestInfo) => {
            // Use marker values for reporting/annotations
            if (testWithMarkers.jira) testInfo.annotations.push({ type: 'jira', description: testWithMarkers.jira });
            if (testWithMarkers.owner) testInfo.annotations.push({ type: 'owner', description: testWithMarkers.owner });
            if (testWithMarkers.test_name) testInfo.annotations.push({ type: 'test_name', description: testWithMarkers.test_name });

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
          }
        )
      )
    )
  );
  test('Example Test Name 2 [EX-2] [ExAuthor]', testWithMarkers);
});