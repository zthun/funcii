export type JoinListInputParameter<T> = T | [T, boolean] | null | undefined;

/**
 * Similar to a string join, but filters out null and undefined items.
 *
 * @param delimiter -
 *        The delimiter that separates the items.
 * @param items -
 *        The items to join.
 *
 * @returns
 *        A string that joins the items that are defined, separated by delimiter.
 */
export function joinList<T>(delimiter: string, ...items: JoinListInputParameter<T>[]) {
  return items
    .map((item) => (item instanceof Array ? (item[1] ? item[0] : null) : item))
    .filter((item) => item != null)
    .join(delimiter);
}

/**
 * Alias to joinList with a string delimiter.
 *
 * @param items -
 *        The items to join.
 *
 * @returns
 *        A string that joins the items that are defined, separated by space delimiter.
 */
export const spaceJoinList: <T>(...items: JoinListInputParameter<T>[]) => string = joinList.bind(null, ' ');

/**
 * Alias of spaceJoinList.
 *
 * @param items -
 *        The items to join.
 *
 * @returns
 *        A string that joins the items that are defined, separated by a space delimiter.
 */
export const cssJoinList: <T>(...items: JoinListInputParameter<T>[]) => string = spaceJoinList;

/**
 * Alias of joinList with a comma delimiter.
 *
 * @param items -
 *        The items to join.
 *
 * @returns
 *        A string that joins the items that are defined, separated by a comma delimiter.
 */
export const commaJoinList: <T>(...items: JoinListInputParameter<T>[]) => string = joinList.bind(null, ',');

/**
 * Alias of joinList with a semi-colon delimiter.
 *
 * @param items -
 *        The items to join.
 *
 * @returns
 *        A string that joins the items that are defined, separated by a semi-colon delimiter.
 */
export const semiColonJoinList: <T>(...items: JoinListInputParameter<T>[]) => string = joinList.bind(null, ';');

/**
 * Alias of joinList with a pipe delimiter.
 *
 * @param items -
 *        The items to join.
 *
 * @returns
 *        A string that joins the items that are defined, separated by a pipe delimiter.
 */
export const pipeJoinList: <T>(...items: JoinListInputParameter<T>[]) => string = joinList.bind(null, '|');
