/**
 * Represents a setter function for when you want to set a single value,
 * but you have an array instead.
 *
 * This is useful when you want to support lists of items, but you need
 * backwards compatibility for setting a single item. This is primarily meant
 * to be use with bind to construct a new method setter that takes an array
 * and forwards it to a setter method which will accept a single value of the
 * first item in the target value.
 *
 * @param setValue -
 *        The setter function that takes a single value.  This will receive
 *        the first item of the value list.
 * @param fallback -
 *        The fallback value in the case that there are no values.
 * @param value -
 *        The value list to retrieve the first item from.
 * @param T -
 *        The type of data that the array holds.
 *
 * @example
 *
 * ```ts
 * // An example of a react component that needs a value of an array, but you only care about a single selection.
 * const [value, setValue] = useState<TypesOfPie>();
 * const _values = useMemo(() => value ? [value] : [], [value]);
 * const _setValues = setFirst.bind(null, setValue, undefined);
 *
 * return <ComponentWithMultiSelectSupport values={_values} onValuesChange={_setValues} />
 * ```
 */
export function setFirst<T>(setValue: (val: T) => any, fallback: T, value: T[] | null | undefined) {
  const _value = value?.length ? value[0] : fallback;
  setValue(_value);
}
