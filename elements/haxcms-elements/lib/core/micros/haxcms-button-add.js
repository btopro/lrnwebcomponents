import { store } from "../haxcms-site-store.js";
import { HAXCMSButton } from "../utils/HAXCMSButton.js";
export class HAXCMSButtonAdd extends HAXCMSButton {
  static get tag() {
    return "haxcms-button-add";
  }

  constructor() {
    super();
    this.t = super.t || {};
    this.t.newPageAdded = "New page added";
    this.t.newPage = "New page";
    this.t.newChildPage = "New child page";
    this.icon = "hax:add-page";
    this.voiceCommand = "add page";
    this.dark = false;
    this.parentType = "sibling";
    this.autoEdit = false;
  }

  static get properties() {
    return {
      ...super.properties,
      autoEdit: { type: Boolean, attribute: "auto-edit" },
      parentType: { type: String, attribute: "parent-type" },
    };
  }

  render() {
    // render the button passing in our translated strings
    if (this.parentType === "sibling") {
      return this.renderButton(this.t.newPage, this.t.newPage);
    } else {
      return this.renderButton(this.t.newChildPage, this.t.newChildPage);
    }
  }
  connectedCallback() {
    super.connectedCallback();
    window.addEventListener(
      "haxcms-create-node-success",
      this.HAXCMSButtonClickResponse.bind(this)
    );
  }
  disconnectedCallback() {
    window.removeEventListener(
      "haxcms-create-node-success",
      this.HAXCMSButtonClickResponse.bind(this)
    );
    super.disconnectedCallback();
  }
  HAXCMSButtonClick(e) {
    let order = null;
    let title = this.t.newPage;
    let parent = null;
    if (store.activeItem) {
      if (this.parentType === "sibling") {
        parent = store.activeItem.parent;
        order = parseInt(store.activeItem.order) + 1;
      } else if (this.parentType === "child") {
        parent = store.activeItem.id;
        // @todo might need to check last child and add to end order wise there
        order = 0;
      }
    }
    // use the connection broker details to send off our request
    const evt = new CustomEvent("haxcms-create-node", {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {
        values: {
          node: {
            title: title,
            location: "",
          },
          order: order,
          parent: parent,
        },
      },
    });
    this.dispatchEvent(evt);
  }
  HAXCMSButtonClickResponse(e) {
    if (this.autoEdit) {
      setTimeout(() => {
        store.editMode = true;
      }, 100);
    }
  }
}

customElements.define(HAXCMSButtonAdd.tag, HAXCMSButtonAdd);
