/**
 * Represents a setter function for when you want to set a single value, but you have an array instead.
 *
 * This is useful when you want to support lists of items, but you need
 * backwards compatibility for setting a single item.
 *
 * @param setValue -
 *        The setter function that takes a single value.
 * @param fallback -
 *        The fallback value in the case that there are no values.
 * @param value -
 *        The value list to retrieve the first item from.
 */
export function setFirst<T>(setValue: (val: T) => any, fallback: T, value: T[] | null | undefined) {
  const _value = value?.length ? value[0] : fallback;
  setValue(_value);
}
