// @vitest-environment jsdom
import { describe, expect, it } from 'vitest';
import { registerCustomElement } from './register-custom-element.mjs';

describe('Custom Elements', () => {
  it('should register a custom element', () => {
    // Arrange.
    registerCustomElement('z-custom-element', HTMLElement);
    // Act.
    registerCustomElement('z-custom-element', HTMLElement);
    const actual = customElements.get('z-custom-element');
    // Assert.
    expect(actual).toBeTruthy();
  });
});
