import { get } from 'lodash';
import { IZDataMatch } from '../match/data-match';
import { IZFilter } from './filter';
import { BinaryComparators } from './filter-binary';
import { CollectionComparators, isCollectionFilter } from './filter-collection';
import { isLogicFilter, IZFilterLogic, ZOperatorLogic } from './filter-logic';
import { IZFilterSubject } from './filter-subject';
import { isUnaryFilter, UnaryComparators } from './filter-unary';

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
   * Matches an operator filter by it's comparators.
   *
   * The subject of the filter will apply against the data and
   * will map as a path to a property in the data object.  If the
   * subject itself is empty or null, then the data itself is
   * compared.
   *
   * @param data -
   *        The data to compare with.
   * @param filter -
   *        The filter to apply.
   * @param comparators -
   *        The comparator map that maps from the filter operator to the
   *        function that applies the match compare.
   * @param value -
   *        The optional value to compare against.
   *
   * @returns
   *        The result from the mapped comparator given the data and
   *        optional value.
   */
  private _matchSubjectFilter<T extends string, F extends IZFilterSubject<T>>(
    data: TData,
    filter: F,
    comparators: Record<T, (d: any, v?: any) => boolean>,
    value?: any
  ) {
    const comparator = comparators[filter.operator];
    const compareAgainst = filter.subject ? get(data, filter.subject, null) : data;
    return comparator(compareAgainst, value);
  }

  public match(data: TData, filter: IZFilter): boolean {
    if (isLogicFilter(filter)) {
      return this._matchLogicFilter(data, filter);
    }

    if (isCollectionFilter(filter)) {
      return this._matchSubjectFilter(data, filter, CollectionComparators, filter.values);
    }

    if (isUnaryFilter(filter)) {
      return this._matchSubjectFilter(data, filter, UnaryComparators);
    }

    return this._matchSubjectFilter(data, filter, BinaryComparators, filter.value);
  }
}
