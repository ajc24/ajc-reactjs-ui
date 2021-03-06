import React from 'react';
import PropTypes from 'prop-types';
import '../styling/ui-styles.css';

/**
 * The MainContentScreenshot component allows you to render a screenshot with a caption underneath on any page of a web application. This component is intended for rendering gaming
 * or TV based screenshots within articles but can be used to render any desired image.
 * 
 * You can render any text content you wish as the caption text. This component will be rendered at a maximum width of 1349px with the caption text rendered in bold and
 * displayed centrally underneath the screenshot. This component will collapse in size to support smaller screen sizes such as mobile devices.
 * 
 * For best results this component is intended for use within the MainContentPanel component. 
 */
class MainContentScreenshot extends React.Component {
  constructor(props) {
    super(props);
    this.disableMouseDownEvent = this.disableMouseDownEvent.bind(this);
    this.setImageLoaded = this.setImageLoaded.bind(this);
  }

  /**
   * Disables the mouse down event for the image
   * @param {Event} event 
   */
  disableMouseDownEvent(event) {
    event.preventDefault();
  }

  /**
   * Sets the image as loaded and transitions it into the UI
   */
  setImageLoaded() {
    const imageElement = document.querySelector(`img[id="${this.props.id}"]`);
    imageElement.style.opacity = 1;
  }

  render() {
    const containerStyling = 'ajc-screenshot-container ajc-text-black ajc-default';
    const innerStyling = 'ajc-screenshot-image-inner';
    const imageStyling = 'ajc-screenshot-image';
    const captionStyling = 'ajc-screenshot-caption';
    return (
      <div className={containerStyling}>
        <div className={innerStyling}>
          <img id={this.props.id} className={imageStyling} src={this.props.imageSrc} role="presentation" onLoad={this.setImageLoaded} onMouseDown={this.disableMouseDownEvent} />
        </div>
        <p id={`${this.props.id}-caption`} className={captionStyling}>
          {this.props.caption}
        </p>
      </div>
    );
  }
}
MainContentScreenshot.propTypes = {
  /** The unique identifier for the screenshot component */
  id: PropTypes.string.isRequired,
  /** The caption to appear underneath the screenshot */
  caption: PropTypes.string.isRequired,
  /** The image to be displayed within the component. */
  imageSrc: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]).isRequired,
};
export default MainContentScreenshot;
