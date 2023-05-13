import { ZDataFilterFields } from '../filter/data-filter-fields';
import { IZFilter } from '../filter/filter';
import { IZDataMatch } from '../match/data-match';
import { ZDataMatchAlways } from '../match/data-match-always';

export interface IZDataSourceStaticOptions<T> {
  search: IZDataMatch<T, string>;
  filter: IZDataMatch<T, IZFilter>;
  delay: number;
}

export class ZDataSourceStaticOptionsBuilder<T> {
  private _options: IZDataSourceStaticOptions<T>;

  public constructor() {
    this._options = {
      search: new ZDataMatchAlways(),
      filter: new ZDataFilterFields(),
      delay: 0
    };
  }

  public search(val: IZDataMatch<T, string> | undefined): this {
    this._options.search = val || new ZDataMatchAlways();
    return this;
  }

  public filter(val: IZDataMatch<T, IZFilter> | undefined): this {
    this._options.filter = val || new ZDataFilterFields();
    return this;
  }

  public delay(val: number | undefined): this {
    this._options.delay = val || 0;
    return this;
  }

  public build(): IZDataSourceStaticOptions<T> {
    return { ...this._options };
  }
}
