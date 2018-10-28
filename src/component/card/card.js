import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CardForm from '../card-form/card-form';
import * as cardActions from '../../action/card-actions';

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

    const editingJSX = <CardForm card={ card } onComplete={ this.handleUpdateCardAndHideForm } /> ;
    const renderJSX = this.state.editing ? editingJSX :
      <React.Fragment>
        { card.content }
        <button onClick={() => removeCard(card)}> X </button>
      </React.Fragment> ;

    return (
      <li>
        <div onDoubleClick={this.handleUpdateRequest}>
          { renderJSX }
        </div>
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
