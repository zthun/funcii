import { ZDataSourceStatic } from '@zthun/helpful-query';
import { range } from 'lodash';
import { IZPerson, ZPersonBuilder } from '../person/person';

/**
 * Generates count people.
 *
 * @param count -
 *        The total number of people to generate.
 *
 * @returns -
 *        A static list of randomly generated people.
 */
function generate(count: number) {
  return range(0, count).map(() => new ZPersonBuilder().random().build());
}

/**
 * Represents a data source of randomly generated people.
 */
export class ZDataSourcePeople extends ZDataSourceStatic<IZPerson> {
  /**
   * Initializes a new instance of this object.
   *
   * @param count -
   *        The total number of people to generate.
   */
  public constructor(count = 5000) {
    super(generate(count));
  }
}
