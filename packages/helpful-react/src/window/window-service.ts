import { createContext, useContext } from 'react';

/* istanbul ignore next -- @preserve */
const __global$ = <any>window || <any>global;

/**
 * Represents the window context.
 */
export const ZWindowServiceContext = createContext<typeof globalThis>(__global$);

/**
 * Gets the current window object.
 *
 * @returns The current window object.
 */
export function useWindowService() {
  return useContext(ZWindowServiceContext);
}
