import React from 'react';
import PropTypes from 'prop-types';
import HeaderBackgroundImage from './supporting-elements/HeaderBackgroundImage';
import '../styling/ui-styles.css';

/**
 * Header component for a web page template.
 * 
 * Header components can be rendered with an upper grey border of 5px, an upper red border of 5px or no border at all. It can also be rendered with a white, grey, yellow or a
 * transparent background. It is also possible to render an image as the background for the component. You can render any component(s) you wish inside its inner container such
 * as text components, images etc. which will further describe your web page to your users.
 * 
 * This header component is designed to support desktop resolutions and mobile resolutions and will collapse / expand to suit all screen sizes.
 */
class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let containerStyle = 'ajc-header-container ajc-default ajc-text-black';
    if (this.props.topBorder === 'grey') {
      containerStyle += ' ajc-header-border-top-grey';
    } else if (this.props.topBorder === 'red') {
      containerStyle += ' ajc-header-border-top-red';
    }
    if (this.props.imageSrc === undefined) {
      if (this.props.backgroundColour === 'white') {
        containerStyle += ' ajc-background-white';
      } else if (this.props.backgroundColour === 'grey') {
        containerStyle += ' ajc-background-grey-1';
      } else if (this.props.backgroundColour === 'yellow') {
        containerStyle += ' ajc-background-yellow';
      } else {
        containerStyle += ' ajc-background-transparent';
      }
    }
    const contentOuterStyle = 'ajc-header-content-outer';
    const contentInnerStyle = 'ajc-header-content-inner';
    return (
      <div role="banner" id={this.props.id} className={containerStyle}>
        { this.props.imageSrc ? <HeaderBackgroundImage id={this.props.imageId} imageSrc={this.props.imageSrc} /> : undefined }
        <div className={contentOuterStyle}>
          <div className={contentInnerStyle}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
Header.propTypes = {
  /** The unique identifier for the header component */
  id: PropTypes.string.isRequired,
  /** The child components to be rendered within the component */
  children: PropTypes.node,
  /** The background colour of the header panel */
  backgroundColour: PropTypes.oneOf([ 'transparent', 'white', 'grey', 'yellow' ]),
  /** The border to appear at the top of the panel */
  topBorder: PropTypes.oneOf([ 'grey', 'red', 'none' ]),
  /** The unique identifier for the headers background image */
  imageId: PropTypes.string,
  /** The source data of the image to be displayed as the header background */
  imageSrc: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]),
};
Header.defaultProps = {
  children: undefined,
  backgroundColour: 'transparent',
  topBorder: 'none',
  imageId: 'default-header-background-image-id',
  imageSrc: undefined,
};
export default Header;
