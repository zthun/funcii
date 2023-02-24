import { beforeEach, describe, expect, it } from 'vitest';
import { IZFilter } from './filter';
import { ZFilterBinaryBuilder } from './filter-binary';
import { ZFilterCollectionBuilder } from './filter-collection';
import { ZFilterLogicBuilder, ZOperatorLogic } from './filter-logic';
import { ZFilterUnaryBuilder } from './filter-unary';

describe('LogicFilterBuilder', () => {
  let clauseA: IZFilter;
  let clauseB: IZFilter;
  let clauseC: IZFilter;
  let clauseD: IZFilter;

  function createTestTarget() {
    return new ZFilterLogicBuilder();
  }

  beforeEach(() => {
    clauseA = new ZFilterBinaryBuilder().subject('age').greaterThan().value(2).build();
    clauseB = new ZFilterBinaryBuilder().subject('age').lessThan().value(10).build();
    clauseC = new ZFilterUnaryBuilder().subject('collection').isNull().build();
    clauseD = new ZFilterCollectionBuilder().subject('state').in().value('Texas').value('Arizona').build();
  });

  it('sets the clauses.', () => {
    const expected = [clauseA, clauseB, clauseC, clauseD];
    expect(createTestTarget().clauses(expected).build().subject).toEqual(expected);
  });

  it('adds clauses.', () => {
    const expected = [clauseA, clauseB, clauseC, clauseD];
    const actual = createTestTarget().clause(clauseA).clause(clauseB).clause(clauseC).clause(clauseD).build().subject;
    expect(actual).toEqual(expected);
  });

  it('sets the operator to and.', () => {
    expect(createTestTarget().and().clause(clauseA).clause(clauseB).build().operator).toEqual(ZOperatorLogic.And);
  });

  it('sets the operator to or.', () => {
    expect(createTestTarget().or().clause(clauseA).clause(clauseB).build().operator).toEqual(ZOperatorLogic.Or);
  });
});
