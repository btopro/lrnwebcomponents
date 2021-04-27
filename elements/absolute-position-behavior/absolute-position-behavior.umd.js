!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("lit-element/lit-element.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js"],e):e((t=t||self).AbsolutePositionBehavior={},t.litElement_js)}(this,function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach(function(e){r(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var n,o=l(t);if(e){var i=l(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return f(this,n)}}function d(t,e,n){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=l(t)););return t}(t,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function h(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}window.AbsolutePositionStateManager=window.AbsolutePositionStateManager||{},window.AbsolutePositionStateManager.requestAvailability=function(){if(!window.AbsolutePositionStateManager.instance){window.AbsolutePositionStateManager.instance=document.createElement("absolute-position-state-manager");var t=window.AbsolutePositionStateManager.instance;document.body.appendChild(t)}return window.AbsolutePositionStateManager.instance};var b,y,v=function(t){a(r,e.LitElement);var o=p(r);function r(){var t;return n(this,r),(t=o.call(this)).elements=[],t.__timeout=!1,t.__observer=new MutationObserver(function(e){return t.checkMutations(e)}),t}return i(r,[{key:"loadElement",value:function(t){this.elements.length<1&&(this.__observer.observe(document,{attributes:!0,childList:!0,subtree:!0,characterData:!0}),this.updateElements(),document.addEventListener("load",this.updateElements),window.addEventListener("resize",this._handleResize)),this.elements.push(t),t.style.top=0,t.style.left=0,this.positionElement(t)}},{key:"unloadElement",value:function(t){this.elements.filter(function(e){return e===t}),this.elements.length<1&&this.removeEventListeners()}},{key:"_handleResize",value:function(){this.__timeout&&clearTimeout(this.__timeout),this.__timeout=setTimeout(window.AbsolutePositionStateManager.instance.updateElements(),250)}},{key:"checkMutations",value:function(t){var e=this,n=!1;t.forEach(function(t){n||(n=n||!("attributes"===t.type&&"style"===t.attributeName&&e.elements.includes(t.target)))}),n&&this.updateElements()}},{key:"findTarget",value:function(t){for(var e="#"+t.for,n=t.target,o=t;t.for&&!n&&o&&o.parentNode&&o!==document;)n=(o=o.parentNode)?o.querySelector(e):void 0,11===o.nodeType&&(o=o.host),n=!n&&o?o.querySelector(e):n;return n}},{key:"removeEventListeners",value:function(){this.__observer&&this.__observer.disconnect&&this.__observer.disconnect(),document.removeEventListener("load",this.updateElements),window.removeEventListener("resize",this._handleResize)}},{key:"updateElements",value:function(){var t=this;this.elements.forEach(function(e){return t.positionElement(e)})}},{key:"_getParentNode",value:function(t){var e=t.parentNode;return null!=e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&(e=e.host),e}},{key:"positionElement",value:function(t){t.position||(t.position="bottom");var e=this.findTarget(t),n=t.offsetParent;if(e&&n){var o=parseFloat(t.offset),i=document.body.getBoundingClientRect(),r=n.getBoundingClientRect(),s=e.getBoundingClientRect(),u=t.getBoundingClientRect(),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.position;return"left"!==e&&"right"!==e},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a(t.position),n=function(t){return parseFloat(t.replace("px",""))},o=e?n(t.style.left)-u.left:n(t.style.top)-u.top,r=e?"left":"top",l=function(t){return e?t.width:t.height},c=o+l(i)-l(u),f=o;return"end"===t.positionAlign?f+=s[r]-l(u)+l(s):"start"===t.positionAlign?f+=s[r]:f+=s[r]-l(u)/2+l(s)/2,t.fitToVisibleBounds?Math.max(o,Math.min(c,f))+"px":f+"px"},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.position,n=function(t){return parseFloat(t.replace("px",""))},i=a(e)?n(t.style.top)-u.top:n(t.style.left)-u.left,r="visible"==window.getComputedStyle(t,null).overflowY?Math.max(u.height,t.scrollHeight):u.height,l="visible"==window.getComputedStyle(t,null).overflowX?Math.max(u.width,t.scrollWidth):u.width;return"top"===e?s.top+i-r-o+"px":"left"===e?s.left+i-l-o+"px":s[e]+i+o+"px"},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.position,n=function(t){return a(e)?u.height+o:u.width+o};return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.position;return"left"===e||"top"===e}(e)?s[e]-i[e]>n:i[e]-s[e]>n},p=!1!==t.fitToVisibleBounds&&!f(t.position),d={top:["bottom","left","right"],left:["right","top","bottom"],bottom:["top","right","left"],right:["left","bottom","top"]};t.style.position="absolute",p&&f(d[t.position][0])?t.position=d[t.position][0]:p&&f(d[t.position][1])?t.position=d[t.position][1]:p&&f(d[t.position][2])?t.position=d[t.position][2]:(t.style.top=a(t.position)?c():l(),t.style.left=a(t.position)?l():c(),t.__positions={self:u,parent:r,target:s})}}},{key:"disconnectedCallback",value:function(){this.removeEventListeners(),d(l(r.prototype),"disconnectedCallback",this).call(this)}}],[{key:"tag",get:function(){return"absolute-position-state-manager"}},{key:"properties",get:function(){return{elements:{type:Array},__observer:{type:Object},__timeout:{type:Object}}}}]),r}();window.customElements.define(v.tag,v);var g=function(t){a(r,e.LitElement);var o=p(r);function r(){var t;return n(this,r),(t=o.call(this)).auto=!1,t.fitToVisibleBounds=!1,t.for=null,t.offset=0,t.position="bottom",t.target=null,t.__positions={},t.__observe=!1,t.__manager=window.AbsolutePositionStateManager.requestAvailability(),t}return i(r,[{key:"render",value:function(){return e.html(b||(b=h(["\n\n<slot></slot>"])))}},{key:"updated",value:function(t){var e=this;t.forEach(function(t,n){"auto"===n&&e.auto&&e.setPosition(),"auto"!==n||e.auto||e.unsetPosition(),"fitToVisibleBounds"===n&&e.updatePosition(),"for"===n&&e.updatePosition(),"offset"===n&&e.updatePosition(),"position"===n&&e.updatePosition(),"positionAlign"===n&&e.updatePosition(),"target"===n&&e.updatePosition(),"hidden"===n&&e.updatePosition()})}},{key:"setPosition",value:function(){this.__observe=!0,this.__manager.loadElement(this)}},{key:"unsetPosition",value:function(){this.__observe=!1,this.__manager.unloadElement(this)}},{key:"updatePosition",value:function(){!0===this.__observe&&this.__manager.positionElement(this)}},{key:"disconnectedCallback",value:function(){this.unsetPosition(),d(l(r.prototype),"disconnectedCallback",this).call(this)}}],[{key:"styles",get:function(){return[e.css(y||(y=h(["\n:host {\n  display: inline-block;\n  z-index: 99999999999;\n  position: absolute;\n}\n\n:host([hidden]) {\n  display: none;\n}\n      "])))]}},{key:"properties",get:function(){return u(u({},d(l(r),"properties",this)),{},{auto:{type:Boolean,attribute:"auto"},fitToVisibleBounds:{type:Boolean,attribute:"fit-to-visible-bounds"},hidden:{type:Boolean,reflect:!0,attribute:"hidden"},for:{type:String,attribute:"for",reflect:!0},offset:{type:Number,attribute:"offset"},position:{type:String,attribute:"position",reflect:!0},positionAlign:{type:String,attribute:"position-align",reflect:!0},target:{type:Object},__positions:{type:Object}})}},{key:"tag",get:function(){return"absolute-position-behavior"}}]),r}();window.customElements.define(g.tag,g),t.AbsolutePositionBehavior=g,Object.defineProperty(t,"__esModule",{value:!0})});
