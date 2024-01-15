import { peel, peelBetween } from '@zthun/helpful-fn';
import { trim, trimStart } from 'lodash-es';
import { IZSort, ZSortBuilder, ZSortDirections } from './sort.mjs';

export class ZSortParser {
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

  public tryParse(candidate: string): IZSort[] | undefined;
  public tryParse(candidate: string, fallback: IZSort[]): IZSort[];
  public tryParse(candidate: string, fallback?: IZSort[]): IZSort[] | undefined {
    try {
      return this.parse(candidate);
    } catch {
      return fallback;
    }
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
