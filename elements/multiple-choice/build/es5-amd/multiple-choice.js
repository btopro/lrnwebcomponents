define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@polymer/paper-checkbox/paper-checkbox.js",
  "./node_modules/@polymer/iron-icons/iron-icons.js",
  "./node_modules/@polymer/paper-button/paper-button.js",
  "./node_modules/@polymer/paper-toast/paper-toast.js",
  "./node_modules/@lrnwebcomponents/materializecss-styles/materializecss-styles.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js",
  "./node_modules/@lrnwebcomponents/schema-behaviors/schema-behaviors.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_3270c250dea911e8b42a7b395a707eba() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style include="materializecss-styles">\n      :host {\n        display: block;\n        padding: 16px 16px 54px 16px;\n      }\n      h3 {\n        margin: 8px;\n      }\n      ul {\n        list-style: none;\n        padding: 0;\n        margin: 0;\n      }\n      ul li {\n        padding: 8px;\n      }\n      paper-radio-button {\n        padding: 8px;\n      }\n    </style>\n    <meta property="oer:assessing" content$="[[relatedResource]]">\n    <h3 hidden$="[[hideTitle]]"><span property="oer:name">[[title]]</span></h3>\n    <div>[[question]]</div>\n    <ul>\n      <template is="dom-repeat" items="[[displayedAnswers]]" as="answer">\n        <li><paper-checkbox disabled$="[[disabled]]" property="oer:answer" checked="{{answer.userGuess}}">[[answer.label]]</paper-checkbox></li>\n      </template>\n    </ul>\n    <div hidden$="[[hideButtons]]">\n      <paper-button disabled$="[[disabled]]" raised="" on-tap="_verifyAnswers">[[checkLabel]]</paper-button>\n      <paper-button disabled$="[[disabled]]" raised="" on-tap="_resetAnswers">[[resetLabel]]</paper-button>\n    </div>\n    <paper-toast id="toast" duration="6000" class$="fit-bottom [[__toastColor]]">\n    [[__toastText]]\n    <iron-icon icon="[[__toastIcon]]" style="margin-left:16px;"></iron-icon>\n    </paper-toast>\n'
      ],
      [
        '\n    <style include="materializecss-styles">\n      :host {\n        display: block;\n        padding: 16px 16px 54px 16px;\n      }\n      h3 {\n        margin: 8px;\n      }\n      ul {\n        list-style: none;\n        padding: 0;\n        margin: 0;\n      }\n      ul li {\n        padding: 8px;\n      }\n      paper-radio-button {\n        padding: 8px;\n      }\n    </style>\n    <meta property="oer:assessing" content\\$="[[relatedResource]]">\n    <h3 hidden\\$="[[hideTitle]]"><span property="oer:name">[[title]]</span></h3>\n    <div>[[question]]</div>\n    <ul>\n      <template is="dom-repeat" items="[[displayedAnswers]]" as="answer">\n        <li><paper-checkbox disabled\\$="[[disabled]]" property="oer:answer" checked="{{answer.userGuess}}">[[answer.label]]</paper-checkbox></li>\n      </template>\n    </ul>\n    <div hidden\\$="[[hideButtons]]">\n      <paper-button disabled\\$="[[disabled]]" raised="" on-tap="_verifyAnswers">[[checkLabel]]</paper-button>\n      <paper-button disabled\\$="[[disabled]]" raised="" on-tap="_resetAnswers">[[resetLabel]]</paper-button>\n    </div>\n    <paper-toast id="toast" duration="6000" class\\$="fit-bottom [[__toastColor]]">\n    [[__toastText]]\n    <iron-icon icon="[[__toastIcon]]" style="margin-left:16px;"></iron-icon>\n    </paper-toast>\n'
      ]
    );
    _templateObject_3270c250dea911e8b42a7b395a707eba = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_3270c250dea911e8b42a7b395a707eba()
    ),
    is: "multiple-choice",
    hostAttributes: { typeof: "oer:Assessment" },
    behaviors: [
      HAXBehaviors.PropertiesBehaviors,
      MaterializeCSSBehaviors.ColorBehaviors,
      SchemaBehaviors.Schema
    ],
    observers: ["_valueChanged(displayedAnswers.*)"],
    properties: {
      title: { type: String, value: "" },
      disabled: { type: Boolean, value: !1 },
      checkLabel: { type: String, value: "Check answer" },
      resetLabel: { type: String, value: "Reset" },
      relatedResource: { type: String },
      hideTitle: { type: Boolean, value: !1 },
      question: { type: String, value: "" },
      answers: { type: Array, value: [], notify: !0 },
      displayedAnswers: {
        type: Array,
        computed: "_computeDisplayedAnswers(answers, randomize)",
        notify: !0
      },
      correctText: { type: String, value: "Great job!" },
      incorrectText: { type: String, value: "Better luck next time!" },
      randomize: { type: Boolean, value: !1, reflectToAttribute: !0 },
      hideButtons: { type: Boolean, value: !1 }
    },
    _valueChanged: function _valueChanged(e) {
      for (var i in e.base) {
        for (var j in e.base[i]) {
          this.notifyPath("displayedAnswers." + i + "." + j);
        }
      }
    },
    _resetAnswers: function _resetAnswers() {
      var _this = this;
      this.$.toast.hide();
      for (var i in this.displayedAnswers) {
        if (this.displayedAnswers[i].userGuess) {
          this.displayedAnswers[i].userGuess = !1;
        }
      }
      setTimeout(function() {
        var answers = _this.answers;
        _this.set("answers", []);
        _this.set("answers", answers);
      }, 100);
    },
    checkAnswers: function checkAnswers() {
      var gotRight = !0;
      for (var i in this.displayedAnswers) {
        if (
          !1 != gotRight &&
          this.displayedAnswers[i].correct &&
          this.displayedAnswers[i].userGuess
        ) {
          gotRight = !0;
        } else if (
          this.displayedAnswers[i].correct &&
          !this.displayedAnswers[i].userGuess
        ) {
          gotRight = !1;
        } else if (
          !this.displayedAnswers[i].correct &&
          this.displayedAnswers[i].userGuess
        ) {
          gotRight = !1;
        }
      }
      return gotRight;
    },
    _verifyAnswers: function _verifyAnswers() {
      var gotRight = this.checkAnswers();
      if (gotRight) {
        this.$.toast.hide();
        this.__toastColor = "green darken-4";
        this.__toastIcon = "thumb-up";
        this.__toastText = this.correctText;
        this.$.toast.show();
      } else {
        this.$.toast.hide();
        this.__toastColor = "red darken-4";
        this.__toastIcon = "thumb-down";
        this.__toastText = this.incorrectText;
        this.$.toast.show();
      }
    },
    _computeDisplayedAnswers: function _computeDisplayedAnswers(
      answers,
      randomize
    ) {
      if (
        babelHelpers.typeof(answers) !== "undefined" &&
        null != answers &&
        0 < answers.length &&
        randomize
      ) {
        var random = answers,
          currentIndex = random.length,
          temporaryValue,
          randomIndex;
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = random[currentIndex];
          random[currentIndex] = random[randomIndex];
          random[randomIndex] = temporaryValue;
        }
        return random;
      } else {
        return answers;
      }
    },
    attached: function attached() {
      this.$.toast.fitInto = this;
      this.setHaxProperties({
        canScale: !0,
        canPosition: !0,
        canEditSource: !1,
        gizmo: {
          title: "Multiple choice",
          description: "Multiple choice self check",
          icon: "icons:list",
          color: "purple",
          groups: ["Instructional"],
          handles: [],
          meta: { author: "LRNWebComponents" }
        },
        settings: {
          quick: [
            {
              property: "title",
              title: "Title",
              description: "The title of the element",
              inputMethod: "textfield",
              icon: "editor:title"
            },
            {
              property: "question",
              title: "Question",
              description: "Question for users to respond to.",
              inputMethod: "textfield",
              icon: "icons:help"
            }
          ],
          configure: [
            {
              property: "title",
              title: "Title",
              description: "The title of the element",
              inputMethod: "textfield"
            },
            {
              property: "hideTitle",
              title: "Hide title",
              description: "Whether or not to display the title",
              inputMethod: "boolean"
            },
            {
              property: "question",
              title: "Question",
              description: "Question for users to respond to.",
              inputMethod: "textfield"
            },
            {
              property: "randomize",
              title: "Randomize",
              description: "Randomize the answers dynamically",
              inputMethod: "boolean"
            },
            {
              property: "answers",
              title: "Answer set",
              description: "Answers in a multiple choice",
              inputMethod: "array",
              properties: [
                {
                  property: "correct",
                  title: "Correct",
                  description: "If this is correct or not",
                  inputMethod: "boolean"
                },
                {
                  property: "label",
                  title: "Answer",
                  description: "Possible answer to the question",
                  inputMethod: "textfield",
                  required: !0
                }
              ]
            },
            {
              property: "correctText",
              title: "Correct feedback",
              description: "Feedback when they get it right",
              inputMethod: "textfield"
            },
            {
              property: "incorrectText",
              title: "Incorrect feedback",
              description: "Feedback when they get it wrong",
              inputMethod: "textfield"
            }
          ],
          advanced: [
            {
              property: "checkLabel",
              title: "Check answers label",
              description: "Label for getting solution feedback",
              inputMethod: "textfield"
            },
            {
              property: "resetLabel",
              title: "Reset label",
              description: "label for the reset button",
              inputMethod: "textfield"
            }
          ]
        },
        saveOptions: { unsetAttributes: ["displayed-answers"] }
      });
    }
  });
});
