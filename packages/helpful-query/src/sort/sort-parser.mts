import { peel, peelBetween } from '@zthun/helpful-fn';
import { trim, trimStart } from 'lodash-es';
import { IZSort, ZSortBuilder, ZSortDirections } from './sort.mjs';

/**
 * A parser object that can parse an {@link IZSort} list from a string.
 */
export class ZSortParser {
  /**
   * Attempts to parse a list of {@link IZSort} objects from the candidate string.
   *
   * @param candidate -
   *        The string to parse.
   *
   * @returns
   *        A sort list that was parsed from the candidate string.
   * @throws
   *        Error if there is a syntax error while parsing a sort.
   */
  public parse(candidate: string): IZSort[] {
    // A sort candidate can be fully between parens to allow for multi sort
    // or can just be a single sort.
    const [_candidate, rest] = peelBetween(trim(candidate), '(', ')');
    const $candidate = _candidate == null ? rest : _candidate;
    let builder = new ZSortBuilder();

    let remaining = $candidate;

    while (remaining) {
      const strippedSort = this._parseSort(remaining);
      const [sort] = strippedSort;
      [, remaining] = strippedSort;
      builder = builder.sort(sort);
      remaining = trimStart(remaining, ', ');
    }

    return builder.build();
  }

  private _parseSort(candidate: string): [IZSort, string] {
    const [direction, rest] = peel(candidate, ZSortDirections);

    if (direction == null) {
      throw new Error(`Cannot determine sort direction at ${candidate}`);
    }

    const peeledSubject = peelBetween(rest, '(', ')');
    let [subject] = peeledSubject;
    const [, remainingSortsToParse] = peeledSubject;

    if (subject == null) {
      throw new Error(`Cannot determine sort subject at ${rest}.`);
    }

    subject = decodeURIComponent(trim(subject));

    if (!subject) {
      throw new Error(`Cannot determine sort subject at ${rest}.`);
    }

    return [{ direction, subject }, remainingSortsToParse];
  }
}
