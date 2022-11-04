!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@lrnwebcomponents/simple-icon/lib/simple-icon-button.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/relative-heading/relative-heading.js"),require("lit")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/simple-icon/lib/simple-icon-button.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/relative-heading/relative-heading.js","lit"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).TopicHeading={},null,null,null,null,e.lit)}(this,(function(e,t,n,i,r,o){"use strict";function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function a(e,t){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},a(e,t)}function f(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=u(e);if(t){var r=u(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return f(this,n)}}function b(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var i=b(e,t);if(i){var r=Object.getOwnPropertyDescriptor(i,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},y.apply(this,arguments)}function h(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var g,m,O,v,j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(c,e);var t,n,i,r=d(c);function c(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(e=r.call(this)).icon="",e.title="",e}return t=c,i=[{key:"styles",get:function(){return[o.css(v||(v=h(["\n        :host {\n          display: block;\n        }\n\n        :host([hidden]) {\n          display: none;\n        }\n\n        relative-heading {\n          color: var(--topic-heading-text-color);\n          display: inline-flex;\n        }\n\n        simple-icon {\n          color: var(--topic-heading-icon-color);\n          display: inline-flex;\n          font-size: 16px;\n          --simple-icon-height: 32px;\n          --simple-icon-width: 32px;\n          padding: 16px;\n          line-height: 16px;\n          vertical-align: bottom;\n        }\n      "])))]}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Topic heading",description:"Semantic and visual meaning behind a heading break",icon:"icons:android",color:"green",groups:["Heading"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"btopro",owner:"The Pennsylvania State University"}},settings:{configure:[{property:"icon",description:"",inputMethod:"iconpicker",required:!1,icon:"icons:code"},{property:"title",description:"",inputMethod:"textfield",required:!1,icon:"icons:heading"}],advanced:[]}}}},{key:"properties",get:function(){return l(l({},y(u(c),"properties",this)),{},{icon:{type:String},title:{type:String}})}},{key:"tag",get:function(){return"topic-heading"}}],(n=[{key:"render",value:function(){return o.html(g||(g=h([" ","\n    ",""])),this.icon?o.html(m||(m=h([' <simple-icon icon="','"></simple-icon> '])),this.icon):"",this.title?o.html(O||(O=h(['\n          <relative-heading text="','"\n            >',"</relative-heading\n          >\n        "])),this.title,this.title):"")}},{key:"firstUpdated",value:function(){this.icon}}])&&s(t.prototype,n),i&&s(t,i),Object.defineProperty(t,"prototype",{writable:!1}),c}(o.LitElement);customElements.define(j.tag,j),e.TopicHeading=j,Object.defineProperty(e,"__esModule",{value:!0})}));
