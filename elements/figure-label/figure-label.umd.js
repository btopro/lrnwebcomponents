!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js"],t):t((e=e||self).FigureLabel={},e.litElement_js)}(this,function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach(function(t){r(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var i=c(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return f(this,n)}}function p(e,t,n){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function a(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var s,d,b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(y,t.LitElement);var r,i,f,b=l(y);function y(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),b.apply(this,arguments)}return r=y,f=[{key:"styles",get:function(){return[t.css(d||(d=a(["\n:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n#wrap {\n  display: flex;\n  margin-bottom: 1em;\n}\n\n#title {\n  background-color: #f2f2f2;\n  padding: 10.8px 13.5px 10.8px;\n  font-size: 13.5px;\n}\n\n#description {\n  border: solid 1px #f2f2f2;\n  padding: 10.8px 13.5px 10.8px;\n  font-size: 13.5px;\n}\n      "])))]}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Figure label",description:"Figure label element to mark media assets within content.",icon:"icons:android",color:"green",groups:["Label"],meta:{author:"heymp",owner:"PSU"}},settings:{configure:[{property:"title",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"},{property:"description",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"}],advanced:[]}}}},{key:"properties",get:function(){return o(o({},p(c(y),"properties",this)),{},{title:{name:"title",type:String,value:"",reflectToAttribute:!1,observer:!1},description:{name:"description",type:String,value:"",reflectToAttribute:!1,observer:!1}})}}],(i=[{key:"render",value:function(){return t.html(s||(s=a(['\n\n<div id="wrap">\n  <div id="title">','</div>\n  <div id="description">',"</div>\n</div>"])),this.title,this.description)}},{key:"tag",value:function(){return"figure-label"}}])&&n(r.prototype,i),f&&n(r,f),y}();customElements.define("figure-label",b),e.FigureLabel=b,Object.defineProperty(e,"__esModule",{value:!0})});
