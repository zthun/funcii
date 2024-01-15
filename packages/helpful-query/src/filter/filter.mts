import { IZFilterBinary, ZOperatorBinary, ZOperatorsBinary } from './filter-binary.mjs';
import { IZFilterCollection, ZOperatorCollection, ZOperatorsCollection } from './filter-collection.mjs';
import { IZFilterLogic, ZOperatorLogic, ZOperatorsLogic } from './filter-logic.mjs';
import { IZFilterUnary, ZOperatorUnary, ZOperatorsUnary } from './filter-unary.mjs';

/**
 * Represents one of the filter types.
 */
export type IZFilter = IZFilterBinary | IZFilterLogic | IZFilterCollection | IZFilterUnary;

/**
 * Represents one of the operator types.
 */
export type ZOperatorFilter = ZOperatorBinary | ZOperatorCollection | ZOperatorLogic | ZOperatorUnary;

/**
 * A list of all possible filter operators in one collection.
 */
export const ZOperatorsFilter = ([] as ZOperatorFilter[])
  .concat(ZOperatorsBinary)
  .concat(ZOperatorsCollection)
  .concat(ZOperatorsLogic)
  .concat(ZOperatorsUnary);
