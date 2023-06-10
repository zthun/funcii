import { describe, expect, it } from 'vitest';
import { ZSorterNone } from './sorter-none';

describe('ZSorterNone', () => {
  it('should always return -1 for the index', () => {
    expect(ZSorterNone.instance.index()).toEqual(-1);
  });

  it('should always return undefined for the sort direction', () => {
    expect(ZSorterNone.instance.sorted()).toBeUndefined();
  });

  it('should always return the empty array when sorting', () => {
    expect(ZSorterNone.instance.sort()).toEqual([]);
  });
});
