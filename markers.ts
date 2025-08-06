// Marker helpers for Playwright tests
type TestFn = (...args: unknown[]) => unknown;

export function all_tests(fn: TestFn): TestFn {
  (fn as any).all_tests = true;
  return fn;
}
export function smoke(fn: TestFn): TestFn {
  (fn as any).smoke = true;
  return fn;
}
export function jira(id: string) {
  return (fn: TestFn): TestFn => {
    (fn as any).jira = id;
    return fn;
  };
}
export function owner(name: string) {
  return (fn: TestFn): TestFn => {
    (fn as any).owner = name;
    return fn;
  };
}
export function test_name(name: string) {
  return (fn: TestFn): TestFn => {
    (fn as any).test_name = name;
    return fn;
  };
}
