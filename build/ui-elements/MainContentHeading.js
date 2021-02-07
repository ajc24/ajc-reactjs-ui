"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("../styling/ui-styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The MainContentHeading component acts as the heading text display for each individual page in a web application.
 * 
 * You can render any text content you wish as your page title text. For best results this component is intended for use with the MainContentPanel component. This component will be
 * rendered at a maximum width of 1349px with both the title heading text and underline divider displayed centrally within. This component will collapse in size to support smaller
 * screen sizes such as mobile devices. 
 */
class MainContentHeading extends _react.default.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const containerStyling = 'ajc-main-content-heading-container ajc-text-black ajc-default';
    const headingStyling = 'ajc-main-content-heading-text';
    const dividerOuterStyling = 'ajc-main-content-heading-divider-outer';
    const dividerInnerStyling = 'ajc-main-content-heading-divider-inner';
    return /*#__PURE__*/_react.default.createElement("div", {
      className: containerStyling
    }, /*#__PURE__*/_react.default.createElement("h1", {
      className: headingStyling
    }, this.props.pageHeading), /*#__PURE__*/_react.default.createElement("div", {
      role: "presentation",
      className: dividerOuterStyling
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: dividerInnerStyling
    })));
  }

}

MainContentHeading.propTypes = {
  /** The text content to be displayed as the page heading */
  pageHeading: _propTypes.default.node.isRequired
};
var _default = MainContentHeading;
exports.default = _default;