import { IZFilter } from '../filter/filter';
import { IZSort } from '../sort/sort';

/**
 * Describes a request for a given set of data.
 */
export interface IZDataRequest {
  /**
   * The page number.
   *
   * This is one based.  Should always default
   * to 1.
   */
  page?: number;
  /**
   * The page size.
   *
   * If not set, it will be up to the consumer
   * to decide the default.
   */
  size?: number;

  /**
   * Search query.
   *
   * How the search is performed is done
   * through the consumer.  You can use an
   * @see IZDataMatch for an example implementation.
   */
  search?: string;

  /**
   * The filter query.
   *
   * How the filter is applied is done through
   * the consumer.  You can use an
   * @see IZDataMatch for an example implementation.
   */
  filter?: IZFilter;

  /**
   * The sort order.
   *
   * How the sort is applied is done through the consumer.
   * You can use an
   *
   * @see IZDataCompare for an example implementation.
   */
  sort?: IZSort[];
}

/**
 * Represents a builder for a data request.
 */
export class ZDataRequestBuilder {
  private _request: IZDataRequest;

  /**
   * Initializes a new instance of this object.
   */
  public constructor() {
    this._request = {};
  }

  /**
   * Sets the page to retrieve.
   *
   * @param page -
   *        The page number
   *
   * @returns
   *        A reference to this object.
   */
  public page(page?: number): this {
    this._request.page = page;
    return this;
  }

  /**
   * Sets the page size.
   *
   * @param size -
   *        The page size.
   *
   * @returns
   *        A reference to this object.
   */
  public size(size?: number): this {
    this._request.size = size;
    return this;
  }

  /**
   * Sets the search criteria.
   *
   * @param search -
   *        The search query.
   *
   * @returns
   *        A reference to this object.
   */
  public search(search?: string): this {
    this._request.search = search;
    return this;
  }

  /**
   * Sets the filter criteria.
   *
   * @param filter -
   *        The filter criteria.
   *
   * @returns
   *        A reference to this object.
   */
  public filter(filter?: IZFilter): this {
    this._request.filter = filter;
    return this;
  }

  /**
   * Sets the sort criteria.
   *
   * @param sort -
   *        The list of sorts to make on the request.
   *
   * @returns
   *        A reference to this object.
   */
  public sort(sort?: IZSort[]): this {
    this._request.sort = sort;
    return this;
  }

  /**
   * Copies an existing data request into this object.
   *
   * @param other -
   *        The data request object to copy.
   *
   * @returns
   *        A reference to this object.
   */
  public copy(other: IZDataRequest) {
    this._request = JSON.parse(JSON.stringify(other));
    return this;
  }

  /**
   * Returns the currently built request.
   *
   * The returned request will be a deep copy.
   *
   * @returns
   *        The currently built request.
   */
  public build(): IZDataRequest {
    return JSON.parse(JSON.stringify(this._request));
  }
}
