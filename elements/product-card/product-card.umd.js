!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit"),require("@lrnwebcomponents/a11y-collapse/lib/a11y-collapse-group.js"),require("@lrnwebcomponents/a11y-collapse/a11y-collapse.js"),require("@lrnwebcomponents/simple-colors/simple-colors.js"),require("@lrnwebcomponents/accent-card/accent-card.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/a11y-collapse/lib/a11y-collapse-group.js","@lrnwebcomponents/a11y-collapse/a11y-collapse.js","@lrnwebcomponents/simple-colors/simple-colors.js","@lrnwebcomponents/accent-card/accent-card.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).ProductCard={},e.lit,null,null,e.simpleColors_js)}(this,(function(e,t,n,r,o){"use strict";function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function u(e,t){return u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},u(e,t)}function d(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},y.apply(this,arguments)}function h(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function b(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m,v,j,O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(a,e);var n,r,o,i=p(a);function a(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this)).disabled=!1,e}return n=a,o=[{key:"styles",get:function(){return[].concat(b(y(s(a),"styles",this)),[t.css(j||(j=h(["\n        :host {\n          display: flex;\n        }\n      "])))])}},{key:"properties",get:function(){return c(c({},y(s(a),"properties",this)),{},{disabled:{type:Boolean,reflect:!0},heading:{type:String},subheading:{type:String},icon:{type:String},hasDemo:{type:Boolean,attribute:"has-demo"}})}},{key:"tag",get:function(){return"product-card"}}],(r=[{key:"render",value:function(){return t.html(m||(m=h(['\n      <style>\n        :host {\n          display: block;\n          opacity: 1;\n          visibility: visible;\n        }\n        :host([hidden]) {\n          display: none;\n        }\n        :host([disabled]) accent-card {\n          cursor: not-allowed;\n          opacity: 0.5;\n        }\n        :host([disabled]) accent-card:hover {\n          cursor: not-allowed;\n          opacity: 0.8;\n        }\n        accent-card {\n          margin: 0;\n          --accent-card-footer-padding-left: 0;\n          --accent-card-footer-padding-right: 0;\n        }\n        accent-card > div[slot="heading"] {\n          height: 40px;\n        }\n        div[slot="subheading"] {\n          height: 30px;\n        }\n        a11y-collapse-group {\n          margin: 0;\n          --a11y-collapse-border-color: #ddd;\n        }\n        a11y-collapse > div[slot="heading"] {\n          display: flex;\n          flex-direction: row;\n          align-items: center;\n          min-height: 40px;\n        }\n      </style>\n      <accent-card\n        accent-color="','"\n        accent-heading\n        ?flat="','"\n      >\n        <div slot="heading">\n          ',"\n          ",'\n          <slot name="card-header"></slot>\n        </div>\n        <div slot="subheading">\n          ','\n          <slot name="card-subheader"></slot>\n        </div>\n        <div slot="content"><slot></slot></div>\n        <div slot="footer">\n          <a11y-collapse-group>\n            <a11y-collapse ?disabled="','" accordion>\n              <div slot="heading">\n                <slot name="details-collapse-header"></slot>\n              </div>\n              <div slot="content">\n                <slot name="details-collapse-content"></slot>\n              </div>\n            </a11y-collapse>\n            <a11y-collapse\n              ?disabled="','"\n              accordion\n              @expand="','"\n              @collapse="','"\n            >\n              <div slot="heading">\n                <slot name="demo-collapse-header"></slot>\n              </div>\n              <div slot="content">\n                <slot name="demo-collapse-content"></slot>\n              </div>\n            </a11y-collapse>\n          </a11y-collapse-group>\n        </div>\n      </accent-card>\n    '])),this.disabled?"grey":this.accentColor,this.disabled,this.icon?t.html(v||(v=h([' <simple-icon icon="','"></simple-icon> '])),this.icon):"",this.heading,this.subheading,this.disabled,this.disabled||!this.hasDemo,this.__demoCollapseStatusChange,this.__demoCollapseStatusChange)}},{key:"__demoCollapseStatusChange",value:function(e){this.dispatchEvent(new CustomEvent("product-card-demo-show",{detail:e.detail}))}}])&&l(n.prototype,r),o&&l(n,o),a}(o.SimpleColors);customElements.define(O.tag,O),e.ProductCard=O,Object.defineProperty(e,"__esModule",{value:!0})}));
