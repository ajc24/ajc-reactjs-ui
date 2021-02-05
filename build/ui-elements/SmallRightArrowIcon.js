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
 * The small right arrow icon can be used to highlight smaller links or buttons in your application UI. This icon is developed from pure CSS.
 * 
 * You can render this icon in a choice of colours: black or white.
 */
class SmallRightArrowIcon extends _react.default.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let containerStyle = 'ajc-small-right-arrow-icon-container ajc-default';

    if (this.props.colour === 'white') {
      containerStyle += ' ajc-border-colour-white';
    } else {
      containerStyle += ' ajc-border-colour-black';
    }

    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      role: "presentation",
      className: containerStyle
    }));
  }

}

SmallRightArrowIcon.propTypes = {
  /** The colour of the small icon */
  colour: _propTypes.default.oneOf(['white', 'black'])
};
SmallRightArrowIcon.defaultProps = {
  colour: 'black'
};
var _default = SmallRightArrowIcon;
exports.default = _default;