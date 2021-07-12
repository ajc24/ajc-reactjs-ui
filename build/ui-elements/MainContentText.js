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
 * The MainContentText component is a versatile component which can render a paragraph of text in a number of different ways.
 * 
 * - `paragraph` is the default type for this component. Text will appear cleanly and without any additional formatting. 
 * - Using the `heading` type property will render a paragraph heading. All text within the heading will appear in bold.
 * - The `hyperlink` option will render all text within the paragraph as a hyperlink. You also must set the href property in order for a hyperlink to be displayed.
 * - Finally setting the `paragraph-italics` type property will render all text within the paragraph in italics.
 * 
 * Setting the addUpperSpacing property will add 30px of additional spacing above the paragraph being rendered. This is especially useful to add a visual break between
 * paragraphs on each page of the application.
 * 
 * This component will be rendered at a maximum width of 1349px with all text content displayed left-aligned within. This component will collapse in size to support smaller
 * screen sizes such as mobile devices.
 * 
 * This component is developed to work best with the MainContentPanel component.
 */
class MainContentText extends _react.default.Component {
  constructor(props) {
    super(props);
  }

  render() {
    /* Create the styling for the paragraph container */
    let containerStyling = 'ajc-text-paragraph-container ajc-text-black ajc-default';

    if (this.props.addUpperSpacing === true) {
      containerStyling += ' ajc-text-paragraph-upper-spacing';
    }

    let innerHTMLContent;

    if (this.props.type === 'heading') {
      /* Render a heading in this text component */
      const headingStyling = 'ajc-text-paragraph-heading';
      innerHTMLContent = /*#__PURE__*/_react.default.createElement("b", {
        className: headingStyling
      }, this.props.children);
    } else if (this.props.type === 'hyperlink' && this.props.href !== undefined) {
      /* Render a hyperlink in this text component */
      const linkStyling = 'ajc-hyperlink';
      innerHTMLContent = /*#__PURE__*/_react.default.createElement("a", {
        className: linkStyling,
        href: this.props.href
      }, this.props.children);
    } else if (this.props.type === 'paragraph-italics') {
      /* Render a paragraph in italics */
      innerHTMLContent = /*#__PURE__*/_react.default.createElement("i", null, this.props.children);
    } else {
      /* Default to a standard paragraph */
      innerHTMLContent = this.props.children;
    }

    return /*#__PURE__*/_react.default.createElement("p", {
      className: containerStyling
    }, innerHTMLContent);
  }

}

MainContentText.propTypes = {
  /** Adds additional upper spacing of 30px to the paragraph / heading. By default this spacing is not added to the component. */
  addUpperSpacing: _propTypes.default.bool,

  /** The child components to be rendered within the component. */
  children: _propTypes.default.node.isRequired,

  /** In the event that this component is used to render a hyperlink, this property is set as the target url. */
  href: _propTypes.default.string,

  /** The type of component to be rendered. By default a paragraph component is rendered. */
  type: _propTypes.default.oneOf(['heading', 'hyperlink', 'paragraph', 'paragraph-italics'])
};
MainContentText.defaultProps = {
  addUpperSpacing: false,
  href: undefined,
  type: 'paragraph'
};
var _default = MainContentText;
exports.default = _default;