/**
 * Represents a targeted point along a y axis.
 */
export enum ZVerticalAnchor {
  /**
   * Top boundary.
   *
   * In vertical device space, this would equate to y = 0.
   */
  Top = "top",
  /**
   * Centerpoint between the top and bottom.
   */
  Middle = "middle",
  /**
   * Bottom boundary.
   *
   * In vertical device space, this would equate to y = Infinity.
   */
  Bottom = "bottom",
}

/**
 * Represents a targeted point along an x axis.
 */
export enum ZHorizontalAnchor {
  /**
   * Left boundary.
   *
   * In horizontal device space, this would equate to x = 0.
   */
  Left = "left",
  /**
   * Centerpoint between the left and right boundary.
   */
  Center = "center",
  /**
   * Right boundary.
   *
   * In horizontal device space, this would equate to x = Infinity.
   */
  Right = "right",
}

/**
 * Represents an anchor point in 2d space.
 *
 * An anchor array is defined by [vertical, horizontal]
 * and is read as such.
 *
 * @example
 *
 * ```ts
 * const topCenter = [ZVerticalAnchor.Top, ZHorizontalAnchor.Center];
 * const bottomRight = [ZVerticalAnchor.Bottom, ZHorizontalAnchor.Right];
 * ```
 *
 * @see {@link ZVerticalAnchor} For more information.
 * @see {@link ZHorizontalAnchor} For more information.
 */
export type ZAnchor = [ZVerticalAnchor, ZHorizontalAnchor];

/**
 * Represents a special type of anchor that excludes the center points.
 */
export type ZSideAnchor =
  | ZVerticalAnchor.Top
  | ZVerticalAnchor.Bottom
  | ZHorizontalAnchor.Left
  | ZHorizontalAnchor.Right;
