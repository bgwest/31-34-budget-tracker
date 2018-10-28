// default state for section is 1 array: []
// this happens on INTIAL page render...
export default (state = [], { type, payload }) => {
  switch (type) {
    case 'CREATE_EXPENSE':
      console.log('section reducer CREATE_EXPENSE was ran.');
      return [...state, payload]; // (1) make a copy, (2) append to the array
    case 'UPDATE_EXPENSE':
      console.log('section reducer UPDATE_EXPENSE was ran.');
      return state.map((currentSection) => {
        return currentSection.id === payload.id ? payload : currentSection;
      });
    case 'DESTROY_EXPENSE':
      console.log('section reducer DESTROY_EXPENSE was ran.');
      return state.filter(currentSection => currentSection.id !== payload.id);
    default:
      return state;
  }
};
