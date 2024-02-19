/**
 * Represents a quadrilateral of 4 side values.
 *
 * @param T -
 *        Value type.  Typically number.
 */
export interface IZQuadrilateral<T = number> {
  /**
   * Bottom value.
   */
  bottom: T;
  /**
   * Left value.
   */
  left: T;
  /**
   * Right value.
   */
  right: T;
  /**
   * Top value.
   */
  top: T;
}

/**
 * Constructs a square quadrilateral.
 *
 * @param s -
 *        The value for all sides.
 *
 * @returns
 *        A quadrilateral where all sides are the same value.
 */
export function square<T = number>(s: T): IZQuadrilateral<T> {
  return { bottom: s, left: s, right: s, top: s };
}

/**
 * Constructs a rectangular quadrilateral.
 *
 * @param tb -
 *        The value for the top and bottom.
 * @param lr -
 *        The value for the left and right.
 *
 * @returns
 *        A quadrilateral that has the bottom and
 *        top values as tb, and the left and
 *        right values as lr.
 */
export function rectangle<T>(tb: T, lr: T): IZQuadrilateral<T> {
  return { bottom: tb, left: lr, right: lr, top: tb };
}
