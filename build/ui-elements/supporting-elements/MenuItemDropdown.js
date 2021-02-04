"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DropdownMenuContainerAndItems = _interopRequireDefault(require("./DropdownMenuContainerAndItems"));

require("../../styling/ui-styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MenuItemDropdown extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
    /* Bind all relevant functions to the component */

    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
  }
  /**
   * Hides the dropdown menu from the UI
   * @param {Event}
   */


  hideDropdownMenu(event) {
    var _this = this;

    event.preventDefault();

    if (event.target.classList.contains('ajc-menu-bar-item-content') && event.target.getAttribute('data-expanded') === 'true') {
      /* Clicks on expanded dropdown menu items are registered twice (which closes and then re-opens the dropdown menu again) so ensure only one click is registered */
      event.stopPropagation();
    }

    if (event.target.getAttribute('id') !== `${this.props.id}--content-parent`) {
      /* If the user has clicked any item other than a dropdown menu item then collapse the dropdown menu */
      const newState = Object.assign({}, this.state, {
        isExpanded: false
      });
      this.setState(newState, function () {
        document.removeEventListener('click', _this.hideDropdownMenu, {
          capture: true
        });
      });
    }
  }
  /**
   * Displays the dropdown menu in the UI and adds a click listener to auto-hide the menu again
   * @param {Event} event 
   */


  showDropdownMenu(event) {
    var _this2 = this;

    event.preventDefault();
    const newState = Object.assign({}, this.state, {
      isExpanded: true
    });
    this.setState(newState, function () {
      document.addEventListener('click', _this2.hideDropdownMenu, {
        capture: true
      });
    });
  }

  render() {
    /* Set the styling for the component */
    const containerStyling = 'ajc-menu-bar-item-single';
    let menuBarItemStyling = 'ajc-menu-bar-item-content';

    if (this.props.colour === 'red') {
      menuBarItemStyling += ' ajc-menu-bar-item-red';
    } else {
      menuBarItemStyling += ' ajc-menu-bar-item-grey';
    }
    /* Set the menu item component to be displayed */


    let menuItemComponent;

    if (this.state.isExpanded === true) {
      menuItemComponent = /*#__PURE__*/_react.default.createElement("div", {
        className: menuBarItemStyling,
        onClick: this.hideDropdownMenu,
        "data-expanded": `${this.state.isExpanded}`
      }, "\xA0\xA0", this.props.title, "\xA0\u25B4\xA0\xA0");
    } else {
      menuItemComponent = /*#__PURE__*/_react.default.createElement("div", {
        className: menuBarItemStyling,
        onClick: this.showDropdownMenu,
        "data-expanded": `${this.state.isExpanded}`
      }, "\xA0\xA0", this.props.title, "\xA0\u25BE\xA0\xA0");
    }

    return /*#__PURE__*/_react.default.createElement("div", {
      id: `${this.props.id}`,
      className: containerStyling
    }, menuItemComponent, /*#__PURE__*/_react.default.createElement(_DropdownMenuContainerAndItems.default, {
      id: `${this.props.id}--content-parent`,
      colour: this.props.colour,
      parentId: this.props.id,
      isDisplayed: this.state.isExpanded,
      dropdownMenuItemsList: this.props.dropdownMenuItemsList
    }));
  }

}

MenuItemDropdown.propTypes = {
  /** The unique identifier for the dropdown menu element */
  id: _propTypes.default.string.isRequired,

  /** The hover colour for the dropdown menu element */
  colour: _propTypes.default.oneOf(['grey', 'red']),

  /** The title for the dropdown menu to be displayed */
  title: _propTypes.default.string.isRequired,

  /** The dropdown menu data which defines the list of dropdown menu items and defines the route and title for each individual item */
  dropdownMenuItemsList: _propTypes.default.arrayOf(_propTypes.default.shape({
    route: _propTypes.default.string,
    title: _propTypes.default.string
  })).isRequired
};
MenuItemDropdown.defaultProps = {
  colour: 'grey'
};
var _default = MenuItemDropdown;
exports.default = _default;