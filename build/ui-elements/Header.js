"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _HeaderBackgroundImage = _interopRequireDefault(require("./supporting-elements/HeaderBackgroundImage"));

require("../styling/ui-styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Header component for a web page template.
 * 
 * Header components can be rendered with an upper grey border of 5px, an upper red border of 5px or no border at all. It can also be rendered with a white, grey, yellow or a
 * transparent background. It is also possible to render an image as the background for the component. You can render any component(s) you wish inside its inner container such
 * as text components, images etc. which will further describe your web page to your users.
 * 
 * This header component is designed to support desktop resolutions and mobile resolutions and will collapse / expand to suit all screen sizes.
 */
class Header extends _react.default.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let containerStyle = 'ajc-header-container ajc-default ajc-text-black';

    if (this.props.topBorder === 'grey') {
      containerStyle += ' ajc-header-border-top-grey';
    } else if (this.props.topBorder === 'red') {
      containerStyle += ' ajc-header-border-top-red';
    }

    if (this.props.imageSrc === undefined) {
      if (this.props.backgroundColour === 'white') {
        containerStyle += ' ajc-background-white';
      } else if (this.props.backgroundColour === 'grey') {
        containerStyle += ' ajc-background-grey-1';
      } else if (this.props.backgroundColour === 'yellow') {
        containerStyle += ' ajc-background-yellow';
      } else {
        containerStyle += ' ajc-background-transparent';
      }
    }

    const contentOuterStyle = 'ajc-header-content-outer';
    const contentInnerStyle = 'ajc-header-content-inner';
    return /*#__PURE__*/_react.default.createElement("div", {
      role: "banner",
      id: this.props.id,
      className: containerStyle
    }, this.props.imageSrc ? /*#__PURE__*/_react.default.createElement(_HeaderBackgroundImage.default, {
      id: this.props.imageId,
      imageSrc: this.props.imageSrc
    }) : undefined, /*#__PURE__*/_react.default.createElement("div", {
      className: contentOuterStyle
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: contentInnerStyle
    }, this.props.children)));
  }

}

Header.propTypes = {
  /** The unique identifier for the header component */
  id: _propTypes.default.string.isRequired,

  /** The child components to be rendered within the component */
  children: _propTypes.default.node,

  /** The background colour of the header panel */
  backgroundColour: _propTypes.default.oneOf(['transparent', 'white', 'grey', 'yellow']),

  /** The border to appear at the top of the panel */
  topBorder: _propTypes.default.oneOf(['grey', 'red', 'none']),

  /** The unique identifier for the headers background image */
  imageId: _propTypes.default.string,

  /** The source data of the image to be displayed as the header background */
  imageSrc: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
};
Header.defaultProps = {
  children: undefined,
  backgroundColour: 'transparent',
  topBorder: 'none',
  imageId: 'default-header-background-image-id',
  imageSrc: undefined
};
var _default = Header;
exports.default = _default;