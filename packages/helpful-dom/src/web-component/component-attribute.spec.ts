// @vitest-environment jsdom

import { camelCase, kebabCase } from 'lodash-es';
import { beforeAll, describe, expect, it } from 'vitest';
import { registerCustomElement } from '../register-custom-element/register-custom-element.mjs';
import { ZAttribute } from './component-attribute.mjs';

const Batman = 'batman';
const TowardsInfinity = BigInt('93849384093890483904809384938409384908390483094809384098');

class ZTestComponentBackedByAttributes extends HTMLElement {
  @ZAttribute()
  public stringAttribute: string;

  @ZAttribute({ fallback: Batman })
  public stringAttributeWithFallback: string;

  @ZAttribute({ type: 'bigint' })
  public bigIntAttribute: bigint | null;

  @ZAttribute({ type: 'bigint', fallback: TowardsInfinity })
  public bigIntAttributeWithFallback: bigint;

  @ZAttribute({ type: 'number' })
  public numberAttribute: number;

  @ZAttribute({ type: 'number', fallback: Number.MAX_SAFE_INTEGER })
  public numberAttributeWithFallback: number;

  @ZAttribute({ type: 'boolean' })
  public booleanAttribute: boolean;

  @ZAttribute({ type: 'function' })
  public functionAttribute: () => any;

  @ZAttribute({ type: 'symbol' })
  public symbolAttribute: symbol;
}

describe('ZAttribute', () => {
  const createTestTarget = () => new ZTestComponentBackedByAttributes();

  beforeAll(() => {
    registerCustomElement('z-test-component-backed-by-attributes', ZTestComponentBackedByAttributes);
  });

  const shouldReadTheAttribute = <T>(expected: T, attribute: string) => {
    // Arrange.
    const target = createTestTarget();
    const kebab = kebabCase(attribute);
    const camel = camelCase(attribute);
    // Act.
    target.setAttribute(kebab, String(expected));
    const actual = target[camel];
    // Assert.
    expect(actual).toEqual(expected);
  };

  const shouldBeDefaultForMissingValue = <T>(expected: T, attribute: string) => {
    // Arrange.
    const target = createTestTarget();
    const kebab = kebabCase(attribute);
    const camel = camelCase(attribute);
    // Act.
    target.removeAttribute(kebab);
    const actual = target[camel];
    // Assert.
    expect(actual).toEqual(expected);
  };

  const shouldUpdateTheAttribute = <T>(expected: T, attribute: string) => {
    // Arrange.
    const target = createTestTarget();
    const kebab = kebabCase(attribute);
    const camel = camelCase(attribute);
    // Act.
    target[camel] = expected;
    const actual = target.getAttribute(kebab);
    // Assert.
    expect(actual).toEqual(String(expected));
  };

  const shouldDefaultTheAttribute = <T>(expected: T, attribute: string) => {
    // Arrange.
    const target = createTestTarget();
    const camel = camelCase(attribute);
    // Act.
    target[camel] = null;
    const actual = target[camel];
    // Assert.
    expect(actual).toEqual(expected);
  };

  const shouldRequireProperty = (attribute: string) => {
    // Arrange.
    const target = createTestTarget();
    const camel = camelCase(attribute);
    // Act.
    const actual = () => (target[camel] = Symbol());
    // Assert.
    expect(actual).toThrowError();
  };

  describe('String', () => {
    it('should read the attribute', () => {
      shouldReadTheAttribute('text for my element', 'string-attribute');
    });

    it('should return fallback for a missing attribute', () => {
      shouldBeDefaultForMissingValue('', 'string-attribute');
    });

    it('should set the attribute', () => {
      shouldUpdateTheAttribute('text for my element', 'string-attribute');
    });

    it('should default the attribute', () => {
      shouldDefaultTheAttribute('', 'string-attribute');
    });

    it('should default the attribute with a fallback', () => {
      shouldDefaultTheAttribute(Batman, 'string-attribute-with-fallback');
    });
  });

  describe('BigInt', () => {
    it('should read the attribute', () => {
      shouldReadTheAttribute(BigInt(42), 'big-int-attribute');
    });

    it('should return null for a missing attribute', () => {
      shouldBeDefaultForMissingValue(null, 'big-int-attribute');
    });

    it('should return fallback for a missing attribute with a fallback', () => {
      shouldBeDefaultForMissingValue(TowardsInfinity, 'big-int-attribute-with-fallback');
    });

    it('should set the attribute', () => {
      shouldUpdateTheAttribute(BigInt(42), 'big-int-attribute');
    });
  });

  describe('Number', () => {
    it('should read the attribute', () => {
      shouldReadTheAttribute(42, 'number-attribute');
    });

    it('should return null for a missing attribute', () => {
      shouldBeDefaultForMissingValue(NaN, 'number-attribute');
    });

    it('should set the attribute', () => {
      shouldUpdateTheAttribute(BigInt(42), 'number-attribute');
    });

    it('should default the attribute', () => {
      shouldDefaultTheAttribute(NaN, 'number-attribute');
    });

    it('should default the attribute to a fallback', () => {
      shouldDefaultTheAttribute(Number.MAX_SAFE_INTEGER, 'number-attribute-with-fallback');
    });
  });

  describe('Boolean', () => {
    it('should return true if the value is true', () => {
      shouldReadTheAttribute(true, 'boolean-attribute');
    });

    it('should return false if the value is false', () => {
      shouldReadTheAttribute(false, 'boolean-attribute');
    });

    it('should return true if the value is empty', () => {
      // Arrange.
      const target = createTestTarget();
      // Act.
      target.setAttribute('boolean-attribute', '');
      const actual = target.booleanAttribute;
      // Assert.
      expect(actual).toEqual(true);
    });

    it('should return false if the value is null', () => {
      // Arrange.
      const target = createTestTarget();
      // Act.
      target.removeAttribute('boolean-attribute');
      const actual = target.booleanAttribute;
      // Assert.
      expect(actual).toEqual(false);
    });

    it('should set the attribute', () => {
      shouldUpdateTheAttribute(false, 'boolean-attribute');
    });

    it('should default the attribute', () => {
      shouldDefaultTheAttribute(false, 'boolean-attribute');
    });
  });

  describe('Function', () => {
    it('should always return null (not supported)', () => {
      shouldReadTheAttribute(null, 'function-attribute');
    });

    it('should throw an error when being set', () => {
      shouldRequireProperty('function-attribute');
    });
  });

  describe('Symbol', () => {
    it('should always return null (not supported)', () => {
      shouldReadTheAttribute(null, 'symbol-attribute');
    });

    it('should throw an error when being set', () => {
      shouldRequireProperty('symbol-attribute');
    });
  });
});
