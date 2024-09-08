import { describe, expect, it } from "vitest";
import {
  IZQuadrilateralCorners,
  ZQuadrilateralCornersBuilder,
} from "./quadrilateral-corners.mjs";

describe("Setting all 4 corners at the same time", () => {
  it("should set the same value", () => {
    // Arrange.
    const corner = 10;
    const expected: IZQuadrilateralCorners = {
      bottomLeft: corner,
      bottomRight: corner,
      topLeft: corner,
      topRight: corner,
    };
    const target = new ZQuadrilateralCornersBuilder(corner);

    // Act.
    const actual = target.build();

    // Assert.
    expect(actual).toEqual(expected);
  });
});

describe("Setting side positions", () => {
  it("should set bottomLeft and bottomRight for bottom", () => {
    // Arrange.
    const corner = 10;
    const expected: IZQuadrilateralCorners = {
      bottomLeft: corner,
      bottomRight: corner,
      topLeft: 0,
      topRight: 0,
    };
    const target = new ZQuadrilateralCornersBuilder(0);

    // Act.
    const actual = target.bottom(corner).build();

    // Assert.
    expect(actual).toEqual(expected);
  });

  it("should set topLeft and bottomLeft for left", () => {
    // Arrange.
    const corner = 10;
    const expected: IZQuadrilateralCorners = {
      bottomLeft: corner,
      bottomRight: 0,
      topLeft: corner,
      topRight: 0,
    };
    const target = new ZQuadrilateralCornersBuilder(0);

    // Act.
    const actual = target.left(corner).build();

    // Assert.
    expect(actual).toEqual(expected);
  });

  it("should set bottomRight and topRight for right", () => {
    // Arrange.
    const corner = 10;
    const expected: IZQuadrilateralCorners = {
      bottomLeft: 0,
      bottomRight: corner,
      topLeft: 0,
      topRight: corner,
    };
    const target = new ZQuadrilateralCornersBuilder(0);

    // Act.
    const actual = target.right(corner).build();

    // Assert.
    expect(actual).toEqual(expected);
  });

  it("should set topLeft and topRight for top", () => {
    // Arrange.
    const corner = 10;
    const expected: IZQuadrilateralCorners = {
      bottomLeft: 0,
      bottomRight: 0,
      topLeft: corner,
      topRight: corner,
    };
    const target = new ZQuadrilateralCornersBuilder(0);

    // Act.
    const actual = target.top(corner).build();

    // Assert.
    expect(actual).toEqual(expected);
  });
});

describe("Copy", () => {
  it("should copy the corner values", () => {
    // Arrange.
    const expected = new ZQuadrilateralCornersBuilder(0)
      .bottomLeft(1)
      .bottomRight(2)
      .topLeft(3)
      .topRight(4)
      .build();
    const target = new ZQuadrilateralCornersBuilder(-1);

    // Act.
    const actual = target.copy(expected).build();

    // Assert.
    expect(actual).toEqual(expected);
  });
});
