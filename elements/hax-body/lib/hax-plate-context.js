import { winEventsElement } from "@lrnwebcomponents/utils/utils.js";
import { HAXTourFinder } from "./HAXTourFinder.js";

/**
 * `hax-plate-context`
 * `A context menu that provides common grid plate based authoring options.`
 * @microcopy - the mental model for this element
 * - context menu - this is a menu of text based buttons and events for use in a larger solution.
 * - grid plate - the container / full HTML tag which can have operations applied to it.
 */
class HaxPlateContext extends HAXTourFinder(winEventsElement(HTMLElement)) {
  constructor(delayRender = false) {
    super();
    this.__winEvents = {
      "hax-store-property-updated": "_haxStorePropertyUpdated",
    };
    // set tag for later use
    this.tag = HaxPlateContext.tag;
    this.template = document.createElement("template");
    this.attachShadow({ mode: "open" });
    if (!delayRender) {
      this.render();
    }
    setTimeout(() => {
      import("@polymer/paper-item/paper-item.js");
      import("@lrnwebcomponents/hax-body/lib/hax-context-item-menu.js");
      import("@lrnwebcomponents/hax-body/lib/hax-context-item.js");
    }, 0);
  }
  static get tag() {
    return "hax-plate-context";
  }
  get html() {
    return `
    <style>
    :host {
      display: block;
      margin-top: -2px;
      background-color:white;
      --hax-contextual-action-color: var(
        --simple-colors-default-theme-cyan-8,
        #007999
      );
    }
    hax-context-item {
      display: block;
    }
    hax-context-item[large] {
      display: inline-block;
      margin:0;
      padding:0;
    }
    hax-context-item-menu {
      --hax-context-item-menu-height: 28px;
    }
    .area {
      display: flex;
      visibility: visible;
      opacity: .8;
      transition: .2s all ease-in-out;
    }
    .area:hover {
      opacity: 1;
    }
    paper-item {
      background-color: var(--hax-contextual-action-color);
      -webkit-justify-content: flex-start;
      justify-content: flex-start;
      height: 24px;
      padding: 0 4px;
      min-height: 24px;
      font-size: 10px;
      color: white;
    }
    #drag hax-context-item:hover,
    paper-item:hover {
      cursor: pointer;
      color: black;
    }
    iron-icon {
      padding: 0 2px;
      width: 16px;
      height: 16px;
    }
    :host(.hax-context-pin-top) .area {
      position: fixed;
      top: 40px;
      margin-left: -30px;
      flex-direction: column;
    }
    </style>
    <div class="area" id="area">
      <hax-context-item-menu
        mini
        id="drag"
        action
        icon="hax:arrow-all"
        label="Drag handle"
        draggable="true"
        selected-value="0"
        reset-on-select
        data-simple-tour-stop
        data-stop-title="label">
        <paper-item hidden value=""></paper-item>
        <hax-context-item
          action
          mini
          icon="hardware:keyboard-arrow-up"
          label="Move up"
          event-name="hax-plate-up"
          direction="left"
          ></hax-context-item>
        <hax-context-item
          action
          mini
          icon="hardware:keyboard-arrow-down"
          label="Move down"
          event-name="hax-plate-down"
          direction="left"
          ></hax-context-item>
        <div slot="tour" data-stop-content>
          Click the drag handle once to show a menu to just move
          up or down one item in the content OR click and drag
          to place the item exactly where you want it to go.
        </div>
      </hax-context-item-menu>
      <hax-context-item
        mini
        action
        id="right"
        class="paddle"
        icon="hax:table-column-remove"
        label="Add column"
        event-name="hax-plate-create-right"
        data-simple-tour-stop
        data-stop-title="label"
      >
      <div slot="tour" data-stop-content>
      Add a column to split the current column into two pieces. This can be done up to
      six pieces columns. For differnet layouts see Grid settings panel.
      </div>
    </hax-context-item>
    <hax-context-item
      mini
      action
      class="paddle"
      icon="hax:table-column-plus-after"
      label="Remove column"
      event-name="hax-plate-remove-right"
      id="rightremove"
      data-simple-tour-stop
      data-stop-title="label"
    >
    <div slot="tour" data-stop-content>
      Remove a column from the split column layout. If at two columns and removing it will
      remove the layout split and make it 100% width.
    </div>
    </hax-context-item>
  <hax-context-item
    mini
    action
    label="Duplicate"
    icon="icons:content-copy"
    event-name="hax-plate-duplicate"
    data-simple-tour-stop
    data-stop-title="label"
    >
    <div slot="tour" data-stop-content>
      Duplicate the active piece of content and place it below the current item.
    </div>
    </hax-context-item>
  <hax-context-item
    mini
    action
    icon="delete"
    label="Remove"
    event-name="hax-plate-delete"
    data-simple-tour-stop
    data-stop-title="label"
  >
  <div slot="tour" data-stop-content>
      Delete the current item. You can always use the undo arrow to bring this back.
    </div>
  </hax-context-item>
  </div>
  `;
  }
  /**
   * Store updated, sync.
   */
  _haxStorePropertyUpdated(e) {
    setTimeout(() => {
      if (
        e.detail &&
        typeof e.detail.value !== typeof undefined &&
        e.detail.property &&
        this.getAttribute("on-screen") != null &&
        ["activeNode"].includes(e.detail.property)
      ) {
        // when activeNode changes make sure we reposition
        this.__updatePlatePosition();
      }
    }, 10);
  }
  __updatePlatePosition() {
    setTimeout(() => {
      let active = window.HaxStore.instance.activeNode;
      let right = this.shadowRoot.querySelector("#right");
      let rightremove = this.shadowRoot.querySelector("#rightremove");
      // support for enabling or disabling
      right.disabled = false;
      rightremove.disabled = false;
      if (active && active.tagName == "GRID-PLATE") {
        if (active.layout == "1-1-1-1-1-1") {
          right.disabled = true;
        }
      } else {
        rightremove.disabled = true;
      }
    }, 100);
  }
  render() {
    this.shadowRoot.innerHTML = null;
    this.template.innerHTML = this.html;

    if (window.ShadyCSS) {
      window.ShadyCSS.prepareTemplate(this.template, this.tag);
    }
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
  }

  connectedCallback() {
    super.connectedCallback();
    setTimeout(() => {
      this.shadowRoot
        .querySelector("#drag")
        .addEventListener("dragstart", this._dragStart);
      this.shadowRoot
        .querySelector("#drag")
        .addEventListener("dragend", this._dragEnd);
    }, 0);
  }
  disconnectedCallback() {
    this.shadowRoot
      .querySelector("#drag")
      .removeEventListener("dragstart", this._dragStart);
    this.shadowRoot
      .querySelector("#drag")
      .removeEventListener("dragend", this._dragEnd);
    super.disconnectedCallback();
  }
  /**
   * When we end dragging ensure we remove the mover class.
   */
  _dragEnd(e) {
    window.HaxStore.instance._lockContextPosition = false;
  }
  /**
   * Drag start so we know what target to set
   */
  _dragStart(e) {
    let target = window.HaxStore.instance.activeNode;
    window.HaxStore.instance.__dragTarget = target;
    window.HaxStore.instance._lockContextPosition = true;
    target.classList.add("hax-moving");
    if (e.dataTransfer) {
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.setDragImage(target, -20, -20);
    }
    e.stopPropagation();
    e.stopImmediatePropagation();
  }
}
window.customElements.define(HaxPlateContext.tag, HaxPlateContext);
export { HaxPlateContext };
