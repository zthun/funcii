/**
 * Returns the first value in an argument list that matches a predicate.
 *
 * @param predicate -
 *        The match method against each value argument.
 * @param fallback -
 *        The fallback value in the case that all arguments fail
 *        the predicate.
 * @param first -
 *        The first value to check.
 * @param remaining -
 *        The remaining values beyond the first to check.
 * @param T -
 *        The type of data that will be enumerated.
 *
 * @returns
 *        The first value for where {@link predicate} returns true for the given argument value.
 *        If first and all values of remaining fail the predicate then fallback is returned.
 */
export function firstWhere<T = any>(
  predicate: (v: T | null | undefined) => boolean,
  fallback: T,
  first: T,
  ...remaining: T[]
): T {
  if (predicate(first)) {
    return first;
  }

  for (let i = 0; i < remaining.length; ++i) {
    const val = remaining[i];

    if (predicate(val)) {
      return val;
    }
  }

  return fallback;
}

/**
 * Returns the first value in args such that args is not null or undefined.
 *
 * @param fallback -
 *        The fallback value in the case that all values in args are null/undefined.
 * @param first -
 *        The first value to check.
 * @param remaining -
 *        The remaining values beyond the first to check.
 * @param T -
 *        The type of data that will be enumerated.
 *
 * @returns
 *        The first value if it is not null or undefined.  If first is undefined or null, then the first item
 *        in remaining such that remaining[i] is not null or undefined is returned.  If first and all values of
 *        remaining are null or undefined, then fallback is returned.
 *
 * @example
 *
 * ```ts
 * // 'Defined'
 * const shouldBeDefined = firstDefined('Fallback', null, undefined, 'Defined');
 * // 'Fallback'
 * const shouldBeFallback = firstDefined('Fallback', null, undefined);
 * const shouldAlsoBeFallback = firstDefined('Fallback', undefined);
 * // 'First'
 * const shouldBeFirst = firstDefined('Fallback', 'First', null, 'Third');
 * ```
 */
export function firstDefined<T = any>(
  fallback: T,
  first: T | null | undefined,
  ...remaining: (T | null | undefined)[]
): T {
  return firstWhere<T | null | undefined>((v) => v != null, fallback, first, ...remaining) as T;
}

/**
 * Returns the first value in args such that args is truthy
 *
 * @param fallback -
 *        The fallback value in the case that all values in args are falsy.
 * @param first -
 *        The first value to check.
 * @param remaining -
 *        The remaining values beyond the first to check.
 * @param T -
 *        The type of data that will be enumerated.
 *
 * @returns
 *        The first value if it is truthy.  If first is falsy, then the first item
 *        in remaining such that remaining[i] is truthy is returned.  If first and
 *        all values of remaining are falsy, then fallback is returned.
 *
 * @example
 *
 * ```ts
 * // 'Defined'
 * const shouldBeDefined = firstTruthy('Fallback', null, undefined, 'Defined');
 * // 'Fallback'
 * const shouldBeFallback = firstTruthy('Fallback', '', undefined);
 * const shouldAlsoBeFallback = firstDefined('Fallback', 0, false);
 * // 'First'
 * const shouldBeFirst = firstDefined('Fallback', 'First', null, false, 0, NaN);
 * ```
 */
export function firstTruthy<T = any>(
  fallback: T,
  first: T | null | undefined,
  ...remaining: (T | null | undefined)[]
): T {
  return firstWhere<T | null | undefined>((v) => !!v, fallback, first, ...remaining) as T;
}
