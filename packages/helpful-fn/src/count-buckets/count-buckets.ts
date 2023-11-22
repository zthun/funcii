/**
 * Calculates the total number of buckets you need to
 * store a number of items where each bucket can hold a
 * maximum weight of items.
 *
 * You can use this function to calculate groupings of
 * items based on total counts and sizes.  A good example
 * usage would be to calculate the total number of pages
 * on a paginated list of items given a page size and item
 * count.
 *
 * @param weight -
 *        The maximum weight a bucket can store.  If this value receives
 *        Infinity, then it will result in 1 or min buckets being returned,
 *        whichever is larger.  If this receives NaN, then this method will
 *        result in NaN.  Finally, if this receives a negative value, then
 *        the result will be max.
 * @param items -
 *        The total number of items you need to store where each item
 *        counts as 1 towards the weight.  If the total number of items
 *        is Infinity, then this method will result in max buckets.
 *        If this receives NaN, then this method will result in NaN. Finally,
 *        if you pass 0, or a negative number of items, then result will be min.
 * @param min -
 *        The bounded minimum value.  If the total number of buckets
 *        evaluates to less than this value, then this value is returned.
 *        The default is 0.
 * @param max -
 *        The bounded maximum value.  If the total number of buckets
 *        evaluates to more than this value, then this value is returned.
 *        The default is Infinity.
 *
 * @returns
 *        The number of buckets you need to store the total number
 *        of items given that a single bucket can hold a max weight of items.
 *        If either weight or items is NaN, then NaN will be returned regardless
 *        of the opposite value.  Passing a negative number is the same as
 *        passing 0.
 *
 * @example
 *
 * ```ts
 * // The following will return 5 for numberOfPages since you need 5 buckets
 * // to store 101 number of items where each bucket can hold a max of 25
 * // items.  The 5th page would be a page of 1 item, since 1 is the remainder.
 * const numberOfPages = countBuckets(25, 101);
 *
 * // In this case, the numberOfPages would be 1 here since our minimum buckets
 * // is 1.  By default, this would be 0.
 * const numberOfPages = countBuckets(10, 0, 1);
 *
 * // In this case, we have more items that can be held in the number of buckets
 * // available, so only 4 is returned instead of the 5.
 * const numberOfPages = countBuckets(25, 101, undefined, 4);
 * ```
 */
export function countBuckets(weight: number, items: number, min = 0, max = Infinity) {
  weight = Math.max(0, weight);
  items = Math.max(0, items);

  if (Number.isNaN(weight) || Number.isNaN(items)) {
    return NaN;
  }

  if (items === 0) {
    return min;
  }

  const boxes = weight === Infinity ? 1 : Math.ceil(items / weight);
  return Math.min(max, Math.max(min, boxes));
}
