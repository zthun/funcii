// @vitest-environment jsdom
import { html } from '@zthun/helpful-fn';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { ZAttribute } from './component-attribute.mjs';
import { IZComponentConnected } from './component-lifecycle.mjs';
import { ZProperty } from './component-property.mjs';
import { IZComponentRender } from './component-render.mjs';
import { ZComponentShadow } from './component-shadow.mjs';

@ZComponentShadow({ name: 'TestComponentWithMinimumImplementation' })
class TestComponentWithMinimumImplementationElement extends HTMLElement implements IZComponentRender {
  public static readonly observedAttributes = ['name'];

  @ZAttribute()
  public name: string;

  @ZProperty()
  public prop: { name: string } = { name: 'hello-property' };

  public render(shadow: ShadowRoot) {
    const $html = html` <div>Minimum Implementation for ${this.name}</div> `;

    const template = document.createElement('template');
    template.innerHTML = $html;

    shadow.appendChild(template.content.cloneNode(true));
  }
}

@ZComponentShadow({ name: 'TestComponentWithZealousMembers' })
class TestComponentWithZealousMembersElement extends HTMLElement implements IZComponentRender, IZComponentConnected {
  public render(shadow: ShadowRoot) {
    const $html = html` <div>Has Callbacks</div> `;

    const template = document.createElement('template');
    template.innerHTML = $html;

    shadow.appendChild(template.content.cloneNode(true));
  }

  public connectedCallback(): void {
    this.attachShadow({ mode: 'open' });
  }
}

describe('ZComponentShadow', () => {
  describe('With Minimum Implementation', () => {
    afterEach(() => {
      while (document.body?.firstChild) {
        document.body.firstChild.remove();
      }
    });

    const createTestTarget = (): [
      TestComponentWithZealousMembersElement,
      TestComponentWithMinimumImplementationElement
    ] => {
      const div = document.createElement('div');
      div.innerHTML = html`
        <div>
          <test-component-with-zealous-members> Has Children </test-component-with-zealous-members>
          <test-component-with-minimum-implementation name="test-component">
          </test-component-with-minimum-implementation>
        </div>
      `;
      document.body.appendChild(div);

      const zealous = document.querySelector<TestComponentWithZealousMembersElement>(
        'test-component-with-zealous-members'
      )!;

      const minimum = document.querySelector<TestComponentWithMinimumImplementationElement>(
        'test-component-with-minimum-implementation'
      )!;

      return [zealous, minimum];
    };

    it('should initialize with the appropriate class', () => {
      // Arrange.
      const [, target] = createTestTarget();
      // Act.
      const actual = target.classList.contains('TestComponentWithMinimumImplementation-root');
      // Assert.
      expect(actual).toBeTruthy();
    });

    it('should rerender when an attribute changes', () => {
      // Arrange.
      const [, target] = createTestTarget();
      const spy = vi.spyOn(target, 'render');
      // Act
      target.name = 'new-name';
      // Assert.
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should rerender when a property changes', () => {
      // Arrange.
      const [, target] = createTestTarget();
      const spy = vi.spyOn(target, 'render');
      // Act
      target.prop = { name: 'new-name' };
      // Assert.
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
