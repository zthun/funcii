import { v4 } from 'uuid';

/**
 * Creates a globally unique identifier.
 *
 * The identifier holds to v4 of the UUID specification.  A summary
 * of the specification can be found at
 * {@link https://commons.apache.org/sandbox/commons-id/uuid.html | Apache Commons UUID Documentation}.
 *
 * The official documentation of the UUID specification is under
 * {@link https://www.rfc-editor.org/info/rfc4122 | RFC 4122}
 *
 * @returns
 *        A new generated globally unique identifier based on random bytes.
 *
 * @example
 *
 * ```ts
 * // Will get a value similar to 53e33fb6-d05a-4fa9-8dc0-b78e4feaa702
 * const guidA = createGuid();
 * // Will most likely not ever be equal to guidA
 * const guidB = createGuid();
 * ```
 */
export const createGuid: () => string = v4;
