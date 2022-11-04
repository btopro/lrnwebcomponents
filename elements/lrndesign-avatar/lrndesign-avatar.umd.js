!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit"),require("@lrnwebcomponents/simple-colors/simple-colors.js"),require("@lrnwebcomponents/paper-avatar/paper-avatar.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/simple-colors/simple-colors.js","@lrnwebcomponents/paper-avatar/paper-avatar.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).LrndesignAvatar={},e.lit,e.simpleColors_js)}(this,(function(e,t,r){"use strict";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}function l(e,t){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},l(e,t)}function s(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var o=c(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}function u(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=u(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},f.apply(this,arguments)}function d(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function y(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var b,g,v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(u,e);var r,n,a,s=p(u);function u(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(e=s.call(this)).allowGrey=!1,e.dark=!1,e.twoChars=!1,e.jdenticon=!1,e.label="|",e}return r=u,a=[{key:"styles",get:function(){return[].concat(y(f(c(u),"styles",this)),[t.css(g||(g=d(["\n        :host {\n          display: block;\n          margin: 0;\n          padding: 0;\n        }\n\n        :host([hidden]) {\n          display: none;\n        }\n\n        paper-avatar {\n          border-radius: var(--lrndesign-avatar-border-radius, 50%);\n          max-height: var(--lrndesign-avatar-width, 40px);\n          --paper-avatar-width: var(--lrndesign-avatar-width, 40px);\n          --paper-avatar-color: var(\n            --simple-colors-default-theme-accent-8,\n            #444\n          );\n          --paper-avatar-text-color: var(\n            --simple-colors-default-theme-grey-1,\n            #fff\n          );\n        }\n\n        :host([invert]) paper-avatar {\n          --paper-avatar-color: var(--simple-colors-default-theme-grey-1, #fff);\n          --paper-avatar-text-color: var(\n            --simple-colors-default-theme-accent-8,\n            #444\n          );\n        }\n      "])))])}},{key:"haxProperties",get:function(){return{canScale:!1,canPosition:!1,canEditSource:!0,gizmo:{title:"Avatar",description:"Visualize a user account either with an image, icon, initials, or as abstract art.",icon:"image:collections",color:"yellow",groups:["Media","Image"],handles:[{type:"image",source:"image"}],meta:{author:"ELMS:LN"}},settings:{configure:[{property:"accentColor",title:"Accent Color",description:"Pick an accent color.",inputMethod:"colorpicker"},{property:"dark",title:"Dark",description:"Use dark text (and light background) for avatar.",inputMethod:"boolean"},{property:"icon",title:"Icon",description:"Optional: Pick an icon for avatar.",inputMethod:"iconpicker"},{property:"src",title:"Image Source",description:"Optional: Upload an image for avatar.",inputMethod:"haxupload"},{property:"label",title:"Two-character initials",description:"Label used to create initials or unique Jdenticon.",inputMethod:"textfield"},{property:"twoChars",title:"Two-character initials",description:"When no Jdenticon, image, or icon, use two-character for initials.",inputMethod:"boolean"},{property:"jdenticon",title:"Jdenticon",description:"Optional: Unique icon design based on label.",inputMethod:"boolean"}],advanced:[{property:"allowGrey",title:"Allow Grey",description:"Allows grey if set. Otherwise a color will be assigned",inputMethod:"boolean"}]}}}},{key:"properties",get:function(){return o(o({},f(c(u),"properties",this)),{},{allowGrey:{type:Boolean,attribute:"allow-grey"},icon:{type:String},invert:{type:Boolean,attribute:"invert",reflect:!0},label:{type:String},src:{type:String},twoChars:{type:Boolean,attribute:"two-chars"},color:{type:String},jdenticon:{type:Boolean}})}},{key:"tag",get:function(){return"lrndesign-avatar"}}],(n=[{key:"render",value:function(){return t.html(b||(b=d([' <paper-avatar\n      accent-color="','"\n      ?allow-grey="','"\n      ?dark="','"\n      .label="','"\n      .icon="','"\n      .src="','"\n      ?two-chars="','"\n      ?jdenticon="','"\n    ></paper-avatar>'])),this.accentColor,this.allowGrey,this.dark,this.label||"",this.icon||"",this.src||"",this.twoChars,this.jdenticon)}},{key:"_getAccentColor",value:function(){if(this.colors&&!this.allowGrey&&(!this.accentColor||"grey"===this.accentColor)){var e=(this.color||"").replace("-text","");if(e&&this.colors[e])this.accentColor=e;else{var t=this.label||this.icon,r=t&&t.charCodeAt(0)?t.charCodeAt(0):Math.floor(16*Math.random()),n=Object.keys(this.colors);e=n[r%16+1],this.accentColor=n[r%16+1]||n[Math.floor(Math.random()*this.colors.length)]}}}},{key:"updated",value:function(e){var t=this;f(c(u.prototype),"updated",this)&&f(c(u.prototype),"updated",this).call(this,e),e.forEach((function(e,r){"color"!=r&&"label"!=r&&"icon"!=r||t._getAccentColor()}))}}])&&i(r.prototype,n),a&&i(r,a),Object.defineProperty(r,"prototype",{writable:!1}),u}(r.SimpleColors);customElements.define(v.tag,v),e.LrndesignAvatar=v,Object.defineProperty(e,"__esModule",{value:!0})}));
