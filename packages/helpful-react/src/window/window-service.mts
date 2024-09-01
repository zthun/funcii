import { $global } from "@zthun/helpful-fn";
import { createContext, useContext } from "react";

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
