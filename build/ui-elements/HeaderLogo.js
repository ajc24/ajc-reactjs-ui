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
 * Header Logo component for use with the Header component.
 * 
 * Header Logo components can be rendered with any image of your choice. The intention of this image is to further describe your web page to your users. Logos are rendered at
 * 145px by 145px square.
 */
class HeaderLogo extends _react.default.Component {
  constructor(props) {
    super(props);
    this.setImageLoaded = this.setImageLoaded.bind(this);
  }
  /**
   * Sets the image as loaded and transitions it into the UI
   */


  setImageLoaded() {
    const imageElement = document.querySelector(`img[id="${this.props.id}"]`);
    imageElement.style.opacity = 1;
  }

  render() {
    const imageStyling = 'ajc-header-logo';
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("img", {
      id: this.props.id,
      className: imageStyling,
      src: this.props.imageSrc,
      role: "presentation",
      onLoad: this.setImageLoaded
    }));
  }

}

HeaderLogo.propTypes = {
  /** The unique identifier for the header logo component */
  id: _propTypes.default.string.isRequired,

  /** The image to be displayed within the component. */
  imageSrc: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired
};
var _default = HeaderLogo;
exports.default = _default;