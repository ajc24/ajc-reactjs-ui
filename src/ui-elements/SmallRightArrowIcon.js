import React from 'react';
import PropTypes from 'prop-types';
import '../styling/ui-styles.css';

/**
 * The small right arrow icon can be used to highlight smaller links or buttons in your application UI. This icon is developed from pure CSS.
 * 
 * You can render this icon in a choice of colours: black or white.
 */
class SmallRightArrowIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let containerStyle = 'ajc-small-right-arrow-icon-container ajc-default';
    if (this.props.colour === 'white') {
      containerStyle += ' ajc-border-colour-white';
    } else {
      containerStyle += ' ajc-border-colour-black';
    }
    return (
      <React.Fragment>
        <div role="presentation" className={containerStyle}></div>
      </React.Fragment>
    );
  }
}
SmallRightArrowIcon.propTypes = {
  /** The colour of the small icon */
  colour: PropTypes.oneOf([ 'white', 'black' ]),
};
SmallRightArrowIcon.defaultProps = {
	colour: 'black'
};
export default SmallRightArrowIcon;
