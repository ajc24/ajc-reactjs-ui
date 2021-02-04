import React from 'react';
import PropTypes from 'prop-types';
import '../styling/ui-styles.css';

/**
 * Header title and subtitle component for the header section of a web page template.
 * 
 * This component is designed to render your web applications title and subtitle text content. It can be rendered with any combination of black or white text with a black or white
 * outline. You can set any text content you wish as the title text and the subtitle text. If required you can also implement a text indent which will indent all component text
 * to the right by the specified number of pixels.
 * 
 * For best results this component is intended for use with the Header component.
 */
class HeaderTitleAndSubtitle extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.headingIndent) {
      const containerElement = document.querySelector(`div[id="${this.props.id}"]`);
      containerElement.style.paddingLeft = `${this.props.headingIndent}px`;
    }
  }

  render() {
    const containerStyling = 'ajc-header-title-subtitle-container ajc-default';
    const topHeadingStyling = 'ajc-header-title-subtitle-top';
    const bottomHeadingStyling = 'ajc-header-title-subtitle-bottom';
    let titleTextStyling = 'ajc-header-title-subtitle-heading-one';
    if (this.props.titleTextOutline === 'black') {
      titleTextStyling += ' ajc-header-text-outline-black';
    } else {
      titleTextStyling += ' ajc-header-text-outline-white';
    }
    if (this.props.titleTextColour === 'white') {
      titleTextStyling += ' ajc-text-white';
    } else {
      titleTextStyling += ' ajc-text-black';
    }
    let subtitleTextStyling = 'ajc-header-title-subtitle-heading-two';
    if (this.props.subtitleTextOutline === 'black') {
      subtitleTextStyling += ' ajc-header-text-outline-black';
    } else {
      subtitleTextStyling += ' ajc-header-text-outline-white';
    }
    if (this.props.subtitleTextColour === 'white') {
      subtitleTextStyling += ' ajc-text-white';
    } else {
      subtitleTextStyling += ' ajc-text-black';
    }
    return (
      <div id={this.props.id} className={containerStyling}>
        <div className={topHeadingStyling}>
          <h1 className={titleTextStyling}>{this.props.titleTextContent}</h1>
        </div>
        <div className={bottomHeadingStyling}>
          <h2 className={subtitleTextStyling}>{this.props.subtitleTextContent}</h2>
        </div>
      </div>
    );
  }
}
HeaderTitleAndSubtitle.propTypes = {
  /** The unique identifier for the header component */
  id: PropTypes.string.isRequired,
  /** The indentation (in pixels) which is to be applied to the title and subtitle text */
  headingIndent: PropTypes.number,
  /** The colour of the outline surrounding the title text */
  titleTextOutline: PropTypes.oneOf([ 'black', 'white' ]),
  /** The colour of the title text */
  titleTextColour: PropTypes.oneOf([ 'black', 'white' ]),
  /** The title text content */
  titleTextContent: PropTypes.string.isRequired,
  /** The colour of the outline surrounding the subtitle text */
  subtitleTextOutline: PropTypes.oneOf([ 'black', 'white' ]),
  /** The colour of the subtitle text */
  subtitleTextColour: PropTypes.oneOf([ 'black', 'white' ]),
  /** The subtitle text content */
  subtitleTextContent: PropTypes.string.isRequired,
};
HeaderTitleAndSubtitle.defaultProps = {
  headingIndent: undefined,
  subtitleTextColour: 'black',
  subtitleTextOutline: 'white',
  titleTextColour: 'black',
  titleTextOutline: 'white',
};
export default HeaderTitleAndSubtitle;
