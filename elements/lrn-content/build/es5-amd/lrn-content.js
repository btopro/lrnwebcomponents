define(["./node_modules/@polymer/polymer/polymer-legacy.js"], function(
  _polymerLegacy
) {
  "use strict";
  function _templateObject_cb20a8a0dea711e882aba3dc8e155e16() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <div typeof="oer:SupportingMaterial">\n      <h2 property="oer:name">[[title]]</h2>\n      <div property="oer:description">\n        <slot></slot>\n      </div>\n    </div>\n'
    ]);
    _templateObject_cb20a8a0dea711e882aba3dc8e155e16 = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_cb20a8a0dea711e882aba3dc8e155e16()
    ),
    is: "lrn-content",
    properties: { title: { type: String, value: "" } }
  });
});
