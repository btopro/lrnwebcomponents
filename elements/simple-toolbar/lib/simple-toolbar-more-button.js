/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css } from "lit-element/lit-element.js";
import { SimpleToolbarButtonBehaviors } from "./simple-toolbar-button.js";
/**
 * `simple-toolbar-more-button`
 * a more button to toggle collapsed buttons in the rich text editor
 *
 * @customElement
 * @extends SimpleToolbarButtonBehaviors
 * @extends LitElement
 * @lit-html
 * @lit-element
 * @demo ./demo/buttons.html
 */
class SimpleToolbarMoreButton extends SimpleToolbarButtonBehaviors(LitElement) {
  /**
   * Store the tag name to make it easier to obtain directly.
   */
  static get tag() {
    return "simple-toolbar-more-button";
  }

  constructor() {
    super();
    this.icon = "more-vert";
    this.toggled = false;
    this.toggles = true;
    this.label = "More buttons";
    this.labelToggled = "Fewer buttons";
  }
  /**
   * toggles button if shortcutKey is pressed
   *
   * @param {string} key
   * @event toggle
   */
  _handleShortcutKeys(e, key) {
    this.dispatchEvent(
      new CustomEvent("toggle", {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: {
          ...e.detail,
          button: this,
          shortcutKey: this,
        },
      })
    );
  }
}
window.customElements.define(
  SimpleToolbarMoreButton.tag,
  SimpleToolbarMoreButton
);
export { SimpleToolbarMoreButton };