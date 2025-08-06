// This file tags tests with @smoke and @all_tests for Playwright's --grep option in CI workflows.
// Add this import to your test setup if you want to automatically tag tests based on marker properties.

import { test as base } from '@playwright/test';

export const test = base.extend({
  // ...extend fixtures if needed
});

test.beforeEach(async (_: unknown, testInfo) => {
  const fn = testInfo.fn as unknown;
  if ((fn as any).smoke) testInfo.annotations.push({ type: 'tag', description: '@smoke' });
  if ((fn as any).all_tests) testInfo.annotations.push({ type: 'tag', description: '@all_tests' });
});
