!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@lrnwebcomponents/utils/utils.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/utils/utils.js"],t):t((e=e||self).SchemaBehaviors={},e.utils_js)}(this,function(e,t){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){o(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=i(e);if(t){var o=i(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return f(this,r)}}function p(e,t,r){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=i(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}e.SchemaBehaviors=function(e){return function(o){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(y,e);var c,f,l,h=a(y);function y(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),(e=h.call(this)).schemaResourceID="",e.schemaMap={prefix:{oer:"http://oerschema.org/",schema:"http://schema.org/",dc:"http://purl.org/dc/terms/",foaf:"http://xmlns.com/foaf/0.1/",cc:"http://creativecommons.org/ns#",bib:"http://bib.schema.org"}},e}return c=y,l=[{key:"properties",get:function(){return u(u({},p(i(y),"properties",this)),{},{schemaResourceID:{type:String,attribute:"schema-resource-id"},schemaMap:{type:Object,readOnly:!0,observer:"_schemaMapChanged"}})}}],(f=[{key:"updated",value:function(e){var t=this;p(i(y.prototype),"updated",this)&&p(i(y.prototype),"updated",this).call(this,e),e.forEach(function(e,r){"schemaMap"==r&&t._schemaMapChanged(t[r],e)})}},{key:"_schemaMapChanged",value:function(e,n){if("undefined"!==r(e)){this.schemaResourceID=this.getAttribute("resource"),""!=this.schemaResourceID&&null!=this.schemaResourceID&&"null"!=this.schemaResourceID||(this.schemaResourceID=t.generateResourceID(),this.setAttribute("resource",this.schemaResourceID));var o=e.prefix,c="";for(var u in o)o.hasOwnProperty(u)&&(c+=u+":"+o[u]+" ");""!=c&&this.setAttribute("prefix",c)}}}])&&n(c.prototype,f),l&&n(c,l),y}()},Object.defineProperty(e,"__esModule",{value:!0})});
