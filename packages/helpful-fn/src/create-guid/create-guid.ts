import { v4 } from 'uuid';

/**
 * Creates a globally unique identifier.
 *
 * @returns
 *        A new generated globally unique identifier.
 */
export const createGuid: () => string = v4;
