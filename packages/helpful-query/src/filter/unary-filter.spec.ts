/* eslint-disable require-jsdoc */
import { ZUnaryFilterBuilder, ZUnaryOperator } from './unary-filter';

describe('UnaryFilterBuilder', () => {
  function createTestTarget() {
    return new ZUnaryFilterBuilder();
  }

  it('sets the field.', () => {
    const expected = 'field';
    expect(createTestTarget().subject(expected).build().subject).toEqual(expected);
  });

  it('sets the operator to is null.', () => {
    expect(createTestTarget().subject('a').isNull().build().operator).toEqual(ZUnaryOperator.IsNull);
  });

  it('sets the operator to is not null.', () => {
    expect(createTestTarget().subject('a').isNotNull().build().operator).toEqual(ZUnaryOperator.IsNotNull);
  });
});
