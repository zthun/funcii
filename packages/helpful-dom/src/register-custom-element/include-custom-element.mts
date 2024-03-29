import { identity } from 'lodash-es';

/**
 * Does nothing.
 *
 * Mostly to make sure that custom elements are registered
 * and not removed by tree shaking.
 *
 * @param ctor -
 *        The custom element constructor.
 *
 * @deprecated You can just use lodash or just make sure to include it somehow.
 */
export const includeCustomElement: (ctor: CustomElementConstructor) => void = identity;
