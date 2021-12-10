!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/paper-input/paper-textarea.js"),require("lit")):"function"==typeof define&&define.amd?define(["exports","@polymer/paper-input/paper-textarea.js","lit"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).JsonEditor={},null,e.lit)}(this,(function(e,t,r){"use strict";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function l(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return l(this,r)}}function s(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=s(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},p.apply(this,arguments)}function y(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var d,b,h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(s,e);var t,n,i,l=f(s);function s(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(e=l.call(this)).label="JSON data",e.error=!1,e.disabled=!1,e.maxRows=0,e.value="",e}return t=s,i=[{key:"styles",get:function(){return[r.css(b||(b=y(["\n:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n      "])))]}},{key:"properties",get:function(){return o(o({},p(u(s),"properties",this)),{},{label:{type:String},error:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},maxRows:{type:Number,reflect:!0,attribute:"max-rows"},value:{type:String,reflect:!1},formatTest:{type:String,attribute:"format-test"},currentData:{type:Object,attribute:"current-data"}})}},{key:"tag",get:function(){return"json-editor"}}],(n=[{key:"render",value:function(){return r.html(d||(d=y(['\n\n<custom-style>\n  <style>\n  :host([error]) paper-textarea {\n    --iron-autogrow-textarea: {\n      background-color: #ffeeee;\n    };\n  }\n  paper-textarea {\n    --iron-autogrow-textarea: {\n      font-family: "Lucida Console", Monaco, monospace;\n      font-weight: 600;\n      white-space: pre;\n      line-height: 20px;\n      padding: 9.5px;\n      margin: 0 0 10px;\n      font-size: 13px;\n      color: #000000;\n      word-break: break-all;\n      word-wrap: break-word;\n      background-color: #f5f5f5;\n      border: 1px solid #ccc;\n      border-radius: 4px;\n      transition: 0.3s linear all;\n    };\n  }\n  </style>\n</custom-style>\n<paper-textarea \n  label="','"\n  value="','"\n  @value-changed="','"\n  error-message="Invalid JSON!"\n  ?readonly="','"\n  ?invalid="','"\n  max-rows="','"></paper-textarea>'])),this.label,this.value,this.valueEvent,this.disabled,this.error,this.maxRows)}},{key:"updated",value:function(e){var t=this;e.forEach((function(e,r){if(["currentData","value"].includes(r)){var n="".concat(r.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase(),"-changed");t.dispatchEvent(new CustomEvent(n,{detail:{value:t[r]}}))}"value"==r&&(t.formatTest=t._computeFormattedValue(t[r]),t.currentData=t._computeCurrentData(t[r]),t._valueChanged(t[r]))}))}},{key:"valueEvent",value:function(e){this.value=e.detail.value}},{key:"_valueChanged",value:function(e,t){try{JSON.parse(e)&&(this.error=!1)}catch(e){this.error=!0}}},{key:"_computeFormattedValue",value:function(e){try{var t=JSON.stringify(JSON.parse(t),null,2);t!==e&&(this.value=t)}catch(e){}}},{key:"_computeCurrentData",value:function(e){try{return JSON.parse(e)}catch(e){}}}])&&a(t.prototype,n),i&&a(t,i),s}(r.LitElement);window.customElements.define(h.tag,h),e.JsonEditor=h,Object.defineProperty(e,"__esModule",{value:!0})}));
