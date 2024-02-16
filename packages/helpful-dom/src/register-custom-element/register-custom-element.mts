/**
 * Registers a custom web component if it is not already registered.
 *
 * @param name -
 *        The name of the custom element.
 * @param ctor -
 *        The custom element constructor.
 */
export function registerCustomElement(name: string, ctor: CustomElementConstructor): void {
  const { customElements } = window;

  if (customElements.get(name) == null) {
    customElements.define(name, ctor);
  }
}
