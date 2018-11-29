// imports
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as sectionActions from '../../action/section-actions';
import CreateSectionForm from '../create-section-form/create-section-form';
import AppUI from '../app-ui/app-ui';
import SiteTips from '../site-tips/site-tips';
import DisplaySection from '../display-section/display-section';

// !: = development notes

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this will reset to false each render, but stay true long enough to
    // process the root redirect after a section creation. see sectionCreateRan below.
    this.state.sectionCreateRan = false;
  }

  render() {
    // in the component, state is linked AS PROPS
    const {
      sections,
      sectionCreate,
      // createExpenseThunk,
      sectionDelete,
      sectionUpdate,
      location,
    } = this.props;

    const newThunkRenderTest = (receivedState) => {
      console.log('receivedState:');
      console.log(receivedState);
      // createExpenseThunk(receivedState);
      sectionCreate(receivedState);
      this.setState({ sectionCreateRan: true });
    };

    return (
      <main>
        <AppUI/>
        <br />
        { /* Only render certain pieces if link is clicked */ }
        {location.pathname === '/sitetips' ? <SiteTips/> : null}
        { /* if sectionCreate = true ... */ }
        { this.state.sectionCreateRan ? <Redirect to='/'/> : null }
        {location.pathname === '/newsection' ? <CreateSectionForm onComplete={newThunkRenderTest}/> : null}
        <br />
        {location.pathname === '/' ? `expense total: ${this.props.totalExpenses}` : null}
        <br />
        <div className="gridList">
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
  location: PropTypes.object,
  // createExpenseThunk: PropTypes.func,
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
          for (let iterateExpenses = 0; iterateExpenses <= getLengthOfExpenses - 1; iterateExpenses++) { // eslint-disable-line max-len
            expenseTotal += getValues[iterateIDs][`${iterateExpenses}`].expenseAmt;
            console.log(getValues[iterateIDs][`${iterateExpenses}`].expenseAmt);
          }
        }
      }
      return expenseTotal;
    } // else
    // if state is not yet a state array...
    return 0;
  }

  // !: Here, state comes from the store
  return { // This return over here, will become Dashboard.props
    sections: state.sections,
    totalExpenses: calculateTotalExpenses(state.cards),
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
    // createExpenseThunk: (section) => {
    //   dispatch(sectionActions.createExpenseThunk(section));
    // },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
