!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("lit"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-button.js"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/simple-colors/simple-colors.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/simple-icon/lib/simple-icon-button.js","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/simple-colors/simple-colors.js"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).StarRating={},t.lit,null,null,t.simpleColors_js)}(this,(function(t,e,n,r,o){"use strict";function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}function u(t,e){return u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},u(t,e)}function p(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=l(t);if(e){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function b(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=l(t)););return t}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=b(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},y.apply(this,arguments)}function m(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function d(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var v,g,O,j,w,P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(a,t);var n,r,o,i=f(a);function a(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this))._calPercent=0,t.numStars=5,t.score=10,t.possible=100,t.dark=!0,t.contrast=0,t.accentColor="yellow",t}return n=a,o=[{key:"tag",get:function(){return"star-rating"}},{key:"styles",get:function(){return[].concat(d(y(l(a),"styles",this)),[e.css(w||(w=m(["\n        :host {\n          display: block;\n          font-size: 12px;\n          font-weight: normal;\n          --star-rating-padding-left: 12px;\n          --star-rating-margin: 0;\n          --star-rating-size: 24px;\n        }\n        .wrapper {\n          display: inline-flex;\n        }\n        .stars {\n          background-color: var(\n            --star-rating-background-color,\n            var(--simple-colors-default-theme-grey-9)\n          );\n        }\n        simple-icon,\n        simple-icon-button {\n          --simple-icon-color: var(\n            --star-rating-color,\n            var(--simple-colors-default-theme-accent-7)\n          );\n          --simple-icon-height: var(--star-rating-size, 24px);\n          --simple-icon-width: var(--star-rating-size, 24px);\n        }\n        .rating {\n          padding-left: var(--star-rating-padding-left);\n          margin: var(--star-rating-margin);\n          line-height: var(--star-rating-size, 24px);\n          vertical-align: center;\n        }\n        :host(:not([interactive])) simple-icon-button::part(button) {\n          cursor: unset;\n        }\n      "])))])}},{key:"properties",get:function(){return c(c({},y(l(a),"properties",this)),{},{score:{type:Number},possible:{type:Number},interactive:{type:Boolean,reflect:!0},numStars:{type:Number,attribute:"num-stars"},_calPercent:{type:Number}})}}],(r=[{key:"render",value:function(){return e.html(v||(v=m(['\n      <div class="wrapper">\n        <div class="stars">\n          ','\n        </div>\n        <div class="rating">\n          '," (","/",")\n        </div>\n      </div>\n    "])),this.renderStar(this.numStars,this.interactive),this._calPercent,this.score,this.possible)}},{key:"renderStar",value:function(t,n){if(0===t)return e.html(g||(g=m([""])));for(var r=0,o=[];r<t;){var i="star";r+1<=t*this._calPercent||(i=t*this._calPercent-(r+1)<-.01&&t*this._calPercent-(r+1)>=-.5?"star-half":"star-border"),n?o.push(e.html(O||(O=m(['<simple-icon-button\n            @click="','"\n            icon="','"\n            accent-color="','"\n            ?dark="','"\n            contrast="','"\n            class="star"\n            data-value="','"\n          ></simple-icon-button>'])),this.interactiveEvent,i,this.accentColor,this.dark,this.contrast,Number(r+1))):o.push(e.html(j||(j=m(['<simple-icon\n            icon="','"\n            accent-color="','"\n            ?dark="','"\n            contrast="','"\n            class="star"\n          ></simple-icon>'])),i,this.accentColor,this.dark,this.contrast)),r++}return o}},{key:"interactiveEvent",value:function(t){this.dispatchEvent(new CustomEvent("star-rating-click",{bubbles:!0,cancelable:!0,detail:{value:t.target.getAttribute("data-value")}}))}},{key:"updated",value:function(t){var e=this;y(l(a.prototype),"updated",this)&&y(l(a.prototype),"updated",this).call(this,t),t.forEach((function(t,n){0===e.possible&&(e.possible=1),["score","possible"].includes(n)&&0!==e.possible&&(e._calPercent=Math.round(e.score/e.possible*100)/100)}))}}])&&s(n.prototype,r),o&&s(n,o),a}(o.SimpleColors);customElements.define(P.tag,P),t.StarRating=P,Object.defineProperty(t,"__esModule",{value:!0})}));
