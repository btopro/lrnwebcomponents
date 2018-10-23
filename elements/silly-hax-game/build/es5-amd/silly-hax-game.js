define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.SillyHaxGame = void 0;
  function _templateObject_2950f560d70511e897d9a5339ea49183() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_2950f560d70511e897d9a5339ea49183 = function() {
      return data;
    };
    return data;
  }
  var SillyHaxGame = (function(_PolymerElement) {
    babelHelpers.inherits(SillyHaxGame, _PolymerElement);
    function SillyHaxGame() {
      babelHelpers.classCallCheck(this, SillyHaxGame);
      return babelHelpers.possibleConstructorReturn(
        this,
        (SillyHaxGame.__proto__ || Object.getPrototypeOf(SillyHaxGame)).apply(
          this,
          arguments
        )
      );
    }
    babelHelpers.createClass(
      SillyHaxGame,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                SillyHaxGame.prototype.__proto__ ||
                  Object.getPrototypeOf(SillyHaxGame.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              SillyHaxGame.haxProperties,
              SillyHaxGame.tag,
              this
            );
          }
        }
      ],
      [
        {
          key: "template",
          get: function get() {
            return (0, _polymerElement.html)(
              _templateObject_2950f560d70511e897d9a5339ea49183()
            );
          }
        },
        {
          key: "haxProperties",
          get: function get() {
            return {
              canScale: !0,
              canPosition: !0,
              canEditSource: !1,
              gizmo: {
                title: "Silly hax-game",
                description: "Automated conversion of silly-hax-game/",
                icon: "icons:android",
                color: "green",
                groups: ["Hax"],
                handles: [{ type: "todo:read-the-docs-for-usage" }],
                meta: {
                  author: "btopro",
                  owner: "The Pennsylvania State University"
                }
              },
              settings: { quick: [], configure: [], advanced: [] }
            };
          }
        },
        {
          key: "properties",
          get: function get() {
            return {};
          }
        },
        {
          key: "tag",
          get: function get() {
            return "silly-hax-game";
          }
        }
      ]
    );
    return SillyHaxGame;
  })(_polymerElement.PolymerElement);
  _exports.SillyHaxGame = SillyHaxGame;
  window.customElements.define(SillyHaxGame.tag, SillyHaxGame);
});
