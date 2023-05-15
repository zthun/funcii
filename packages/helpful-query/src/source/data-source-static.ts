import { IZDataRequest } from './data-request';
import { filter, paginate, sort } from './data-results';
import { IZDataSource } from './data-source';
import { IZDataSourceStaticOptions, ZDataSourceStaticOptionsBuilder } from './data-source-static-options';

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
   * @param _search -
   *        The search matching strategy.  If this is undefined, then
   *        all data will match.
   */
  public constructor(
    private _data: T[] | Promise<T[]>,
    private _options: IZDataSourceStaticOptions<T> = new ZDataSourceStaticOptionsBuilder().build()
  ) {}

  public async count(request: IZDataRequest): Promise<number> {
    const { search: _search, filter: _filter } = request;
    let data = await this._data;
    data = filter(data, _search, this._options.search);
    data = filter(data, _filter, this._options.filter);
    return new Promise((resolve) => setTimeout(() => resolve(data.length), this._options.delay));
  }

  public async retrieve(request: IZDataRequest): Promise<T[]> {
    const { page = 1, size = Infinity, search: _search, filter: _filter, sort: _sort } = request;
    let data = await this._data;
    data = filter(data, _search, this._options.search);
    data = filter(data, _filter, this._options.filter);
    data = sort(data, _sort);
    data = paginate(data, page, size);

    return new Promise((resolve) => setTimeout(() => resolve(data), this._options.delay));
  }
}
