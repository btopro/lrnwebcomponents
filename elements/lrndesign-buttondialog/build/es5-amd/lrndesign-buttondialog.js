define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@polymer/paper-button/paper-button.js",
  "./node_modules/@lrnwebcomponents/lrndesign-dialog/lrndesign-dialog.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_e17c93b0dea811e8ac899bd2ec9a2faf() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <paper-button raised="" onclick="dialog.toggle()">{{buttonLabel}}</paper-button>\n    <lrndesign-dialog id="dialog">\n      <h2>{{title}}</h2>\n      <div>\n        <slot></slot>\n      </div>\n    </lrndesign-dialog>\n'
    ]);
    _templateObject_e17c93b0dea811e8ac899bd2ec9a2faf = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_e17c93b0dea811e8ac899bd2ec9a2faf()
    ),
    is: "lrndesign-buttondialog",
    properties: {
      buttonLabel: { type: String, value: "Label" },
      title: { type: String, value: "Heading" }
    }
  });
});
