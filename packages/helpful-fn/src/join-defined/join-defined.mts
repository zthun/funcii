/**
 * A set of parameters that can be used for a string join.
 *
 * Join lists can be a regular object, null, undefined, or a tuple where the
 * first item is the object to join, and the second item is a boolean that specifies
 * whether to include it if the value is truthy.
 *
 * @param T -
 *        The type of data to join.
 */
export type JoinListInputParameter<T> = T | [T, boolean] | null | undefined;

/**
 * Similar to {@link Array.join}, but filters out null and undefined items.
 *
 * @param delimiter -
 *        The delimiter that separates the items.
 * @param items -
 *        The items to join.
 * @param T -
 *        The type of data to join.
 *
 * @returns
 *        A string that joins the items that are defined, separated by delimiter.
 *
 * @example
 *
 * ```ts
 * // 'a b d'
 * const joinBySpace = joinDefined(' ', 'a', 'b', ['c', false], null, undefined, ['d', true]);
 * // (Empty String)
 * const joinEmpty = joinDefined('?');
 * ```
 */
export function joinDefined<T>(delimiter: string, ...items: JoinListInputParameter<T>[]) {
  return items
    .map((item) => (item instanceof Array ? (item[1] ? item[0] : null) : item))
    .filter((item) => item != null)
    .join(delimiter);
}

/**
 * Alias to joinList with a space delimiter.
 *
 * @param items -
 *        The items to join.
 * @param T -
 *        The type of data to join.
 *
 * @returns
 *        A string that joins the items that are defined, separated by space delimiter.
 *
 * @see
 *        {@link joinDefined} for more information and examples.
 */
export const spaceJoinDefined: <T>(...items: JoinListInputParameter<T>[]) => string = joinDefined.bind(null, ' ');

/**
 * Alias of spaceJoinList.
 *
 * @param items -
 *        The items to join.
 * @param T -
 *        The type of data to join.
 *
 * @returns
 *        A string that joins the items that are defined, separated by a space delimiter.
 *
 * @see
 *        {@link joinDefined} for more information and examples.
 */
export const cssJoinDefined: <T>(...items: JoinListInputParameter<T>[]) => string = spaceJoinDefined;

/**
 * Alias of joinList with a comma delimiter.
 *
 * @param items -
 *        The items to join.
 * @param T -
 *        The type of data to join.
 *
 * @returns
 *        A string that joins the items that are defined, separated by a comma delimiter.
 *
 * @see
 *        {@link joinDefined} for more information and examples.
 */
export const commaJoinDefined: <T>(...items: JoinListInputParameter<T>[]) => string = joinDefined.bind(null, ',');

/**
 * Alias of joinList with a semi-colon delimiter.
 *
 * @param items -
 *        The items to join.
 * @param T -
 *        The type of data to join.
 *
 * @returns
 *        A string that joins the items that are defined, separated by a semi-colon delimiter.
 *
 * @see
 *        {@link joinDefined} for more information and examples.
 */
export const semiColonJoinDefined: <T>(...items: JoinListInputParameter<T>[]) => string = joinDefined.bind(null, ';');

/**
 * Alias of joinList with a pipe delimiter.
 *
 * @param items -
 *        The items to join.
 * @param T -
 *        The type of data to join.
 *
 * @returns
 *        A string that joins the items that are defined, separated by a pipe delimiter.
 *
 * @see
 *        {@link joinDefined} for more information and examples.
 */
export const pipeJoinDefined: <T>(...items: JoinListInputParameter<T>[]) => string = joinDefined.bind(null, '|');
