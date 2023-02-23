/**
 * A sorting direction.
 */
export enum ZSortDirection {
  /**
   * Ascending sort.
   */
  Ascending = 'asc',
  /**
   * Descending sort.
   */
  Descending = 'desc'
}

/**
 * Represents an option for sorting.
 */
export interface IZSort<TSubject = string> {
  /**
   * The field id to sort by.
   */
  subject: TSubject;
  /**
   * The direction to sort.
   */
  direction: ZSortDirection;
}

/**
 * Represents a builder for a sort list.
 */
export class ZSortBuilder<TSubject = string> {
  private _sort: IZSort<TSubject>[];

  /**
   * Initializes a new instance of this object.
   */
  public constructor() {
    this._sort = [];
  }

  /**
   * Adds an ascending order clause.
   *
   * @param field -
   *        The field to sort by.
   *
   * @returns
   *        This object
   */
  public ascending(field: TSubject): this {
    this._sort.push({ subject: field, direction: ZSortDirection.Ascending });
    return this;
  }

  /**
   * Adds a descending order clause.
   *
   * @param field -
   *        The field to sort by.
   *
   * @returns
   *        This object
   */
  public descending(field: TSubject): this {
    this._sort.push({ subject: field, direction: ZSortDirection.Descending });
    return this;
  }

  /**
   * Returns the current sort state.
   *
   * @returns
   *        The current sort state.
   */
  public build(): IZSort[] {
    return JSON.parse(JSON.stringify(this._sort));
  }
}
