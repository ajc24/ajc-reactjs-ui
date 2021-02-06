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
 * The Footer component acts as a container for footer-related information for each page in your web application.
 * 
 * In this case the footer data is expected to be a one line description / text content for your web application. This component is not intended for rendering multiple inner
 * components or links. The footer is designed to support desktop resolutions and mobile resolutions and will collapse / expand to suit all screen sizes.
 */
class Footer extends _react.default.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let containerStyle = 'ajc-footer-container ajc-text-white ajc-default';

    if (this.props.colour === 'red') {
      containerStyle += ' ajc-background-red';
    } else {
      containerStyle += ' ajc-background-grey-2';
    }

    const contentInnerStyle = 'ajc-footer-content-inner';
    const contentOuterStyle = 'ajc-footer-content-outer';
    return /*#__PURE__*/_react.default.createElement("div", {
      role: "contentinfo",
      className: containerStyle
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: contentOuterStyle
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: contentInnerStyle
    }, this.props.children)));
  }

}

Footer.propTypes = {
  /** The background colour for the footer */
  colour: _propTypes.default.oneOf(['grey', 'red']),

  /** The children components to be displayed within the footer */
  children: _propTypes.default.node.isRequired
};
Footer.defaultProps = {
  colour: 'grey'
};
var _default = Footer;
exports.default = _default;