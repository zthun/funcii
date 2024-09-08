/**
 * An object that describes 4 corner values of a quadrilateral.
 *
 * This object is almost identical in functionality to a quadrilateral,
 * but is mostly useful for semantics.
 *
 * @param T -
 *        The type of data to associate to each corner.
 */
export interface IZQuadrilateralCorners<T = number> {
  bottomLeft: T;
  bottomRight: T;
  topLeft: T;
  topRight: T;
}

/**
 * An object that can be used to build an {@link IZQuadrilateralCorners} object.
 *
 * @param T -
 *        The type of data to associate to each corner.
 */
export class ZQuadrilateralCornersBuilder<T = number> {
  private _corners: IZQuadrilateralCorners<T>;

  public constructor(start: T) {
    this._corners = {
      bottomLeft: start,
      bottomRight: start,
      topLeft: start,
      topRight: start,
    };
  }

  /**
   * Sets the bottom left corner value.
   *
   * @param value -
   *        The value to set.
   *
   * @returns
   *        This object.
   */
  public bottomLeft(value: T): this {
    this._corners.bottomLeft = value;
    return this;
  }

  /**
   * Sets the bottom right corner value.
   *
   * @param value -
   *        The value to set.
   *
   * @returns
   *        This object.
   */
  public bottomRight(value: T): this {
    this._corners.bottomRight = value;
    return this;
  }

  /**
   * Sets the top left corner value.
   *
   * @param value -
   *        The value to set.
   *
   * @returns
   *        This object.
   */
  public topLeft(value: T): this {
    this._corners.topLeft = value;
    return this;
  }

  /**
   * Sets the top right corner value.
   *
   * @param value -
   *        The value to set.
   *
   * @returns
   *        This object.
   */
  public topRight(value: T): this {
    this._corners.topRight = value;
    return this;
  }

  /**
   * Sets the bottom left and bottom right values.
   *
   * @param value -
   *        The value for bottom left and bottom right.
   *
   * @returns
   *        This object.
   */
  public bottom(value: T): this {
    return this.bottomLeft(value).bottomRight(value);
  }

  /**
   * Sets the bottom left and top left values.
   *
   * @param value -
   *        The value for bottom left and top left.
   *
   * @returns
   *        This object.
   */
  public left(value: T): this {
    return this.topLeft(value).bottomLeft(value);
  }

  /**
   * Sets the bottom right and top right values.
   *
   * @param value -
   *        The value for bottom right and top right.
   *
   * @returns
   *        This object.
   */
  public right(value: T): this {
    return this.bottomRight(value).topRight(value);
  }

  /**
   * Sets the top left and top right  values.
   *
   * @param value -
   *        The value for top left and top right.
   *
   * @returns
   *        This object.
   */
  public top(value: T): this {
    return this.topLeft(value).topRight(value);
  }

  /**
   * Copies another corners object into this builder.
   *
   * @param other -
   *        The corners object to copy.
   *
   * @returns
   *        This object.
   */
  public copy(other: IZQuadrilateralCorners<T>): this {
    this._corners = structuredClone(other);
    return this;
  }

  /**
   * Builds the corners.
   *
   * @returns
   *        The built corners.
   */
  public build(): IZQuadrilateralCorners<T> {
    return structuredClone(this._corners);
  }
}
