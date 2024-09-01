import { describe, expect, it } from "vitest";
import { IZQuadrilateral, ZQuadrilateralBuilder } from "./quadrilateral.mjs";

describe("Setting all sides to the same value", () => {
  it("all sides should be n", () => {
    // Arrange.
    const e = 10;
    const expected: IZQuadrilateral<number> = {
      bottom: e,
      left: e,
      right: e,
      top: e,
    };
    // Act.
    const actual = new ZQuadrilateralBuilder(e).build();
    // Assert.
    expect(actual).toEqual(expected);
  });
});

describe("Setting x and y equivalent sides to same value", () => {
  it("should have equal x sides and equal y sides", () => {
    // Arrange.
    const lr = 5;
    const tb = 10;
    const expected: IZQuadrilateral<number> = {
      bottom: tb,
      left: lr,
      right: lr,
      top: tb,
    };
    // Act.
    const actual = new ZQuadrilateralBuilder(0).x(lr).y(tb).build();
    // Assert.
    expect(actual).toEqual(expected);
  });
});

describe("Copying", () => {
  it("should copy the quadrilateral", () => {
    // Arrange.
    const expected: IZQuadrilateral<number> = {
      bottom: 10,
      left: 11,
      right: 12,
      top: 13,
    };
    // Act.
    const actual = new ZQuadrilateralBuilder(0).copy(expected).build();
    // Assert.
    expect(actual).toEqual(expected);
  });

  it("should be immutable", () => {
    // Arrange.
    const original: IZQuadrilateral<number> = {
      bottom: 10,
      left: 11,
      right: 12,
      top: 13,
    };
    // Act.
    const actual = new ZQuadrilateralBuilder(0).copy(original).top(0).build();
    // Assert.
    expect(original.top).toEqual(13);
    expect(actual.top).toEqual(0);
  });
});
