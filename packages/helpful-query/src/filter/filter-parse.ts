import { peel, peelBetween } from '@zthun/helpful-fn';
import { trim } from 'lodash';
import { IZFilter, ZOperatorFilter, ZOperatorsFilter } from './filter';
import { IZFilterBinary, ZFilterBinaryBuilder, ZOperatorBinary, isBinaryOperator } from './filter-binary';
import {
  IZFilterCollection,
  ZFilterCollectionBuilder,
  ZOperatorCollection,
  isCollectionOperator
} from './filter-collection';
import { ZFilterLogicBuilder } from './filter-logic';
import { IZFilterUnary, ZFilterUnaryBuilder, ZOperatorUnary, isUnaryOperator } from './filter-unary';

export class ZFilterParser {
  public parse(filter: string): IZFilter {
    const [operator, rest] = peel(trim(filter), ZOperatorsFilter);

    if (operator == null) {
      throw new Error(`Cannot determine filter operator at ${filter}.`);
    }

    if (isUnaryOperator(operator)) {
      return this._parseUnaryFilter(operator, rest);
    }

    if (isBinaryOperator(operator)) {
      return this._parseBinaryFilter(operator, rest);
    }

    if (isCollectionOperator(operator)) {
      return this._parseCollectionFilter(operator, rest);
    }

    return new ZFilterLogicBuilder().build();
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

  private _splitArgs(operator: ZOperatorFilter, args: string, minArgs: number, maxArgs = minArgs): string[] {
    const [argList, rest] = peelBetween(args, '(', ')');

    if (argList == null) {
      throw new Error(`Unable to find opening and closing parenthesis for ${args}.  Check syntax.`);
    }

    if (trim(rest).length > 0) {
      throw new Error(`Extraneous characters found at the end of the argument list: ${rest}`);
    }

    const splitArgs = argList.split(',').filter((x) => !!x);

    if (splitArgs.length < minArgs) {
      const msg = `Not enough arguments for ${operator} filter: ${splitArgs}.`;
      const expected = `Expected at least ${minArgs} arguments, but got ${splitArgs.length} instead.`;
      throw new Error(`${msg}.  ${expected}`);
    }

    if (splitArgs.length > maxArgs) {
      const msg = `Too many arguments for ${operator} filter: ${splitArgs}.`;
      const expected = `Expected at most ${maxArgs} arguments, but got ${splitArgs.length} instead.`;
      throw new Error(`${msg}.  ${expected}`);
    }

    return splitArgs;
  }

  private _parseCollectionFilter(operator: ZOperatorCollection, args: string): IZFilterCollection {
    const argList = this._splitArgs(operator, args, 1, Infinity);
    let [subject] = argList;
    subject = decodeURIComponent(subject);
    const values = argList.slice(1).map((a) => decodeURIComponent(trim(a)));
    return new ZFilterCollectionBuilder().operator(operator).subject(subject).values(values).build();
  }

  private _parseUnaryFilter(operator: ZOperatorUnary, args: string): IZFilterUnary {
    let [subject] = this._splitArgs(operator, args, 1);
    subject = decodeURIComponent(subject);
    return new ZFilterUnaryBuilder().operator(operator).subject(subject).build();
  }

  private _parseBinaryFilter(operator: ZOperatorBinary, args: string): IZFilterBinary {
    let [subject, value] = this._splitArgs(operator, args, 2);
    subject = decodeURIComponent(trim(subject));
    value = decodeURIComponent(trim(value));
    return new ZFilterBinaryBuilder().operator(operator).subject(subject).value(value).build();
  }
}
