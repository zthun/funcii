/**
 * The root filter that relates an operator to a subject.
 */
export interface IZFilterSubject<TOperator, TSubject = string> {
  /**
   * The filed to sort by.
   */
  subject: TSubject;

  /**
   * The operator that relates the subject to something.
   */
  operator: TOperator;

  /**
   * Metadata type information about this filter.
   */
  __type__: string;
}

/**
 * Type guard helper which determines if a filter is a specified type.
 *
 * @param __type__ -
 *        The type to check.
 * @param filter -
 *        The filter to check against.
 *
 * @returns
 *        True if the filter.__type__ property equals __type__.  False
 *        otherwise.
 */
export function filterIsType(__type__: string, filter: IZFilterSubject<any, any>): boolean {
  return filter.__type__ === __type__;
}
