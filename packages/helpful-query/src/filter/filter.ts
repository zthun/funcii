import { IZFilterBinary, ZOperatorBinary, ZOperatorsBinary } from './filter-binary';
import { IZFilterCollection, ZOperatorCollection, ZOperatorsCollection } from './filter-collection';
import { IZFilterLogic, ZOperatorLogic, ZOperatorsLogic } from './filter-logic';
import { IZFilterUnary, ZOperatorUnary, ZOperatorsUnary } from './filter-unary';

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
export const ZOperatorsFilter = (<ZOperatorFilter[]>[])
  .concat(ZOperatorsBinary)
  .concat(ZOperatorsCollection)
  .concat(ZOperatorsLogic)
  .concat(ZOperatorsUnary);
