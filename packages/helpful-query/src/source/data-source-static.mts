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
