import { createContext, useContext } from 'react';
import { $global } from '../global/global';

/**
 * Represents the window context.
 */
export const ZWindowServiceContext = createContext<typeof globalThis>($global);

/**
 * Gets the current window object.
 *
 * @returns The current window object.
 */
export function useWindowService() {
  return useContext(ZWindowServiceContext);
}
