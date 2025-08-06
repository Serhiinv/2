// Marker helpers for Playwright tests
type TestFn = (...args: unknown[]) => unknown;
type MarkedTestFn = TestFn & { [key: string]: unknown };

export function all_tests(fn: TestFn): TestFn {
  (fn as MarkedTestFn).all_tests = true;
  return fn;
}

export function smoke(fn: TestFn): TestFn {
  (fn as MarkedTestFn).smoke = true;
  return fn;
}

export function jira(id: string) {
  return (fn: TestFn): TestFn => {
    (fn as MarkedTestFn).jira = id;
    return fn;
  };
}

export function owner(name: string) {
  return (fn: TestFn): TestFn => {
    (fn as MarkedTestFn).owner = name;
    return fn;
  };
}

export function test_name(name: string) {
  return (fn: TestFn): TestFn => {
    (fn as MarkedTestFn).test_name = name;
    return fn;
  };
}
