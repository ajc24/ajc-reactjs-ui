import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SmallRightArrowIcon from '../SmallRightArrowIcon';
import '../../styling/ui-styles.css';

class DropdownMenuContainerAndItems extends React.Component {
  constructor(props) {
    super(props);
    /* Bind all component functions */
    this.setDropdownMenuContainerPosition = this.setDropdownMenuContainerPosition.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      /* Handle altering the dropdown menu position based on whether it exceeds the screen limits or not */
      this.setDropdownMenuContainerPosition();
      window.addEventListener('resize', this.setDropdownMenuContainerPosition, { capture: true });
    }, 10);
  }

  componentWillUnmount() {
    /* Remove the dynamically added resize event when the component is unmounted */
    window.removeEventListener('resize', this.setDropdownMenuContainerPosition, { capture: true });
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
    return (
      <div id={this.props.id} className={containerStyling}>
        {
          this.props.dropdownMenuItemsList.map((menuItem, index) => {
            return <Link to={menuItem.route} key={`${this.props.id}--key-menu-item-${index}`} className={dropdownMenuItemStyling} id={`${this.props.id}--dropdown-menu-item-${index}`}>
              &nbsp;&nbsp;{menuItem.title}&nbsp;&nbsp;
              <SmallRightArrowIcon colour="white" />
              &nbsp;&nbsp;
            </Link>
          })
        }
      </div>
    );
  }
}
DropdownMenuContainerAndItems.propTypes = {
  /** The unique identifier for the dropdown menu container */
  id: PropTypes.string.isRequired,
  /** The background colour for the container */
  colour: PropTypes.oneOf([ 'grey', 'red' ]),
  /** The unique identifier of this components parent DropdownMenu component */
  parentId: PropTypes.string.isRequired,
  /** Specifies whether the dropdown menu container is visible or hidden in the UI */
  isDisplayed: PropTypes.bool.isRequired,
  /** The dropdown menu data which defines the list of dropdown menu items and defines the route and title for each individual item */
  dropdownMenuItemsList: PropTypes.arrayOf(PropTypes.shape({
    route: PropTypes.string,
    title: PropTypes.string
  })).isRequired,
};
DropdownMenuContainerAndItems.defaultProps = {
  colour: 'grey'
};
export default DropdownMenuContainerAndItems;
