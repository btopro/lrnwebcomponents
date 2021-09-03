!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("lit"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-button-lite.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/simple-tooltip/simple-tooltip.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/simple-icon/lib/simple-icon-button-lite.js","@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/simple-tooltip/simple-tooltip.js"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).A11yCollapse={},e.lit)}(this,(function(e,n){"use strict";function t(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,n){return(a=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function i(e,n){if(n&&("object"==typeof n||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function l(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=o(e);if(n){var l=o(this).constructor;t=Reflect.construct(a,arguments,l)}else t=a.apply(this,arguments);return i(this,t)}}function r(e,n,t){return(r="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var a=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=o(e)););return e}(e,n);if(a){var i=Object.getOwnPropertyDescriptor(a,n);return i.get?i.get.call(t):i.value}})(e,n,t||e)}function d(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var s,c,p,u,h=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&a(e,n)}(g,e);var i,h,b,f=l(g);function g(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,g),(e=f.call(this)).headingButton=!1,e.accordion=!1,e.disabled=!1,e.hidden=!1,e.expanded=!1,e.icon="icons:expand-more",e.label="expand / collapse",e.tooltip="toggle expand / collapse",e}return i=g,b=[{key:"styles",get:function(){return[n.css(u||(u=d(['\n        :host {\n          display: block;\n          margin: var(--a11y-collapse-margin, 15px 0);\n          border: var(--a11y-collapse-border, 1px solid);\n          border-color: var(--a11y-collapse-border-color, inherit);\n          transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);\n        }\n        :host(:not(:first-of-type)) {\n          border-top: var(\n            --a11y-collapse-border-between,\n            var(--a11y-collapse-border, 1px solid)\n          );\n        }\n        :host([disabled]) {\n          opacity: 0.5;\n        }\n        *[aria-controls="content"][disabled] {\n          cursor: not-allowed;\n        }\n        #heading {\n          display: flex;\n          justify-content: stretch;\n          align-items: center;\n          padding: 0\n            var(\n              --a11y-collapse-padding-right,\n              var(--a11y-collapse-horizontal-padding, 16px)\n            )\n            0\n            var(\n              --a11y-collapse-padding-left,\n              var(--a11y-collapse-horizontal-padding, 16px)\n            );\n          font-weight: var(--a11y-collapse-heading-font-weight, bold);\n          margin: var(--a11y-collapse-margin, unset);\n          color: var(--a11y-collapse-heading-color, unset);\n          background-color: var(\n            --a11y-collapse-heading-background-color,\n            unset\n          );\n        }\n        :host([disabled]) #heading {\n          color: var(--a11y-collapse-disabled-heading-color, unset);\n          background-color: var(\n            --a11y-collapse-heading-disabled-background-color,\n            unset\n          );\n        }\n        #text {\n          flex-grow: 1;\n          overflow: hidden;\n        }\n        #expand {\n          transform: rotate(0deg);\n          transition: transform 0.75s ease;\n          padding: (--a11y-collapse-icon-padding, unset);\n        }\n        #content {\n          padding: var(\n              --a11y-collapse-padding-top,\n              var(--a11y-collapse-vertical-padding, 16px)\n            )\n            var(\n              --a11y-collapse-padding-right,\n              var(--a11y-collapse-horizontal-padding, 16px)\n            )\n            var(\n              --a11y-collapse-padding-bottom,\n              var(--a11y-collapse-vertical-padding, 16px)\n            )\n            var(\n              --a11y-collapse-padding-left,\n              var(--a11y-collapse-horizontal-padding, 16px)\n            );\n          border-top: var(--a11y-collapse-border, 1px solid);\n          border-color: var(--a11y-collapse-border-color, inherit);\n        }\n        @media screen {\n          #expand.rotated {\n            transform: rotate(-90deg);\n            transition: transform 0.75s ease;\n          }\n          :host #content {\n            padding: 0\n              var(\n                --a11y-collapse-padding-right,\n                var(--a11y-collapse-horizontal-padding, 16px)\n              )\n              0\n              var(\n                --a11y-collapse-padding-left,\n                var(--a11y-collapse-horizontal-padding, 16px)\n              );\n            border-top: 0px solid;\n            border-color: var(--a11y-collapse-border-color, inherit);\n            max-height: 0;\n            transition: all 0.75s ease;\n            overflow-y: hidden;\n          }\n          :host #content-inner {\n            max-height: 0;\n            overflow-y: var(--a11y-collapse-overflow-y, hidden);\n          }\n          :host([expanded]) #content {\n            padding: var(\n                --a11y-collapse-padding-top,\n                var(--a11y-collapse-vertical-padding, 16px)\n              )\n              var(\n                --a11y-collapse-padding-right,\n                var(--a11y-collapse-horizontal-padding, 16px)\n              )\n              var(\n                --a11y-collapse-padding-bottom,\n                var(--a11y-collapse-vertical-padding, 16px)\n              )\n              var(\n                --a11y-collapse-padding-left,\n                var(--a11y-collapse-horizontal-padding, 16px)\n              );\n            border-top: var(--a11y-collapse-border, 1px solid);\n            border-color: var(--a11y-collapse-border-color, inherit);\n            max-height: 200000000000vh;\n          }\n          :host([expanded]) #content-inner {\n            max-height: var(--a11y-collapse-max-height, 200000000000vh);\n            transition: max-height 0.75s ease;\n          }\n          :host(:not([expanded])) #content {\n            display: none;\n          }\n        }\n      '])))]}},{key:"tag",get:function(){return"a11y-collapse"}},{key:"properties",get:function(){return{headingButton:{type:Boolean,reflect:!0,attribute:"heading-button"},disabled:{type:Boolean,reflect:!0,attribute:"disabled"},hidden:{type:Boolean,reflect:!0,attribute:"hidden"},expanded:{type:Boolean,reflect:!0},icon:{type:String},iconExpanded:{type:String,attribute:"icon-expanded"},label:{type:String},labelExpanded:{type:String,attribute:"label-expanded"},tooltip:{type:String},tooltipExpanded:{type:String,attribute:"tooltip-expanded"},accordion:{type:Boolean,reflect:!0,attribute:"accordion"}}}},{key:"haxProperties",get:function(){return new URL("./lib/".concat(this.tag,".haxProperties.json"),"undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("a11y-collapse.umd.js",document.baseURI).href).href}}],(h=[{key:"render",value:function(){return n.html(s||(s=d(["\n      ",'\n      <div\n        id="content"\n        aria-hidden="','"\n        aria-labelledby="heading"\n        aria-live="polite"\n      >\n        <div id="content-inner">\n          <slot name="content"></slot>\n          <slot></slot>\n        </div>\n      </div>\n    '])),this.headingButton||this.accordion?this._makeHeadingButton():this._makeIconButton(),this.expanded?"false":"true")}},{key:"connectedCallback",value:function(){var e=this;r(o(g.prototype),"connectedCallback",this).call(this),setTimeout((function(){e.dispatchEvent(new CustomEvent("a11y-collapse-attached",{bubbles:!0,cancelable:!0,composed:!0,detail:e}))}),0)}},{key:"disconnectedCallback",value:function(){this.dispatchEvent(new CustomEvent("a11y-collapse-detached",{bubbles:!0,cancelable:!0,composed:!0,detail:this})),r(o(g.prototype),"disconnectedCallback",this).call(this)}},{key:"collapse",value:function(){this.toggle(!1)}},{key:"expand",value:function(){this.toggle(!0)}},{key:"toggle",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!this.expanded;this.expanded=e}},{key:"updated",value:function(e){var n=this;e.forEach((function(e,t){"expanded"===t&&n._fireToggleEvents()}))}},{key:"_fireToggleEvents",value:function(){this.dispatchEvent(new CustomEvent("toggle",{bubbles:!0,cancelable:!0,composed:!0,detail:this})),this.dispatchEvent(new CustomEvent("a11y-collapse-toggle",{bubbles:!0,cancelable:!0,composed:!0,detail:this})),this.expanded?this.dispatchEvent(new CustomEvent("expand",{bubbles:!0,cancelable:!0,composed:!0,detail:this})):this.dispatchEvent(new CustomEvent("collapse",{bubbles:!0,cancelable:!0,composed:!0,detail:this}))}},{key:"_getExpanded",value:function(e,n,t){return t&&n?n:e}},{key:"_makeHeadingButton",value:function(){return n.html(c||(c=d(['\n      <div\n        id="heading"\n        aria-controls="content"\n        aria-expanded="','"\n        role="button"\n        @click="','"\n        ?disabled="','"\n        .label="','"\n      >\n        <div id="text"><slot name="heading"></slot></div>\n        <simple-icon-lite\n          id="expand"\n          class="','"\n          .icon="','"\n          aria-hidden="true"\n        >\n        </simple-icon-lite>\n      </div>\n      <simple-tooltip for="heading"\n        >',"</simple-tooltip\n      >\n    "])),this.expanded?"true":"false",this._onClick,this.disabled,this._getExpanded(this.label,this.labelExpanded,this.expanded),this.expanded||this.iconExpanded?"":"rotated",this._getExpanded(this.icon||"icons:expand-more",this.iconExpanded,this.expanded),this._getExpanded(this.tooltip,this.tooltipExpanded,this.expanded))}},{key:"_makeIconButton",value:function(){return n.html(p||(p=d(['\n      <div id="heading">\n        <div id="text"><slot name="heading"></slot></div>\n        <simple-icon-button-lite\n          id="expand"\n          class="','"\n          @click="','"\n          ?disabled="','"\n          .label="','"\n          .icon="','"\n          aria-controls="content"\n          aria-expanded="','"\n        >\n        </simple-icon-button-lite>\n        <simple-tooltip for="expand"\n          >',"</simple-tooltip\n        >\n      </div>\n    "])),this.expanded||this.iconExpanded?"":"rotated",this._onClick,this.disabled,this._getExpanded(this.label,this.labelExpanded,this.expanded),this._getExpanded(this.icon||"icons:expand-more",this.iconExpanded,this.expanded),this.expanded?"true":"false",this._getExpanded(this.tooltip,this.tooltipExpanded,this.expanded))}},{key:"_onClick",value:function(){this.disabled||(this.toggle(),this.dispatchEvent(new CustomEvent("a11y-collapse-click",{bubbles:!0,cancelable:!0,composed:!0,detail:this})))}},{key:"_makeAccordionButton",value:function(){this._makeHeadingButton()}}])&&t(i.prototype,h),b&&t(i,b),g}(n.LitElement);window.customElements.define(h.tag,h),e.A11yCollapse=h,Object.defineProperty(e,"__esModule",{value:!0})}));
