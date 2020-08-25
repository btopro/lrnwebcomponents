/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css } from "lit-element/lit-element.js";
import { RichTextEditorStyles } from "../rich-text-editor-styles.js";
/**
 * `rich-text-editor-selection`
 * `a button for rich text editor (custom buttons can extend this)`
 *
 * @element rich-text-editor-selection
 * @demo ./demo/selection.html
 */
class RichTextEditorSelection extends RichTextEditorStyles(LitElement) {
  /**
   * Store tag name to make it easier to obtain directly.
   */
  static get tag() {
    return "rich-text-editor-selection";
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          background-color: var(--rich-text-editor-selection-bg);
          margin: 0;
          padding: 0;
          display: inline;
        }
        :host([hidden]) {
          display: none;
        }
        :host([collapsed]):after {
          content: '|';
          color: var(--rich-text-editor-selection-bg);
          background-color: transparent;
        }
      `
    ];
  }
  render() {
    return html`
      <slot></slot>
    `;
  }

  static get properties() {
    return {
      editor: {
        type: Object
      },
      collapsed: {
        type: Boolean,
        reflect: true,
        attribute: "collapsed"
      },
      hidden: {
        type: Boolean,
        reflect: true,
        attribute: "hidden"
      },
      observer: {
        type: Object
      },
      range: {
        type: Object
      },
      toolbar: {
        type: Object
      }
    };
  }
  constructor() {
    super();
    this.hidden = true;
    document.addEventListener("selectionchange", e => {
      this.range = this.getRange();
    });
    document.addEventListener("select-rich-text-editor-editor", e => {
      this._editorChange(e);
    });
    document.addEventListener("deselect-rich-text-editor-editor", e => {
      this._editorChange(e);
    });
    this.setAttribute("id", this._generateUUID());
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    changedProperties.forEach((oldValue, propName) => {
      if (propName === "range") this._updateToolbar();
    });
  }

  /**
   * life cycle, element is disconnected
   */
  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("selectionchange", e => {
      this.range = root.getRange();
    });
    document.removeEventListener("select-rich-text-editor-editor", e => {
      this._editorChange(e);
    });
    document.removeEventListener("deselect-rich-text-editor-editor", e => {
      this._editorChange(e);
    });
  }

  /**
   * expands selection to a specific ancestor or wraps selection in a default tag
   * @param {string} selector ancestor selector to find
   * @param {string} wrapTag tagName to use if ancestor cannot be found
   * @returns {object} selected node
   */
  expandSelection(selector, range = this.range, wrapTag) {
    return (
      this.selectAncestor(selector, range) ||
      this.wrap(!!wrapTag ? document.createElement(wrapTag) : undefined)
    );
  }

  /**
   * Normalizes selected range data.
   *
   * @returns {object} selected range
   */
  getRange() {
    let sel = window.getSelection();
    if (sel.getRangeAt && sel.rangeCount) {
      return sel.getRangeAt(0);
    } else if (sel) {
      return sel;
    } else false;
  }

  /**
   * adds or removes hightlight
   * @param {object} contents contents to be highlighted
   * @returns {void}
   */
  addHighlight() {
    console.log('addHighlight',this.range,this);
    if(!this.hidden) return;
    this.hidden = !this.range || this.range.collapsed;
    if(!this.hidden){
      this.range.surroundContents(this);
      this.normalize();
      console.log('addHighlight 2',`-${this.innerHTML}-${this.innerHTML.trim()}-`);
      this.innerHTML = this.innerHTML.trim();
      this.range.selectNodeContents(this);
      this.dispatchEvent(new CustomEvent("highlight", { detail: this }));
      this.hidden = false;
    }
    console.log('addHighlight 3',this.range.cloneContents(),this,`-${this.innerHTML}-${this.innerHTML.trim()}-`);
  }

  /**
   * gets contents of selected range
   * @returns {object} range contents
   */
  getRangeContents() {
    return this.range ? this.range.cloneContents() : null;
  }

  /**
   * searches for a closest ancestor by tagname,
   * expands selection to matching ancestor,
   * and returns ancestor, or returns null if not found
   * @param {string} tag tag to expand selection to
   * @returns {object} selected node
   */
  getAncestor(selector, range = this.range) {
    console.log("getAncestor", selector, (range = this.range));
    let wrapper,
      tags = selector.toLowerCase().split(","),
      getMatchingTag = ancestor => {
        //console.log("getMatchingTag", ancestor, tags);
        if (
          !!ancestor &&
          !!ancestor.tagName &&
          (!selector || tags.includes(ancestor.tagName.toLowerCase()))
        ) {
          return ancestor;
        } else if (
          !!ancestor &&
          !!ancestor.parentNode &&
          ancestor.parentNode.childNodes.length === 1
        ) {
          return getMatchingTag(ancestor.parentNode);
        } else {
          return undefined;
        }
      };
    //try to find an ancestor that matches tag
    if (range) {
      let ancestor = range.commonAncestorContainer;
      wrapper = getMatchingTag(ancestor);
      console.log("getAncestor 2", range, wrapper,ancestor.closest(selector));
    }
      console.log("getAncestor 3", range);
    return wrapper;
  }

  /**
   * searches for a closest ancestor by tagname,
   * expands selection to matching ancestor,
   * and returns ancestor, or returns null if not found
   * @param {string} tag tag to expand selection to
   * @returns {object} selected node
   */
  selectAncestor(selector, range = this.range) {
    //console.log("selectAncestor", selector, range);
    let wrapper = this.getAncestor(selector, range);
    if (wrapper) range.selectNode(wrapper);
    //console.log("wrapper", wrapper);
    return wrapper;
  }

  /**
   * sets selection range to specified node
   * @param {object} node node to select
   * @returns {void}
   */
  selectNode(node = null) {
    if (node) {
      if (!this.range) {
        let sel = window.getSelection();
        this.range = document.createRange();
        sel.removeAllRanges();
        sel.addRange(this.range);
      }
      this.range.selectNode(node);
    }
    return this.range;
  }
  /**
   * sets selection range to specified node's contents
   * @param {object} node node to select
   * @returns {void}
   */
  selectNodeContents(node = null) {
    if (node) {
      if (!this.range) {
        let sel = window.getSelection();
        this.range = document.createRange();
        sel.removeAllRanges();
        sel.addRange(this.range);
      }
      this.range.selectNodeContents(node);
    }
  }
  /**
   * selects a range
   *
   * @param {object} range
   * @memberof RichTextEditorSelection
   */
  selectRange(range) {
    if (range) {
      let sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }

  /**
   * collapses range
   *
   * @memberof RichTextEditorSelection
   */
  deselectRange() {
    let sel = this.getRange();
    //console.log("deselectRange", sel, sel.isCollapsed);
    if (!sel.isCollapsed) sel.collapse();
    //console.log("deselectRange 2", sel, sel.isCollapsed);
  }

  /**
   * unwraps selection
   *
   * @memberof RichTextEditorSelection
   */
  collapseSelection() {
    if(this.hidden) return;
    console.log("collapseSelection", this.range, this);
    this.normalize();
    console.log("collapseSelection 2", this.range, this);
    let children = this.childNodes;
    console.log(children,children.length);
    if(children.length > 0){
      children.forEach((child,i) => {
        this.parentNode.insertBefore(child, this);
        console.log(child,i);
        if(i === 0) this.range.setStart(child,0);
        this.range.setEnd(child,0);
      });
    } else {

    }
    this.hidden = true;
    console.log("collapseSelection 3", this.range, this);
  }

  /**
   * gets range contents in specified wrapper
   * @param {object} wrapper a node to wrap range contents in
   * @returns {object} range which oncludes wrapper and wrapped contents
   */
  wrap(wrapper) {
    wrapper = !!wrapper || document.createElement("span");
    this.range.surroundContents(wrapper);
    return wrapper;
  }

  /**
   * Updates selected range based on toolbar and editor
   * @param {event} e editor change event
   * @param {deselect} if editor is being deselected
   * @returns {void}
   */
  _editorChange(e, deselect = false) {
    let root = this,
      editorChange = root.editor !== e.detail.editor,
      toolbarChange = root.toolbar !== e.detail.toolbar;
    if (deselect || editorChange || toolbarChange) {
      let sel = window.getSelection();
      sel.removeAllRanges();
      root.editor = e.detail.editor;
      root.toolbar = e.detail.toolbar;
      if (root.observer) root.observer.disconnect();
      if (!deselect && e.detail.editor) {
        root.observer = new MutationObserver(evt => {
          root.range = root.getRange();
        });
        root.observer.observe(e.detail.editor, {
          attributes: false,
          childList: true,
          subtree: true,
          characterData: false
        });
      }
    }
  }

  /**
   * Generate a UUID
   * @returns {string} unique id
   */
  _generateUUID() {
    let hex = Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    return "rte-" + "ss-s-s-s-sss".replace(/s/g, hex);
  }

  /**
   * Updates toolbar
   */
  _updateToolbar() {
    if (this.toolbar) this.toolbar.range = this.range;
  }
}
window.customElements.define(
  RichTextEditorSelection.tag,
  RichTextEditorSelection
);
export { RichTextEditorSelection };

window.RichTextEditorSelection = {};
window.RichTextEditorSelection.instance = null;
/**
 * Checks to see if there is an instance available, and if not appends one
 */
window.RichTextEditorSelection.requestAvailability = function() {
  if (window.RichTextEditorSelection.instance == null) {
    window.RichTextEditorSelection.instance = new RichTextEditorSelection();
    document.body.appendChild(window.RichTextEditorSelection.instance);
  }
  return window.RichTextEditorSelection.instance;
};
