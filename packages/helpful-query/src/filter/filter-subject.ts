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
