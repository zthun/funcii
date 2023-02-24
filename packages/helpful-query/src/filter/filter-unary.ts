import { IZFilterSubject } from './filter-subject';

/**
 * Operators for a unary filter.
 */
export enum ZUnaryOperator {
  /**
   * Is null.
   */
  IsNull = 'null',
  /**
   * Is not null.
   */
  IsNotNull = 'is-not-null'
}

/**
 * Represents a yes/no style filter.
 */
export interface IZUnaryFilter<TSubject = string> extends IZFilterSubject<ZUnaryOperator, TSubject> {}

/**
 * Represents a builder for a UnaryFilter object.
 */
export class ZUnaryFilterBuilder<TSubject = string> {
  public static readonly Type = 'unary';

  private _filter: IZUnaryFilter<TSubject>;

  /**
   * Initializes a new instance of this object.
   */
  public constructor() {
    this._filter = {
      subject: null as any,
      operator: ZUnaryOperator.IsNull,
      __type__: 'unary'
    };
  }

  /**
   * Sets the subject.
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
   * Sets the operator to is null.
   *
   * @returns
   *        This object.
   */
  public isNull(): this {
    this._filter.operator = ZUnaryOperator.IsNull;
    return this;
  }

  /**
   * Sets the operator to is null.
   *
   * @returns
   *        This object.
   */
  public isNotNull(): this {
    this._filter.operator = ZUnaryOperator.IsNotNull;
    return this;
  }

  /**
   * Returns a copy of the built filter.
   *
   * @returns
   *        A copy of the current filter.
   */
  public build(): IZUnaryFilter<TSubject> {
    return { ...this._filter };
  }
}
