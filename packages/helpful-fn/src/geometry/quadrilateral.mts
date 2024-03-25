/**
 * Represents a object of 4 side values.
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
 * Represents a builder for a quadrilateral object.
 */
export class ZQuadrilateralBuilder<T = number> {
  private _quad: IZQuadrilateral<T>;

  /**
   * Initializes a new instance of this object.
   *
   * @param start -
   *        The starting value.
   */
  public constructor(start: T) {
    this._quad = {
      bottom: start,
      left: start,
      right: start,
      top: start
    };
  }

  /**
   * Sets the bottom value.
   *
   * @param bottom -
   *        The bottom value.
   *
   * @returns
   *        This object.
   */
  public bottom(bottom: T): this {
    this._quad.bottom = bottom;
    return this;
  }

  /**
   * Sets the left value.
   *
   * @param left -
   *        The left value.
   *
   * @returns
   *        This object.
   */
  public left(left: T): this {
    this._quad.left = left;
    return this;
  }

  /**
   * Sets the right value.
   *
   * @param right -
   *        The right value.
   *
   * @returns
   *        This object.
   */
  public right(right: T): this {
    this._quad.right = right;
    return this;
  }

  /**
   * Sets the top value.
   *
   * @param top -
   *        The top value.
   *
   * @returns
   *        This object.
   */
  public top(top: T): this {
    this._quad.top = top;
    return this;
  }

  /**
   * Sets the left and right value.
   *
   * @param x -
   *        The left and right value.
   *
   * @returns
   *        This object.
   */
  public x(x: T): this {
    return this.left(x).right(x);
  }

  /**
   * Sets the top and bottom value.
   *
   * @param y -
   *        The top and bottom value.
   *
   * @returns
   *        This object.
   */
  public y(y: T): this {
    return this.bottom(y).top(y);
  }

  /**
   * Copies another quadrilateral object into the current instance.
   *
   * @param other -
   *        The quadrilateral object to copy.
   *
   * @returns
   *        This object.
   */
  public copy(other: IZQuadrilateral<T>): this {
    this._quad = structuredClone(other);
    return this;
  }

  /**
   * Returns the built quadrilateral object.
   *
   * @returns
   *        The built quadrilateral.
   */
  public build(): IZQuadrilateral<T> {
    return structuredClone(this._quad);
  }
}
