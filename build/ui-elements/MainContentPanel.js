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
 * The MainContentPanel component acts as a container for the main content of each page in your web application.
 * 
 * You can render any component(s) you wish as your main content. You may choose to render this component with a transparent or grey background. This content panel is designed to support desktop
 * resolutions and mobile resolutions and will collapse / expand to suit all screen sizes.
 */
class MainContentPanel extends _react.default.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    /* Set the title for the current webpage */
    document.title = this.props.title;
    /* Ensure that the <body> element stretches to 100% of the width of the screen, that the X axis scrollbar is hidden and Y axis scrollbar is always displayed */

    document.body.classList.add('ajc-body-full-screen');
  }

  render() {
    let containerStyling = 'ajc-main-content-container ajc-default';

    if (this.props.colour === 'grey') {
      containerStyling += ' ajc-background-grey-1';
    } else if (this.props.colour === 'white') {
      containerStyling += ' ajc-background-white';
    } else {
      containerStyling += ' ajc-background-transparent';
    }

    const outerStyling = 'ajc-main-content-outer';
    const innerStyling = 'ajc-main-content-inner';
    return /*#__PURE__*/_react.default.createElement("div", {
      role: "region",
      className: containerStyling
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: outerStyling
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: innerStyling
    }, this.props.children)));
  }

}

MainContentPanel.propTypes = {
  /** The children components to be displayed within the web page */
  children: _propTypes.default.node.isRequired,

  /** The background colour for the webpage */
  colour: _propTypes.default.oneOf(['grey', 'white', 'transparent']),

  /** The title for the webpage being displayed. This affects the title text displayed in your browser tab */
  title: _propTypes.default.string.isRequired
};
MainContentPanel.defaultProps = {
  colour: 'white'
};
var _default = MainContentPanel;
exports.default = _default;