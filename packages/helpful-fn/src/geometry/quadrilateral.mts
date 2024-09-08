import { isEmpty } from "lodash-es";
import { firstDefined } from "../first-where/first-where.mjs";
import { IZPoint2d } from "./point.mjs";

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
 * Represents an object that can describe a quadrilateral.
 */
export type ZQuadrilateralLike<T = number> =
  | T
  | Partial<IZPoint2d<T>>
  | Partial<IZQuadrilateral<T>>
  | null
  | undefined;

export function isPoint2d<T>(
  p: ZQuadrilateralLike<T>,
): p is Partial<IZPoint2d<T>> {
  return (
    p != null &&
    (Object.prototype.hasOwnProperty.call(p, "x") ||
      Object.prototype.hasOwnProperty.call(p, "y"))
  );
}

export function isQuadrilateral<T>(
  q: ZQuadrilateralLike<T>,
): q is Partial<IZQuadrilateral<T>> {
  return (
    q != null &&
    (Object.prototype.hasOwnProperty.call(q, "bottom") ||
      Object.prototype.hasOwnProperty.call(q, "left") ||
      Object.prototype.hasOwnProperty.call(q, "right") ||
      Object.prototype.hasOwnProperty.call(q, "top"))
  );
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
      top: start,
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
   * Constructs a full quadrilateral from an object that describes a quadrilateral.
   *
   * @param other -
   *        The object to build from.
   *
   * @returns
   *        This object.
   */
  public from(other: ZQuadrilateralLike<T>): this {
    if (isQuadrilateral(other)) {
      this._quad.bottom = firstDefined(this._quad.bottom, other.bottom);
      this._quad.left = firstDefined(this._quad.left, other.left);
      this._quad.right = firstDefined(this._quad.right, other.right);
      this._quad.top = firstDefined(this._quad.top, other.top);
      return this;
    }

    if (isPoint2d(other)) {
      this._quad.bottom = firstDefined(this._quad.bottom, other.y);
      this._quad.left = firstDefined(this._quad.left, other.x);
      this._quad.right = firstDefined(this._quad.right, other.x);
      this._quad.top = firstDefined(this._quad.top, other.y);
      return this;
    }

    if (typeof other === "object" && isEmpty(other)) {
      return this;
    }

    this._quad.bottom = firstDefined(this._quad.bottom, other);
    this._quad.left = firstDefined(this._quad.left, other);
    this._quad.right = firstDefined(this._quad.right, other);
    this._quad.top = firstDefined(this._quad.top, other);

    return this;
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
