import { IZDataRequest, IZDataSource, ZDataSourceStatic } from '@zthun/helpful-query';
import { range } from 'lodash';
import { IZPerson, ZPersonBuilder } from '../person/person';

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
  public constructor(count = 5000) {
    this._count = count;

    this._people =
      this._people ||
      Promise.resolve(true)
        .then(() => range(0, this._count).map(() => new ZPersonBuilder().random().build()))
        .then((p) => new ZDataSourceStatic(p));
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
