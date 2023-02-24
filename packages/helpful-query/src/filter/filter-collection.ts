import { IZFilterSubject } from './filter-subject';

/**
 * Represents an operator that compares collections.
 */
export enum ZCollectionOperator {
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
export interface IZCollectionFilter<TValue = any, TSubject = string>
  extends IZFilterSubject<ZCollectionOperator, TSubject> {
  /**
   * The values to compare the field against.
   */
  values: TValue[];
}

/**
 * Represents a builder for a collection filter.
 */
export class ZCollectionFilterBuilder<TValue = any, TSubject = string> {
  public static readonly Type = 'collection';

  private _filter: IZCollectionFilter<TValue, TSubject>;

  /**
   * Initializes a new instance of this object.
   */
  public constructor() {
    this._filter = {
      subject: null as any,
      operator: ZCollectionOperator.In,
      values: [],
      __type__: ZCollectionFilterBuilder.Type
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
    this._filter.operator = ZCollectionOperator.In;
    return this;
  }

  /**
   * Constructs a not in filter.
   *
   * @returns
   *        This object.
   */
  public notIn(): this {
    this._filter.operator = ZCollectionOperator.NotIn;
    return this;
  }

  /**
   * Returns a copy of the constructed filter.
   *
   * @returns
   *        A copy of the currently built filter.
   */
  public build(): IZCollectionFilter<TValue> {
    return JSON.parse(JSON.stringify(this._filter));
  }
}
