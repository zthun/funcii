import { describe, expect, it } from 'vitest';
import { commaJoinList, cssJoinList, JoinListInputParameter, spaceJoinList } from './join-list';

describe('join list', () => {
  function assertProducesList<T>(
    expected: string,
    _joinList: (...items: JoinListInputParameter<T>[]) => string,
    ...items: JoinListInputParameter<T>[]
  ) {
    // Arrange.
    // Act.
    const actual = _joinList(...items);
    // Assert.
    expect(actual).toEqual(expected);
  }

  it('should return the empty string if no items are passed.', () => {
    assertProducesList('', spaceJoinList);
  });

  it('should return the empty string if only null and undefined items are passed.', () => {
    assertProducesList('', spaceJoinList, undefined, null);
  });

  it('should return the elements if a [T boolean] tuple has a true boolean.', () => {
    const expected = 'yes';
    assertProducesList('yes', cssJoinList, [expected, true]);
  });

  it('should join all elements that are non null, non undefined, and non false tuples.', () => {
    const expected = 'One,Two,Four,Seven';
    assertProducesList(expected, commaJoinList, 'One', 'Two', undefined, 'Four', null, ['Six', false], ['Seven', true]);
  });
});
