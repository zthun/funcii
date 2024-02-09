/**
 * Represents an object that can be used to deserialize strings to objects.
 *
 * @param T -
 *        The type of data to deserialize.
 * @param S -
 *        The serialization input.
 */
export interface IZDeserialize<T, S = string> {
  /**
   * Deserializes a candidate string to an object T.
   *
   * @param candidate -
   *        The candidate string to deserialize.
   *
   * @returns
   *        The object that was deserialized.
   *
   * @throws
   *        An error if the candidate contains
   *        semantic errors and cannot be deserialized
   *        to the given target type.
   */
  deserialize(candidate: S): T;
}
