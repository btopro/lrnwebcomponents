!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js"],t):t((e=e||self).FullWidthImage={},e.polymerElement_js)}(this,function(e,t){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e,t,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r(e)););return e}(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function u(){var e,t,n=(e=['\n<style>:host {\n  display: block;\n  background-color: #000000;\n  height: 300px;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n#image {\n  left: 0;\n  right: 0;\n  position: absolute;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  width: 100%;\n  text-align: center;\n}\n\n:host([hax-preview-mode]) #image {\n  left: unset;\n  right: unset;\n  position: unset;\n}\n\n.wrapper {\n  opacity: 1;\n  background-color: rgba(0,0,0,.6);\n  padding: 100px;\n  height: 100px;\n  transition: 0.5s all ease-in-out;\n  -webkit-transition: 0.5s all ease-in-out;\n  -moz-transition: 0.5s all ease-in-out;\n  -ms-transition: 0.5s all ease-in-out;\n  -o-transition: 0.5s all ease-in-out;\n}\n.wrapper:hover {\n  opacity: 0;\n  background-color: transparent;\n}\n\n.caption {\n  padding: 35px 0;\n  font-size: 25px;\n  line-height: 40px;\n  color: #fff;\n  font-style: italic;\n}</style>\n<div id="image">\n  <div class="wrapper">\n    <div class="caption">\n      [[caption]]\n      <slot></slot>\n    </div>\n  </div>\n</div>'],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return u=function(){return n},n}var l=function(e){function l(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),a(this,r(l).apply(this,arguments))}var p,s,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(l,t.PolymerElement),p=l,f=[{key:"template",get:function(){return t.html(u())}},{key:"haxProperties",get:function(){return{canScale:!1,canPosition:!1,canEditSource:!1,gizmo:{title:"Full width-image",description:"full width image that flows beyond boundaries",icon:"image:image",color:"green",groups:["Width"],handles:[{type:"image",source:"source",caption:"caption",title:"caption"}],meta:{author:"btopro",owner:"The Pennsylvania State University"}},settings:{quick:[{property:"source",description:"",inputMethod:"textfield",required:!0,icon:"image:image",validationType:"url"}],configure:[{property:"source",description:"",inputMethod:"haxupload",required:!0,icon:"icons:link",validationType:"url"},{property:"caption",description:"",inputMethod:"textfield"}],advanced:[]}}}},{key:"properties",get:function(){var e={source:{name:"source",type:String,reflectToAttributes:!0,observer:"_sourceChanged"},caption:{name:"caption",type:String,reflectToAttributes:!0}};return c(r(l),"properties",this)&&(e=Object.assign(e,c(r(l),"properties",this))),e}},{key:"tag",get:function(){return"full-width-image"}}],(s=[{key:"_sourceChanged",value:function(e,t){"undefined"!==n(e)&&(this.$.image.style.backgroundImage='url("'.concat(e,'")'))}}])&&o(p.prototype,s),f&&o(p,f),l}();window.customElements.define("full-width-image",l),e.FullWidthImage=l,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=full-width-image.umd.js.map
