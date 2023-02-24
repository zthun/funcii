import { get } from 'lodash';
import { IZDataMatch } from '../match/data-match';
import { IZFilter } from './filter';
import { BinaryComparators, IZFilterBinary } from './filter-binary';
import { isCollectionFilter } from './filter-collection';
import { isLogicFilter, IZFilterLogic, ZOperatorLogic } from './filter-logic';
import { isUnaryFilter } from './filter-unary';

/**
 * Represents a data match object that applies a filter.
 */
export class ZDataFilterFields<TData> implements IZDataMatch<TData, IZFilter> {
  /**
   * Matches a logic filter.
   *
   * @param data -
   *        The data to match.
   * @param filter -
   *        The filter to apply.
   *
   * @returns
   *        True if data matches all or some of the clauses in filter
   *        depending on the filters logic operator.
   */
  private _matchLogicFilter(data: TData, filter: IZFilterLogic): boolean {
    return filter.operator === ZOperatorLogic.And
      ? filter.clauses.every((f) => this.match(data, f))
      : filter.clauses.some((f) => this.match(data, f));
  }

  /**
   * Matches data against a binary filter.
   *
   * @param data -
   *        The data to match.
   * @param filter -
   *        The filter to apply.
   *
   * @returns
   *        True if data matches the filter.
   */
  private _matchBinaryFilter(data: TData, filter: IZFilterBinary) {
    const comparator = BinaryComparators[filter.operator];
    const compareAgainst = filter.subject ? get(data, filter.subject, null) : data;
    return comparator(compareAgainst, filter.value);
  }

  public match(data: TData, filter: IZFilter): boolean {
    if (isLogicFilter(filter)) {
      return this._matchLogicFilter(data, filter);
    }

    if (isCollectionFilter(filter)) {
      // TODO
      return true;
    }

    if (isUnaryFilter(filter)) {
      // TODO
      return true;
    }

    return this._matchBinaryFilter(data, filter);
  }
}
