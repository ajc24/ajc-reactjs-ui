import React from 'react';
import PropTypes from 'prop-types';
import '../styling/ui-styles.css';

/**
 * Header Logo component for use with the Header component.
 * 
 * Header Logo components can be rendered with any image of your choice. The intention of this image is to further describe your web page to your users. Logos are rendered at
 * 145px by 145px square.
 */
class HeaderLogo extends React.Component {
  constructor(props) {
    super(props);
    this.setImageLoaded = this.setImageLoaded.bind(this);
  }

  /**
   * Sets the image as loaded and transitions it into the UI
   */
  setImageLoaded() {
    const imageElement = document.querySelector(`img[id="${this.props.id}"]`);
    imageElement.style.opacity = 1;
  }

  render() {
    const imageStyling = 'ajc-header-logo';
    return (
      <React.Fragment>
        <img id={this.props.id} className={imageStyling} src={this.props.imageSrc} role="presentation" onLoad={this.setImageLoaded} />
      </React.Fragment>
    );
  }
}
HeaderLogo.propTypes = {
  /** The unique identifier for the header logo component */
  id: PropTypes.string.isRequired,
  /** The image to be displayed within the component. */
  imageSrc: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]).isRequired,
};
export default HeaderLogo;
