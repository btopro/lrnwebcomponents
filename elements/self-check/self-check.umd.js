!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@lrnwebcomponents/simple-tooltip/simple-tooltip.js"),require("@lrnwebcomponents/user-action/user-action.js"),require("lit"),require("@lrnwebcomponents/simple-colors/simple-colors.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js"),require("@lrnwebcomponents/lazy-image-helpers/lazy-image-helpers.js"),require("@lrnwebcomponents/i18n-manager/lib/I18NMixin.js"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-button.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/simple-tooltip/simple-tooltip.js","@lrnwebcomponents/user-action/user-action.js","lit","@lrnwebcomponents/simple-colors/simple-colors.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js","@lrnwebcomponents/lazy-image-helpers/lazy-image-helpers.js","@lrnwebcomponents/i18n-manager/lib/I18NMixin.js","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/simple-icon/lib/simple-icon-button.js"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).SelfCheck={},null,null,e.lit,e.simpleColors_js,e.schemaBehaviors_js,e.lazyImageHelpers_js,e.I18NMixin_js)}(this,(function(e,n,t,r,i,o,l,s){"use strict";function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){u(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function d(e,n){return d=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},d(e,n)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,n){if(n&&("object"==typeof n||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function b(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=f(e);if(n){var i=f(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return m(this,t)}}function y(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=f(e)););return e}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var r=y(e,n);if(r){var i=Object.getOwnPropertyDescriptor(r,n);return i.get?i.get.call(arguments.length<3?e:t):i.value}},v.apply(this,arguments)}function g(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function w(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return x(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return x(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var k,j,O,_=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&d(e,n)}(l,e);var n,t,i,o=b(l);function l(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,l),(e=o.call(this)).correct=!1,e.alt="",e.image="",e.question="",e.accentColor="blue",e.title="Self-Check",e.t={revealAnswer:"Reveal Answer",close:"Close",moreInformation:"More information"},e.registerLocalization({context:h(e),basePath:"undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("self-check.umd.js",document.baseURI).href,locales:["he","ja","es"]}),e}return n=l,i=[{key:"styles",get:function(){return[].concat(w(v(f(l),"styles",this)),[r.css(O||(O=g(['\n        :host {\n          display: block;\n          margin: 15px 0;\n        }\n        :host([hidden]),\n        *[hidden] {\n          display: none !important;\n        }\n\n        div.card {\n          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);\n          width: 100%;\n          color: var(\n            --self-check-question-text,\n            var(--simple-colors-default-theme-grey-12, #000)\n          );\n          background-color: var(\n            --self-check-question-color,\n            var(--simple-colors-default-theme-grey-1, #fff)\n          );\n          overflow: hidden;\n        }\n\n        simple-icon-button {\n          --simple-icon-width: 24px;\n          --simple-icon-height: 24px;\n          position: relative;\n          left: 10px;\n          bottom: -10px;\n          padding: 2px;\n        }\n\n        .check_button {\n          display: flex;\n          justify-content: flex-end;\n        }\n        .close_button {\n          display: flex;\n          justify-content: flex-end;\n        }\n\n        simple-icon#questionmark {\n          --simple-icon-width: 35px;\n          --simple-icon-height: 35px;\n          padding: 5px;\n          color: var(\n            --self-check-heading-text,\n            var(--simple-colors-default-theme-grey-1, #fff)\n          );\n        }\n\n        .heading {\n          text-transform: uppercase;\n          font-size: 22px;\n          margin: 10px;\n          color: var(\n            --self-check-heading-text,\n            var(--simple-colors-default-theme-grey-1, #fff)\n          );\n        }\n\n        #header_wrap {\n          color: var(\n            --self-check-heading-text,\n            var(--simple-colors-default-theme-grey-1, #fff)\n          );\n          background-color: var(\n            --self-check-heading-color,\n            var(--simple-colors-default-theme-accent-8, #444)\n          );\n          display: flex;\n          align-items: center;\n          width: 100%;\n          margin: -20px 0 0;\n        }\n\n        #question_wrap {\n          color: var(\n            --self-check-question-text,\n            var(--simple-colors-default-theme-grey-12, #000)\n          );\n          background-color: var(\n            --self-check-question-color,\n            var(--simple-colors-default-theme-grey-1, #fff)\n          );\n          position: relative;\n        }\n\n        .question {\n          font-size: 16px;\n          padding: 15px 15px;\n        }\n\n        :host([correct]) .question {\n          display: none;\n        }\n\n        #answer_wrap {\n          visibility: hidden;\n          opacity: 0;\n          color: var(\n            --self-check-answer-text,\n            var(--simple-colors-default-theme-grey-1, #fff)\n          );\n          background-color: var(\n            --self-check-answer-color,\n            var(--simple-colors-default-theme-light-green-11, #00762e)\n          );\n          border-top: 2px solid\n            var(\n              --self-check-answer-text,\n              var(--simple-colors-default-theme-grey-1, #fff)\n            );\n          width: 100%;\n          top: 0;\n          transition: all 0.2s ease;\n          left: calc(100%);\n          position: absolute;\n        }\n\n        :host([correct]) #answer_wrap {\n          visibility: visible;\n          opacity: 1;\n          position: relative;\n          left: 0;\n        }\n\n        .answer {\n          font-size: 16px;\n          padding: 15px;\n          line-height: 19.2px;\n        }\n\n        #quote_start {\n          display: inline-flex;\n          transform: rotateY(180deg);\n        }\n\n        #quote_end {\n          display: inline-flex;\n        }\n\n        .triangle {\n          width: 0;\n          height: 0;\n          border-left: 20px solid transparent;\n          border-right: 20px solid transparent;\n          border-bottom: 20px solid\n            var(\n              --self-check-heading-color,\n              var(--simple-colors-default-theme-accent-8, #444)\n            );\n          position: relative;\n          top: -20px;\n          left: -1px;\n        }\n\n        .more_info {\n          display: inline;\n        }\n\n        .more_info a {\n          color: var(\n            --self-check-answer-text,\n            var(--simple-colors-default-theme-grey-1, #fff)\n          );\n        }\n\n        .more_info a:hover {\n          text-decoration: none;\n        }\n        .image-wrap {\n          max-height: 400px;\n          overflow: hidden;\n        }\n        ::slotted([slot="heading"]) {\n          margin: 0;\n        }\n        ::slotted(p:first-child) {\n          margin-top: 0;\n        }\n        ::slotted(p:last-child) {\n          margin-top: 0;\n        }\n      '])))])}},{key:"tag",get:function(){return"self-check"}},{key:"properties",get:function(){return a(a({},v(f(l),"properties",this)),{},{title:{type:String},question:{type:String},image:{type:String,reflect:!0},alt:{type:String,reflect:!0},describedBy:{type:String,attribute:"described-by"},link:{type:String},correct:{type:Boolean,reflect:!0}})}},{key:"haxProperties",get:function(){return new URL("./lib/".concat(this.tag,".haxProperties.json"),"undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("self-check.umd.js",document.baseURI).href).href}}],(t=[{key:"render",value:function(){return r.html(k||(k=g(['\n      <div class="card">\n        <div class="image-wrap">\n          ','\n          <img\n            src="','"\n            alt="','"\n            aria-describedby="','"\n            loading="lazy"\n          />\n        </div>\n        <div class="triangle"></div>\n        <div id="header_wrap">\n          <simple-icon\n            id="questionmark"\n            icon="icons:help"\n            ?dark="','"\n            contrast="4"\n          ></simple-icon>\n          <div class="heading" id="title">\n            <slot name="heading">','</slot>\n          </div>\n        </div>\n        <div id="question_wrap">\n          <div\n            class="question"\n            aria-hidden="','"\n          >\n            <slot name="question"></slot>\n            <div class="check_button">\n              <simple-icon-button\n                controls="answer_wrap"\n                aria-label="','"\n                id="checkBtn"\n                class="check-btn"\n                icon="icons:check-circle"\n                ?dark="','"\n                @click="','"\n              ></simple-icon-button>\n              <simple-tooltip aria-hidden="true" for="checkBtn" position="left">\n                ','\n              </simple-tooltip>\n            </div>\n          </div>\n          <div\n            id="answer_wrap"\n            aria-hidden="','"\n            aria-live="polite"\n          >\n            <div class="answer">\n              <user-action track="visibility">\n                <slot></slot>\n              </user-action>\n              ','\n              <div class="close_button">\n                <simple-icon-button\n                  aria-label="','"\n                  id="closeBtn"\n                  ?dark="','"\n                  icon="icons:close"\n                  @click="','"\n                >\n                </simple-icon-button>\n                <simple-tooltip\n                  aria-hidden="true"\n                  for="closeBtn"\n                  position="left"\n                >\n                  ',"\n                </simple-tooltip>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    "])),this.renderSVGLoader(),this.image,this.alt,this.describedBy||"",!this.dark,this.title,this.correct?"true":"false",this.t.revealAnswer,this.dark,this.openAnswer,this.t.revealAnswer,this.correct?"false":"true",this.link?r.html(j||(j=g(['\n                    <div class="more_info">\n                      <user-action track="click" every="every"\n                        ><a href="','" target="_blank" rel="noopener"\n                          >',"...</a\n                        ></user-action\n                      >\n                    </div>\n                  "])),this.link,this.t.moreInformation):"",this.t.close,!this.dark,this.openAnswer,this.t.close)}},{key:"updated",value:function(e){var n=this;v(f(l.prototype),"updated",this)&&v(f(l.prototype),"updated",this).call(this,e),e.forEach((function(e,t){"elementVisible"==t&&n.elementVisible}))}},{key:"haxHooks",value:function(){return{activeElementChanged:"haxactiveElementChanged"}}},{key:"haxactiveElementChanged",value:function(e,n){var t=this.shadowRoot.querySelector("#title");return n?t.setAttribute("contenteditable",!0):(t.removeAttribute("contenteditable"),this.title=t.innerText),!1}},{key:"openAnswer",value:function(e){this.correct=!this.correct}}])&&p(n.prototype,t),i&&p(n,i),l}(s.I18NMixin(l.lazyImageLoader(o.SchemaBehaviors(i.SimpleColors))));window.customElements.define(_.tag,_),e.SelfCheck=_,Object.defineProperty(e,"__esModule",{value:!0})}));
