import React from 'react';
import PropTypes from 'prop-types';

const emptyState = { content: ''};

class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.card || emptyState;
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ content: value});
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const sectionId = this.props.section ? this.props.section.id : this.props.card.sectionId;
    const content = this.state.content;
    //! this.props.section.id will work with CREATE
    //! this.props.card.sectionID will work with UPDATE
    this.props.onComplete({
      ...this.state,
      sectionId,
    });
    //! 1 - What is the goal of this line?
    //    Create a new card by calling a reducer
    //! 2 - Is this line accomplishing that goal
    //    NO
    this.setState(emptyState);
  };

  render() {
    const { card } = this.props;
    const buttonText = card ? 'Update Expense' : 'Create Expense';

    return (
      <form
        className="card-form"
        onSubmit={this.handleSubmit}
      >
        <input
          type="text"
          name="content"
          placeholder="e.g. Orca Pass"
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button type="submit"> {buttonText} </button>
      </form>
    );
  }
}

CardForm.propTypes = {
  onComplete: PropTypes.func,
  section: PropTypes.object,
  card: PropTypes.object,
};

export default CardForm;
