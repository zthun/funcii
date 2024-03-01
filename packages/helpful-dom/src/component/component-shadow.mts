import { firstDefined } from '@zthun/helpful-fn';
import { castArray, kebabCase } from 'lodash-es';
import { registerCustomElement } from '../register-custom-element/register-custom-element.mjs';
import { IZComponentAttributeChanged, IZComponentConnected } from './component-lifecycle.mjs';
import { IZComponentPropertyChanged } from './component-property.mjs';
import { IZComponentRender } from './component-render.mjs';

/**
 * Options for a component that renders in the shadow dom.
 */
export interface IZComponentShadowOptions {
  /**
   * The name of the component.
   *
   * This should be in PascalCase as using
   * the ZComponentShadow will effectively
   * add a class of `${name}-root`.
   *
   * This will be converted to kebab case
   * as the tag name.
   *
   * @example
   *
   * name = 'MyButton'
   *
   * // Results in
   * <my-button class="MyButton-root"></my-button>
   */
  name: string;

  /**
   * The tag to use.
   *
   * If this is falsy, then the kebab case of the name is used.
   */
  tag?: string;

  /**
   * The class name to set on the host element.
   *
   * If this is falsy, then "-root" is appended to the name
   * and that is used as the class name.
   *
   * If you pass an array for this value, then
   * every class in the array will be added.  If you pass an empty
   * array, then no classes will be added (not recommended).
   */
  className?: string | string[];
}

/**
 * A mixin decorator that extends a WebComponent and adds a standard flow.
 *
 * The component will be registered with the custom elements registry. In order for
 * the component to actually render anything, it needs to implement
 * {@link IZComponentRender}
 *
 * @param options -
 *        The options for the custom component.
 *
 * @returns
 *        A new decorated type that automatically implements
 *        {@link IZComponentAttributeChanged} and {@link IZComponentConnected}
 *        and {@link IZComponentPropertyChanged}.
 */
export function ZComponentShadow(options: IZComponentShadowOptions) {
  const { name, className, tag } = options;

  const $className = castArray(firstDefined(`${name}-root`, className));
  const $tag = firstDefined(kebabCase(name), tag);

  return function <C extends typeof HTMLElement>(Target: C) {
    // TypeScript is garbage when it comes to decorators and trying to do
    // type gymnastics.  Just cast this damn thing to any and follow the docs.
    // We only really care about making sure that this decorator is put on the
    // correct type.
    const _Target = Target as any;

    const K: any = class
      extends _Target
      implements IZComponentAttributeChanged, IZComponentConnected, IZComponentPropertyChanged
    {
      _render() {
        if (!this.shadowRoot) {
          return;
        }

        while (this.shadowRoot.firstChild) {
          this.shadowRoot.firstChild.remove();
        }

        const that = this as Partial<IZComponentRender>;
        that.render?.call(this, this.shadowRoot);
      }

      public connectedCallback() {
        super.connectedCallback?.call(this);

        // It's important to attach the shadow root if the parent didn't already add it.
        if (!this.shadowRoot) {
          this.attachShadow?.call(this, { mode: 'open' });
        }

        $className.forEach(($class) => this.classList.add($class));
        this._render();
      }

      public attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
        super.attributeChangedCallback?.call(this, name, oldValue, newValue);
        this._render();
      }

      public propertyChangedCallback(name: string | symbol, oldValue: any, newValue: any): void {
        super.propertyChangedCallback?.call(this, name, oldValue, newValue);
        this._render();
      }
    };

    registerCustomElement($tag, K);

    return K;
  };
}
