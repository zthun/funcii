/**
 * Represents an object which can match data to a filter query.
 *
 * @param TData -
 *        The type of data being matched.
 * @param TFilter -
 *        The type of filter that helps relate to the data.
 */
export interface IZDataMatch<TData, TFilter> {
  /**
   * Gets whether the given data matches the given filter.
   *
   * @param data -
   *        The data to check.
   * @param filter -
   *        The filter to match against.
   *
   * @returns
   *        True if the data matches the filter.
   */
  match(data: TData, filter: TFilter): boolean;
}
