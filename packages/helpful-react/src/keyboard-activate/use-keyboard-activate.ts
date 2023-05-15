import { KeyboardEvent, KeyboardEventHandler, useMemo } from 'react';

/**
 * A set of keyboard interactions that should be set on an element.
 */
export interface IZKeyboardInteraction<T = Element> {
  /**
   * The tab index to set on the element.
   *
   * This will be 0 if onKey is handled, or undefined
   * otherwise.
   */
  tabIndex?: number;

  /**
   * A key handler.
   *
   * This can be used for onKeyDown and onKeyUp.
   *
   * @param e -
   *        The keyboard event that happened.
   */
  onKey?(e: KeyboardEvent<T>): void;
}

/**
 * The default codes that will cause the proxy handler to be invoked.
 *
 * This will normally be 'Enter' and 'Space', but you can override them
 * in {@link useKeyboardActivate}.
 */
export const DefaultActivateCodes = ['Enter', 'Space'];

/**
 * Represents a hook that generates a keyboard event that can
 * forward to another event as long as a specific key
 * is pressed.  This will also output the best value for the
 * tabIndex property.
 *
 * The main usage of this hook is to support keyboard navigation
 * for DOM elements that handle click events with a tab index.
 *
 * @param handler -
 *        The callback handler to invoke when any of the key codes
 *        are pressed.  If this is undefined, then it will never be invoked
 * @param codes -
 *        The list of key codes that will fire the event handler. The default
 *        value will be {@link DefaultActivateCodes}.
 *
 * @returns
 *        An object that contains the equivalent keydown event
 */
export function useKeyboardActivate<T = Element>(
  handler?: KeyboardEventHandler<T>,
  codes: string[] = DefaultActivateCodes
): IZKeyboardInteraction<T> {
  const onKey = useMemo(() => {
    if (!handler) {
      return undefined;
    }

    return (e: KeyboardEvent<T>) => {
      if (codes.indexOf(e.code) >= 0) {
        handler(e);
      }
    };
  }, [handler, codes]);

  const tabIndex = handler ? 0 : undefined;

  return { onKey, tabIndex };
}
