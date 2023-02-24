import { IZFilterBinary } from './filter-binary';
import { IZCollectionFilter } from './filter-collection';
import { IZLogicFilter } from './filter-logic';
import { IZUnaryFilter } from './filter-unary';

/**
 * Represents one of the filter types.
 */
export type IZFilter = IZFilterBinary | IZLogicFilter | IZCollectionFilter | IZUnaryFilter;
