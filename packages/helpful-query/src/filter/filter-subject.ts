/**
 * The root filter that contains metadata information about the filter.
 */
export interface IZFilterMetadata {
  /**
   * Metadata type information about this filter.
   */
  __type__: string;
}

export interface IZFilterOperator<TOperator> extends IZFilterMetadata {
  /**
   * The operator that relates the subject to something.
   */
  operator: TOperator;
}

/**
 * The root filter that relates an operator to a subject.
 */
export interface IZFilterSubject<TOperator> extends IZFilterOperator<TOperator> {
  /**
   * The filed to sort by.
   */
  subject: string;
}
