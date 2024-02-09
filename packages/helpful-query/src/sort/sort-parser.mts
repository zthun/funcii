import { ZSortDeserialize } from './sort-deserialize.mjs';
import { IZSort } from './sort.mjs';

/**
 * A parser object that can parse an {@link IZSort} list from a string.
 *
 * @deprecated Use {@link ZSortDeserialize} instead.
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
    return new ZSortDeserialize().deserialize(candidate);
  }
}
