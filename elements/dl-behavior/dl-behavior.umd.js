!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/lib/legacy/polymer.dom.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/lib/legacy/polymer.dom.js"],t):t((e=e||self).FileDownloadBehaviors={},e.polymer_dom_js)}(this,function(e,t){"use strict";function o(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e,t,o){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,o){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=n(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(o):i.value}})(e,t,o||e)}e.MtzFileDownloadBehaviors=function(e){return function(a){function c(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),i(this,n(c).apply(this,arguments))}var p,u,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(c,e),p=c,f=[{key:"properties",get:function(){return l(n(c),"properties",this)?Object.assign({fileTypes:{type:Object,value:function(){return{CSV:"text/csv",JSON:"text/json",PDF:"application/pdf",TXT:"text/plain",HTML:"text/html"}}}},l(n(c),"properties",this)):{fileTypes:{type:Object,value:function(){return{CSV:"text/csv",JSON:"text/json",PDF:"application/pdf",TXT:"text/plain",HTML:"text/html"}}}}}}],(u=[{key:"downloadFromData",value:function(e,o){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"download",r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i=this.fileTypes[o.toUpperCase()],l=new Blob([decodeURIComponent(encodeURI(e))],{type:i}),a=n+"."+o.toLowerCase();if(window.navigator&&window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(l,a);else{var c=document.createElement("a");c.href=(window.URL||window.webkitURL).createObjectURL(l),c.download=a,c.target=r?"_blank":"_self",t.dom(this).appendChild(c),c.click(),t.dom(this).removeChild(c)}}},{key:"downloadFromURI",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return window.open(e,t?"_blank":"_self"),!0}}])&&o(p.prototype,u),f&&o(p,f),c}()},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=dl-behavior.umd.js.map
