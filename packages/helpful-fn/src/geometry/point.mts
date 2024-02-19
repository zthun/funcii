/**
 * A 2d point.
 */
export interface IZPoint2d<T = number> {
  /**
   * X value.
   */
  x: T;
  /**
   * Y value.
   */
  y: T;
}

/**
 * A 3d point.
 */
export interface IZPoint3d<T = number> extends IZPoint2d<T> {
  /**
   * X value.
   */
  z: T;
}
