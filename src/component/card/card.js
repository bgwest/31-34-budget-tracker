// imports

// packages
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// components
import CardForm from '../card-form/card-form';

// actions
import * as cardActions from '../../action/card-actions';

// styles
import './card.scss';

class Card extends React.Component {
  constructor(props) {
    super(props);
    // UI State
    this.state = {
      editing: false,
    };
  }

  handleUpdateRequest = () => {
    this.setState({editing: true});
  };

  handleUpdateCardAndHideForm = (card) => {
    this.setState({editing: false});
    this.props.updateCard(card);
  };

  render() {
    const { card, removeCard } = this.props;

    const editingJSX = <CardForm card={ card } onComplete={ this.handleUpdateCardAndHideForm } />;
    const renderJSX = this.state.editing ? editingJSX :
      <div className="expenseLineItem">
        <button className="removeCardButton" onClick={() => removeCard(card)}> X </button>
        { `$${card.expenseAmt} - ${card.content}` }
      </div>;

    return (
        <li onDoubleClick={this.handleUpdateRequest}>
          { renderJSX }
        </li>
    );
  }
}

Card.propTypes = {
  card: PropTypes.object,
  cardRemove: PropTypes.func,
  cardUpdate: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  removeCard: data => dispatch(cardActions.removeCard(data)),
  updateCard: data => dispatch(cardActions.updateCard(data)),
});

export default connect(null, mapDispatchToProps)(Card);
