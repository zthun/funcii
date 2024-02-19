import { describe, expect, it } from 'vitest';
import { IZQuadrilateral, rectangle, square } from './quadrilateral.mjs';

describe('square', () => {
  it('all sides should be n', () => {
    // Arrange.
    const e = 10;
    const expected: IZQuadrilateral<number> = { bottom: e, left: e, right: e, top: e };
    // Act.
    const actual = square(e);
    // Assert.
    expect(actual).toEqual(expected);
  });
});

describe('rectangle', () => {
  it('should have equal x sides and equal y sides', () => {
    // Arrange.
    const lr = 5;
    const tb = 10;
    const expected: IZQuadrilateral<number> = { bottom: tb, left: lr, right: lr, top: tb };
    // Act.
    const actual = rectangle(tb, lr);
    // Assert.
    expect(actual).toEqual(expected);
  });
});
