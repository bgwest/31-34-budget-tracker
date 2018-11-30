import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SectionTitleForm from '../section-title-form/section-title-form';

import CardForm from '../card-form/card-form';
import Card from '../card/card';
import * as cardActions from '../../action/card-actions';

import DeleteExpenseSection from '../delete-expense-section/delete-expense-section';

class DisplaySection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.section = {};
    this.state.cards = this.props.cards;
    // this.state = [{ style: {} }];
    // this.state.titleStyle = { color: '#ff9926' };

    // handle changing title style
    this.changeTitleStyle = (currentState, id) => {
      if (currentState.color === '#ff9926') {
        const color = { color: '#2679ff' };
        const doNotDisplay = { doNotDisplay: currentState.doNotDisplay };
        currentState = { color: color.color, doNotDisplay: doNotDisplay.doNotDisplay }; // eslint-disable-line
        this.state.section[id] = currentState;
        this.setState(this.state);
        return undefined;
        // return currentState;
      }

      if (currentState.color === '#2679ff') {
        const color = { color: '#ff9926' };
        const doNotDisplay = { doNotDisplay: currentState.doNotDisplay };
        currentState = { color: color.color, doNotDisplay: doNotDisplay.doNotDisplay }; // eslint-disable-line
        this.state.section[id] = currentState;
        this.setState(this.state);
        return undefined;
        // return currentState;
      }
      // else
      return undefined;
    };

    // handle hide/show of editing of expense type title
    this.toggleExpenseTypeUpdate = (currentState, id) => {
      if (currentState.doNotDisplay) {
        const doNotDisplay = { doNotDisplay: false };
        const color = { color: currentState.color };
        currentState = { color: color.color, doNotDisplay: doNotDisplay.doNotDisplay }; // eslint-disable-line
        this.state.section[id] = currentState;
        this.setState(this.state);
        return undefined;
        // return currentState;
      }

      if (!currentState.doNotDisplay) {
        const doNotDisplay = { doNotDisplay: true };
        const color = { color: currentState.color };
        currentState = { color: color.color, doNotDisplay: doNotDisplay.doNotDisplay }; // eslint-disable-line
        this.state.section[id] = currentState;
        this.setState(this.state);
        return undefined;
        // return currentState;
      }
      // else
      return undefined;
    };

    this.createSectionState = (id) => {
      if (!this.state.section[id]) {
        this.state.section[id] = { color: '#ff9926', doNotDisplay: true };
      }
    };
  }

  render() {
    const {
      section,
      sectionUpdate,
      sectionDelete,
      cards,
      key,
    } = this.props;

    const sectionCards = cards[section.id];
    // console.log(sectionCards);

    return (
      <div className="section">
        { /* render new section group */ }
        <section
          key={key}
          className="listExpenses">
          { /* state.section property needs to be created on the fly */}
          {this.createSectionState(section.id)}
          <DeleteExpenseSection section={section} onComplete={sectionDelete}/>
          <p style={this.state.section[section.id]}
             onMouseLeave={this.changeTitleStyle.bind(null, this.state.section[section.id], section.id)} // eslint-disable-line
             onMouseOver={this.changeTitleStyle.bind(null, this.state.section[section.id], section.id)} // eslint-disable-line
             className="expenseTypeTitle"
             onDoubleClick={this.toggleExpenseTypeUpdate.bind(null, this.state.section[section.id], section.id) /* eslint-disable-line */ }>
            {section.expenseType === '' ? 'double-click to name me' : section.expenseType}
          </p>
          <p>{`Section Total: $${section.expenseAmt}`}</p>
          <section>
            { this.state.section[section.id].doNotDisplay === false ? <SectionTitleForm section={section} // eslint-disable-line
              onComplete={sectionUpdate}/> : null }
              <ul className="cardList">
                { sectionCards !== undefined ? sectionCards.map(card => <Card
                  card={card} key={card.id} />) : null }
              </ul>
              <footer>
                <CardForm onComplete={this.props.createCard} section={section}/>
              </footer>
          </section>
        </section>
      </div>
    );
  }
}

DisplaySection.propTypes = {
  section: PropTypes.object,
  sectionDelete: PropTypes.func,
  sectionUpdate: PropTypes.func,
  sections: PropTypes.array,
  key: PropTypes.number,
  cards: PropTypes.object,
  createCard: PropTypes.func,
  updateCard: PropTypes.func,
  removeCard: PropTypes.func,
};

const mapStateToProps = state => ({
  cards: state.cards,
});

const mapDispatchToProps = (dispatch) => {
  return {
    createCard: data => dispatch(cardActions.createCard(data)),
    removeCard: data => dispatch(cardActions.removeCard(data)),
    updateCard: data => dispatch(cardActions.updateCard(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplaySection);
