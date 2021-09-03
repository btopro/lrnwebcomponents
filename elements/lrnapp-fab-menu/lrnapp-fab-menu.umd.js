!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@lrnwebcomponents/paper-fab-speed-dial/lib/paper-fab-speed-dial-overlay.js"),require("@lrnwebcomponents/paper-fab-speed-dial/paper-fab-speed-dial.js"),require("@lrnwebcomponents/lrnapp-fab-menu/lib/lrnapp-fab-speed-dial-action.js"),require("lit"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-button.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/paper-fab-speed-dial/lib/paper-fab-speed-dial-overlay.js","@lrnwebcomponents/paper-fab-speed-dial/paper-fab-speed-dial.js","@lrnwebcomponents/lrnapp-fab-menu/lib/lrnapp-fab-speed-dial-action.js","lit","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/simple-icon/lib/simple-icon-button.js"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).LrnappFabMenu={},null,null,null,e.lit)}(this,(function(e,n,t,o,r){"use strict";function i(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,n){return(p=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function l(e,n){if(n&&("object"==typeof n||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,o=a(e);if(n){var r=a(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return l(this,t)}}function c(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var u,f,d=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&p(e,n)}(l,e);var n,t,o,a=s(l);function l(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,l),(e=a.call(this)).icon="add",e.disabled=!1,setTimeout((function(){}),0),e}return n=l,o=[{key:"styles",get:function(){return[r.css(f||(f=c(["\n        :host {\n          display: block;\n        }\n        lrnapp-fab-speed-dial-action:not(:defined),\n        paper-fab-speed-dial-overlay:not(:defined),\n        paper-fab-speed-dial:not(:defined) {\n          display: none;\n        }\n        .open,\n        .overlay {\n          position: fixed;\n          bottom: var(--paper-fab-speed-dial-bottom, 16px);\n          right: var(--paper-fab-speed-dial-right, 16px);\n        }\n        .open {\n          --paper-fab-background: var(--paper-fab-speed-dial-background);\n          --paper-fab-keyboard-focus-background: var(\n            --paper-fab-speed-dial-keyboard-focus-background\n          );\n        }\n        .close {\n          --paper-fab-background: var(--paper-grey-500);\n          --paper-fab-keyboard-focus-background: var(--paper-grey-500);\n          margin-top: 20px;\n          display: inline-block;\n        }\n        .overlay {\n          text-align: right;\n        }\n      "])))]}},{key:"tag",get:function(){return"lrnapp-fab-menu"}},{key:"properties",get:function(){return{icon:{type:String},opened:{type:Boolean},disabled:{type:Boolean}}}}],(t=[{key:"render",value:function(){return r.html(u||(u=c(['\n      <simple-icon-button\n        icon="','"\n        class="open"\n        @click="','"\n        ?hidden="','"\n        ?disabled="','"\n      ></simple-icon-button>\n\n      <paper-fab-speed-dial-overlay\n        class="overlay"\n        ?opened="','"\n        @opened-changed="','"\n        with-backdrop\n      >\n        <slot></slot>\n        <simple-icon-button\n          icon="close"\n          class="close"\n          @click="','"\n        ></simple-icon-button>\n      </paper-fab-speed-dial-overlay>\n    '])),this.icon,this.open,this.opened,this.disabled,this.opened,this.openedChangedEvent,this.close)}},{key:"openedChangedEvent",value:function(e){this.opened=e.detail.value}},{key:"updated",value:function(e){var n=this;e.forEach((function(e,t){"opened"==t&&n.dispatchEvent(new CustomEvent("opened-changed",{value:n[t]}))}))}},{key:"open",value:function(e){e&&e.preventDefault(),this.opened=!0}},{key:"close",value:function(e){e&&e.preventDefault(),this.opened=!1}}])&&i(n.prototype,t),o&&i(n,o),l}(r.LitElement);window.customElements.define(d.tag,d),e.LrnappFabMenu=d,Object.defineProperty(e,"__esModule",{value:!0})}));
