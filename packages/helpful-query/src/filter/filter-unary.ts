import { IZFilterMetadata, IZFilterSubject } from './filter-subject';

/**
 * The operators for an {@link IZFilterUnary} filter.
 */
export enum ZOperatorUnary {
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
export interface IZFilterUnary extends IZFilterSubject<ZOperatorUnary> {}

/**
 * Represents a builder for a UnaryFilter object.
 */
export class ZFilterUnaryBuilder {
  /**
   * The __type__ identifier for an {@link IZFilterUnary} object.
   */
  public static readonly Type = 'unary';

  private _filter: IZFilterUnary;

  /**
   * Initializes a new instance of this object.
   */
  public constructor() {
    this._filter = {
      subject: null as any,
      operator: ZOperatorUnary.IsNull,
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
  public subject(val: string): this {
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
    this._filter.operator = ZOperatorUnary.IsNull;
    return this;
  }

  /**
   * Sets the operator to is null.
   *
   * @returns
   *        This object.
   */
  public isNotNull(): this {
    this._filter.operator = ZOperatorUnary.IsNotNull;
    return this;
  }

  /**
   * Returns a copy of the built filter.
   *
   * @returns
   *        A copy of the current filter.
   */
  public build(): IZFilterUnary {
    return { ...this._filter };
  }
}

/**
 * Type guard for determining if a target filter is a unary filter.
 *
 * @param filter -
 *        The filter to test.
 *
 * @returns
 *        True if filters type is a unary filter.  False otherwise.
 */
export function isUnaryFilter(filter: IZFilterMetadata): filter is IZFilterUnary {
  return filter.__type__ === ZFilterUnaryBuilder.Type;
}

/**
 * A list of all unary operators.
 */
export const ZOperatorsUnary: ZOperatorUnary[] = Object.keys(ZOperatorUnary).map((o) => ZOperatorUnary[o]);

/**
 * Comparators for unary operators.
 */
export const ZUnaryComparators: Record<ZOperatorUnary, (data: any) => boolean> = {
  [ZOperatorUnary.IsNull]: (data: any) => data == null,
  [ZOperatorUnary.IsNotNull]: (data: any) => data != null
};

/**
 * @deprecated Use {@link ZUnaryComparators} instead.
 */
export const UnaryComparators = ZUnaryComparators;
