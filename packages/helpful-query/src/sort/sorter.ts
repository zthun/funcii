import { IZSort, ZSortDirection } from './sort';

/**
 * Represents a sorter algorithm that can help with building sorts based on common techniques.
 */
export interface IZSorter {
  /**
   * Gets the current sort index for the subject or -1 if it is not sorted.
   *
   * @param subject -
   *        The subject to sort.
   *
   * @returns -
   *        The current sort index.
   */
  index(subject: string): number;

  /**
   * Gets the current direction that the subject is sorted.
   */
  sorted(subject: string): ZSortDirection | undefined;

  /**
   * Sorts a specific subject.
   *
   * @param subject -
   *        The subject to sort.
   *
   * @returns -
   *        The updated sort list.
   */
  sort(subject: string): IZSort[];
}
