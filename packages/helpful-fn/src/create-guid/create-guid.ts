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
 */
export const createGuid: () => string = v4;
