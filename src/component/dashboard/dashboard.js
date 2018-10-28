import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as sectionActions from '../../action/section-actions';
import CreateSectionForm from '../create-section-form/create-section-form';
import DisplaySection from '../display-section/display-section';

// !: = development notes

class Dashboard extends React.Component {
  render() {
    // in the component, state is linked AS PROPS
    const {
      sections,
      sectionCreate,
      sectionDelete,
      sectionUpdate,
    } = this.props;
    return (
      <main>
        <nav>
          <CreateSectionForm onComplete={sectionCreate}/>
          <br />
          {`budget (less expenses): ${this.props.totalBudget}`}
          <br />
          {`expense total: ${this.props.totalExpenses}`}
          <br />
          <h3><b>Site tips:</b></h3>
          <p>After creating a section, try clicking the title to edit it.</p>
          <p>Clicking on it again will hide the edit box.</p>
        </nav>
        <div className="lists">
          {
            sections.map((currentSection, i) => <DisplaySection
              section={currentSection} key={i}
              sectionDelete={sectionDelete}
            sectionUpdate={sectionUpdate}/>)
          }
        </div>
      </main>
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
    sections: state.sections,
    totalExpenses: calculateTotalExpenses(state.sections),
    totalBudget: calculateTotalBudget(state.sections),
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
      // console.log(section);
      dispatch(sectionActions.update(section));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
