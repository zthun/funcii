import { IZFilter } from './filter';
import { IZFilterSubject } from './filter-subject';

/**
 * Represents the connector for a logic filter.
 */
export enum ZLogicOperator {
  /**
   * And.
   */
  And = 'and',
  /**
   * Or
   */
  Or = 'or'
}

/**
 * Represents a composite logical filter.
 */
export interface IZLogicFilter extends IZFilterSubject<ZLogicOperator, IZFilter[]> {}

/**
 * Represents a builder for a logic filter.
 */
export class ZLogicFilterBuilder {
  public static readonly Type = 'logic';

  private _filter: IZLogicFilter;

  /**
   * Initializes a new instance of this object.
   */
  public constructor() {
    this._filter = {
      subject: [],
      operator: ZLogicOperator.And,
      __type__: ZLogicFilterBuilder.Type
    };
  }

  /**
   * Sets the operator to and.
   *
   * @returns
   *        This object.
   */
  public and(): this {
    this._filter.operator = ZLogicOperator.And;
    return this;
  }

  /**
   * Sets the operator to or.
   *
   * @returns
   *        This object.
   */
  public or(): this {
    this._filter.operator = ZLogicOperator.Or;
    return this;
  }

  /**
   * Adds another clause.
   *
   * @param val -
   *        The clause to add.
   *
   * @returns
   *        This object.
   */
  public clause(val: IZFilter): this {
    this._filter.subject.push(val);
    return this;
  }

  /**
   * Sets the list of clauses.
   *
   * @param val -
   *        The value to set.
   *
   * @returns
   *        This object
   */
  public clauses(val: IZFilter[]): this {
    this._filter.subject = val;
    return this;
  }

  /**
   * Returns the filter.
   *
   * @returns
   *        The logic filter
   */
  public build(): IZLogicFilter {
    return { ...this._filter };
  }
}
