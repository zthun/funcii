export function tryFallback<T>(candidate: () => T): T | undefined;
export function tryFallback<T>(candidate: () => T, fallback: T): T;
export function tryFallback<T>(candidate: () => T, fallback?: T): T | undefined {
  try {
    return candidate();
  } catch {
    return fallback;
  }
}

export function tryFallbackAsync<T>(candidate: () => Promise<T>): Promise<T | undefined>;
export function tryFallbackAsync<T>(candidate: () => Promise<T>, fallback: T): Promise<T>;
export async function tryFallbackAsync<T>(candidate: () => Promise<T>, fallback?: T): Promise<T | undefined> {
  try {
    return await candidate();
  } catch {
    return fallback;
  }
}
