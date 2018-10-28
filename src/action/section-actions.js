// !: = development notes

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
