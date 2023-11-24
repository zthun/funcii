import { IZFilterMetadata, IZFilterSubject } from './filter-subject';

/**
 * The operators for a {@link IZFilterBinary} filter.
 */
export enum ZOperatorBinary {
  /**
   * Equals
   */
  Equal = 'eq',
  /**
   * Not equals.
   */
  NotEqual = 'neq',
  /**
   * Less than.
   */
  LessThan = 'lt',
  /**
   * Greater than.
   */
  GreaterThan = 'gt',
  /**
   * Less than or equal to.
   */
  LessThanEqualTo = 'lteq',
  /**
   * Greater than or equal to.
   */
  GreaterThanEqualTo = 'gteq',
  /**
   * Like (Contains)
   */
  Like = 'like'
}

/**
 * Represents a standard comparison filter between a subject field and a wanted value.
 */
export interface IZFilterBinary extends IZFilterSubject<ZOperatorBinary> {
  /**
   * The value to sort by.
   */
  value: any;
}

/**
 * Represents an object that can build up a binary filter.
 */
export class ZFilterBinaryBuilder {
  /**
   * The __type__ identifier for an {@link IZFilterBinary} object.
   */
  public static readonly Type = 'binary';

  private _filter: IZFilterBinary;

  /**
   * Initializes a new instance of this object.
   */
  public constructor() {
    this._filter = {
      subject: '',
      value: null,
      operator: ZOperatorBinary.Equal,
      __type__: ZFilterBinaryBuilder.Type
    };
  }

  /**
   * Sets the subject.
   *
   * @param val -
   *        The value to set.
   *
   * @returns This object.
   */
  public subject(val: string): this {
    this._filter.subject = val;
    return this;
  }

  /**
   * Overrides the value.
   *
   * @param val -
   *        The value to set.
   *
   * @returns This object.
   */
  public value(val: any): this {
    this._filter.value = val;
    return this;
  }

  /**
   * Constructs an equal relationship.
   *
   * @returns
   *        This object
   */
  public equal(): this {
    this._filter.operator = ZOperatorBinary.Equal;
    return this;
  }

  /**
   * Constructs a not equal filter.
   *
   * @returns
   *        This object
   */
  public notEqual(): this {
    this._filter.operator = ZOperatorBinary.NotEqual;
    return this;
  }

  /**
   * Constructs a less than filter.
   *
   * @returns
   *        This object
   */
  public lessThan(): this {
    this._filter.operator = ZOperatorBinary.LessThan;
    return this;
  }

  /**
   * Constructs a greater than filter.
   *
   * @returns
   *        This object.
   */
  public greaterThan(): this {
    this._filter.operator = ZOperatorBinary.GreaterThan;
    return this;
  }

  /**
   * Constructs a less than or equal to filter.
   *
   * @returns
   *        This object.
   */
  public lessThanEqualTo(): this {
    this._filter.operator = ZOperatorBinary.LessThanEqualTo;
    return this;
  }

  /**
   * Constructs a greater than or equal to filter.
   *
   * @returns
   *        A new filter builder object.
   */
  public greaterThanEqualTo(): this {
    this._filter.operator = ZOperatorBinary.GreaterThanEqualTo;
    return this;
  }

  /**
   * Constructs a like filter.
   *
   * @returns
   *        A new filter builder object.
   */
  public like(): this {
    this._filter.operator = ZOperatorBinary.Like;
    return this;
  }

  /**
   * Returns a copy of the currently built filter.
   *
   * @returns
   *        A copy of the currently built filter.
   */
  public build(): IZFilterBinary {
    return { ...this._filter };
  }
}

/**
 * Type guard for determining if a target filter is a binary filter.
 *
 * @param filter -
 *        The filter to test.
 *
 * @returns
 *        True if filters type is a binary filter.  False otherwise.
 */
export function isBinaryFilter(filter: IZFilterMetadata): filter is IZFilterBinary {
  return filter.__type__ === ZFilterBinaryBuilder.Type;
}

/**
 * A mapping of comparators that relates a data to a value.
 */
export const BinaryComparators: Record<ZOperatorBinary, (data: any, value: any) => boolean> = {
  [ZOperatorBinary.Equal]: (d, v) => d === v,
  [ZOperatorBinary.NotEqual]: (d, v) => d !== v,
  [ZOperatorBinary.GreaterThan]: (d, v) => d > v,
  [ZOperatorBinary.GreaterThanEqualTo]: (d, v) => d >= v,
  [ZOperatorBinary.LessThan]: (d, v) => d < v,
  [ZOperatorBinary.LessThanEqualTo]: (d, v) => d <= v,
  [ZOperatorBinary.Like]: (d, v) => `${d}`.indexOf(`${v}`) >= 0
};
