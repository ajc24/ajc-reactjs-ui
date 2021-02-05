"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _SmallRightArrowIcon = _interopRequireDefault(require("../SmallRightArrowIcon"));

require("../../styling/ui-styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DropdownMenuContainerAndItems extends _react.default.Component {
  constructor(props) {
    super(props);
    /* Bind all component functions */

    this.setDropdownMenuContainerPosition = this.setDropdownMenuContainerPosition.bind(this);
  }

  componentDidMount() {
    var _this = this;

    setTimeout(function () {
      /* Handle altering the dropdown menu position based on whether it exceeds the screen limits or not */
      _this.setDropdownMenuContainerPosition();

      window.addEventListener('resize', _this.setDropdownMenuContainerPosition, {
        capture: true
      });
    }, 10);
  }

  componentWillUnmount() {
    /* Remove the dynamically added resize event when the component is unmounted */
    window.removeEventListener('resize', this.setDropdownMenuContainerPosition, {
      capture: true
    });
  }
  /**
   * Sets the position of the dropdown container element
   */


  setDropdownMenuContainerPosition() {
    /* Find the boundaries of the parent menu item for this component */
    const parentMenuItemElement = document.querySelector(`div[id="${this.props.parentId}"]`);
    const parentMenuItemElementBoundary = parentMenuItemElement.getBoundingClientRect();
    /* Find the boundaries for the container element itself */

    const containerElement = document.querySelector(`div[id="${this.props.id}"]`);
    const containerElementBoundary = containerElement.getBoundingClientRect();
    /* Ensure all children menu items are at least as wide as their parent menu item */

    if (containerElementBoundary.width < parentMenuItemElementBoundary.width) {
      containerElement.style.width = `${parentMenuItemElementBoundary.width}px`;
    } else {
      containerElement.style.width = `${containerElementBoundary.width}px`;
    }

    containerElement.style.minWidth = containerElement.style.width;
    /* Determine if the leftmost position of the children menu items needs to be adjusted to fit the screen size */

    let leftmostPosition = parentMenuItemElementBoundary.left;

    if (parentMenuItemElementBoundary.left + containerElementBoundary.width > window.innerWidth) {
      leftmostPosition = window.innerWidth - containerElementBoundary.width;
    }
    /* Set the top and left positions for this element */


    containerElement.style.top = `${parentMenuItemElementBoundary.bottom}px`;
    containerElement.style.left = `${leftmostPosition}px`;
  }

  render() {
    var _this2 = this;

    let containerStyling = 'ajc-dropdown-menu-container';
    let dropdownMenuItemStyling = 'ajc-dropdown-menu-item';

    if (this.props.colour === 'red') {
      containerStyling += ' ajc-background-red';
      dropdownMenuItemStyling += ' ajc-menu-bar-item-red';
    } else {
      containerStyling += ' ajc-background-grey-2';
      dropdownMenuItemStyling += ' ajc-menu-bar-item-grey';
    }

    if (this.props.isDisplayed === true) {
      containerStyling += ' ajc-dropdown-menu-container-visible ajc-visible';
    } else {
      containerStyling += ' ajc-dropdown-menu-container-hidden ajc-hidden';
    }

    return /*#__PURE__*/_react.default.createElement("div", {
      id: this.props.id,
      className: containerStyling
    }, this.props.dropdownMenuItemsList.map(function (menuItem, index) {
      return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
        to: menuItem.route,
        key: `${_this2.props.id}--key-menu-item-${index}`,
        className: dropdownMenuItemStyling,
        id: `${_this2.props.id}--dropdown-menu-item-${index}`
      }, "\xA0\xA0", menuItem.title, "\xA0\xA0", /*#__PURE__*/_react.default.createElement(_SmallRightArrowIcon.default, {
        colour: "white"
      }), "\xA0\xA0");
    }));
  }

}

DropdownMenuContainerAndItems.propTypes = {
  /** The unique identifier for the dropdown menu container */
  id: _propTypes.default.string.isRequired,

  /** The background colour for the container */
  colour: _propTypes.default.oneOf(['grey', 'red']),

  /** The unique identifier of this components parent DropdownMenu component */
  parentId: _propTypes.default.string.isRequired,

  /** Specifies whether the dropdown menu container is visible or hidden in the UI */
  isDisplayed: _propTypes.default.bool.isRequired,

  /** The dropdown menu data which defines the list of dropdown menu items and defines the route and title for each individual item */
  dropdownMenuItemsList: _propTypes.default.arrayOf(_propTypes.default.shape({
    route: _propTypes.default.string,
    title: _propTypes.default.string
  })).isRequired
};
DropdownMenuContainerAndItems.defaultProps = {
  colour: 'grey'
};
var _default = DropdownMenuContainerAndItems;
exports.default = _default;