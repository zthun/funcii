import { IZDataRequest } from './data-request.mjs';
import { filter, paginate, sort } from './data-results.mjs';
import { IZDataSourceStaticOptions, ZDataSourceStaticOptionsBuilder } from './data-source-static-options.mjs';
import { IZDataSource } from './data-source.mjs';

/**
 * Represents an in memory data source.
 *
 * This is very useful for testing and when you
 * need to cache a data set that you already have.
 */
export class ZDataSourceStatic<T> implements IZDataSource<T> {
  /**
   * Initializes a new instance of this object.
   *
   * @param _data -
   *        The static data to search, sort, filter, and paginate.
   * @param _options -
   *        The options for the static source.
   */
  public constructor(
    private _data: T[] | Promise<T[]> | Error | Promise<Error>,
    private _options: IZDataSourceStaticOptions<T> = new ZDataSourceStaticOptionsBuilder().build()
  ) {}

  /**
   * Gets a copy of the current list of items.
   *
   * @returns
   *      A shallow copy of the current item list.
   *      Returns a rejected promise if the initial
   *      data is an error.
   */
  public async items(): Promise<T[]> {
    const data = await this._data;

    if (data instanceof Error) {
      return Promise.reject(data);
    }

    return data.slice();
  }

  /**
   * Inserts an item into the existing data array.
   *
   * @param item -
   *        The item to insert.
   * @param index -
   *        The index to insert at.  If this is equal to or less than 0
   *        Then the item will be inserted at the front of the data list.
   *        If this is greater than or equal to the maximum number of
   *        items in the current list, then the item will be inserted
   *        at the end of the list.
   *
   * @returns
   *        A new data source where the item list has been updated to include
   *        the new item.
   */
  public async insert(item: T, index = Infinity): Promise<ZDataSourceStatic<T>> {
    const data = await this.items();
    index = Math.max(index, 0);
    data.splice(index, 0, item);
    return new ZDataSourceStatic(data, this._options);
  }

  public async count(request: IZDataRequest): Promise<number> {
    const { search: _search, filter: _filter } = request;
    const data = await this._data;

    if (data instanceof Error) {
      return new Promise((_, reject) => setTimeout(() => reject(data), this._options.delay));
    }

    let arr: T[] = data;
    arr = filter(arr, _search, this._options.search);
    arr = filter(arr, _filter, this._options.filter);
    return new Promise((resolve) => setTimeout(() => resolve(arr.length), this._options.delay));
  }

  public async retrieve(request: IZDataRequest): Promise<T[]> {
    const { page = 1, size = Infinity, search: _search, filter: _filter, sort: _sort } = request;
    const data = await this._data;

    if (data instanceof Error) {
      return new Promise((_, reject) => setTimeout(() => reject(data), this._options.delay));
    }

    let arr: T[] = data;
    arr = filter(arr, _search, this._options.search);
    arr = filter(arr, _filter, this._options.filter);
    arr = sort(arr, _sort);
    arr = paginate(arr, page, size);

    return new Promise((resolve) => setTimeout(() => resolve(arr), this._options.delay));
  }
}
