import React from 'react';
import '../styling/ui-styles.css';

/**
 * The small menu icon can be used to highlight smaller menu items or links in your application UI. This icon is developed from pure CSS.
 */
class SmallMenuIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const containerStyle = 'ajc-small-menu-icon-container ajc-default';
    const upperIconStyle = 'ajc-small-menu-icon-upper';
    const lowerIconStyle = 'ajc-small-menu-icon-lower';
    return (
      <div role="presentation" className={containerStyle}>
        <div className={upperIconStyle}></div>
        <div className={upperIconStyle}></div>
        <div className={lowerIconStyle}></div>
      </div>
    );
  }
}
export default SmallMenuIcon;
