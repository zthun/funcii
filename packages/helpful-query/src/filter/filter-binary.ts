import { IZFilterSubject } from './filter-subject';

/**
 * Represents the available operators for a binary filter.
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
 * Represents a standard comparison filter between a field and a wanted value.
 */
export interface IZFilterBinary<TValue = any, TSubject = string> extends IZFilterSubject<ZOperatorBinary, TSubject> {
  /**
   * The value to sort by.
   */
  value: TValue;
}

/**
 * Represents an object that can build up a binary filter.
 */
export class ZFilterBinaryBuilder<TValue = any, TSubject = string> {
  public static readonly Type = 'binary';

  private _filter: IZFilterBinary<TValue, TSubject>;

  /**
   * Initializes a new instance of this object.
   */
  public constructor() {
    this._filter = {
      subject: null as any,
      value: null as any,
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
  public subject(val: TSubject): this {
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
  public value(val: TValue): this {
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
  public build(): IZFilterBinary<TValue, TSubject> {
    return { ...this._filter };
  }
}
