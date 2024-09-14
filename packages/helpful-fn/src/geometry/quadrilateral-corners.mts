import { isEmptyObject } from "../empty/is-empty-object.mjs";
import { firstDefined } from "../first-where/first-where.mjs";

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
 * A type that describes quadrilateral corners on the vertical axis.
 */
type ZCornersVertical<T> = {
  bottom?: T;
  top?: T;
};

/**
 * A type that describes quadrilateral corners on the horizontal axis.
 */
type ZCornersHorizontal<T> = {
  left?: T;
  right?: T;
};

/**
 * An value that a corners object can be built upon.
 */
export type ZQuadrilateralCornersLike<T = number> =
  | T
  | ZCornersVertical<T>
  | ZCornersHorizontal<T>
  | Partial<IZQuadrilateralCorners<T>>
  | null
  | undefined;

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
   * Sets the corner values based on an object that
   * describes a set of quadrilateral corners.
   *
   * @param other -
   *        The object that describes the corners.
   *
   * @returns
   *        This object.
   */
  public from(other: ZQuadrilateralCornersLike<T>): this {
    function isVerticals<T>(
      candidate: ZQuadrilateralCornersLike<T>,
    ): candidate is ZCornersVertical<T> {
      return (
        candidate != null &&
        (Object.prototype.hasOwnProperty.call(candidate, "bottom") ||
          Object.prototype.hasOwnProperty.call(candidate, "top"))
      );
    }

    function isHorizontals<T>(
      candidate: ZQuadrilateralCornersLike<T>,
    ): candidate is ZCornersHorizontal<T> {
      return (
        candidate != null &&
        (Object.prototype.hasOwnProperty.call(candidate, "left") ||
          Object.prototype.hasOwnProperty.call(candidate, "right"))
      );
    }

    function isCorners<T>(
      candidate: ZQuadrilateralCornersLike<T>,
    ): candidate is Partial<IZQuadrilateralCorners<T>> {
      return (
        candidate != null &&
        (Object.prototype.hasOwnProperty.call(candidate, "bottomLeft") ||
          Object.prototype.hasOwnProperty.call(candidate, "bottomRight") ||
          Object.prototype.hasOwnProperty.call(candidate, "topLeft") ||
          Object.prototype.hasOwnProperty.call(candidate, "topRight"))
      );
    }

    const { bottomLeft, bottomRight, topLeft, topRight } = this._corners;

    if (isCorners(other)) {
      this._corners.bottomLeft = firstDefined(bottomLeft, other.bottomLeft);
      this._corners.bottomRight = firstDefined(bottomRight, other.bottomRight);
      this._corners.topLeft = firstDefined(topLeft, other.topLeft);
      this._corners.topRight = firstDefined(topRight, other.topRight);
      return this;
    }

    if (isVerticals(other)) {
      this._corners.bottomLeft = firstDefined(bottomLeft, other.bottom);
      this._corners.bottomRight = firstDefined(bottomRight, other.bottom);
      this._corners.topLeft = firstDefined(topLeft, other.top);
      this._corners.topRight = firstDefined(topRight, other.top);
      return this;
    }

    if (isHorizontals(other)) {
      this._corners.bottomLeft = firstDefined(bottomLeft, other.left);
      this._corners.bottomRight = firstDefined(bottomRight, other.right);
      this._corners.topLeft = firstDefined(topLeft, other.left);
      this._corners.topRight = firstDefined(topRight, other.right);
      return this;
    }

    if (!isEmptyObject(other)) {
      this._corners.bottomLeft = firstDefined(bottomLeft, other);
      this._corners.bottomRight = firstDefined(bottomRight, other);
      this._corners.topLeft = firstDefined(topLeft, other);
      this._corners.topRight = firstDefined(topRight, other);
    }

    return this;
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
