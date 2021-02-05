import React from 'react';
import PropTypes from 'prop-types';
import MenuItemDropdown from './supporting-elements/MenuItemDropdown';
import MenuItemSingle from './supporting-elements/MenuItemSingle';
import '../styling/ui-styles.css';

/**
 * Menu bar component for rendering navigation links for your web application.
 * 
 * You can render any number of menu bar items within the container including single and dropdown menu items. These items will help your users to navigate around your
 * web application.
 * 
 * This menu component is designed to support desktop resolutions and mobile resolutions and will collapse / expand to suit all screen sizes.
 */
class Menu extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
    let containerStyle = 'ajc-menu-bar-container ajc-default';
    if (this.props.colour === 'red') {
      containerStyle += ' ajc-background-red';
    } else {
      containerStyle += ' ajc-background-grey-2';
    }
		const contentInnerStyle = 'ajc-menu-bar-content-inner';
		const contentOuterStyle = 'ajc-menu-bar-content-outer';
		return (
			<div role="navigation" id={this.props.id} className={containerStyle}>
        <div id="menu-bar-content-outer" className={contentOuterStyle}>
          <div id="menu-bar-content-inner" className={contentInnerStyle}>
            {
							this.props.menuItemsList.map((item, index) => {
								if (item.dropdownMenuItemsList === undefined) {
									return <MenuItemSingle id={`menu-item-${index}`} key={`menu-item-${index}`} route={item.route} title={item.title} colour={this.props.colour} />
								}
								return <MenuItemDropdown id={`dropdown-menu-${index}`} key={`dropdown-menu-${index}`} colour={this.props.colour} title={item.title} dropdownMenuItemsList={item.dropdownMenuItemsList} />
              })
						}
          </div>
        </div>
			</div>
		);
	}
}
Menu.propTypes = {
  /** The background colour for the menu bar */
  colour: PropTypes.oneOf([ 'grey', 'red' ]),
  /** The custom id for the menu bar being displayed */
  id: PropTypes.string.isRequired,
  /** The menu data for all menu items and defines the routes and titles for each item */
  menuItemsList: PropTypes.arrayOf(PropTypes.shape({
    route: PropTypes.string,
    title: PropTypes.string.isRequired,
    dropdownMenuItemsList: PropTypes.arrayOf(PropTypes.shape({
      route: PropTypes.string,
      title: PropTypes.string,
    })),
  })).isRequired,
};
Menu.defaultProps = {
	colour: 'grey'
};
export default Menu;
