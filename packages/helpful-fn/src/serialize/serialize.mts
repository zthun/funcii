/**
 * Represents an object that can be used to serialize something to a output type.
 *
 * @param T -
 *        The data type to serialize.
 * @param S -
 *        The output serialization type.
 */
export interface IZSerialize<T, S = string> {
  /**
   * Serializes a candidate object to a string.
   *
   * @param candidate -
   *        The candidate object.
   *
   * @returns
   *        The string representation of the candidate or undefined
   *        if no such string representation could be serialized.
   */
  serialize(candidate: T | null | undefined): S | undefined;
}
