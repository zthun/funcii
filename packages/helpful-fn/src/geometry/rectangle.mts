import {
  ZAnchor,
  ZHorizontalAnchor,
  ZVerticalAnchor,
} from "../anchor/anchor.mjs";
import { IZPoint2d } from "./point.mjs";
import { IZQuadrilateral } from "./quadrilateral.mjs";

/**
 * Represents a helper object that can run calculations on a numeric quadrilateral.
 */
export class ZRectangle {
  /**
   * Initializes a new instance of this object.
   *
   * @param sides -
   *        The numeric sides of a quadrilateral.
   */
  public constructor(public readonly sides: IZQuadrilateral) {}

  /**
   * Calculates the width of the rectangle.
   *
   * @returns
   *        The numeric width of the rectangle.
   */
  public width(): number {
    const { left, right } = this.sides;
    return right - left;
  }

  /**
   * Calculates the height of the rectangle.
   *
   * @returns
   *        The numeric height of the rectangle.
   */
  public height(): number {
    const { top, bottom } = this.sides;
    return bottom - top;
  }

  /**
   * Calculates the area of the rectangle.
   *
   * @returns
   *        The numeric area of the rectangle.
   */
  public area(): number {
    return this.width() * this.height();
  }

  /**
   * Calculates the (x, y) point given an anchor target.
   *
   * @param anchor -
   *        The anchor target to calculate the point for.
   *
   * @returns
   *        The numeric width of the rectangle.
   */
  public point(anchor: ZAnchor): IZPoint2d {
    const { bottom, left, right, top } = this.sides;
    const [vertical, horizontal] = anchor;

    const v: Record<ZVerticalAnchor, number> = {
      [ZVerticalAnchor.Top]: top,
      [ZVerticalAnchor.Middle]: (bottom + top) / 2,
      [ZVerticalAnchor.Bottom]: bottom,
    };

    const h: Record<ZHorizontalAnchor, number> = {
      [ZHorizontalAnchor.Left]: left,
      [ZHorizontalAnchor.Center]: (right + left) / 2,
      [ZHorizontalAnchor.Right]: right,
    };

    return { x: h[horizontal], y: v[vertical] };
  }

  /**
   * Calculates the top left point of the rectangle.
   *
   * @returns
   *        The top left point of the rectangle.
   */
  public topLeft = this.point.bind(this, [
    ZVerticalAnchor.Top,
    ZHorizontalAnchor.Left,
  ]);

  /**
   * Calculates the top center point of the rectangle.
   *
   * @returns
   *        The top center point of the rectangle.
   */
  public topCenter = this.point.bind(this, [
    ZVerticalAnchor.Top,
    ZHorizontalAnchor.Center,
  ]);

  /**
   * Calculates the top right point of the rectangle.
   *
   * @returns
   *        The top right point of the rectangle.
   */
  public topRight = this.point.bind(this, [
    ZVerticalAnchor.Top,
    ZHorizontalAnchor.Right,
  ]);

  /**
   * Calculates the middle left point of the rectangle.
   *
   * @returns
   *        The middle left point of the rectangle.
   */
  public middleLeft = this.point.bind(this, [
    ZVerticalAnchor.Middle,
    ZHorizontalAnchor.Left,
  ]);

  /**
   * Calculates the middle center point of the rectangle.
   *
   * @returns
   *        The middle center point of the rectangle.
   */
  public middleCenter = this.point.bind(this, [
    ZVerticalAnchor.Middle,
    ZHorizontalAnchor.Center,
  ]);

  /**
   * Calculates the middle right point of the rectangle.
   *
   * @returns
   *        The middle right point of the rectangle.
   */
  public middleRight = this.point.bind(this, [
    ZVerticalAnchor.Middle,
    ZHorizontalAnchor.Right,
  ]);

  /**
   * Calculates the bottom left point of the rectangle.
   *
   * @returns
   *        The bottom left point of the rectangle.
   */
  public bottomLeft = this.point.bind(this, [
    ZVerticalAnchor.Bottom,
    ZHorizontalAnchor.Left,
  ]);

  /**
   * Calculates the bottom center point of the rectangle.
   *
   * @returns
   *        The bottom center point of the rectangle.
   */
  public bottomCenter = this.point.bind(this, [
    ZVerticalAnchor.Bottom,
    ZHorizontalAnchor.Center,
  ]);

  /**
   * Calculates the bottom right point of the rectangle.
   *
   * @returns
   *        The bottom right point of the rectangle.
   */
  public bottomRight = this.point.bind(this, [
    ZVerticalAnchor.Bottom,
    ZHorizontalAnchor.Right,
  ]);
}
