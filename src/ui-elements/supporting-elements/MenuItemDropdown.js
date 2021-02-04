import React from 'react';
import PropTypes from 'prop-types';
import DropdownMenuContainerAndItems from './DropdownMenuContainerAndItems';
import '../../styling/ui-styles.css';

class MenuItemDropdown extends React.Component {
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
      this.setState(newState, () => {
        document.removeEventListener('click', this.hideDropdownMenu, { capture: true });
      });
    }
  }

  /**
   * Displays the dropdown menu in the UI and adds a click listener to auto-hide the menu again
   * @param {Event} event 
   */
  showDropdownMenu(event) {
    event.preventDefault();
    const newState = Object.assign({}, this.state, {
      isExpanded: true
    });
    this.setState(newState, () => {
      document.addEventListener('click', this.hideDropdownMenu, { capture: true });
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
      menuItemComponent = <div className={menuBarItemStyling} onClick={this.hideDropdownMenu} data-expanded={`${this.state.isExpanded}`}>
          &nbsp;&nbsp;{this.props.title}&nbsp;&#9652;&nbsp;&nbsp;
        </div>;
    } else {
      menuItemComponent = <div className={menuBarItemStyling} onClick={this.showDropdownMenu} data-expanded={`${this.state.isExpanded}`}>
          &nbsp;&nbsp;{this.props.title}&nbsp;&#9662;&nbsp;&nbsp;
        </div>;
    }
    return (
      <div id={`${this.props.id}`} className={containerStyling}>
        {menuItemComponent}
        <DropdownMenuContainerAndItems id={`${this.props.id}--content-parent`} colour={this.props.colour} parentId={this.props.id} isDisplayed={this.state.isExpanded} dropdownMenuItemsList={this.props.dropdownMenuItemsList} />
      </div>
    );
  }
}
MenuItemDropdown.propTypes = {
  /** The unique identifier for the dropdown menu element */
  id: PropTypes.string.isRequired,
  /** The hover colour for the dropdown menu element */
  colour: PropTypes.oneOf([ 'grey', 'red' ]),
  /** The title for the dropdown menu to be displayed */
  title: PropTypes.string.isRequired,
  /** The dropdown menu data which defines the list of dropdown menu items and defines the route and title for each individual item */
  dropdownMenuItemsList: PropTypes.arrayOf(PropTypes.shape({
    route: PropTypes.string,
    title: PropTypes.string
  })).isRequired,
};
MenuItemDropdown.defaultProps = {
  colour: 'grey'
};
export default MenuItemDropdown;