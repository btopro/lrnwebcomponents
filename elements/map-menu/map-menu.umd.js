!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("@polymer/polymer/polymer-legacy.js"),require("@polymer/iron-icons/iron-icons.js"),require("@polymer/iron-icon/iron-icon.js"),require("@polymer/paper-button/paper-button.js"),require("@lrnwebcomponents/lrndesign-avatar/lrndesign-avatar.js"),require("@polymer/iron-collapse/iron-collapse.js"),require("@polymer/iron-behaviors/iron-button-state.js"),require("@lrnwebcomponents/smooth-scroll/smooth-scroll.js")):"function"==typeof define&&define.amd?define(["@polymer/polymer/polymer-legacy.js","@polymer/iron-icons/iron-icons.js","@polymer/iron-icon/iron-icon.js","@polymer/paper-button/paper-button.js","@lrnwebcomponents/lrndesign-avatar/lrndesign-avatar.js","@polymer/iron-collapse/iron-collapse.js","@polymer/iron-behaviors/iron-button-state.js","@lrnwebcomponents/smooth-scroll/smooth-scroll.js"],e):e(n.polymerLegacy_js)}(this,function(n){"use strict";function e(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function t(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var i;function a(){var n=t(['\n    <style>\n      :host {\n        display: block;\n        --map-menu-item-height: 16px;\n      }\n\n      :host([active]) {\n        background: var(--map-menu-active-color);\n      }\n\n      iron-icon {\n        --iron-icon-height: var(--map-menu-item-height);\n      }\n\n      #title {\n        font-size: .9em;\n        text-transform: none;\n      }\n    </style>\n      <paper-button id="wrapper" href$="[[url]]" role="link" noink="" on-tap="_click">\n        <template is="dom-if" if="[[__hasIcon(icon)]]">\n          <iron-icon icon="[[icon]]"></iron-icon>\n        </template>\n        <span id="title">[[title]]</span>\n      </paper-button>\n'],['\n    <style>\n      :host {\n        display: block;\n        --map-menu-item-height: 16px;\n      }\n\n      :host([active]) {\n        background: var(--map-menu-active-color);\n      }\n\n      iron-icon {\n        --iron-icon-height: var(--map-menu-item-height);\n      }\n\n      #title {\n        font-size: .9em;\n        text-transform: none;\n      }\n    </style>\n      <paper-button id="wrapper" href\\$="[[url]]" role="link" noink="" on-tap="_click">\n        <template is="dom-if" if="[[__hasIcon(icon)]]">\n          <iron-icon icon="[[icon]]"></iron-icon>\n        </template>\n        <span id="title">[[title]]</span>\n      </paper-button>\n']);return a=function(){return n},n}function o(){var n=t(['\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host([active]) {\n        background: var(--map-menu-active-color);\n      }\n\n      #container {\n        display: flex;\n        align-items: center;\n      }\n\n      #avatarLabel {\n        margin-right: 10px;\n      }\n\n      #center {\n        flex: 1 1 auto;\n      }\n\n      lrndesign-avatar {\n        display: inline-block;\n        background: #fff;\n        border-radius: 50%;\n        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);\n        padding: 2px;\n        position: relative;\n        margin-top: -2px;\n      }\n\n      lrndesign-avatar ::shadow>* {\n        transform: translateY(2px);\n      }\n\n      #link {\n        display: flex;\n        justify-content: flex-start;\n        align-items: flex-start;\n        flex-direction: column;\n      }\n\n      #title {\n        font-size: 1.0em;\n      }\n\n      #right iron-icon {\n        color: gray;\n      }\n\n      /* @todo this is a hack */\n      #icon iron-icon {\n        --iron-icon-height: 16px;\n        transform: translateX(10px);\n      }\n    </style>\n    <div id="container">\n      <template is="dom-if" if="[[avatarLabel]]">\n        <div id="avatarLabel">\n          <lrndesign-avatar label="[[avatarLabel]]"></lrndesign-avatar>\n        </div>\n      </template>\n      <template is="dom-if" if="[[icon]]">\n        <div id="icon">\n          <iron-icon icon="[[icon]]"></iron-icon>\n        </div>\n      </template>\n      <div id="center">\n        <paper-button id="title" noink="" role$="[[__titleRole()]]" on-tap="__linkClickHandler">\n          <div id="label">[[label]]</div>\n          <div id="title">[[title]]</div>\n        </paper-button>\n      </div>\n      <div id="right">\n        <template is="dom-if" if="[[!opened]]">\n          <iron-icon id="toggle" icon="arrow-drop-down" aria-role="button" aria-label="expand menu" tabindex="0"></iron-icon>\n        </template>\n        <template is="dom-if" if="[[opened]]">\n          <iron-icon id="toggle" icon="arrow-drop-up" aria-role="button" aria-label="collapse menu" tabindex="0"></iron-icon>\n        </template>\n      </div>\n    </div>\n'],['\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host([active]) {\n        background: var(--map-menu-active-color);\n      }\n\n      #container {\n        display: flex;\n        align-items: center;\n      }\n\n      #avatarLabel {\n        margin-right: 10px;\n      }\n\n      #center {\n        flex: 1 1 auto;\n      }\n\n      lrndesign-avatar {\n        display: inline-block;\n        background: #fff;\n        border-radius: 50%;\n        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);\n        padding: 2px;\n        position: relative;\n        margin-top: -2px;\n      }\n\n      lrndesign-avatar ::shadow>* {\n        transform: translateY(2px);\n      }\n\n      #link {\n        display: flex;\n        justify-content: flex-start;\n        align-items: flex-start;\n        flex-direction: column;\n      }\n\n      #title {\n        font-size: 1.0em;\n      }\n\n      #right iron-icon {\n        color: gray;\n      }\n\n      /* @todo this is a hack */\n      #icon iron-icon {\n        --iron-icon-height: 16px;\n        transform: translateX(10px);\n      }\n    </style>\n    <div id="container">\n      <template is="dom-if" if="[[avatarLabel]]">\n        <div id="avatarLabel">\n          <lrndesign-avatar label="[[avatarLabel]]"></lrndesign-avatar>\n        </div>\n      </template>\n      <template is="dom-if" if="[[icon]]">\n        <div id="icon">\n          <iron-icon icon="[[icon]]"></iron-icon>\n        </div>\n      </template>\n      <div id="center">\n        <paper-button id="title" noink="" role\\$="[[__titleRole()]]" on-tap="__linkClickHandler">\n          <div id="label">[[label]]</div>\n          <div id="title">[[title]]</div>\n        </paper-button>\n      </div>\n      <div id="right">\n        <template is="dom-if" if="[[!opened]]">\n          <iron-icon id="toggle" icon="arrow-drop-down" aria-role="button" aria-label="expand menu" tabindex="0"></iron-icon>\n        </template>\n        <template is="dom-if" if="[[opened]]">\n          <iron-icon id="toggle" icon="arrow-drop-up" aria-role="button" aria-label="collapse menu" tabindex="0"></iron-icon>\n        </template>\n      </div>\n    </div>\n']);return o=function(){return n},n}function r(){var n=t(['\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host([collapsable])>map-menu-header {\n        cursor: pointer;\n        display: block;\n      }\n\n      #container {\n        margin-left: 1em;\n      }\n\n      #container ::slotted(map-menu-item) {\n        margin-top: .4em;\n      }\n    </style>\n    <map-menu-header avatar-label="[[avatarLabel]]" id="[[id]]" title="[[title]]" label="[[label]]" opened="[[opened]]" url="[[url]]" icon="[[icon]]"></map-menu-header>\n    <iron-collapse id="container">\n      <slot id="slot"></slot>\n    </iron-collapse>\n']);return r=function(){return n},n}function l(){var n=t(["\n    <style>\n      :host {\n        display: block;\n      }\n      #container {\n        padding: 1em 2em;\n      }\n      :host > ::shadow map-menu-submenu + map-menu-submenu {\n        margin-top: 1em;\n      }\n    </style>\n    <slot></slot>\n"]);return l=function(){return n},n}function c(){var n=t(['\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n\n    <template id="domRepeat" is="dom-repeat" items="[[items]]" as="item">\n      <template is="dom-if" if="[[__hasChildren(item)]]">\n        <map-menu-submenu title="[[item.title]]" id="[[item.id]]" url="[[item.url]]" icon="[[item.metadata.icon]]" open="[[item.active]]" avatar-label="[[item.avatarLabel]]">\n          <map-menu-builder items="[[item.children]]"></map-menu-builder>\n        </map-menu-submenu>\n      </template>\n      <template is="dom-if" if="[[!__hasChildren(item)]]">\n        <map-menu-item title="[[item.title]]" id="[[item.id]]" url="[[item.url]]" icon="[[item.metadata.icon]]" active-path="[[activePath]]"></map-menu-item>\n      </template>\n    </template>\n']);return c=function(){return n},n}function d(){var n=t(['\n    <style>\n      :host {\n        --map-menu-active-color: rgba(0,0,0, .1);\n        display: block;\n        overflow-y: scroll;\n        position: relative;\n        height: 100%;\n      }\n\n      #activeIndicator {\n        background: var(--map-menu-active-color);\n        transition: all .3s ease-in-out;\n        position: absolute\n      }\n\n      map-menu-container {\n        padding: 2em;\n        @apply(--map-menu-container)\n      }\n\n      /* turn default active color if indicator is on */\n      :host([active-indicator]) map-menu-builder { \n        --map-menu-active-color: transparent;\n      }\n    </style>\n    <div id="itemslist">\n      <map-menu-container>\n        <div id="activeIndicator"></div>\n        <map-menu-builder id="builder" items="[[items]]"></map-menu-builder>\n      </map-menu-container>\n    </div>\n    <smooth-scroll id="smoothScroll"></smooth-scroll>\n']);return d=function(){return n},n}n.Polymer({_template:n.html(a()),is:"map-menu-item",properties:(i={icon:{type:String,value:""},title:{type:String,value:""},url:{type:String,value:""}},e(i,"icon",{type:String}),e(i,"id",{type:String,reflectToAttribute:!0}),e(i,"active",{type:Boolean,value:!1,observer:"__activeChanged"}),i),_click:function(){this.fire("link-clicked",{id:this.id})},attached:function(){this.fire("child-attached",{id:this.id})},__activeChanged:function(n,e){n!==e&&!0===n&&this.fire("active-item",{id:this.id})},__hasIcon:function(n){return!(!n&&""!==n)}}),n.Polymer({_template:n.html(o()),is:"map-menu-header",properties:{title:{type:String},label:{type:String},avatarLabel:{type:String,value:""},opened:{type:Boolean},url:{type:String,value:""},id:{type:String,reflectToAttribute:!0},icon:{type:String},active:{type:Boolean,value:!1,observer:"__activeChanged"}},listeners:{tap:"__tap",keypress:"__keypress"},__titleRole:function(){return!!this.url&&"link"},__linkClickHandler:function(n){this.id&&this.fire("link-clicked",{id:this.id})},attached:function(){this.fire("child-attached",{id:this.id})},__activeChanged:function(n,e){n!==e&&!0===n&&this.fire("active-item",{id:this.id})},__tap:function(n){this.__toggleEventHandler(n)},__keypress:function(n){"Enter"===n.code&&this.__toggleEventHandler(n)},__toggleEventHandler:function(n){void 0!==n.target&&void 0!==n.target.id&&"toggle"===n.target.id&&this.fire("toggle-header")}}),n.Polymer({_template:n.html(r()),is:"map-menu-submenu",properties:{id:{type:String},title:{type:String},avatarLabel:{type:String},label:{type:String},icon:{type:String},opened:{type:Boolean,value:!1},collapsable:{type:Boolean,value:!0},expandChildren:{type:Boolean,value:!1}},observers:["_openChanged(opened)"],listeners:{"child-deactivated":"__childDeactivated","child-activated":"__childActivated","active-item":"__activeChanged","toggle-header":"__toggleHeader","link-clicked":"_headerClickHandler"},_openChanged:function(n){var e=this.$.container;n&&e.show(),n||e.hide()},_headerClickHandler:function(n){this.opened||(this.opened=!this.opened)},__toggleHeader:function(n){n.stopPropagation(),this.opened=!this.opened,this.fire("toggle-updated")},__activeChanged:function(n){this.opened=!0}}),n.Polymer({_template:n.html(l()),is:"map-menu-container",properties:{}}),n.Polymer({_template:n.html(c()),is:"map-menu-builder",properties:{items:{type:Array,value:[]}},__hasChildren:function(n){return n.children.length>0},_hasActiveChildren:function(){}}),n.Polymer({_template:n.html(d()),is:"map-menu",properties:{title:{type:String,value:"Content Outline"},data:{type:Array,value:null},items:{type:Array,value:null,notify:!0},selected:{type:String,notify:!0,observer:"__selectedChanged"},autoScroll:{type:Boolean,value:!1},activeIndicator:{type:Boolean,value:!1}},observers:["_dataChanged(data)"],listeners:{"link-clicked":"__linkClickedHandler","child-attached":"__childAttached","toggle-updated":"__toggleUpdated"},__selectedChanged:function(n,e){n!==e&&this.refreshActiveChildren(n)},refreshActiveChildren:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,t=this.querySelector("[active]");if(n&&""!==n){var i=this.querySelector("#".concat(n));i&&(i.setAttribute("active",!0),this.activeIndicator&&this.__updateActiveIndicator(i,e),this.autoScroll&&this.$.smoothScroll.scroll(i,{duration:300,scrollElement:this}))}t&&t.removeAttribute("active")},setData:function(n){this.set("data",[]),this.set("data",n)},_dataChanged:function(n){var e=this,t=[];n&&(n.forEach(function(n){n.parent||t.push(n)}),t.forEach(function(t,i){e._setChildren(t,n)}),this.set("items",[]),this.set("items",t))},_setChildren:function(n,e){var t=this,i=e.filter(function(e){return n.id===e.parent});n.children=i,n.children.length>0&&n.children.forEach(function(n){t._setChildren(n,e)})},__hasChildren:function(n){return n.children.length>0},__linkClickedHandler:function(n){this.selected=n.detail.id,this.fire("selected",n.detail.id)},__childAttached:function(n){n.detail.id===this.selected&&this.refreshActiveChildren(this.selected)},__toggleUpdated:function(n){this.refreshActiveChildren(this.selected,300)},__isInViewport:function(n){var e=this.__getScrollParent(n);if(!e)return!1;var t=n.offsetTop,i=t+n.offsetHeight,a=e.offsetTop,o=a+e.offsetHeight;return i>a&&t<o},__getScrollParent:function(n){return null==n?null:n.scrollHeight>n.clientHeight?n:this.__getScrollParent(n.parentNode)},__updateActiveIndicator:function(n){var e=this,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;setTimeout(function(){var i=e.$.activeIndicator,a=e.__parentsHidden(n),o=n.offsetLeft,r=(n.offsetBottom,n.offsetTop),l=n.offsetWidth,c=a?0:n.offsetHeight;t=c>0?t:10,i.setAttribute("style","width:".concat(l,"px;height:").concat(c,"px;top:").concat(r,"px;left:").concat(o,"px"))},t)},__parentsHidden:function(n){var e=n.parentNode;return null==e?null:"MAP-MENU-SUBMENU"===e.tagName&&!e.opened||"MAP-MENU"!==e.tagName&&this.__parentsHidden(e)}})});
//# sourceMappingURL=map-menu.umd.js.map
