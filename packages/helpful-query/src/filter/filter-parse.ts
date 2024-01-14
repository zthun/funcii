import { trim } from 'lodash';
import { IZFilter, ZOperatorsFilter } from './filter';
import { IZFilterBinary, ZFilterBinaryBuilder, ZOperatorBinary, isBinaryOperator } from './filter-binary';
import { ZFilterCollectionBuilder } from './filter-collection';

/**
 * Peels a candidate string from the start of a string and splits it into two segments.
 *
 * @param str -
 *        The string to peel from.
 * @param candidates -
 *        The candidate list of values to peel from str.
 *
 * @returns
 *        A tuple where the first item is the peeled string and
 *        the second item is the remainder of the string.  If the string
 *        does not start with any given candidates, then the first
 *        item will be null and the second item will be str.
 */
export function peel<T extends string = string>(str: string, candidates: T[]): [T | null, string] {
  for (const check of candidates) {
    if (str.startsWith(check)) {
      return [str.substring(0, check.length) as T, str.substring(check.length)];
    }
  }

  return [null, str];
}

/**
 * Peels the values between an opening string set and a closing string set.
 *
 * The actual value will handle issues with internal opening and closing brackets
 *
 * @example
 *
 * ```ts
 * const [peeled, rest] = peelBetween('[a, b, [c1, c2],[d]] other', '[' ']');
 *
 * // Outputs 'a, b, [c1, c2], [d]'
 * console.log(peeled);
 *
 * // Outputs ' other' - white space is included'
 * console.log(rest);
 * ```
 *
 * @param str -
 *        The string to peel between.
 * @param open -
 *        The opening string.  This will test
 *        at the start of str.
 * @param close -
 *        The closing string.  This can be anywhere
 *        in the str.  If this is equal to open, then
 *        the open string is removed from the start of the
 *        string and the rest of the string would be returned.
 *
 * @returns
 *        A tuple where the first argument is string that was found between
 *        the opening and closing bracket. Returns null if no string could
 *        be found between an open and close pair.  The second argument will
 *        be the remaining text of the string, including whitespace.
 */
export function peelBetween(str: string, open: string, close: string): [string | null, string] {
  if (!str.startsWith(open)) {
    return [null, str];
  }

  let stack = 1;

  const _str = str.substring(open.length);

  for (let i = 0; i < _str.length; ++i) {
    if (_str.startsWith(open, i)) {
      stack += 1;
      i += open.length - 1;
      continue;
    }

    if (_str.startsWith(close, i)) {
      stack -= 1;

      if (stack === 0) {
        return [_str.substring(0, i), _str.substring(i + close.length)];
      }

      i += close.length - 1;
    }
  }

  return [null, str];
}

export class ZFilterParser {
  public parse(filter: string): IZFilter {
    const [operator, rest] = peel(trim(filter), ZOperatorsFilter);

    if (operator == null) {
      throw new Error(`Cannot determine filter operator at ${filter}.`);
    }

    if (isBinaryOperator(operator)) {
      return this._parseBinaryFilter(operator, rest);
    }

    return new ZFilterCollectionBuilder().build();
  }

  public tryParse(filter: string): IZFilter | undefined;
  public tryParse(filter: string, fallback: IZFilter): IZFilter;
  public tryParse(filter: string, fallback?: IZFilter): IZFilter | undefined {
    try {
      return this.parse(filter);
    } catch {
      return fallback;
    }
  }

  private _parseBinaryFilter(operator: ZOperatorBinary, args: string): IZFilterBinary {
    const [argList, rest] = peelBetween(args, '(', ')');

    if (argList == null) {
      throw new Error(`Unable to find opening and closing parenthesis for ${args}.  Check syntax.`);
    }

    if (trim(rest).length > 0) {
      throw new Error(`Extraneous characters found at the end of the argument list: ${rest}`);
    }

    const splitArgs = argList.split(',');

    if (splitArgs.length !== 2) {
      throw new Error(`Argument mismatch for ${operator} filter: ${splitArgs}. Expected 2, got ${splitArgs.length}.`);
    }

    // Allows a user to use uri encoding to pass characters that would conflict with
    // the argument syntax.
    let [subject, value] = splitArgs;
    subject = decodeURIComponent(trim(subject));
    value = decodeURIComponent(trim(value));

    return new ZFilterBinaryBuilder().operator(operator).subject(subject).value(value).build();
  }
}
