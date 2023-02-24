import { IZFilterSubject } from './filter-subject';

/**
 * Represents an operator that compares collections.
 */
export enum ZOperatorCollection {
  /**
   * In
   */
  In = 'in',
  /**
   * Not in.
   */
  NotIn = 'not-in'
}

/**
 * A filter that operates on a collection of values.
 */
export interface IZFilterCollection<TValue = any, TSubject = string>
  extends IZFilterSubject<ZOperatorCollection, TSubject> {
  /**
   * The values to compare the field against.
   */
  values: TValue[];
}

/**
 * Represents a builder for a collection filter.
 */
export class ZFilterCollectionBuilder<TValue = any, TSubject = string> {
  public static readonly Type = 'collection';

  private _filter: IZFilterCollection<TValue, TSubject>;

  /**
   * Initializes a new instance of this object.
   */
  public constructor() {
    this._filter = {
      subject: null as any,
      operator: ZOperatorCollection.In,
      values: [],
      __type__: ZFilterCollectionBuilder.Type
    };
  }

  /**
   * Sets the field.
   *
   * @param val -
   *        The value to set.
   *
   * @returns
   *        This object.
   */
  public subject(val: TSubject): this {
    this._filter.subject = val;
    return this;
  }

  /**
   * Sets all of the values.
   *
   * @param values -
   *        The collection of values.
   *
   * @returns
   *        This object.
   */
  public values(values: TValue[]): this {
    this._filter.values = values;
    return this;
  }

  /**
   * Adds a value to the existing collection of values.
   *
   * @param value -
   *        The value to add.
   *
   * @returns
   *        This object.
   */
  public value(value: TValue): this {
    this._filter.values.push(value);
    return this;
  }

  /**
   * Constructs an in filter.
   *
   * @returns
   *        This object.
   */
  public in(): this {
    this._filter.operator = ZOperatorCollection.In;
    return this;
  }

  /**
   * Constructs a not in filter.
   *
   * @returns
   *        This object.
   */
  public notIn(): this {
    this._filter.operator = ZOperatorCollection.NotIn;
    return this;
  }

  /**
   * Returns a copy of the constructed filter.
   *
   * @returns
   *        A copy of the currently built filter.
   */
  public build(): IZFilterCollection<TValue> {
    return JSON.parse(JSON.stringify(this._filter));
  }
}

/**
 * Type guard for determining if a target filter is a collection filter.
 *
 * @param filter -
 *        The filter to test.
 *
 * @returns
 *        True if filters type is a collection filter.  False otherwise.
 */
export function isCollectionFilter<T, S>(filter: IZFilterSubject<any, any>): filter is IZFilterCollection<T, S> {
  return filter.__type__ === ZFilterCollectionBuilder.Type;
}
