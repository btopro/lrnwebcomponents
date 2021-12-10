!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@lrnwebcomponents/csv-render/csv-render.js"),require("lit"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/csv-render/csv-render.js","lit","@lrnwebcomponents/schema-behaviors/schema-behaviors.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).LrnTable={},null,e.lit,e.schemaBehaviors_js)}(this,(function(e,t,r,n){"use strict";function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function l(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return l(this,r)}}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=p(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},b.apply(this,arguments)}function y(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var d,h,v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(l,e);var t,n,o,u=a(l);function l(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),e=u.call(this),setTimeout((function(){}),0),e}return t=l,o=[{key:"styles",get:function(){return[r.css(h||(h=y(["\n        :host {\n          display: block;\n        }\n        .hidden-title {\n          display: none;\n        }\n      "])))]}},{key:"tag",get:function(){return"lrn-table"}},{key:"properties",get:function(){return i(i({},b(s(l),"properties",this)),{},{title:{type:String},csvFile:{type:String,attribute:"csv-file"},description:{type:String}})}},{key:"haxProperties",get:function(){return new URL("./lib/lrn-table.haxProperties.json","undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("lrn-table.umd.js",document.baseURI).href).href}}],(n=[{key:"render",value:function(){return r.html(d||(d=y(['\n      <div typeof="oer:SupportingMaterial">\n        <div class="hidden-title" property="oer:name">','</div>\n        <div property="oer:description">\n          <slot></slot>\n          <csv-render\n            data-source="','"\n            caption="','"\n            summary="','"\n          ></csv-render>\n        </div>\n      </div>\n    '])),this.title,this.csvFile,this.title,this.description)}}])&&c(t.prototype,n),o&&c(t,o),l}(n.SchemaBehaviors(r.LitElement));window.customElements.define(v.tag,v),e.LrnTable=v,Object.defineProperty(e,"__esModule",{value:!0})}));
