/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css } from "lit-element/lit-element.js";
import { RichTextEditorPromptButtonBehaviors } from "./rich-text-editor-prompt-button.js";
/**
 * `rich-text-editor-image`
 * an inline image button for rich text editor
 *
 * @element rich-text-editor-image
 * @demo ./demo/buttons.html
 */
class RichTextEditorImage extends RichTextEditorPromptButtonBehaviors(
  LitElement
) {
  /**
   * Store the tag name to make it easier to obtain directly.
   */
  static get tag() {
    return "rich-text-editor-image";
  }

  // render function for template
  render() {
    return super.render();
  }

  // properties available to the custom element for data binding
  static get properties() {
    return { ...super.properties };
  }

  constructor() {
    super();
    this.fields = [
      {
        property: "src",
        title: "Image URL",
        description: "The image URL. (Leave blank to remove.)",
        inputMethod: "textfield"
      },
      {
        property: "alt",
        title: "Alt Text",
        inputMethod: "textfield"
      },
      {
        property: "width",
        title: "Width",
        inputMethod: "textfield",
        inline: true
      },
      {
        property: "height",
        title: "Height",
        inputMethod: "textfield",
        inline: true
      }
    ];
    this.command = "insertHTML";
    this.label = "Insert Inline Image";
    this.icon = "editor:insert-photo";
    this.tag = "img";
    this.value = {};
  }
  /**
   * overrides default block selectors
   *
   * @readonly
   * @memberof RichTextEditorLink
   */
  get blockSelectors() {
    return "img";
  }

  /**
   * whether button is toggled
   *
   * @readonly
   * @memberof RichTextEditorButton
   */
  get isToggled() {
    return this.toggled;
  }

  /**
   * updates prompt fields with selected range data
   */
  updatePrompt() {
    super.updatePrompt();
    this.value = {
      alt: this.__selectionContents.getAttribute("alt"),
      src: this.__selectionContents.getAttribute("src"),
      width: this.__selectionContents.getAttribute("width"),
      height: this.__selectionContents.getAttribute("height")
    };
  }

  /**
   * updates the insertion based on fields
   */
  updateSelection() {
    let alt = this.__prompt.getPromptValue("alt"),
      src = this.__prompt.getPromptValue("src"),
      width = this.__prompt.getPromptValue("width"),
      height = this.__prompt.getPromptValue("height");
    this.setRange();
    console.log("updateSelection", alt, src, width, height, this.__selection.range);
    this.__selection.range.selectNode(this.__selectionContents);
    this.toggled = !src;
    this.commandVal = !src 
      ? "" 
      :`<img src="${src}"${!alt ? "" : ` alt="${alt}"`}${!width ? "" : ` width="${width}"`}${!height ? "" : ` width="${height}"`}>`;
    console.log("updateSelection 2", alt, src, width, height, this.toggled, this.commandVal);
    this.execCommand();
    console.log("updateSelection 3", alt, src, width, height, this.toggled, this.commandVal);
  }
}
window.customElements.define(RichTextEditorImage.tag, RichTextEditorImage);
export { RichTextEditorImage };
