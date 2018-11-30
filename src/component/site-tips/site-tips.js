import React from 'react';

class SiteTips extends React.Component {
  // constructor, super(props)
  render() {
    return (
      <nav className="siteTips">
        <h3 ><b>Tips:</b></h3>
        <p>After creating section or card, try double clicking on:</p>
        <p>- Expense Section Title</p>
        <p>- Card Expense Title</p>
      </nav>
    );
  }
}

export default SiteTips;
