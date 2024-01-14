import { peel, peelBetween } from '@zthun/helpful-fn';
import { trim } from 'lodash';
import { IZFilter, ZOperatorsFilter } from './filter';
import { IZFilterBinary, ZFilterBinaryBuilder, ZOperatorBinary, isBinaryOperator } from './filter-binary';
import { ZFilterCollectionBuilder } from './filter-collection';

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
