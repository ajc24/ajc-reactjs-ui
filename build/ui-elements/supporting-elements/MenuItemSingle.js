"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

require("../../styling/ui-styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The MenuItemSingle component acts as a standard menu item for the MenuBar component
 */
class MenuItemSingle extends _react.default.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let itemStyling = 'ajc-menu-bar-item-single';

    if (this.props.colour === 'red') {
      itemStyling += ' ajc-menu-bar-item-red';
    } else {
      itemStyling += ' ajc-menu-bar-item-grey';
    }

    let innerItemStyling = 'ajc-menu-bar-item-content ajc-default';
    return /*#__PURE__*/_react.default.createElement("div", {
      id: this.props.id,
      className: itemStyling
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: this.props.route,
      className: innerItemStyling
    }, "\xA0\xA0\xA0", this.props.title, "\xA0\xA0\xA0"));
  }

}

MenuItemSingle.propTypes = {
  /** The unique identifier for the menu item element */
  id: _propTypes.default.string.isRequired,

  /** The background colour for the menu item */
  colour: _propTypes.default.oneOf(['grey', 'red']),

  /** The route to navigate to on clicking on the menu item */
  route: _propTypes.default.string.isRequired,

  /** The title for the webpage being displayed */
  title: _propTypes.default.string.isRequired
};
MenuItemSingle.defaultProps = {
  colour: 'grey'
};
var _default = MenuItemSingle;
exports.default = _default;