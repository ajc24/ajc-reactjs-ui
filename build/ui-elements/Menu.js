"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MenuItemDropdown = _interopRequireDefault(require("./supporting-elements/MenuItemDropdown"));

var _MenuItemSingle = _interopRequireDefault(require("./supporting-elements/MenuItemSingle"));

require("../styling/ui-styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Menu bar component for rendering navigation links for your web application.
 * 
 * You can render any number of menu bar items within the container including single and dropdown menu items. These items will help your users to navigate around your
 * web application.
 */
class Menu extends _react.default.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var _this = this;

    let containerStyle = 'ajc-menu-bar-container ajc-default';

    if (this.props.colour === 'red') {
      containerStyle += ' ajc-background-red';
    } else {
      containerStyle += ' ajc-background-grey-2';
    }

    const contentInnerStyle = 'ajc-menu-bar-content-inner';
    const contentOuterStyle = 'ajc-menu-bar-content-outer';
    return /*#__PURE__*/_react.default.createElement("div", {
      role: "navigation",
      id: this.props.id,
      className: containerStyle
    }, /*#__PURE__*/_react.default.createElement("div", {
      id: "menu-bar-content-outer",
      className: contentOuterStyle
    }, /*#__PURE__*/_react.default.createElement("div", {
      id: "menu-bar-content-inner",
      className: contentInnerStyle
    }, this.props.menuItemsList.map(function (item, index) {
      if (item.dropdownMenuItemsList === undefined) {
        return /*#__PURE__*/_react.default.createElement(_MenuItemSingle.default, {
          id: `menu-item-${index}`,
          key: `menu-item-${index}`,
          route: item.route,
          title: item.title,
          colour: _this.props.colour
        });
      }

      return /*#__PURE__*/_react.default.createElement(_MenuItemDropdown.default, {
        id: `dropdown-menu-${index}`,
        key: `dropdown-menu-${index}`,
        colour: _this.props.colour,
        title: item.title,
        dropdownMenuItemsList: item.dropdownMenuItemsList
      });
    }))));
  }

}

Menu.propTypes = {
  /** The background colour for the menu bar */
  colour: _propTypes.default.oneOf(['grey', 'red']),

  /** The custom id for the menu bar being displayed */
  id: _propTypes.default.string.isRequired,

  /** The menu data for all menu items and defines the routes and titles for each item */
  menuItemsList: _propTypes.default.arrayOf(_propTypes.default.shape({
    route: _propTypes.default.string,
    title: _propTypes.default.string.isRequired,
    dropdownMenuItemsList: _propTypes.default.arrayOf(_propTypes.default.shape({
      route: _propTypes.default.string,
      title: _propTypes.default.string
    }))
  })).isRequired
};
Menu.defaultProps = {
  colour: 'grey'
};
var _default = Menu;
exports.default = _default;