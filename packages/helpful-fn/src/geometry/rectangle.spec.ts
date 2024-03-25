import { describe, expect, it } from 'vitest';
import { IZPoint2d } from './point.mjs';
import { IZQuadrilateral, ZQuadrilateralBuilder } from './quadrilateral.mjs';
import { ZRectangle } from './rectangle.mjs';

describe('ZRectangle', () => {
  const createTestTarget = (quadrilateral: IZQuadrilateral<number>) => new ZRectangle(quadrilateral);

  describe('Dimensions', () => {
    describe('Width', () => {
      it('should return the difference between the right and left', () => {
        // Arrange.
        const quadrilateral = new ZQuadrilateralBuilder(0).left(-10).right(10).build();
        const target = createTestTarget(quadrilateral);
        // Act.
        const actual = target.width();
        // Assert.
        expect(actual).toEqual(20);
      });
    });

    describe('Height', () => {
      it('should return the difference between the bottom and top', () => {
        // Arrange.
        const quadrilateral = new ZQuadrilateralBuilder(0).top(-20).bottom(50).build();
        const target = createTestTarget(quadrilateral);
        // Act.
        const actual = target.height();
        // Assert.
        expect(actual).toEqual(70);
      });
    });
  });

  describe('Area', () => {
    it('should return the area', () => {
      // Arrange.
      const quadrilateral = new ZQuadrilateralBuilder(10).top(0).left(0).build();
      const target = createTestTarget(quadrilateral);
      // Act.
      const actual = target.area();
      // Assert.
      expect(actual).toEqual(100);
    });
  });

  describe('Points', () => {
    const shouldReturnPoint = (
      expected: IZPoint2d,
      rect: IZQuadrilateral<number>,
      actualFn: (t: ZRectangle) => IZPoint2d
    ) => {
      // Arrange.
      const target = createTestTarget(rect);
      // Act.
      const actual = actualFn(target);
      // Assert.
      expect(actual).toEqual(expected);
    };

    it('should return the top left', () => {
      const rectangle = new ZQuadrilateralBuilder(0).top(-10).left(32).build();
      shouldReturnPoint({ x: 32, y: -10 }, rectangle, (t) => t.topLeft());
    });

    it('should return the top center', () => {
      const rectangle = new ZQuadrilateralBuilder(0).top(-12).left(2).right(10).build();
      shouldReturnPoint({ x: 6, y: -12 }, rectangle, (t) => t.topCenter());
    });

    it('should return the top right', () => {
      const rectangle = new ZQuadrilateralBuilder(0).top(-12).right(10).build();
      shouldReturnPoint({ x: 10, y: -12 }, rectangle, (t) => t.topRight());
    });

    it('should return the middle left', () => {
      const rectangle = new ZQuadrilateralBuilder(0).top(-10).bottom(30).left(32).build();
      shouldReturnPoint({ x: 32, y: 10 }, rectangle, (t) => t.middleLeft());
    });

    it('should return the middle center', () => {
      const rectangle = new ZQuadrilateralBuilder(0).top(-12).bottom(32).left(2).right(10).build();
      shouldReturnPoint({ x: 6, y: 10 }, rectangle, (t) => t.middleCenter());
    });

    it('should return the middle right', () => {
      const rectangle = new ZQuadrilateralBuilder(0).top(-12).bottom(30).right(10).build();
      shouldReturnPoint({ x: 10, y: 9 }, rectangle, (t) => t.middleRight());
    });

    it('should return the bottom left', () => {
      const rectangle = new ZQuadrilateralBuilder(0).bottom(30).left(32).build();
      shouldReturnPoint({ x: 32, y: 30 }, rectangle, (t) => t.bottomLeft());
    });

    it('should return the bottom center', () => {
      const rectangle = new ZQuadrilateralBuilder(0).bottom(32).left(2).right(10).build();
      shouldReturnPoint({ x: 6, y: 32 }, rectangle, (t) => t.bottomCenter());
    });

    it('should return the bottom right', () => {
      const rectangle = new ZQuadrilateralBuilder(0).bottom(30).right(10).build();
      shouldReturnPoint({ x: 10, y: 30 }, rectangle, (t) => t.bottomRight());
    });
  });
});
