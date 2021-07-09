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
 * The MainContentScreenshot component allows you to render a screenshot with a caption underneath on any page of a web application. This component is intended for rendering gaming
 * or TV based screenshots within articles but can be used to render any desired image.
 * 
 * You can render any text content you wish as the caption text. This component will be rendered at a maximum width of 1349px with the caption text rendered in bold and
 * displayed centrally underneath the screenshot. This component will collapse in size to support smaller screen sizes such as mobile devices.
 * 
 * For best results this component is intended for use within the MainContentPanel component. 
 */
class MainContentScreenshot extends _react.default.Component {
  constructor(props) {
    super(props);
    this.disableMouseDownEvent = this.disableMouseDownEvent.bind(this);
    this.setImageLoaded = this.setImageLoaded.bind(this);
  }
  /**
   * Disables the mouse down event for the image
   * @param {Event} event 
   */


  disableMouseDownEvent(event) {
    event.preventDefault();
  }
  /**
   * Sets the image as loaded and transitions it into the UI
   */


  setImageLoaded() {
    const imageElement = document.querySelector(`img[id="${this.props.id}"]`);
    imageElement.style.opacity = 1;
  }

  render() {
    const containerStyling = 'ajc-screenshot-container ajc-text-black ajc-default';
    const innerStyling = 'ajc-screenshot-image-inner';
    const imageStyling = 'ajc-screenshot-image';
    const captionStyling = 'ajc-screenshot-caption';
    return /*#__PURE__*/_react.default.createElement("div", {
      className: containerStyling
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: innerStyling
    }, /*#__PURE__*/_react.default.createElement("img", {
      id: this.props.id,
      className: imageStyling,
      src: this.props.imageSrc,
      role: "presentation",
      onLoad: this.setImageLoaded,
      onMouseDown: this.disableMouseDownEvent
    })), /*#__PURE__*/_react.default.createElement("p", {
      id: `${this.props.id}-caption`,
      className: captionStyling
    }, this.props.caption));
  }

}

MainContentScreenshot.propTypes = {
  /** The unique identifier for the screenshot component */
  id: _propTypes.default.string.isRequired,

  /** The caption to appear underneath the screenshot */
  caption: _propTypes.default.string.isRequired,

  /** The image to be displayed within the component. */
  imageSrc: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired
};
var _default = MainContentScreenshot;
exports.default = _default;