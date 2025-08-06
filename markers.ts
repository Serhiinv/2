// Marker helpers for Playwright tests
export function all_tests(fn: any) {
  fn.all_tests = true;
  return fn;
}
export function smoke(fn: any) {
  fn.smoke = true;
  return fn;
}
export function jira(id: string) {
  return (fn: any) => {
    fn.jira = id;
    return fn;
  };
}
export function owner(name: string) {
  return (fn: any) => {
    fn.owner = name;
    return fn;
  };
}
export function test_name(name: string) {
  return (fn: any) => {
    fn.test_name = name;
    return fn;
  };
}
