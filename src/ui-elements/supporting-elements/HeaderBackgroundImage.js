import React from 'react';
import PropTypes from 'prop-types';
import '../../styling/ui-styles.css';

class HeaderBackgroundImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const imageStyling = 'ajc-header-image';
    return (
      <React.Fragment>
        <img id={this.props.id} className={imageStyling} src={this.props.imageSrc} role="presentation" />
      </React.Fragment>
    );
  }
}
HeaderBackgroundImage.propTypes = {
  /** The unique identifier for the component. */
  id: PropTypes.string.isRequired,
  /** The image to be displayed within the component. */
  imageSrc: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]).isRequired,
};
export default HeaderBackgroundImage;
