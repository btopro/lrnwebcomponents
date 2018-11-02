define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js",
  "./node_modules/@lrnwebcomponents/schema-behaviors/schema-behaviors.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_75949070dea911e8aa9c51fb58ab197e() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style is="custom-style" include="simple-colors">\n      :host {\n        display: block;\n      }\n      @-webkit-keyframes simple-animate {\n        0% {\n          opacity: 0;\n        }\n\n        100% {\n          opacity: 1;\n        }\n      }\n\n      @keyframes simple-animate {\n        0% {\n          opacity: 0;\n        }\n\n        100% {\n          opacity: 1;\n        }\n      }\n      .hero {\n          margin-bottom: 21px;\n      }\n      .hero-img {\n          display: block;\n          position: absolute;\n          width: 100%;\n          opacity: 1;\n          -webkit-animation: simple-animate 1s ease;\n          animation: simple-animate 1s ease;\n      }\n\n      .hero-img {\n          -webkit-animation: simple-animate 1s ease;\n          animation: simple-animate 1s ease;\n      }\n\n      .credit {\n          color: #8a959e;\n          font-family: \'Gotham SSm A\',\'Gotham SSm B\',\'Arial\',\'Verdana\',\'sans-serif\';\n          font-weight: 400;\n          font-size: 9px;\n          line-height: 11px;\n          margin: 0;\n          text-align: right;\n      }\n\n      .credit--full {\n          margin: 3px 20px 0;\n      }\n\n      .caption {\n          font-family: museoSlab-500,\'Arial Narrow\',\'Arial\',\'Helvetica\',\'sans-serif\';\n          font-size: 15px;\n          line-height: 21px;\n          color: #666666;\n          font-style: normal;\n          margin: 0;\n          float: none;\n          display: block;\n          margin-top: 6px;\n      }\n\n      .trigger {\n          background-color: #eeeeee;\n          padding: 0 0 56.25%;\n          position: relative;\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          appearance: none;\n          display: block;\n          margin: 0;\n          border: none;\n          width: 100%;\n      }\n\n      .trigger:hover {\n          cursor: pointer;\n      }\n\n      .trigger:focus {\n          outline: none;\n      }\n\n      .hero--full {\n          -webkit-animation: animation-lm3h86 1s ease;\n          animation: animation-lm3h86 1s ease;\n          margin-top: 90px;\n          margin-bottom: 21px;\n      }\n\n      @media screen and (min-width: 581px) {\n          .hero--full {\n              position:relative;\n              height: 320px;\n          }\n      }\n\n      @media screen and (min-width: 769px) {\n          .hero--full {\n              height:362px;\n          }\n      }\n\n      @media screen and (min-width: 1024px) {\n          .hero--full {\n              height:510px;\n          }\n      }\n\n      .full-img {\n          display: block;\n          width: 100%;\n      }\n\n      @media screen and (min-width: 581px) {\n          .full-img {\n              position:absolute;\n              top: 50%;\n              -webkit-transform: translateY(-50%);\n              -ms-transform: translateY(-50%);\n              transform: translateY(-50%);\n          }\n      }\n\n      .hero_container-full {\n          display: block;\n          position: relative;\n          overflow: hidden;\n      }\n\n      @media screen and (min-width: 581px) {\n          .hero_container-full {\n              height:320px;\n          }\n      }\n\n      @media screen and (min-width: 769px) {\n          .hero_container-full {\n              height:362px;\n          }\n      }\n\n      @media screen and (min-width: 1024px) {\n          .hero_container-full {\n              height:510px;\n          }\n      }\n    </style>\n    <div class="hero">\n      <div class="modal-overlay" style="display: none;">\n        <div class="modal-content">\n          <div class="modal-wrapper">\n            <paper-icon-button id="closearea" icon="icons:fullscreen-exit" class="close-modal modal--close"></paper-icon-button>\n            <paper-tooltip for="closearea" position="bottom" offset="14">\n              close modal\n            </paper-tooltip>                        \n            <div class="content">\n              <img src$="[[src]]" alt$="[[alt]]"></div>\n            <div class="meta">\n              <div class="credit">[[credit]]</div>\n              <div class="caption">[[caption]]</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="trigger modal">\n        <img class="simple-img" src$="[[src]]" srcset="https://media.edutopia.org/styles/responsive_200px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 200w,\n                           https://media.edutopia.org/styles/responsive_250px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 250w,\n                           https://media.edutopia.org/styles/responsive_300px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 300w,\n                           https://media.edutopia.org/styles/responsive_310px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 310w,\n                           https://media.edutopia.org/styles/responsive_350px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 350w,\n                           https://media.edutopia.org/styles/responsive_450px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 450w,\n                           https://media.edutopia.org/styles/responsive_500px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 500w,\n                           https://media.edutopia.org/styles/responsive_550px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 550w,\n                           https://media.edutopia.org/styles/responsive_600px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 600w,\n                           https://media.edutopia.org/styles/responsive_620px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 620w,\n                           https://media.edutopia.org/styles/responsive_650px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 650w,\n                           https://media.edutopia.org/styles/responsive_700px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 700w,\n                           https://media.edutopia.org/styles/responsive_750px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 750w,\n                           https://media.edutopia.org/styles/responsive_768px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 768w,\n                           https://media.edutopia.org/styles/responsive_800px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 800w,\n                           https://media.edutopia.org/styles/responsive_900px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 900w,\n                           https://media.edutopia.org/styles/responsive_1000px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 1000w,\n                           https://media.edutopia.org/styles/responsive_1100px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 1100w,\n                           https://media.edutopia.org/styles/responsive_1200px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 1200w,\n                           https://media.edutopia.org/styles/responsive_1240px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 1240w,\n                           https://media.edutopia.org/styles/responsive_1300px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 1300w,\n                           https://media.edutopia.org/styles/responsive_1400px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 1400w,\n                           https://media.edutopia.org/styles/responsive_1440px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 1440w,\n                           https://media.edutopia.org/styles/responsive_1500px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 1500w,\n                           https://media.edutopia.org/styles/responsive_1536px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 1536w,\n                           https://media.edutopia.org/styles/responsive_1600px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 1600w,\n                           https://media.edutopia.org/styles/responsive_2000px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 2000w,\n                           https://media.edutopia.org/styles/responsive_2880px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 2880w," sizes="100vw" alt$="[[alt]]"></div>\n      <div class="credit">[[credit]]</div>\n      <iron-icon icon="icons:fullscreen" class="close-fullscreen"></iron-icon>\n    </div>\n'
      ],
      [
        '\n    <style is="custom-style" include="simple-colors">\n      :host {\n        display: block;\n      }\n      @-webkit-keyframes simple-animate {\n        0% {\n          opacity: 0;\n        }\n\n        100% {\n          opacity: 1;\n        }\n      }\n\n      @keyframes simple-animate {\n        0% {\n          opacity: 0;\n        }\n\n        100% {\n          opacity: 1;\n        }\n      }\n      .hero {\n          margin-bottom: 21px;\n      }\n      .hero-img {\n          display: block;\n          position: absolute;\n          width: 100%;\n          opacity: 1;\n          -webkit-animation: simple-animate 1s ease;\n          animation: simple-animate 1s ease;\n      }\n\n      .hero-img {\n          -webkit-animation: simple-animate 1s ease;\n          animation: simple-animate 1s ease;\n      }\n\n      .credit {\n          color: #8a959e;\n          font-family: \'Gotham SSm A\',\'Gotham SSm B\',\'Arial\',\'Verdana\',\'sans-serif\';\n          font-weight: 400;\n          font-size: 9px;\n          line-height: 11px;\n          margin: 0;\n          text-align: right;\n      }\n\n      .credit--full {\n          margin: 3px 20px 0;\n      }\n\n      .caption {\n          font-family: museoSlab-500,\'Arial Narrow\',\'Arial\',\'Helvetica\',\'sans-serif\';\n          font-size: 15px;\n          line-height: 21px;\n          color: #666666;\n          font-style: normal;\n          margin: 0;\n          float: none;\n          display: block;\n          margin-top: 6px;\n      }\n\n      .trigger {\n          background-color: #eeeeee;\n          padding: 0 0 56.25%;\n          position: relative;\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          appearance: none;\n          display: block;\n          margin: 0;\n          border: none;\n          width: 100%;\n      }\n\n      .trigger:hover {\n          cursor: pointer;\n      }\n\n      .trigger:focus {\n          outline: none;\n      }\n\n      .hero--full {\n          -webkit-animation: animation-lm3h86 1s ease;\n          animation: animation-lm3h86 1s ease;\n          margin-top: 90px;\n          margin-bottom: 21px;\n      }\n\n      @media screen and (min-width: 581px) {\n          .hero--full {\n              position:relative;\n              height: 320px;\n          }\n      }\n\n      @media screen and (min-width: 769px) {\n          .hero--full {\n              height:362px;\n          }\n      }\n\n      @media screen and (min-width: 1024px) {\n          .hero--full {\n              height:510px;\n          }\n      }\n\n      .full-img {\n          display: block;\n          width: 100%;\n      }\n\n      @media screen and (min-width: 581px) {\n          .full-img {\n              position:absolute;\n              top: 50%;\n              -webkit-transform: translateY(-50%);\n              -ms-transform: translateY(-50%);\n              transform: translateY(-50%);\n          }\n      }\n\n      .hero_container-full {\n          display: block;\n          position: relative;\n          overflow: hidden;\n      }\n\n      @media screen and (min-width: 581px) {\n          .hero_container-full {\n              height:320px;\n          }\n      }\n\n      @media screen and (min-width: 769px) {\n          .hero_container-full {\n              height:362px;\n          }\n      }\n\n      @media screen and (min-width: 1024px) {\n          .hero_container-full {\n              height:510px;\n          }\n      }\n    </style>\n    <div class="hero">\n      <div class="modal-overlay" style="display: none;">\n        <div class="modal-content">\n          <div class="modal-wrapper">\n            <paper-icon-button id="closearea" icon="icons:fullscreen-exit" class="close-modal modal--close"></paper-icon-button>\n            <paper-tooltip for="closearea" position="bottom" offset="14">\n              close modal\n            </paper-tooltip>                        \n            <div class="content">\n              <img src\\$="[[src]]" alt\\$="[[alt]]"></div>\n            <div class="meta">\n              <div class="credit">[[credit]]</div>\n              <div class="caption">[[caption]]</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="trigger modal">\n        <img class="simple-img" src\\$="[[src]]" srcset="https://media.edutopia.org/styles/responsive_200px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 200w,\n                           https://media.edutopia.org/styles/responsive_250px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 250w,\n                           https://media.edutopia.org/styles/responsive_300px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 300w,\n                           https://media.edutopia.org/styles/responsive_310px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 310w,\n                           https://media.edutopia.org/styles/responsive_350px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 350w,\n                           https://media.edutopia.org/styles/responsive_450px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 450w,\n                           https://media.edutopia.org/styles/responsive_500px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 500w,\n                           https://media.edutopia.org/styles/responsive_550px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 550w,\n                           https://media.edutopia.org/styles/responsive_600px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 600w,\n                           https://media.edutopia.org/styles/responsive_620px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 620w,\n                           https://media.edutopia.org/styles/responsive_650px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 650w,\n                           https://media.edutopia.org/styles/responsive_700px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 700w,\n                           https://media.edutopia.org/styles/responsive_750px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 750w,\n                           https://media.edutopia.org/styles/responsive_768px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 768w,\n                           https://media.edutopia.org/styles/responsive_800px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 800w,\n                           https://media.edutopia.org/styles/responsive_900px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 900w,\n                           https://media.edutopia.org/styles/responsive_1000px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 1000w,\n                           https://media.edutopia.org/styles/responsive_1100px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 1100w,\n                           https://media.edutopia.org/styles/responsive_1200px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 1200w,\n                           https://media.edutopia.org/styles/responsive_1240px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 1240w,\n                           https://media.edutopia.org/styles/responsive_1300px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 1300w,\n                           https://media.edutopia.org/styles/responsive_1400px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 1400w,\n                           https://media.edutopia.org/styles/responsive_1440px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 1440w,\n                           https://media.edutopia.org/styles/responsive_1500px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 1500w,\n                           https://media.edutopia.org/styles/responsive_1536px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 1536w,\n                           https://media.edutopia.org/styles/responsive_1600px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 1600w,\n                           https://media.edutopia.org/styles/responsive_2000px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 2000w,\n                           https://media.edutopia.org/styles/responsive_2880px_16x9/s3/masters/2018-05/kids-doing-homework-math-problems-at-the-kitchen-table-at-home_t20_K6blK1_master.jpg 2880w," sizes="100vw" alt\\$="[[alt]]"></div>\n      <div class="credit">[[credit]]</div>\n      <iron-icon icon="icons:fullscreen" class="close-fullscreen"></iron-icon>\n    </div>\n'
      ]
    );
    _templateObject_75949070dea911e8aa9c51fb58ab197e = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_75949070dea911e8aa9c51fb58ab197e()
    ),
    is: "simple-image",
    behaviors: [HAXBehaviors.PropertiesBehaviors, SchemaBehaviors.Schema],
    properties: {
      src: { type: String },
      alt: { type: String },
      caption: { type: String },
      credit: { type: String }
    },
    attached: function attached() {
      this.setHaxProperties({
        canScale: !0,
        canPosition: !0,
        canEditSource: !1,
        gizmo: {
          title: "Simple image",
          description:
            "A clean, simple image presentation that's responsive and modals on tapping",
          icon: "editor:insert-photo",
          color: "green",
          groups: ["Image", "Media"],
          handles: [{ type: "image", url: "src" }],
          meta: { author: "LRNWebComponents" }
        },
        settings: {
          quick: [
            {
              property: "src",
              title: "Source",
              description: "The URL for the image.",
              inputMethod: "textfield",
              icon: "link",
              required: !0
            },
            {
              property: "alt",
              title: "Alternative text",
              description: "Text to describe the image to non-sighted users.",
              inputMethod: "alt",
              icon: "accessibility",
              required: !0
            }
          ],
          configure: [
            {
              property: "src",
              title: "Source",
              description: "The URL for the image.",
              inputMethod: "textfield",
              icon: "link",
              required: !0
            },
            {
              property: "caption",
              title: "Caption",
              description: "A caption to describe the image usage",
              inputMethod: "textarea"
            },
            {
              property: "alt",
              title: "Alternative text",
              description: "Text to describe the image to non-sighted users.",
              inputMethod: "alt"
            },
            {
              property: "credit",
              title: "Credits",
              description:
                "Who the image is credited to / copyright information",
              inputMethod: "textarea"
            }
          ],
          advanced: []
        }
      });
    }
  });
});
