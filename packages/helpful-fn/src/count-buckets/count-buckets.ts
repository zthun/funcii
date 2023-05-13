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
 *        The maximum weight a bucket can store.
 * @param items -
 *        The total number of items you need to store where each item
 *        counts as 1 towards the weight.
 * @param min -
 *        The bounded minimum value.  If the total number of buckets
 *        evaluates to less than this value, then this value is returned.
 * @param max -
 *        The bounded maximum value.  If the total number of buckets
 *        evaluates to more than this value, then this value is returned.
 *
 * @returns
 *        The number of buckets you need to store the total number
 *        of items given that a single bucket can hold a max weight of items.
 *        If either weight or items is NaN, then NaN will be returned regardless
 *        of the opposite value.  Passing a negative number is the same as
 *        passing 0.
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
