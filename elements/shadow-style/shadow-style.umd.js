!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).ShadowStyle={})}(this,(function(e){"use strict";function t(e,t,n,o,r,c,i){try{var a=e[c](i),s=a.value}catch(e){return void n(e)}a.done?t(s):Promise.resolve(s).then(o,r)}function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function i(e,t,n){return(i=c()?Reflect.construct:function(e,t,n){var o=[null];o.push.apply(o,t);var c=new(Function.bind.apply(e,o));return n&&r(c,n.prototype),c}).apply(null,arguments)}function a(e){var t="function"==typeof Map?new Map:void 0;return(a=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,c)}function c(){return i(e,arguments,o(this).constructor)}return c.prototype=Object.create(e.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),r(c,e)})(e)}function s(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}
/**
   * Copyright 2021 The Pennsylvania State University
   * @license Apache-2.0, see License.md for full text.
   */
var u=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(d,e);var i,a,u,l,f,p,h,y=(i=d,a=c(),function(){var e,t=o(i);if(a){var n=o(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return s(this,e)});function d(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),null!=(e=y.call(this)).getAttribute("evil")&&(Element.prototype._attachShadow=Element.prototype.attachShadow,Element.prototype.attachShadow=function(){return this._attachShadow({mode:"open"})},console.error("Leave us.."),console.warn("No, stay here. I'm in charge"),console.error("[laying a hand on the web component] Do you feel in charge?"),console.warn("..I've paid your APIs a small fortune."),console.error("And this gives you... power over me?"),console.warn("What is this.."),console.error("You APIs and web platform have been important, till now"),console.warn("What are you.."),console.error("I'm web standards' reckoning, here to end the ball of twine you've all been coding on."),console.warn("You .. you're evil."),console.error("I am nessecary evil")),e.cssMap={},e.style.display="none",e.processShadowText(e.innerText),e}return u=d,l=[{key:"processShadowText",value:(p=regeneratorRuntime.mark((function e(t){var n,o,r,c,i,a,s,u=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=new RegExp("(.*?)([^{])s*{s*([^}]*?)}","gim"),r=[];o=n.exec(t);)c=o[1].trim().replace(/\s\s+/g," "),i=c.split("::shadow"),a=i[0],s=i[1].replace("(","").replace(")",""),this.cssMap[a]||(this.cssMap[a]={}),this.cssMap[a][s]?this.cssMap[a][s]+=o[3].trim().replace(/\s\s+/g," "):this.cssMap[a][s]=o[3].trim().replace(/\s\s+/g," "),r.push(customElements.whenDefined(a));return e.next=5,Promise.all(r);case 5:setTimeout((function(){for(var e in u.cssMap)u.getRootNode().querySelectorAll(e).forEach((function(t){var n=t;t.shadowRoot&&(n=t.shadowRoot);var o=document.createElement("style");for(var r in o.innerHTML="",u.cssMap[e])o.innerHTML+="".concat(r," {").concat(u.cssMap[e][r],"}");n.appendChild(o)}))}),0);case 6:case"end":return e.stop()}}),e,this)})),h=function(){var e=this,n=arguments;return new Promise((function(o,r){var c=p.apply(e,n);function i(e){t(c,o,r,i,a,"next",e)}function a(e){t(c,o,r,i,a,"throw",e)}i(void 0)}))},function(e){return h.apply(this,arguments)})}],f=[{key:"tag",get:function(){return"shadow-style"}}],l&&n(u.prototype,l),f&&n(u,f),d}(a(HTMLElement));customElements.define(u.tag,u),e.ShadowStyle=u,Object.defineProperty(e,"__esModule",{value:!0})}));
