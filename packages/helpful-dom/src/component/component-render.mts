/**
 * Represents a web component that contains a render function.
 */
export interface IZComponentRender extends HTMLElement {
  /**
   * Renders the component's styles and template.
   *
   * @param shadow -
   *        The shadow root for the component.
   */
  render(shadow: ShadowRoot): void;
}
