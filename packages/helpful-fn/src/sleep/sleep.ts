/**
 * Halts the current thread to invoke an event loop.
 *
 * @param ms -
 *        The total number of milliseconds to sleep.
 *
 * @returns
 *        A promise that resolves after ms milliseconds.
 */
export function sleep(ms?: number): Promise<void>;

/**
 * Halts the current thread to invoke an event loop.
 *
 * @param ms -
 *        The total number of milliseconds to sleep.
 * @param val -
 *        The value to resolve with.
 * @param T -
 *        The type of value that will be resolved.
 *
 * @returns
 *        A promise that resolves with val after ms milliseconds.
 */
export function sleep<T>(ms: number, val: T): Promise<T>;

/**
 * Halts the current thread to invoke an event loop.
 *
 * @param ms -
 *        The total number of milliseconds to sleep.
 * @param T -
 *        The type of value that will be resolved.
 *
 * @returns
 *        A promise that resolves with val after ms milliseconds.
 */
export function sleep<T>(ms = 0, val: T | undefined = undefined): Promise<T | undefined> {
  return new Promise<T | undefined>((resolve) => setTimeout(() => resolve(val), ms));
}
