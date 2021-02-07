import React from 'react';
import PropTypes from 'prop-types';
import '../styling/ui-styles.css';

/**
 * The MainContentHeading component acts as the heading text display for each individual page in a web application.
 * 
 * You can render any text content you wish as your page title text. For best results this component is intended for use with the MainContentPanel component. This component will be
 * rendered at a maximum width of 1349px with both the title heading text and underline divider displayed centrally within. This component will collapse in size to support smaller
 * screen sizes such as mobile devices. 
 */
class MainContentHeading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const containerStyling = 'ajc-main-content-heading-container ajc-text-black ajc-default';
    const headingStyling = 'ajc-main-content-heading-text';
    const dividerOuterStyling = 'ajc-main-content-heading-divider-outer';
    const dividerInnerStyling = 'ajc-main-content-heading-divider-inner';
    return (
      <div className={containerStyling}>
        <h1 className={headingStyling}>{this.props.pageHeading}</h1>
        <div role="presentation" className={dividerOuterStyling}>
          <div className={dividerInnerStyling}></div>
        </div>
      </div>
    );
  }
}
MainContentHeading.propTypes = {
  /** The text content to be displayed as the page heading */
  pageHeading: PropTypes.node.isRequired,
};
export default MainContentHeading;
