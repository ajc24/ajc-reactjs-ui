import React from 'react';
import PropTypes from 'prop-types';
import '../styling/ui-styles.css';

/**
 * The MainContentPanel component acts as a container for the main content of each page in your web application.
 * 
 * You can render any component(s) you wish as your main content. You may choose to render this component with a transparent or grey background.
 */
class MainContentPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    /* Set the title for the current webpage */
    document.title = this.props.title;

    /* Ensure that the <body> element stretches to 100% of the width of the screen, that the X axis scrollbar is hidden and Y axis scrollbar is always displayed */
    document.body.classList.add('ajc-body-full-screen');
  }

  render() {
    let containerStyling = 'ajc-main-content-container ajc-default';
    if (this.props.colour === 'grey') {
      containerStyling += ' ajc-background-grey-1';
    } else if (this.props.colour === 'white') {
      containerStyling += ' ajc-background-white';
    } else {
      containerStyling += ' ajc-background-transparent';
    }
    const outerStyling = 'ajc-main-content-outer';
    const innerStyling = 'ajc-main-content-inner';
    return <div role="region" className={containerStyling}>
      <div className={outerStyling}>
        <div className={innerStyling}>
          {this.props.children}
        </div>
      </div>
    </div>;
  }
}
MainContentPanel.propTypes = {
  /** The children components to be displayed within the web page */
  children: PropTypes.node.isRequired,
  /** The background colour for the webpage */
  colour: PropTypes.oneOf([ 'grey', 'white', 'transparent' ]),
  /** The title for the webpage being displayed. This affects the title text displayed in your browser tab */
  title: PropTypes.string.isRequired,
};
MainContentPanel.defaultProps = {
  colour: 'white'
};
export default MainContentPanel;
