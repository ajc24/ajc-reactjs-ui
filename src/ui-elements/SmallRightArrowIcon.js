import React from 'react';
import '../styling/ui-styles.css';

/**
 * The small right arrow icon can be used to highlight smaller links or buttons in your application UI. This icon is developed from pure CSS.
 */
class SmallRightArrowIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const containerStyle = 'ajc-small-right-arrow-icon-container ajc-default';
    return (
      <React.Fragment>
        <div role="presentation" className={containerStyle}></div>
      </React.Fragment>
    );
  }
}
export default SmallRightArrowIcon;
