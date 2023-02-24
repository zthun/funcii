import { ZDataFilterFields } from '../filter/data-filter-fields';
import { IZFilter } from '../filter/filter';
import { IZDataMatch } from '../match/data-match';
import { ZDataMatchAlways } from '../match/data-match-always';
import { IZDataRequest } from './data-request';
import { filter, paginate } from './data-results';
import { IZDataSource } from './data-source';

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
    private _data: T[],
    private _search: IZDataMatch<T, string> = new ZDataMatchAlways(),
    private _filter: IZDataMatch<T, IZFilter> = new ZDataFilterFields()
  ) {}

  public count(request: IZDataRequest): Promise<number> {
    const { search: _search, filter: _filter } = request;
    let data = this._data;
    data = filter(data, _search, this._search);
    data = filter(data, _filter, this._filter);
    return Promise.resolve(data.length);
  }

  public retrieve(request: IZDataRequest): Promise<T[]> {
    const { page = 1, size = Infinity, search: _search, filter: _filter } = request;
    let data = this._data;
    data = filter(data, _search, this._search);
    data = filter(data, _filter, this._filter);
    data = paginate(data, page, size);
    return Promise.resolve(data);
  }
}
