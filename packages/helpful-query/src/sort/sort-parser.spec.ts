import { describe, expect, it } from 'vitest';
import { ZSortParser } from './sort-parser.mjs';
import { ZSortBuilder } from './sort.mjs';

describe('ZSortParser', () => {
  const createTestTarget = () => new ZSortParser();

  const assertThrowsError = (sort: string) => {
    // Arrange.
    const target = createTestTarget();
    // Act.
    const actual = () => target.parse(sort);
    // Assert.
    expect(actual).toThrowError();
  };

  it('should throw an error if the direction cannot be discovered', () => {
    assertThrowsError('(wut(subject))');
  });

  it('should throw an error if the sort has extra characters at the end', () => {
    assertThrowsError('asc(subject) some-more-stuff');
  });

  it('should throw an error if the subject args are missing', () => {
    assertThrowsError('asc');
  });

  it('should thrown an error if the subject is not provided', () => {
    assertThrowsError('asc()');
  });

  it('should return an empty sort list', () => {
    // Arrange.
    const target = createTestTarget();
    const expected = new ZSortBuilder().build();
    // Act.
    const actual = target.parse('()');
    // Assert.
    expect(actual).toEqual(expected);
  });

  it('should return a single sort', () => {
    // Arrange.
    const target = createTestTarget();
    const expected = new ZSortBuilder().ascending('subject').build();
    // Act.
    const actual = target.parse('asc(subject)');
    // Assert.
    expect(actual).toEqual(expected);
  });

  it('should return multiple sorts with optional parenthesis', () => {
    // Arrange.
    const target = createTestTarget();
    const expected = new ZSortBuilder().ascending('subject').descending('subject').build();
    // Act.
    const actual = target.parse('(asc(subject), desc(subject))');
    // Assert.
    expect(actual).toEqual(expected);
  });

  it('should return multiple sorts without parenthesis', () => {
    // Arrange.
    const target = createTestTarget();
    const expected = new ZSortBuilder().ascending('subject').descending('subject').build();
    // Act.
    const actual = target.parse('asc(subject),desc(subject)');
    // Assert.
    expect(actual).toEqual(expected);
  });
});
