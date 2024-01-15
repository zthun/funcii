import { castArray } from 'lodash-es';

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
  subject?: string;

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
   * Sets all sorts.
   *
   * @param val -
   *        The value to set.
   *
   * @returns
   *        This object.
   */
  public sorts(val: IZSort[]): this {
    this._sort = val;
    return this;
  }

  /**
   * Adds 1 or more sorts.
   *
   * @param val -
   *        The value to concat to the sorts.
   *
   * @returns
   *        This object.
   */
  public sort(val: IZSort | IZSort[]): this {
    const _sorts = castArray(val);
    return this.sorts(this._sort.concat(_sorts));
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
  public ascending(subject?: string): this {
    return this.sort({ subject, direction: ZSortDirection.Ascending });
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
  public descending(subject?: string): this {
    return this.sort({ subject, direction: ZSortDirection.Descending });
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
