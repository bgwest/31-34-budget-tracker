import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as sectionActions from '../../action/section-actions';
import SectionForm from '../section-form/section-form';
import EditExpenses from '../edit-expenses/edit-expenses';
import DeleteExpenses from '../delete-expenses/delete-expenses';

// !: = development notes

class Dashboard extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <SectionForm onComplete={this.props.sectionCreate}/>
        <div> { this.props.sections.map(currentSection => <section
          key={currentSection.id}
          className="listExpenses">
          <p><b>expense name: </b><br/>{currentSection.expenseName}</p>
          <p><b>amount: </b><br/>{currentSection.expenseAmt}</p>
          <EditExpenses section={currentSection} onComplete={this.props.sectionUpdate}/>
          <DeleteExpenses section={currentSection} onComplete={this.props.sectionDelete}/>
          <p>---------------------------------------</p>
        </section>)}
        </div>
        <br />
        {`budget (less expenses): ${this.props.totalBudget}`}
        <br />
        {`expense total: ${this.props.totalExpenses}`}
      </div>
    );
  }
}

Dashboard.propTypes = {
  sectionCreate: PropTypes.func,
  sectionDelete: PropTypes.func,
  sectionUpdate: PropTypes.func,
  sections: PropTypes.array,
  totalExpenses: PropTypes.number,
  totalBudget: PropTypes.number,
};

const mapStateToProps = (state) => {
  // at start, this will run twice
  // once to establish state in expenseTotal and once to update expenseTotal
  function calculateTotalExpenses(passedState) {
    // if state has been established, calculate total expenses
    if (Array.isArray(passedState)) {
      let expenseTotal = 0;
      for (let addTheExpenses = 0; addTheExpenses <= passedState.length - 1; addTheExpenses++) {
        expenseTotal += passedState[addTheExpenses].expenseAmt;
      }
      return expenseTotal;
    } // else
    // if state is not yet a state array...
    return state;
  }

  function calculateTotalBudget(passedState) {
    // if state has been established, calculate total expenses
    if (Array.isArray(passedState)) {
      // budget is hard coded for now because expense is my 'variable' piece
      // this can be changed in future if needed
      let budgetTotal = 2000;
      for (let lessTheExpenses = 0; lessTheExpenses <= passedState.length - 1; lessTheExpenses++) {
        budgetTotal -= passedState[lessTheExpenses].expenseAmt;
      }
      if (budgetTotal < 0) {
        alert('You have exceeded your budget. You can continue, but please re-balance');
      }
      return budgetTotal;
    } // else
    // if state is not yet a state array...
    return state;
  }

  // !: Here, state comes from the store
  return { // This return over here, will become Dashboard.props
    sections: state,
    totalExpenses: calculateTotalExpenses(state),
    totalBudget: calculateTotalBudget(state),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sectionCreate: (section) => {
      dispatch(sectionActions.create(section));
    },
    sectionDelete: (section) => {
      dispatch(sectionActions.destory(section));
    },
    sectionUpdate: (section) => {
      dispatch(sectionActions.update(section));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
