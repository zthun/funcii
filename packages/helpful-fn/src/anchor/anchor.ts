/**
 * Represents a vertical anchor.
 */
export enum ZVerticalAnchor {
  /**
   * Top boundary.
   */
  Top = 'top',
  /**
   * Centerpoint between the top and bottom.
   */
  Middle = 'middle',
  /**
   * Bottom boundary.
   */
  Bottom = 'bottom'
}

export enum ZHorizontalAnchor {
  /**
   * Left boundary.
   */
  Left = 'left',
  /**
   * Centerpoint between the left and right boundary.
   */
  Center = 'center',
  /**
   * Right boundary.
   */
  Right = 'right'
}

/**
 * Represents an anchor point.
 *
 * An anchor point is a point that stays constant while things are
 * resizing.
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
