import React from 'react';
import PropTypes from 'prop-types';
import '../styling/ui-styles.css';

/**
 * The MainContentText component is a versatile component which can render a paragraph of text in a number of different ways.
 * 
 * - `paragraph` is the default type for this component. Text will appear cleanly and without any additional formatting. 
 * - Using the `heading` type property will render a paragraph heading. All text within the paragraph will appear in bold.
 * - The `hyperlink` option will render all text within the paragraph as a hyperlink. You also must set the href property in order for a hyperlink to be displayed.
 * - Finally setting the `paragraph-italics` type property will render all text within the paragraph in italics.
 * 
 * Setting the addUpperSpacing property will add 30px of additional spacing above the paragraph being rendered. This is especially useful to add a visual break between
 * paragraphs on each page of the application.
 * 
 * This component will be rendered at a maximum width of 1349px with all text content displayed left-aligned within. This component will collapse in size to support smaller
 * screen sizes such as mobile devices.
 * 
 * This component is developed to work best with the MainContentPanel component.
 */
class MainContentText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    /* Create the styling for the paragraph container */
    let containerStyling = 'ajc-text-paragraph-container ajc-text-black ajc-default';
    if (this.props.addUpperSpacing === true) {
      containerStyling += ' ajc-text-paragraph-upper-spacing';
    }
    let innerHTMLContent;
    if (this.props.type === 'heading') {
      /* Render a heading in this text component */
      const headingStyling = 'ajc-text-paragraph-heading';
      innerHTMLContent = <b className={headingStyling}>{this.props.children}</b>;
    } else if (this.props.type === 'hyperlink' && this.props.href !== undefined) {
      /* Render a hyperlink in this text component */
      const linkStyling = 'ajc-hyperlink';
      innerHTMLContent = <a className={linkStyling} href={this.props.href}>{this.props.children}</a>;
    } else if (this.props.type === 'paragraph-italics') {
      /* Render a paragraph in italics */
      innerHTMLContent = <i>{this.props.children}</i>;
    } else {
      /* Default to a standard paragraph */
      innerHTMLContent = this.props.children;
    }
    return (
      <p className={containerStyling}>
        {innerHTMLContent}
      </p>
    );
  }
}
MainContentText.propTypes = {
  addUpperSpacing: PropTypes.bool,
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  type: PropTypes.oneOf(['heading', 'hyperlink', 'paragraph', 'paragraph-italics']),
};
MainContentText.defaultProps = {
  addUpperSpacing: false,
  href: undefined,
  type: 'paragraph',
};
export default MainContentText;
