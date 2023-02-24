import { IZFilterBinary } from './filter-binary';
import { IZFilterCollection } from './filter-collection';
import { IZFilterLogic } from './filter-logic';
import { IZFilterUnary } from './filter-unary';

/**
 * Represents one of the filter types.
 */
export type IZFilter = IZFilterBinary | IZFilterLogic | IZFilterCollection | IZFilterUnary;
