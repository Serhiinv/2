// Marker helpers for Playwright tests
type MarkerMeta = { [key: string]: unknown };
type MarkedTestFn<T extends (...args: unknown[]) => unknown = (...args: unknown[]) => unknown> = T & { markers?: MarkerMeta };

function setMarker<T extends (...args: unknown[]) => unknown>(fn: T, key: string, value: unknown): MarkedTestFn<T> {
  const marked = fn as MarkedTestFn<T>;
  if (!marked.markers) marked.markers = {};
  marked.markers[key] = value;
  return marked;
}

export function all_tests<T extends (...args: unknown[]) => unknown>(fn: T): MarkedTestFn<T> {
  return setMarker(fn, 'all_tests', true);
}

export function smoke<T extends (...args: unknown[]) => unknown>(fn: T): MarkedTestFn<T> {
  return setMarker(fn, 'smoke', true);
}

export function jira(id: string) {
  return <T extends (...args: unknown[]) => unknown>(fn: T): MarkedTestFn<T> => setMarker(fn, 'jira', id);
}

export function owner(name: string) {
  return <T extends (...args: unknown[]) => unknown>(fn: T): MarkedTestFn<T> => setMarker(fn, 'owner', name);
}

export function test_name(name: string) {
  return <T extends (...args: unknown[]) => unknown>(fn: T): MarkedTestFn<T> => setMarker(fn, 'test_name', name);
}
