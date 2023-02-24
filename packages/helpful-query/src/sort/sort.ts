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
export interface IZSort {
  /**
   * The subject to sort by.
   */
  subject: string;

  /**
   * The direction to sort.
   */
  direction: ZSortDirection;
}

/**
 * Represents a builder for a sort list.
 */
export class ZSortBuilder {
  private _sort: IZSort[];

  /**
   * Initializes a new instance of this object.
   */
  public constructor() {
    this._sort = [];
  }

  /**
   * Adds an ascending order clause.
   *
   * @param subject -
   *        The subject to sort by.
   *
   * @returns
   *        This object
   */
  public ascending(subject: string): this {
    this._sort.push({ subject, direction: ZSortDirection.Ascending });
    return this;
  }

  /**
   * Adds a descending order clause.
   *
   * @param subject -
   *        The subject to sort by.
   *
   * @returns
   *        This object
   */
  public descending(subject: string): this {
    this._sort.push({ subject: subject, direction: ZSortDirection.Descending });
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
