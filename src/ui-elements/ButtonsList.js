import React from 'react';
import PropTypes from 'prop-types';
import '../styling/ui-styles.css';

/**
 * The ButtonsList component allows you to render any number of buttons including a single button, all aligned horizontally with either a left or central alignment within
 * the container.
 * 
 * This component will be rendered at a maximum width of 1349px with all content displayed within based on your alignment preference. Each button is separated by 20px.
 * This component will collapse in size to support smaller screen sizes such as mobile devices.
 * 
 * You can choose from two button types: a standard button type or a submit button type for use with forms.
 * 
 * For best results this component is intended for use within the MainContentPanel component and within the scope of a HTML `<form>`.
 */
class ButtonsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    /* Create the button container styling */
    let buttonContainerStyling = 'ajc-buttons-list-container';
    if (this.props.alignment === 'center-align') {
      buttonContainerStyling += ' ajc-buttons-list-container-center-align';
    } else if (this.props.alignment === 'right-align') {
      buttonContainerStyling += ' ajc-buttons-list-container-right-align';
    } else {
      buttonContainerStyling += ' ajc-buttons-list-container-left-align';
    }
    buttonContainerStyling += ' ajc-default';
    /* Create the styling for each of the buttons in the list */
    let generalButtonStyling = 'ajc-button ajc-default';
    let rightmostButtonStyling = 'ajc-button ajc-default';
    if (this.props.colour === 'red') {
      generalButtonStyling += ' ajc-button-red';
      rightmostButtonStyling += ' ajc-button-red';
    } else {
      generalButtonStyling += ' ajc-button-grey';
      rightmostButtonStyling += ' ajc-button-grey';
    }
    if (this.props.buttonsList.length > 1) {
      generalButtonStyling += ' ajc-button-right-spacing';
    }
    return (
      <div className={buttonContainerStyling}>
        {
					this.props.buttonsList.map((item, index) => {
            if (this.props.buttonsList.length > 1 && index === this.props.buttonsList.length - 1) {
              /* Render the most right-aligned button in the list */
              return <button id={item.id} key={`${item.id}-${index}`} className={rightmostButtonStyling} type={item.type} onClick={item.onClick}>{item.title}</button>
            }
            /* Render a general button in the list */
            return <button id={item.id} key={`${item.id}-${index}`} className={generalButtonStyling} type={item.type} onClick={item.onClick}>{item.title}</button>
          })
				}
      </div>
    );
  }
}
ButtonsList.propTypes = {
  /** The alignment for the buttons in the list: left aligned (default) or center aligned. */
  alignment: PropTypes.oneOf([ 'left-align', 'center-align', 'right-align' ]),
  /** The background colour for each of the buttons in the list. */
  colour: PropTypes.oneOf([ 'grey', 'red' ]),
  /** The buttons list data for all buttons to be rendered in the list */
  buttonsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf([ 'button', 'submit' ]).isRequired
  })).isRequired,
};
ButtonsList.defaultProps = {
  alignment: 'left-align',
  colour: 'grey',
};
export default ButtonsList;
