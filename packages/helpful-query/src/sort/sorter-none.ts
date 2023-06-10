import { IZSort, ZSortDirection } from './sort';
import { IZSorter } from './sorter';

/**
 * Represents a sorter that never sorts.
 */
export class ZSorterNone implements IZSorter {
  /**
   * An instance implementation of the ZSorterNone sorter.
   *
   * Since the none sorter is pure, you can simply reuse this
   * instance without creating more.
   */
  public static readonly instance = new ZSorterNone();

  public index(): number {
    return -1;
  }

  public sorted(): ZSortDirection | undefined {
    return undefined;
  }

  public sort(): IZSort[] {
    return [];
  }
}
