import { describe, expect, it } from "vitest";
import { pickDataAttributes, pickDefined } from "./pick.mjs";

describe("Pick", () => {
  describe("Defined", () => {
    it("should only return key value pairs where the value is not null or undefined", () => {
      // Arrange.
      const target = { a: 1, b: 0, c: null, d: undefined, e: 12 };
      const expected = { a: 1, b: 0, e: 12 };

      // Act.
      const actual = pickDefined(target);

      // Assert.
      expect(actual).toEqual(expected);
    });
  });

  describe("Data Attributes", () => {
    it("should pick keys that start with data-", () => {
      // Arrange.
      const target = {
        name: "name",
        "data-name": "Data Name",
        age: 23,
        "data-age": 23,
      };
      const expected = {
        "data-name": "Data Name",
        "data-age": 23,
      };

      // Act.
      const actual = pickDataAttributes(target);

      // Assert.
      expect(actual).toEqual(expected);
    });
  });
});
