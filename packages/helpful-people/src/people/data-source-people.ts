import { sleep } from '@zthun/helpful-fn';
import {
  IZDataRequest,
  IZDataSource,
  IZDataSourceStaticOptions,
  ZDataFilterFields,
  ZDataSearchFields,
  ZDataSourceStatic,
  ZDataSourceStaticOptionsBuilder
} from '@zthun/helpful-query';
import { range } from 'lodash';
import { IZPerson, ZPersonBuilder } from '../person/person';

const DefaultPeopleStaticOptions = Object.freeze(
  new ZDataSourceStaticOptionsBuilder<IZPerson>()
    .search(new ZDataSearchFields())
    .filter(new ZDataFilterFields())
    .delay(200)
    .build()
) satisfies IZDataSourceStaticOptions<IZPerson>;

/**
 * Represents a data source of randomly generated people.
 */
export class ZDataSourcePeople implements IZDataSource<IZPerson> {
  private readonly _count: number;
  private _people: Promise<ZDataSourceStatic<IZPerson>>;

  /**
   * Initializes a new instance of this object.
   *
   * @param count -
   *        The total number of people to generate.
   */
  public constructor(count = 5000, options: IZDataSourceStaticOptions<IZPerson> = DefaultPeopleStaticOptions) {
    this._count = count;

    // Note that the first call to count and retrieve have a double debounce.  This is intentional.
    this._people =
      this._people ||
      Promise.resolve(true)
        .then(() => sleep(options?.delay))
        .then(() => range(0, this._count).map(() => new ZPersonBuilder().random().build()))
        .then((p) => new ZDataSourceStatic(p, options));
  }

  public async count(request: IZDataRequest): Promise<number> {
    const source = await this._people;
    return source.count(request);
  }

  public async retrieve(request: IZDataRequest): Promise<IZPerson[]> {
    const source = await this._people;
    return source.retrieve(request);
  }
}
