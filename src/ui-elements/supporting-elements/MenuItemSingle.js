import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../styling/ui-styles.css';

/**
 * The MenuItemSingle component acts as a standard menu item for the MenuBar component
 */
class MenuItemSingle extends React.Component {
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
    return (
      <div id={this.props.id} className={itemStyling}>
        <Link to={this.props.route} className={innerItemStyling}>
          &nbsp;&nbsp;&nbsp;{this.props.title}&nbsp;&nbsp;&nbsp;
        </Link>
      </div>
    );
  }
}
MenuItemSingle.propTypes = {
  /** The unique identifier for the menu item element */
  id: PropTypes.string.isRequired,
  /** The background colour for the menu item */
  colour: PropTypes.oneOf([ 'grey', 'red' ]),
  /** The route to navigate to on clicking on the menu item */
  route: PropTypes.string.isRequired,
  /** The title for the webpage being displayed */
  title: PropTypes.string.isRequired,
};
MenuItemSingle.defaultProps = {
  colour: 'grey'
};
export default MenuItemSingle;
