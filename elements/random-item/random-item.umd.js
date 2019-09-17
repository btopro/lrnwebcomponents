!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).RandomItem={})}(this,function(t){"use strict";function e(t,e,n,r,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(r,o)}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t,e,n){return(u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&i(o,n.prototype),o}).apply(null,arguments)}function a(t){var e="function"==typeof Map?new Map:void 0;return(a=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return u(t,arguments,o(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),i(r,t)})(t)}function c(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t,e,n){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=o(t)););return t}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}var f=function(t){function n(){var t,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(t=c(this,o(n).call(this))).tag=n.tag,t.template=document.createElement("template"),t.attachShadow({mode:"open"}),e||t.render(),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(n,a(HTMLElement)),r(n,[{key:"html",get:function(){return"\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n".concat(this.dataPoint)}}],[{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Random item",description:"Show a random item from a list of items",icon:"communication:rss-feed",color:"red",groups:["Item"],handles:[],meta:{author:"btopro",owner:"The Pennsylvania State University"}},settings:{quick:[],configure:[{property:"field",title:"Field",description:"Field in the file to show",inputMethod:"textfield",required:!1},{property:"source",title:"Source",description:"URL pointing to a CSV file",inputMethod:"haxupload",required:!0}],advanced:[]}}}},{key:"properties",get:function(){var t={source:{name:"source",type:String},field:{name:"field",type:String}};return s(o(n),"properties",this)&&(t=Object.assign(t,s(o(n),"properties",this))),t}},{key:"tag",get:function(){return"random-item"}}]),r(n,[{key:"connectedCallback",value:function(){window.ShadyCSS&&window.ShadyCSS.styleElement(this)}},{key:"render",value:function(){this.shadowRoot.innerHTML=null,this.template.innerHTML=this.html,window.ShadyCSS&&window.ShadyCSS.prepareTemplate(this.template,this.tag),this.shadowRoot.appendChild(this.template.content.cloneNode(!0))}},{key:"attributeChangedCallback",value:function(t,e,n){"source"===t&&n?(this.source=n,this.sourceChanged(n)):"field"===t&&n&&(this.field=n,this.source&&this.setDataWithRandom())}},{key:"sourceChanged",value:function(){var t,n=(t=regeneratorRuntime.mark(function t(e){var n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e).then(function(t){return t.text()});case 2:n=t.sent,this.items=this.CSVtoArray(n),r=this.items.shift(),this.qKey=r,this.entryPoint=0,this.setDataWithRandom();case 8:case"end":return t.stop()}},t,this)}),function(){var n=this,r=arguments;return new Promise(function(o,i){var u=t.apply(n,r);function a(t){e(u,o,i,a,c,"next",t)}function c(t){e(u,o,i,a,c,"throw",t)}a(void 0)})});return function(t){return n.apply(this,arguments)}}()},{key:"setDataWithRandom",value:function(){for(var t in this.qKey)this.qKey[t]===this.field&&(this.entryPoint=Number(t));var e=Math.floor(Math.random()*this.items.length);this.dataPoint=this.items[e][this.entryPoint],this.render()}},{key:"CSVtoArray",value:function(t){var e,n="",r=[""],o=[r],i=0,u=0,a=!0;for(e in t)'"'===(e=t[e])?(a&&e===n&&(r[i]+=e),a=!a):","===e&&a?e=r[++i]="":"\n"===e&&a?("\r"===n&&(r[i]=r[i].slice(0,-1)),r=o[++u]=[e=""],i=0):r[i]+=e,n=e;return o}}],[{key:"observedAttributes",get:function(){return["source","field"]}}]),n}();window.customElements.define(f.tag,f),t.RandomItem=f,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=random-item.umd.js.map
