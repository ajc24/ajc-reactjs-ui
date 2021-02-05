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
 * The small menu icon can be used to highlight smaller menu items or links in your application UI. This icon is developed from pure CSS.
 * 
 * You can render this icon in a choice of colours: black or white.
 */
class SmallMenuIcon extends _react.default.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const containerStyle = 'ajc-small-menu-icon-container ajc-default';
    let upperIconStyle = 'ajc-small-menu-icon-upper';
    let lowerIconStyle = 'ajc-small-menu-icon-lower';

    if (this.props.colour === 'white') {
      upperIconStyle += ' ajc-background-white';
      lowerIconStyle += ' ajc-background-white';
    } else {
      upperIconStyle += ' ajc-background-black';
      lowerIconStyle += ' ajc-background-black';
    }

    return /*#__PURE__*/_react.default.createElement("div", {
      role: "presentation",
      className: containerStyle
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: upperIconStyle
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: upperIconStyle
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: lowerIconStyle
    }));
  }

}

SmallMenuIcon.propTypes = {
  /** The colour of the small icon */
  colour: _propTypes.default.oneOf(['white', 'black'])
};
SmallMenuIcon.defaultProps = {
  colour: 'black'
};
var _default = SmallMenuIcon;
exports.default = _default;