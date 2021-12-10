!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).I18NManager={})}(this,(function(e){"use strict";function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function r(e,t,n,r,a,o,c){try{var i=e[o](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var c=e.apply(t,n);function i(e){r(c,a,o,i,u,"next",e)}function u(e){r(c,a,o,i,u,"throw",e)}i(void 0)}))}}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}function u(e,t){return u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},u(e,t)}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function s(e,t,n){return s=l()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&u(a,n.prototype),a},s.apply(null,arguments)}function f(e){var t="function"==typeof Map?new Map:void 0;return f=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return s(e,arguments,i(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),u(r,e)},f(e)}function d(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}
/**
   * Copyright 2021 The Pennsylvania State University
   * @license Apache-2.0, see License.md for full text.
   */
window.I18NManagerStore=window.I18NManagerStore||{},window.I18NManagerStore.requestAvailability=function(){return window.I18NManagerStore.instance||(window.I18NManagerStore.instance=document.createElement("i18n-manager"),document.body.appendChild(window.I18NManagerStore.instance)),window.I18NManagerStore.instance};var h=window.I18NManagerStore.requestAvailability(),g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(b,e);var t,r,c,s,f,h,g,p=(t=b,r=l(),function(){var e,n=i(t);if(r){var a=i(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return d(this,e)});function b(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,b),(e=p.call(this)).fetchTargets={},e.elements=[],e.locales=new Set([]),e.lang=e.documentLang,e.dir=e.documentDir,e}return c=b,s=[{key:"documentLang",get:function(){return document.body.getAttribute("xml:lang")||document.body.getAttribute("lang")||document.documentElement.getAttribute("xml:lang")||document.documentElement.getAttribute("lang")||navigator.language||"en"}},{key:"documentDir",get:function(){return document.body.getAttribute("xml:dir")||document.body.getAttribute("dir")||document.documentElement.getAttribute("xml:dir")||document.documentElement.getAttribute("dir")||"ltr"}},{key:"connectedCallback",value:function(){this.__ready=!0,window.addEventListener("i18n-manager-register-element",this.registerLocalizationEvent.bind(this)),window.addEventListener("languagechange",this.changeLanguageEvent.bind(this))}},{key:"disconnectedCallback",value:function(){window.removeEventListener("i18n-manager-register-element",this.registerLocalizationEvent.bind(this)),window.removeEventListener("languagechange",this.changeLanguageEvent.bind(this))}},{key:"changeLanguageEvent",value:function(e){this.lang=e.detail}},{key:"registerLocalizationEvent",value:function(e){var t=this.detailNormalize(e.detail);t.namespace&&t.localesPath&&t.locales&&this.registerLocalization(t)}},{key:"detailNormalize",value:function(e){if(!e.namespace&&e.context&&(e.namespace=e.context.tagName.toLowerCase()),!e.updateCallback&&e.context&&(e.context.requestUpdate?e.updateCallback="requestUpdate":e.context.render&&(e.updateCallback="render")),!e.localesPath&&e.basePath&&(e.localesPath="".concat(decodeURIComponent(e.basePath),"/../locales")),e.context&&e.namespace){e.context.t&&(e.context._t=n({},e.context.t));var t=this.elements.filter((function(t){if(t.namespace==e.namespace&&t.localesPath&&t.locales)return!0}));t&&t.length&&t[0]&&(e.localesPath=t[0].localesPath,e.locales=t[0].locales)}return e}},{key:"registerLocalization",value:function(e){var t=this;(!e.context&&0===this.elements.filter((function(t){return t.namespace===e.namespace})).length||0===this.elements.filter((function(t){return t.context===e.context})).length)&&(e=this.detailNormalize(e),this.elements.push(e),e.locales.forEach(this.locales.add,this.locales),this.lang&&this.__ready&&e.locales.includes(this.lang)&&(clearTimeout(this._debounce),this._debounce=setTimeout((function(){t.updateLanguage(t.lang)}),0)))}},{key:"loadNamespaceFile",value:(g=a(regeneratorRuntime.mark((function e(t){var n,r,a,o,c,i=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=i.length>1&&void 0!==i[1]?i[1]:this.lang,r=n.split("-"),a=this.elements.filter((function(e){return e.namespace===t&&(e.locales.includes(n)||e.locales.includes(r[0]))})),!a||1!==a.length){e.next=14;break}if(o=a[0],c="",o.locales.includes(n)?c="".concat(o.localesPath,"/").concat(o.namespace,".").concat(n,".json"):o.locales.includes(r[0])&&(c="".concat(o.localesPath,"/").concat(o.namespace,".").concat(r[0],".json")),""!=c){e.next=9;break}return e.abrupt("return",{});case 9:if(this.fetchTargets[c]){e.next=13;break}return e.next=12,fetch(c).then((function(e){return!(!e||!e.json)&&e.json()}));case 12:this.fetchTargets[c]=e.sent;case 13:return e.abrupt("return",this.fetchTargets[c]);case 14:case"end":return e.stop()}}),e,this)}))),function(e){return g.apply(this,arguments)})},{key:"updateLanguage",value:(h=a(regeneratorRuntime.mark((function e(t){var r,a,o,c,i,u,l,s,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=21;break}if(r=t.split("-"),a=this.elements.filter((function(e){return e.locales.includes(t)||e.locales.includes(r[0])})),o=this.elements.filter((function(e){return!e.locales.includes(t)&&!e.locales.includes(r[0])})),0!==o.length)for(c in o)(i=o[c]).context&&(i.context.t=n({},i.context._t),i.updateCallback&&i.context[i.updateCallback]());e.t0=regeneratorRuntime.keys(a);case 6:if((e.t1=e.t0()).done){e.next=21;break}if(c=e.t1.value,u=a[c],l="",u.locales.includes(t)?l="".concat(u.localesPath,"/").concat(u.namespace,".").concat(t,".json"):u.locales.includes(r[0])&&(l="".concat(u.localesPath,"/").concat(u.namespace,".").concat(r[0],".json")),!this.fetchTargets[l]){e.next=15;break}if(u.context){for(f in s=this.fetchTargets[l])u.context.t[f]=s[f];u.context.t=n({},u.context.t),u.updateCallback&&u.context[u.updateCallback]()}e.next=19;break;case 15:return e.next=17,fetch(l).then((function(e){return!(!e||!e.json)&&e.json()}));case 17:if(this.fetchTargets[l]=e.sent,u.context){for(f in this.fetchTargets[l])u.context.t[f]=this.fetchTargets[l][f];u.context.t=n({},u.context.t),u.updateCallback&&u.context&&u.context[u.updateCallback]()}case 19:e.next=6;break;case 21:case"end":return e.stop()}}),e,this)}))),function(e){return h.apply(this,arguments)})},{key:"attributeChangedCallback",value:function(e,t,n){"lang"!=e&&"dir"!=e||this.dispatchEvent(new CustomEvent("".concat(e,"-changed"),{detail:{value:n}})),"lang"==e&&n&&this.__ready&&this.updateLanguage(n)}},{key:"lang",get:function(){return this.getAttribute("lang")},set:function(e){e?this.setAttribute("lang",e):this.removeAttribute("lang")}},{key:"dir",get:function(){return this.getAttribute("dir")},set:function(e){e?this.setAttribute("dir",e):this.removeAttribute("dir")}}],f=[{key:"tag",get:function(){return"i18n-manager"}},{key:"observedAttributes",get:function(){return["lang","dir"]}}],s&&o(c.prototype,s),f&&o(c,f),b}(f(HTMLElement));customElements.define(g.tag,g),e.I18NManager=g,e.I18NManagerStore=h,Object.defineProperty(e,"__esModule",{value:!0})}));
