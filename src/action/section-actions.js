// !: = development notes

// !: this is a function THAT RETURNS AN ACTION
export const create = ({ expenseName, expenseAmt }) => {
  console.log('WTF IS HAPPENING:');
  console.log(expenseName);
  console.log(expenseAmt);
  return {
    type: 'CREATE_EXPENSE',
    payload: {
      id: Math.random(),
      expenseName,
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
