import { LitElement, html, css } from "lit-element/lit-element.js";
import { HAXStore } from "./hax-store.js";
import "@lrnwebcomponents/hax-body/lib/hax-context-item.js";
import "@lrnwebcomponents/hax-body/lib/hax-toolbar-menu.js";
import "@lrnwebcomponents/simple-toolbar/lib/simple-toolbar-menu-item.js";
import "@lrnwebcomponents/hax-body/lib/hax-toolbar.js";
import { wipeSlot } from "@lrnwebcomponents/utils/utils";
import { HaxContextBehaviors } from "./hax-context-container.js";
import { autorun, toJS } from "mobx";
import { I18NMixin } from "@lrnwebcomponents/i18n-manager/lib/I18NMixin.js";
/**
 * `hax-ce-context`
 * `A context menu that provides common custom-element based authoring options.
 * @microcopy - the mental model for this element
 * - context menu - this is a menu of custom-element based buttons and events for use in a larger solution.
 * @element hax-ce-context
 */
class HaxCeContext extends I18NMixin(HaxContextBehaviors(LitElement)) {
  static get styles() {
    return [...super.styles];
  }
  constructor() {
    super();
    this.t = {
      changeTo: "Change to",
      modifyHTMLSource: "Modify HTML source",
      clickToChange: "Click to change",
      insertItemAbove: "Insert item above",
      insertItemAboveOrBelow: "Insert item above or below",
      insertItemBelow: "Insert item below",
    };
    this.registerLocalization({
      context: this,
      namespace: "hax",
    });
    this.haxUIElement = true;
    this.onScreen = false;
    this.ceButtons = [];
    this.activeTagName = "";
    this.activeTagIcon = "hax:paragraph";
    this.addEventListener(
      "hax-context-item-selected",
      this.handleCECustomEvent.bind(this)
    );
  }
  updated(changedProperties) {
    if (super.updated) {
      super.updated(changedProperties);
    }
    changedProperties.forEach((oldValue, propName) => {
      if (propName === "onScreen" && this.onScreen) {
        this._resetCEMenu();
      }
    });
  }
  render() {
    return html`
      <div id="toolbar">
        <hax-toolbar>
          <div class="group">
            <hax-context-item
              action
              more
              .icon="${this.activeTagIcon}"
              label="${this.t.changeTo}..."
              tooltip="${this.activeTagName}, ${this.t.clickToChange}"
              ?disabled="${this.disableTransform}"
              event-name="hax-transform-node"
              show-text-label
            ></hax-context-item>
            <slot name="primary"></slot>
          </div>
          <div class="group">
            ${this.ceButtons.map((el) => {
              return html` <hax-context-item
                action
                icon="${el.icon}"
                label="${el.label}"
                event-name="hax-ce-custom-button"
                value="${el.callback}"
              ></hax-context-item>`;
            })}
            <slot name="secondary"></slot>
          </div>
          <div class="group">
            <hax-context-item
              action
              icon="icons:code"
              label="${this.t.modifyHTMLSource}"
              ?disabled="${!this.sourceView}"
              event-name="hax-source-view-toggle"
              toggles
              ?toggled="${this.viewSource}"
              @click="${(e) => (this.viewSource = !this.viewSource)}"
            ></hax-context-item>
            <slot name="more"></slot>
          </div>
          <div class="group">
            <hax-toolbar-menu
              icon="add"
              label="${this.t.insertItemAboveOrBelow}"
            >
              <simple-toolbar-menu-item slot="menuitem">
                <hax-context-item
                  action
                  align-horizontal="left"
                  show-text-label
                  role="menuitem"
                  icon="hardware:keyboard-arrow-up"
                  event-name="insert-above-active"
                  label="${this.t.insertItemAbove}"
                ></hax-context-item>
              </simple-toolbar-menu-item>
              <simple-toolbar-menu-item slot="menuitem">
                <hax-context-item
                  action
                  align-horizontal="left"
                  show-text-label
                  role="menuitem"
                  icon="hardware:keyboard-arrow-down"
                  event-name="insert-below-active"
                  label="${this.t.insertItemBelow}"
                ></hax-context-item>
              </simple-toolbar-menu-item>
            </hax-toolbar-menu>
          </div>
        </hax-toolbar>
      </div>
    `;
  }

  static get tag() {
    return "hax-ce-context";
  }
  static get properties() {
    return {
      ...super.properties,
      disableTransform: {
        type: Boolean,
      },
      onScreen: {
        type: Boolean,
        attribute: "on-screen",
        reflect: true,
      },
      sourceView: {
        type: Boolean,
      },
      activeTagIcon: {
        type: String,
      },
      activeTagName: {
        type: String,
      },
      ceButtons: {
        type: Array,
      },
      viewSource: {
        type: Boolean,
      },
    };
  }
  handleCECustomEvent(e) {
    let detail = e.detail;
    // support a simple insert event to bubble up or everything else
    switch (detail.eventName) {
      case "hax-ce-custom-button":
        if (
          this.activeNode &&
          typeof this.activeNode[detail.value] === "function"
        ) {
          if (this.activeNode[detail.value](e)) {
            HAXStore.refreshActiveNodeForm();
          }
        }
        break;
    }
  }
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    autorun(() => {
      this.activeNode = toJS(HAXStore.activeNode);
      if (this.activeNode && this.activeNode.classList) {
        this._resetCEMenu();
      }
    });
  }
  /**
   * HAX properties changed, update buttons available.
   */
  _resetCEMenu() {
    if (this.shadowRoot) {
      wipeSlot(this, "*");
    }
    // reset buttons in-case this element has new ones
    this.ceButtons = [];
    this.viewSource = false;
    if (HAXStore.activeHaxBody && this.activeNode != null) {
      let schema = HAXStore.haxSchemaFromTag(this.activeNode.tagName);
      this.sourceView = schema.canEditSource;
      if (!HAXStore.isTextElement(this.activeNode)) {
        // detect if this can be transformed into anything else
        this.disableTransform = !HAXStore.activeHaxBody.canTansformNode(
          this.activeNode
        );
        if (HAXStore.activeGizmo) {
          this.activeTagName = HAXStore.activeGizmo.title;
          this.activeTagIcon = HAXStore.activeGizmo.icon;
        }
      }
    } else {
      this.activeTagName = "";
      this.activeTagIcon = "";
    }
    // @see haxHook inlineContextMenu
    HAXStore.runHook(this.activeNode, "inlineContextMenu", [this]);
  }
}
window.customElements.define(HaxCeContext.tag, HaxCeContext);
export { HaxCeContext };
