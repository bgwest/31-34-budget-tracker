// imports
import superagent from 'superagent';

// !: = development notes

// ENV Variables to be moved later if this is how I will be handling the redirect
const API_URL = 'http://localhost:8080';
const routes = {};
routes.FRONT_END_HOME = '/';

// !: this is a function THAT RETURNS AN ACTION
export const create = ({ expenseType, expenseAmt }) => {
  // console.log('section-action create:');
  // console.log(expenseType);
  // console.log(expenseAmt);
  return {
    type: 'CREATE_EXPENSE',
    payload: {
      id: Math.random(),
      expenseType,
      timestamp: new Date(),
      expenseAmt,
    },
  };
};
export const update = (section) => {
  return {
    type: 'UPDATE_EXPENSE',
    payload: section,
  };
};

export const destory = (section) => {
  return {
    type: 'DESTROY_EXPENSE',
    payload: section,
  };
};

// will probably not use this... keep just as syntax reference for the moment...
// export const createExpenseThunk = sent => (store) => {
//   return superagent.get(`${API_URL}${routes.FRONT_END_HOME}`) // eslint-disable-line
//     .then((response) => {
//       // don't expect there to be a reply on front-end route...
//       console.log('front-end response?');
//       console.log(response);
//       return store.dispatch(create(sent));
//     }).catch(console.error);
// };
