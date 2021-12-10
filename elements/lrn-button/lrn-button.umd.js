!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("lit"),require("@lrnwebcomponents/simple-tooltip/simple-tooltip.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/simple-colors/simple-colors.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/simple-tooltip/simple-tooltip.js","@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/simple-colors/simple-colors.js"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).LrnButton={},t.lit,null,null,null,t.simpleColors_js)}(this,(function(t,e,n,o,r,i){"use strict";function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}function d(t,e){return d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},d(t,e)}function p(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function b(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=f(t);if(e){var r=f(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return p(this,n)}}function h(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=f(t)););return t}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=h(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},y.apply(this,arguments)}function m(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function v(t){return function(t){if(Array.isArray(t))return g(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return g(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var w,O,j,S,k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(l,t);var n,o,r,i=b(l);function l(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),(t=i.call(this)).href="#",t.label="",t.target="",t.disabled=!1,t.focusState=!1,t.dark=!1,t.color="grey",setTimeout((function(){t.addEventListener("mousedown",t.tapEventOn),t.addEventListener("mouseover",t.tapEventOn),t.addEventListener("mouseout",t.tapEventOff),t.addEventListener("focusin",t.tapEventOn),t.addEventListener("focusout",t.tapEventOff)}),0),t}return n=l,r=[{key:"styles",get:function(){return[].concat(v(y(f(l),"styles",this)),[e.css(S||(S=m(["\n:host {\n  display: block;\n  --lrnsys-button-height: 48px;\n}\n\n:host(.center) {\n  text-align: center;\n}\n\na {\n  text-decoration: none;\n  display: block;\n  color: #000000;\n}\n\nbutton {\n  transition: .3s;\n  margin: 0;\n  max-width: 50%;\n  height: inherit;\n  -webkit-justify-content: flex-start;\n  justify-content: flex-start;\n  align-items: center;\n  border-radius: var(--lrn-button-border-radius ,unset);\n  background-color: var(--lrn-button-background-color, var(--simple-colors-default-theme-accent-2, white));\n  border: var(--lrn-button-border-width, 0px) solid var(--lrn-button-border-color, var(--simple-colors-default-theme-accent-2, #ddd));\n  color: var(--lrn-button-color, var(--simple-colors-default-theme-grey-12, black));\n}\n\n:host([accent-color=grey]) button,\n:host([text-color]) button,\n:host([dark][accent-color=grey]) button,\n:host([dark][text-color]) button {\n  background-color: var(--lrn-button-background-color, var(--simple-colors-default-theme-grey-1, white));\n  border-color: var(--lrn-button-border-color, var(--simple-colors-default-theme-grey-3, #ddd));\n  color: var(--lrn-button-color, var(--simple-colors-default-theme-grey-12, black));\n}\n\n:host([text-color]) button,\n:host([text-color][dark]) button {\n  color: var(--lrn-button-color, var(--simple-colors-default-theme-accent-9, black));\n}\n\nbutton:focus,\nbutton:hover {\n  background-color: var(--lrn-button-focus-background-color, var(--lrn-button-background-color, var(--simple-colors-default-theme-accent-3, white)));\n  border-color: var(--lrn-button-focus-border-color, var(--lrn-button-border-color, var(--simple-colors-default-theme-accent-3, #ddd)));\n}\n\n:host([accent-color=grey]) button:focus,\n:host([text-color]) button:focus,\n:host([dark][accent-color=grey]) button:focus,\n:host([dark][text-color]) button:focus,\n:host([accent-color=grey]) button:hover,\n:host([text-color]) button:hover,\n:host([dark][accent-color=grey]) button:hover,\n:host([dark][text-color]) button:hover {\n  background-color: var(--lrn-button-focus-background-color, var(--lrn-button-background-color, var(--simple-colors-default-theme-grey-2, white)));\n  border-color: var(--lrn-button-focus-border-color, var(--lrn-button-border-color,var(--simple-colors-default-theme-grey-3, #ddd)));\n}\n\nbutton simple-icon-lite {\n  --simple-icon-height: var(--lrnsys-button-height);\n  margin: 0 12px;\n}\n\nbutton div.inner {\n  height: var(--lrnsys-button-height);\n  line-height: var(--lrnsys-button-height);\n  padding: 0 12px;\n}\n\nbutton span.label {\n  height: var(--lrnsys-button-height);\n  line-height: var(--lrnsys-button-height);\n}\n\n.no-margin {\n  margin: 0 !important;\n}\n\n.no-right-padding {\n  padding-right: 0 !important;\n}\n\n.no-left-padding {\n  padding-left: 0 !important;\n}\n\n.center {\n  text-align: center;\n  margin: 0 auto;\n}\n      "])))])}},{key:"properties",get:function(){return s(s({},y(f(l),"properties",this)),{},{href:{type:String},showHref:{type:String,attribute:"show-href"},raised:{type:Boolean},label:{type:String},target:{type:String},icon:{type:String},hoverClass:{type:String,attribute:"hover-class"},iconClass:{type:String,attribute:"icon-class"},innerClass:{type:String,attribute:"inner-class"},dark:{type:Boolean,reflect:!0},accentColor:{type:String,attribute:"accent-color",reflect:!0},color:{type:String},textColor:{type:Boolean,attribute:"text-color",reflect:!0},prefetch:{type:String},alt:{type:String},disabled:{type:Boolean},focusState:{type:Boolean,attribute:"focus-state"}})}},{key:"tag",get:function(){return"lrn-button"}}],(o=[{key:"render",value:function(){return e.html(w||(w=m(['\n\n<a tabindex="-1" id="lrnsys-button-link" href="','" data-prefetch-hover="','" target="','">\n<button id="button" raised="','" class="','" ?disabled="','">\n    <div class="inner ','">\n      ',"\n      ",'\n      <slot></slot>\n    </div>\n  </button>\n</a>\n<simple-tooltip for="lrnsys-button-link" animation-delay="0">',"</simple-tooltip>"])),this.showHref,this.prefetch,this.target,this.raised,this.class,this.disabled,this.innerClass,this.icon?e.html(O||(O=m(['\n      <simple-icon-lite icon="','" id="icon"></simple-icon-lite>\n      '])),this.icon):"",this.label?e.html(j||(j=m(['\n        <span class="label">\n        ',"\n        </span>"])),this.label):"",this.alt)}},{key:"updated",value:function(t){var e=this;y(f(l.prototype),"updated",this)&&y(f(l.prototype),"updated",this).call(this,t),t.forEach((function(t,n){"color"===n&&(e.accentColor=e.color),console.log(n,e.color,e.accentColor)}))}},{key:"firstUpdated",value:function(){this.shadowRoot.querySelector("#button").addEventListener("focused-changed",this.focusToggle),this.disabled||(this.showHref=this.href)}},{key:"tapEventOn",value:function(t){var e=this;"undefined"===c(this.hoverClass)||this.disabled||this.hoverClass.split(" ").forEach((function(t,n){""!=t&&(e.shadowRoot.querySelector("#button").classList.add(t),-1!=t.indexOf("-")&&e.shadowRoot.querySelector("#icon").classList.add(t))}))}},{key:"tapEventOff",value:function(t){var e=this;"undefined"===c(this.hoverClass)||this.disabled||this.hoverClass.split(" ").forEach((function(t,n){""!=t&&(e.shadowRoot.querySelector("#button").classList.remove(t),-1!=t.indexOf("-")&&e.shadowRoot.querySelector("#icon").classList.remove(t))}))}},{key:"focusToggle",value:function(t){var e=this;this.dispatchEvent(new CustomEvent("focus-changed",{bubbles:!0,composed:!0,detail:{focus:this.focusState}})),"undefined"===c(this.hoverClass)||this.disabled||this.hoverClass.split(" ").forEach((function(t,n){""!=t&&(e.focusState?(e.shadowRoot.querySelector("#button").classList.add(t),-1!=t.indexOf("-")&&e.shadowRoot.querySelector("#icon").classList.add(t)):(e.shadowRoot.querySelector("#button").classList.remove(t),-1!=t.indexOf("-")&&e.shadowRoot.querySelector("#icon").classList.remove(t)))})),this.focusState=!this.focusState}}])&&a(n.prototype,o),r&&a(n,r),l}(i.SimpleColors);window.customElements.define(k.tag,k),t.LrnButton=k,Object.defineProperty(t,"__esModule",{value:!0})}));
