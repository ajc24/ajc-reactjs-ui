import React from 'react';
import PropTypes from 'prop-types';
import '../styling/ui-styles.css';

/**
 * The Footer component acts as a container for footer-related information for each page in your web application.
 * 
 * In this case the footer data is expected to be a one line description / text content for your web application. This component is not intended for rendering multiple inner
 * components or links. The footer is designed to support desktop resolutions and mobile resolutions and will collapse / expand to suit all screen sizes.
 */
class Footer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
    let containerStyle = 'ajc-footer-container ajc-text-white ajc-default';
    if (this.props.colour === 'red') {
      containerStyle += ' ajc-background-red';
    } else {
      containerStyle += ' ajc-background-grey-2';
    }
		const contentInnerStyle = 'ajc-footer-content-inner';
		const contentOuterStyle = 'ajc-footer-content-outer';
		return (
			<div role="contentinfo" className={containerStyle}>
        <div className={contentOuterStyle}>
          <div className={contentInnerStyle}>
            {this.props.children}
          </div>
        </div>
			</div>
		);
	}
}
Footer.propTypes = {
  /** The background colour for the footer */
  colour: PropTypes.oneOf([ 'grey', 'red' ]),
  /** The children components to be displayed within the footer */
  children: PropTypes.node.isRequired,
};
Footer.defaultProps = {
	colour: 'grey'
};
export default Footer;
