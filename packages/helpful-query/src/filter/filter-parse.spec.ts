import { describe, expect, it } from 'vitest';
import { IZFilterBinary, ZOperatorBinary, isBinaryFilter } from './filter-binary';
import { ZFilterParser } from './filter-parse';
import { IZFilterMetadata } from './filter-subject';
import { ZFilterUnaryBuilder } from './filter-unary';

describe('ZFilterParser', () => {
  const createTestTarget = () => new ZFilterParser();

  const assertParsesFilterType = <T extends IZFilterMetadata>(
    isGuard: (f: IZFilterMetadata | undefined) => f is T,
    filter: string
  ) => {
    // Arrange.
    const target = createTestTarget();
    // Act.
    const f = target.parse(filter);
    const actual = isGuard(f);
    // Assert.
    expect(actual).toBeTruthy();
  };

  const assertParsesFilterOperator = <T>(expected: T, filter: string) => {
    // Arrange.
    const target = createTestTarget();
    // Act.
    const f = target.parse(filter);
    const actual = f.operator;
    // Assert.
    expect(actual).toEqual(expected);
  };

  const assertThrowsError = (filter: string) => {
    // Arrange.
    const target = createTestTarget();
    // Act
    const actual = () => target.parse(filter);
    // Assert.
    expect(actual).toThrowError();
  };

  it('should throw an error if the operator cannot be discovered', () => {
    assertThrowsError('wut()');
  });

  it('should return the fallback if a filter tries to parse but fails', () => {
    // Arrange.
    const target = createTestTarget();
    const expected = new ZFilterUnaryBuilder().build();
    // Act.
    const actual = target.tryParse('wut?', expected);
    // Assert.
    expect(actual).toEqual(expected);
  });

  it('should return undefined if a filter tries to parse but fails with no fallback', () => {
    // Arrange.
    const target = createTestTarget();
    // Act.
    const actual = target.tryParse('wut?');
    // Assert.
    expect(actual).toBeUndefined();
  });

  describe('Binary', () => {
    const assertParsesFilterSubject = (expected: string, filter: string) => {
      // Arrange.
      const target = createTestTarget();
      // Act.
      const f = target.parse(filter) as IZFilterBinary;
      const actual = f.subject;
      // Assert.
      expect(actual).toEqual(expected);
    };

    const assertParsesFilterValue = (expected: string, filter: string) => {
      // Arrange.
      const target = createTestTarget();
      // Act.
      const f = target.parse(filter) as IZFilterBinary;
      const actual = f.value;
      // Assert.
      expect(actual).toEqual(expected);
    };

    it('should throw an Error if the argument list is not closed', () => {
      assertThrowsError('eq(subject, (value)');
    });

    it('should throw an Error if the argument list is not opened', () => {
      assertThrowsError('eq[subject, value)');
    });

    it('should throw an Error if there is orphaned characters at the end of the filter', () => {
      assertThrowsError('eq(subject, value) lol-wut');
    });

    it('should throw an Error if there are not enough arguments', () => {
      assertThrowsError('neq(subject)');
    });

    it('should throw an Error if there are too many arguments', () => {
      assertThrowsError('lteq(subject, value, lol-wut)');
    });

    it('sets correct value with encoding', () => {
      assertParsesFilterValue('sentence value', 'gteq(subject, sentence%20value)');
    });

    it('sets correct subject', () => {
      assertParsesFilterSubject('subject', 'like(subject, value)');
    });

    it('sets correct value', () => {
      assertParsesFilterValue('value', 'like(subject, value)');
    });

    describe('Equals', () => {
      const operator = ZOperatorBinary.Equal;
      const filter = `${operator}(subject, value)`;

      it('should parse filter type', () => {
        assertParsesFilterType(isBinaryFilter, filter);
      });

      it('sets correct operator', () => {
        assertParsesFilterOperator(operator, filter);
      });
    });

    describe('Not Equals', () => {
      const operator = ZOperatorBinary.NotEqual;
      const filter = `${operator}(subject, value)`;

      it('should parse filter type', () => {
        assertParsesFilterType(isBinaryFilter, filter);
      });

      it('sets correct operator', () => {
        assertParsesFilterOperator(operator, filter);
      });
    });

    describe('Greater Than', () => {
      const operator = ZOperatorBinary.GreaterThan;
      const filter = `${operator}(subject, value)`;

      it('should parse filter type', () => {
        assertParsesFilterType(isBinaryFilter, filter);
      });

      it('sets correct operator', () => {
        assertParsesFilterOperator(operator, filter);
      });
    });

    describe('Greater Than Or Equal To', () => {
      const operator = ZOperatorBinary.GreaterThanEqualTo;
      const filter = `${operator}(subject, value)`;

      it('should parse filter type', () => {
        assertParsesFilterType(isBinaryFilter, filter);
      });

      it('sets correct operator', () => {
        assertParsesFilterOperator(operator, filter);
      });
    });

    describe('Less Than', () => {
      const operator = ZOperatorBinary.LessThan;
      const filter = `${operator}(subject, value)`;

      it('should parse filter type', () => {
        assertParsesFilterType(isBinaryFilter, filter);
      });

      it('sets correct operator', () => {
        assertParsesFilterOperator(operator, filter);
      });
    });

    describe('Less Than Or Equal To', () => {
      const operator = ZOperatorBinary.LessThanEqualTo;
      const filter = `${operator}(subject, value)`;

      it('should parse filter type', () => {
        assertParsesFilterType(isBinaryFilter, filter);
      });

      it('sets correct operator', () => {
        assertParsesFilterOperator(operator, filter);
      });
    });

    describe('Like', () => {
      const operator = ZOperatorBinary.Like;
      const filter = `${operator}(subject, value)`;

      it('should parse filter type', () => {
        assertParsesFilterType(isBinaryFilter, filter);
      });

      it('sets correct operator', () => {
        assertParsesFilterOperator(operator, filter);
      });
    });
  });
});
