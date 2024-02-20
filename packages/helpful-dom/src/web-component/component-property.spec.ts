import { describe, expect, it, vi } from 'vitest';
import { IZComponentPropertyChanged, ZProperty, ZPropertyChangedCallbackFunction } from './component-property.mjs';

const initial = 'foo';

class ZTestComponentWithProperties implements Partial<IZComponentPropertyChanged> {
  propertyChangedCallback?: ZPropertyChangedCallbackFunction;

  @ZProperty({ initial })
  public propertyWithInitialValue: string;

  @ZProperty()
  public propertyWithNoInitialValue: string;
}

describe('ZProperty', () => {
  const createTestTarget = () => new ZTestComponentWithProperties();

  describe('Getter', () => {
    it('should return the current property value as undefined if no initial value', () => {
      // Arrange.
      const target = createTestTarget();
      // Act.
      const actual = target.propertyWithNoInitialValue;
      // Assert.
      expect(actual).toBeUndefined();
    });

    it('should return the current property initial value', () => {
      // Arrange.
      const target = createTestTarget();
      // Act.
      const actual = target.propertyWithInitialValue;
      // Assert.
      expect(actual).toEqual(initial);
    });
  });

  describe('Setter', () => {
    it('should update the property value', () => {
      // Arrange.
      const target = createTestTarget();
      const expected = 'bar';
      // Act.
      target.propertyWithInitialValue = expected;
      const actual = target.propertyWithInitialValue;
      // Assert.
      expect(actual).toEqual(expected);
    });

    it('should invoke the propertyChangeCallback if the object implements it', () => {
      // Arrange.
      const target = createTestTarget();
      const current = target.propertyWithInitialValue;
      const next = 'new-value';
      target.propertyChangedCallback = vi.fn();
      // Act.
      target.propertyWithInitialValue = next;
      // Assert.
      expect(target.propertyChangedCallback).toHaveBeenCalledWith('propertyWithInitialValue', current, next);
    });

    it('should not invoke the propertyChangeCallback if the property is set to the same value', () => {
      // Arrange.
      const target = createTestTarget();
      const current = target.propertyWithInitialValue;
      target.propertyChangedCallback = vi.fn();
      // Act.
      target.propertyWithInitialValue = current;
      // Assert.
      expect(target.propertyChangedCallback).not.toHaveBeenCalled();
    });
  });
});
