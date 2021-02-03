"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("../../styling/ui-styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class HeaderBackgroundImage extends _react.default.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const imageStyling = 'ajc-header-image';
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("img", {
      id: this.props.id,
      className: imageStyling,
      src: this.props.imageSrc,
      alt: "undefined header background image data / path"
    }));
  }

}

HeaderBackgroundImage.propTypes = {
  /** The unique identifier for the component. */
  id: _propTypes.default.string.isRequired,

  /** The image to be displayed within the component. */
  imageSrc: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired
};
var _default = HeaderBackgroundImage;
exports.default = _default;