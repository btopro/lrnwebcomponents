!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@lrnwebcomponents/simple-colors/simple-colors.js"),require("lit"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/simple-colors/simple-colors.js","lit","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).PlaceHolder={},e.simpleColors_js,e.lit)}(this,(function(e,t,r){"use strict";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return s(e)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=a(e);if(t){var o=a(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return u(this,r)}}function d(e,t,r){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=a(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function f(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function y(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var h,g,v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(m,e);var t,n,c,u=p(m);function m(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m),(e=u.call(this)).text="",e.type="text",e.dragOver=!1,e.directions="Double click or drag and drop file to replace",e.addEventListener("dragover",(function(e){this.dragOver=!0,e.preventDefault(),e.stopPropagation(),this.classList.add("dragover")})),e.addEventListener("dragleave",(function(e){this.dragOver=!1,e.preventDefault(),e.stopPropagation(),this.classList.remove("dragover")})),e.addEventListener("drop",(function(e){this.dragOver=!1,e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),this.classList.remove("dragover");try{"file"===e.dataTransfer.items[0].kind&&(e.placeHolderElement=this,this.dispatchEvent(new CustomEvent("place-holder-file-drop",{bubbles:!0,cancelable:!0,composed:!0,detail:e})))}catch(e){}})),e.addEventListener("dblclick",e.fireReplaceEvent.bind(s(e))),e}return t=m,c=[{key:"styles",get:function(){return[].concat(y(d(a(m),"styles",this)),[r.css(g||(g=f(["\n        :host {\n          display: block;\n          border: none;\n          transition: 0.2s all linear;\n        }\n        :host([drag-over]) {\n          border: var(--place-holder-drag-over-border, 4px dashed #2196f3);\n        }\n        .wrapper {\n          text-align: center;\n          padding: 16px;\n          color: var(--simple-colors-default-theme-accent-12, #222222);\n          background-color: var(--simple-colors-default-theme-accent-1, #eeeeee);\n        }\n        simple-icon {\n          margin: 0 auto;\n          --simple-icon-width: 50%;\n          --simple-icon-height: 50%;\n          display: block;\n        }\n        .text {\n          line-height: 24px;\n          font-size: 24px;\n        }\n        .directions {\n          line-height: 16px;\n          font-size: 16px;\n          font-style: italic;\n        }\n      "])))])}},{key:"tag",get:function(){return"place-holder"}},{key:"properties",get:function(){return o(o({},d(a(m),"properties",this)),{},{iconFromType:{type:String},text:{type:String},directions:{type:String},calcText:{type:String},type:{type:String},dragOver:{type:Boolean,reflect:!0,attribute:"drag-over"}})}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Placeholder",description:"A place holder that can be converted into the media type that's been selected",icon:"hax:placeholder-image",color:"grey",groups:["Placeholder","Content"],handles:[],meta:{author:"ELMS:LN"}},settings:{configure:[{property:"type",title:"Type",description:"Type of gizmo that this accepts for replacement.",inputMethod:"select",options:{text:"Text / content",document:"Document / file",audio:"Audio",video:"Video",image:"Image",math:"Math"}},{property:"text",title:"Text",description:"Identify the place holder desired in greater detail",inputMethod:"textfield"},{property:"accentColor",title:"Accent color",description:"Useful if used for communicating with team members",inputMethod:"colorpicker"},{property:"dark",title:"Invert colors",description:"Useful if used for communicating with team members",inputMethod:"boolean"}],advanced:[]},saveOptions:{unsetAttributes:["icon-from-type","calc-text","colors"],wipeSlot:!0}}}}],(n=[{key:"render",value:function(){return r.html(h||(h=f(['\n      <div class="wrapper">\n        <simple-icon ?dark="','" icon="','" accent-color="','"></simple-icon>\n        <div class="text">','</div>\n        <div class="directions">',"</div>\n      </div>\n    "])),this.dark,this.iconFromType,this.accentColor,this.calcText,this.directions)}},{key:"updated",value:function(e){var t=this;d(a(m.prototype),"updated",this)&&d(a(m.prototype),"updated",this).call(this,e),e.forEach((function(e,r){["type"].includes(r)&&(t.accentColor=t._getColorFromType(t.type)),["type","dragOver"].includes(r)&&(t.iconFromType=t._getIconFromType(t.type,t.dragOver)),["text","type","dragOver"].includes(r)&&(t.calcText=t._getCalcText(t.text,t.type,t.dragOver))}))}},{key:"fireReplaceEvent",value:function(e){this.dispatchEvent(new CustomEvent("place-holder-replace",{bubbles:!0,cancelable:!0,composed:!0,detail:this.type}))}},{key:"_getCalcText",value:function(e,t,r){return r?"Drop file to upload":""===e?"Placeholder for "+t:e}},{key:"_getColorFromType",value:function(e){switch(e){case"document":return"green";case"audio":return"purple";case"video":return"red";case"image":return"orange";case"math":return"light-blue"}return"indigo"}},{key:"_getIconFromType",value:function(e,t){if(t)return"icons:file-upload";switch(e){case"document":return"editor:insert-drive-file";case"audio":return"av:music-video";case"video":return"notification:ondemand-video";case"image":return"image:crop-original";case"math":return"editor:functions";case"text":default:return"editor:format-align-left"}}}])&&i(t.prototype,n),c&&i(t,c),m}(t.SimpleColors);window.customElements.define(v.tag,v),e.PlaceHolder=v,Object.defineProperty(e,"__esModule",{value:!0})}));
