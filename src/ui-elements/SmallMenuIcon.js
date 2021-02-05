import React from 'react';
import PropTypes from 'prop-types';
import '../styling/ui-styles.css';

/**
 * The small menu icon can be used to highlight smaller menu items or links in your application UI. This icon is developed from pure CSS.
 * 
 * You can render this icon in a choice of colours: black or white.
 */
class SmallMenuIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const containerStyle = 'ajc-small-menu-icon-container ajc-default';
    let upperIconStyle = 'ajc-small-menu-icon-upper';
    let lowerIconStyle = 'ajc-small-menu-icon-lower';
    if (this.props.colour === 'white') {
      upperIconStyle += ' ajc-background-white';
      lowerIconStyle += ' ajc-background-white';
    } else {
      upperIconStyle += ' ajc-background-black';
      lowerIconStyle += ' ajc-background-black';
    }
    return (
      <div role="presentation" className={containerStyle}>
        <div className={upperIconStyle}></div>
        <div className={upperIconStyle}></div>
        <div className={lowerIconStyle}></div>
      </div>
    );
  }
}
SmallMenuIcon.propTypes = {
  /** The colour of the small icon */
  colour: PropTypes.oneOf([ 'white', 'black' ]),
};
SmallMenuIcon.defaultProps = {
	colour: 'black'
};
export default SmallMenuIcon;
