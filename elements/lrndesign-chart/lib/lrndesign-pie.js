/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { LrndesignChartBehaviors } from "./lrndesign-chart-behaviors.js";
/**
 * `lrndesign-pie`
 * A pie chart
 *
 * @polymer
 * @customElement
 * @demo demo/pie.html
 *
 */
class LrndesignPie extends LrndesignChartBehaviors {
  // properties available to the custom element for data binding
  static get properties() {
    return {
      /**
       * Type of chart.
       */
      type: {
        type: String,
        value: "pie",
        readOnly: true
      },
      /**
       * Scale of the chart.
       */
      scale: {
        type: String,
        notify: true,
        value: "ct-square"
      },
      /**
       *  Start angle of the pie chart in degrees where 0 points north.
       * A higher value offsets the start angle clockwise..
       */
      startAngle: {
        type: Number,
        value: 0
      },
      /**
       * Optional total you can specify. By specifying a total value,
       * the sum of the values in the series must be this total in order
       * to draw a full pie. You can use this parameter to draw only parts
       * of a pie or gauge charts.
       */
      total: {
        type: Number,
        value: undefined
      },
      /**
       * Displays chart as donut instead of pie.
       */
      donut: {
        type: Boolean,
        value: false
      },
      /**
       * If a label should be shown.
       */
      showLabel: {
        type: Boolean,
        value: true
      },
      /**
       * Label position offset from the standard position
       * which is half distance of the radius.
       * This value can be either positive or negative.
       * Positive values will position the label away from the center.
       */
      labelOffset: {
        type: Number,
        value: 0
      },
      /**
       * This option can be set to 'inside', 'outside' or 'center'.
       * Positioned with 'inside' the labels will be placed on half the distance
       * of the radius to the border of the Pie by respecting the 'labelOffset'.
       * The 'outside' option will place the labels at the border of the pie
       * and 'center' will place the labels in the absolute center point
       * of the chart. The 'center' option only makes sense
       * in conjunction with the 'labelOffset' option.
       */
      labelPosition: {
        type: String,
        value: "inside"
      },
      /**
       * Label direction can be 'neutral', 'explode' or 'implode'.
       * The labels anchor will be positioned based on those settings
       * as well as the fact if the labels are on the right or
       * left side of the center of the chart.
       * Usually explode is useful when labels are positioned
       * far away from the center.
       */
      labelDirection: {
        type: String,
        value: "neutral"
      },
      /**
       * Empty values will be ignored to avoid drawing
       * unncessary slices and labels
       */
      ignoreEmptyValues: {
        type: Boolean,
        value: false
      }
    };
  }

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "lrndesign-pie";
  }
  // haxProperty definition
  static get haxProperties() {
    return {
      canScale: true,
      canPosition: true,
      canEditSource: false,
      gizmo: {
        title: "Pie Chart",
        description: "Creates an accessible pie chart based on a CSV.",
        icon: "editor:pie-chart",
        color: "green darken-4",
        groups: ["Data", "Presentation"],
        handles: [
          {
            type: "data",
            url: "csvFile"
          }
        ],
        meta: {
          author: "LRNWebComponents"
        }
      },
      settings: {
        quick: [
          {
            property: "data-source",
            title: "CSV File",
            description: "The URL for your CSV file.",
            inputMethod: "textfield",
            icon: "link",
            validationType: "url",
            required: true
          },
          {
            property: "chartTitle",
            title: "Chart Title",
            description: "Accessible alt text for your chart.",
            inputMethod: "textfield",
            icon: "text-field",
            required: true
          },
          {
            property: "chartDesc",
            title: "Chart Description",
            description: "Accessible description of your chart.",
            inputMethod: "textfield",
            icon: "text-field"
          },
          {
            property: "donut",
            title: "Display as donut?",
            description: "Display as a donut chart instead of a pie chart.",
            inputMethod: "boolean",
            icon: "check-box"
          }
        ],
        configure: [
          {
            property: "width",
            title: "Width",
            description: "The width of the chart.",
            inputMethod: "textfield",
            icon: "text-field"
          },
          {
            property: "height",
            title: "Height",
            description: "The height of the chart.",
            inputMethod: "textfield",
            icon: "text-field"
          },
          {
            property: "paddingTop",
            title: "Padding-Top",
            description: "The padding at the top of the chart.",
            inputMethod: "textfield",
            icon: "text-field"
          },
          {
            property: "paddingRight",
            title: "Padding-Right",
            description: "The padding at the right of the chart.",
            inputMethod: "textfield",
            icon: "text-field"
          },
          {
            property: "paddingBottom",
            title: "Padding-Bottom",
            description: "The padding at the bottom of the chart.",
            inputMethod: "textfield",
            icon: "text-field"
          },
          {
            property: "paddingLeft",
            title: "Padding-Left",
            description: "The padding at the left of the chart.",
            inputMethod: "textfield",
            icon: "text-field"
          }
        ],
        advanced: [
          {
            property: "scale",
            title: "Scale Name",
            description:
              "The ratio of width:height of the chart (See https://gionkunz.github.io/chartist-js/getting-started.html#default-sass-settings for $ct-scales and $ct-scales-names).",
            inputMethod: "textfield",
            icon: "text-field"
          },
          {
            property: "startAngle",
            title: "Start Angle",
            description: "The angle where pie slices will start.",
            inputMethod: "textfield",
            icon: "text-field",
            validationType: "number"
          },
          {
            property: "total",
            title: "Total of All Slices",
            description:
              "Optional total you can specify. By specifying a total value, the sum of the values in the series must be this total in order to draw a full pie. You can use this parameter to draw only parts of a pie or gauge charts.",
            inputMethod: "textfield",
            icon: "text-field",
            validationType: "number"
          },
          {
            property: "showLabel",
            title: "Show labels?",
            description: "Should chart labels be shown?",
            inputMethod: "boolean",
            icon: "check-box"
          },
          {
            property: "labelOffset",
            title: "Label Offset",
            description:
              "Label position offset from the standard position which is half distance of the radius. This value can be either positive or negative. Positive values will position the label away from the center.",
            inputMethod: "textfield",
            icon: "text-field",
            validationType: "number"
          },
          {
            property: "labelPosition",
            title: "Label Position",
            description:
              'This option can be set to "inside", "outside" or "center". Positioned with "inside" the labels will be placed on half the distance of the radius to the border of the Pie by respecting the "Label Offset". The "outside" option will place the labels at the border of the pie and "center" will place the labels in the absolute center point of the chart. The "center" option only makes sense in conjunction with the "Label Offset" option.',
            inputMethod: "textfield",
            icon: "text-field"
          },
          {
            property: "labelDirection",
            title: "Label Direction",
            description:
              'Label direction can be "neutral", "explode" or "implode". The label\'s anchor will be positioned based on those settings as well as the fact if the labels are on the right or left side of the center of the chart. Usually explode is useful when labels are positioned far away from the center.',
            inputMethod: "textfield",
            icon: "text-field"
          },
          {
            property: "reverseData",
            title: "Reverse Data",
            description:
              "Reverse data including labels, the series order as well as the whole series data arrays.",
            inputMethod: "boolean",
            icon: "check-box"
          },
          {
            property: "ignoreEmptyValues",
            title: "Ignore empty values?",
            description:
              "Empty values will be ignored to avoid drawing unncessary slices and labels.",
            inputMethod: "boolean",
            icon: "check-box"
          }
        ]
      }
    };
  }
  /**
   * returns options as an array
   */
  _getOptions() {
    let options = {
      width: this.width,
      height: this.height,
      /*'chartPadding': {
        'top': this.paddingTop,
        'right': this.paddingRight,
        'bottom': this.paddingBottom,
        'left': this.paddingLeft
      },*/
      startAngle: this.startAngle,
      total: this.total,
      donut: this.donut,
      showLabel: this.showLabel,
      labelOffset: this.labelOffset,
      labelPosition: this.labelPosition,
      labelDirection: this.labelDirection,
      reverseData: this.reverseData,
      ignoreEmptyValues: this.ignoreEmptyValues
    };
    console.log(options);
    return options;
  }
}
window.customElements.define(LrndesignPie.tag, LrndesignPie);
export { LrndesignPie };
