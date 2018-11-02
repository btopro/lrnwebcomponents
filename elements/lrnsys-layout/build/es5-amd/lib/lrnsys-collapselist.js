define([
  "../node_modules/@polymer/polymer/polymer-legacy.js",
  "../node_modules/@polymer/app-layout/app-layout.js",
  "../node_modules/@lrnwebcomponents/paper-avatar/paper-avatar.js",
  "../node_modules/@lrnwebcomponents/lrn-icons/lrn-icons.js",
  "../node_modules/@polymer/paper-button/paper-button.js",
  "../node_modules/@lrnwebcomponents/simple-colors/simple-colors.js",
  "../node_modules/@polymer/iron-icons/iron-icons.js",
  "../node_modules/@polymer/iron-collapse/iron-collapse.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_09807420deaa11e893615911f276e990() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n    <style is="custom-style">\n      :host {\n        display: block;\n        background-color: var(--simple-colors-background1);\n        --lrnsys-collapselist-text-color: var(--simple-colors-foreground1);\n        --lrnsys-collapselist-item-color: var(--simple-colors-background1);\n        --lrnsys-collapselist-item-active-color: var(--simple-colors-background2);\n        --lrnsys-collapselist-item-border: var(--simple-colors-background5);\n      }\n      ul {\n        list-style-type: none;\n        margin: 0;\n        padding: 0;\n      }\n      ul li {\n        width: 100%;\n        border: 1px solid var(--lrnsys-collapselist-item-border);\n        margin-bottom: -1px;\n      }\n      ul li paper-button {\n        height: 2em;\n        padding: .5em;\n        margin: 0;\n        min-width: .1em;\n        -webkit-justify-content: flex-start;\n        justify-content: flex-start;\n        align-items: center;\n        width: 100%;\n        text-transform: unset;\n        border-radius: 0;\n      }\n      ul li paper-button iron-icon,\n      ul li paper-button span {\n        pointer-events: none;\n      }\n      .collapse-label {\n        margin-left: .5em;\n      }\n      .collapse-content {\n        padding: 1em;\n      }\n    </style>\n    <ul>\n    <template is="dom-repeat" items="{{items}}" as="row">\n      <li>\n        <lrnsys-collapselist-item>\n          <span slot="label">\n            <iron-icon icon="[[row.icon]]"></iron-icon>\n            <span class="collapse-label">[[row.label]]</span>\n          </span>\n          <span slot="content">\n            [[row.content]]\n          </span>\n        </lrnsys-collapselist-item>\n      </li>\n    </template>\n    </ul>\n'
    ]);
    _templateObject_09807420deaa11e893615911f276e990 = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_09807420deaa11e893615911f276e990()
    ),
    is: "lrnsys-collapselist",
    behaviors: [simpleColorsBehaviors],
    properties: { items: { type: Array } }
  });
});
