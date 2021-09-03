!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@lrnwebcomponents/simple-icon/lib/simple-icon-button.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/relative-heading/relative-heading.js"),require("lit")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/simple-icon/lib/simple-icon-button.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/relative-heading/relative-heading.js","lit"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).TopicHeading={},null,null,null,null,e.lit)}(this,(function(e,n,t,i,r,o){"use strict";function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,n){return(p=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function f(e,n){if(n&&("object"==typeof n||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,i=a(e);if(n){var r=a(this).constructor;t=Reflect.construct(i,arguments,r)}else t=i.apply(this,arguments);return f(this,t)}}function b(e,n,t){return(b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var i=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=a(e)););return e}(e,n);if(i){var r=Object.getOwnPropertyDescriptor(i,n);return r.get?r.get.call(t):r.value}})(e,n,t||e)}function h(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var y,g,m,v,O=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&p(e,n)}(c,e);var n,t,i,r=d(c);function c(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,c),(e=r.call(this)).icon="",e.title="",e}return n=c,i=[{key:"styles",get:function(){return[o.css(v||(v=h(["\n:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\nrelative-heading {\n  color: var(--topic-heading-text-color);\n  display: inline-flex;\n}\n\nsimple-icon {\n  color: var(--topic-heading-icon-color);\n  display: inline-flex;\n  font-size: 16px;\n  --simple-icon-height: 32px;\n  --simple-icon-width: 32px;\n  padding: 16px;\n  line-height: 16px;\n  vertical-align: bottom;\n}\n      "])))]}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Topic heading",description:"Semantic and visual meaning behind a heading break",icon:"icons:android",color:"green",groups:["Heading"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"btopro",owner:"The Pennsylvania State University"}},settings:{configure:[{property:"icon",description:"",inputMethod:"iconpicker",required:!1,icon:"icons:code"},{property:"title",description:"",inputMethod:"textfield",required:!1,icon:"icons:heading"}],advanced:[]}}}},{key:"properties",get:function(){return l(l({},b(a(c),"properties",this)),{},{icon:{type:String},title:{type:String}})}},{key:"tag",get:function(){return"topic-heading"}}],(t=[{key:"render",value:function(){return o.html(y||(y=h(["\n\n","\n",""])),this.icon?o.html(g||(g=h(['\n  <simple-icon icon="','"></simple-icon>\n'])),this.icon):"",this.title?o.html(m||(m=h(['\n<relative-heading text="','">',"</relative-heading>\n"])),this.title,this.title):"")}},{key:"firstUpdated",value:function(){this.icon}}])&&u(n.prototype,t),i&&u(n,i),c}(o.LitElement);window.customElements.define(O.tag,O),e.TopicHeading=O,Object.defineProperty(e,"__esModule",{value:!0})}));
