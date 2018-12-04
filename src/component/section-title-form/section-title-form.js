// imports

// package
import React from 'react';
import PropTypes from 'prop-types';

// styles
import './section-title-form.scss';

const emptyState = {
  expenseType: '',
  expenseAmt: 0,
};

class SectionTitleForm extends React.Component {
  constructor(props) {
    super(props);
    // state should never be empty in this form...
    this.state = this.props.section || emptyState;
  }
  handleChange = (event) => {
    let { name, value } = event.target;
    if (name === 'expenseAmt' ) {
      // prevent any characters but 0
      if (isNaN(value)) {
        alert(`Resetting NaN characters to 0. Please only use Numbers.`);
        value = 0;
      }
      value = Number(value);
    }
    this.setState({[name]: value});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onComplete(this.state);
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}>

        <input
          type='text'
          name="expenseType"
          placeholder='e.g. Commute'
          value={this.state.expenseType}
          onChange={this.handleChange}
        />
        { /* <input
          type='text'
          name="expenseAmt"
          placeholder='expense amount'
          value={this.state.expenseAmt}
          onChange={this.handleChange}
        /> */ }
        <br />
        <button className="updateSectionTitleButton" type='submit'> update section title </button>
      </form>
    );
  }
};

SectionTitleForm.propTypes = {
  section: PropTypes.object,
  onComplete : PropTypes.func,
};

export default SectionTitleForm;
