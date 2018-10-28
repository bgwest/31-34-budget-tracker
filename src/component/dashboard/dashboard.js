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
        <br />
        <CreateSectionForm onComplete={sectionCreate}/>
        { /* <br />
          {`budget (less expenses): ${this.props.totalBudget}`}  */ }
        <br />
        {`expense total: ${this.props.totalExpenses}`}
        <br />
        <nav>
          <h3 ><b>Site tips:</b></h3>
          <p>After creating section or card, </p>
          <p>try double clicking on...</p>
          <p>- Expense Section Title</p>
          <p>- Card Expense Title</p>
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
    console.log('calculateTotalExpenses ran.');
    // if state has been established, calculate total expenses
    if (Object.keys(passedState).length > 0) {
      let expenseTotal = 0;
      const getKeys = Object.keys(passedState);
      const getValues = Object.values(passedState);
      if (passedState[getKeys[0]][0] !== undefined) {
        for (let iterateIDs = 0; iterateIDs <= getValues.length - 1; iterateIDs++) {
          const getLengthOfExpenses = Object.keys(getValues[iterateIDs]).length;
          for (let iterateExpenses = 0; iterateExpenses <= getLengthOfExpenses - 1; iterateExpenses++) {
            expenseTotal += getValues[iterateIDs][`${iterateExpenses}`].expenseAmt;
            console.log(getValues[iterateIDs][`${iterateExpenses}`].expenseAmt);
          }
        }
      }

      // if (passedState[getKeys[0]][0] !== undefined) {
      //   for (let propertyIndex = 0; propertyIndex <= getKeys.length - 1; propertyIndex++) {
      //     console.log(passedState[getKeys[propertyIndex]][0]);
      //     for (let cardCount = 0; cardCount <= passedState[getKeys[propertyIndex]][0] - 1; cardCount++) {
      //       console.log(passedState[getKeys[propertyIndex]][0].expenseAmt);
      //       expenseTotal += passedState[getKeys[propertyIndex]][0].expenseAmt;
      //     }
      //   }
      // }

      // for (const property1 in passedState) {
      //   // only run this if there are cards
      //   if (passedState[property1][objIndex] !== undefined) {
      //     const key = getKeys[objIndex];
      //     console.log('key:');
      //     console.log(key);
      //     console.log('passed state');
      //     console.log(passedState);
      //     expenseTotal += passedState[property1][objIndex].expenseAmt;
      //     console.log(passedState[property1]);
      //     console.log(passedState[property1][objIndex].expenseAmt);
      //   }
      //   console.log(objIndex);
      //   objIndex += 1;
      // }
      return expenseTotal;
    } // else
    // if state is not yet a state array...
    return 0;
  }

  // function calculateTotalBudget(passedState) {
  //   console.log('calculateTotalBudget ran.');
  //   // if state has been established, calculate total expenses
  //   if (Object.keys(passedState).length > 0) {
  //     console.log(passedState);
  //     // budget is hard coded for now because expense is my 'variable' piece
  //     // this can be changed in future if needed
  //     let budgetTotal = 2000;
  //     for (let lessTheExpenses = 0; lessTheExpenses <= passedState.length - 1; lessTheExpenses++) {
  //       budgetTotal -= passedState[lessTheExpenses].expenseAmt;
  //     }
  //     if (budgetTotal < 0) {
  //       alert('You have exceeded your budget. You can continue, but please re-balance');
  //     }
  //     return budgetTotal;
  //   } // else
  //   console.log('cards state:');
  //   console.log(state.cards);
  //   // if state is not yet a state array...
  //   return 0;
  // }

  // !: Here, state comes from the store
  return { // This return over here, will become Dashboard.props
    sections: state.sections,
    totalExpenses: calculateTotalExpenses(state.cards),
    // totalBudget: calculateTotalBudget(state.cards),
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
