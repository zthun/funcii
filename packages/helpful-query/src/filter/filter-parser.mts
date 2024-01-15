import { peel, peelBetween } from '@zthun/helpful-fn';
import { trim, trimStart } from 'lodash-es';
import { IZFilterBinary, ZFilterBinaryBuilder, ZOperatorBinary, isBinaryOperator } from './filter-binary.mjs';
import {
  IZFilterCollection,
  ZFilterCollectionBuilder,
  ZOperatorCollection,
  isCollectionOperator
} from './filter-collection.mjs';
import { IZFilterLogic, ZFilterLogicBuilder, ZOperatorLogic, isLogicOperator } from './filter-logic.mjs';
import { IZFilterUnary, ZFilterUnaryBuilder, ZOperatorUnary, isUnaryOperator } from './filter-unary.mjs';
import { IZFilter, ZOperatorFilter, ZOperatorsFilter } from './filter.mjs';

export class ZFilterParser {
  public parse(candidate: string): IZFilter {
    const [filter, rest] = this._parseFilter(candidate);

    if (trim(rest).length > 0) {
      throw new Error(`Extraneous characters found at the end of the candidate filter: ${rest}`);
    }

    return filter;
  }

  private _peelBetweenParens(args: string): [string, string] {
    const [argList, rest] = peelBetween(args, '(', ')');

    if (argList == null) {
      throw new Error(`Unable to find opening and closing parenthesis for ${args}.  Check syntax.`);
    }

    return [argList, rest];
  }

  private _splitArgs(operator: ZOperatorFilter, args: string, minArgs: number, maxArgs = minArgs): [string[], string] {
    const [argList, rest] = this._peelBetweenParens(args);

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

    return [splitArgs, rest];
  }

  private _parseUnaryFilter(operator: ZOperatorUnary, args: string): [IZFilterUnary, string] {
    const [argList, rest] = this._splitArgs(operator, args, 1);
    let [subject] = argList;
    subject = decodeURIComponent(subject);
    return [new ZFilterUnaryBuilder().operator(operator).subject(subject).build(), rest];
  }

  private _parseBinaryFilter(operator: ZOperatorBinary, args: string): [IZFilterBinary, string] {
    const [argList, rest] = this._splitArgs(operator, args, 2);
    let [subject, value] = argList;
    subject = decodeURIComponent(trim(subject));
    value = decodeURIComponent(trim(value));
    return [new ZFilterBinaryBuilder().operator(operator).subject(subject).value(value).build(), rest];
  }

  private _parseCollectionFilter(operator: ZOperatorCollection, args: string): [IZFilterCollection, string] {
    const [argList, rest] = this._splitArgs(operator, args, 1, Infinity);
    let [subject] = argList;
    subject = decodeURIComponent(subject);
    const values = argList.slice(1).map((a) => decodeURIComponent(trim(a)));
    return [new ZFilterCollectionBuilder().operator(operator).subject(subject).values(values).build(), rest];
  }

  private _parseLogicFilter(operator: ZOperatorLogic, args: string): [IZFilterLogic, string] {
    const argsList = this._peelBetweenParens(trim(args));
    let [remaining] = argsList;
    const [, rest] = argsList;

    let builder = new ZFilterLogicBuilder().operator(operator);

    while (remaining) {
      const split = this._parseFilter(remaining);
      const [clause] = split;
      [, remaining] = split;
      remaining = trimStart(remaining, ' ,');
      builder = builder.clause(clause);
    }

    return [builder.build(), rest];
  }

  private _parseFilter(candidate: string): [IZFilter, string] {
    const [operator, rest] = peel(trim(candidate), ZOperatorsFilter);

    if (isUnaryOperator(operator)) {
      return this._parseUnaryFilter(operator, rest);
    }

    if (isBinaryOperator(operator)) {
      return this._parseBinaryFilter(operator, rest);
    }

    if (isCollectionOperator(operator)) {
      return this._parseCollectionFilter(operator, rest);
    }

    if (isLogicOperator(operator)) {
      return this._parseLogicFilter(operator, rest);
    }

    throw new Error(`Cannot determine filter operator at ${candidate}.`);
  }
}
