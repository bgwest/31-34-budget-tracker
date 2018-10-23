export default (state = [], { type, payload }) => {
  switch (type) {
    case 'CREATE_EXPENSE':
      return [...state, payload]; // (1) make a copy, (2) append to the array
    case 'UPDATE_EXPENSE':
      return state.map((currentSection) => {
        return currentSection.id === payload.id ? payload : currentSection;
      });
    case 'DESTROY_EXPENSE':
      return state.filter(currentSection => currentSection.id !== payload.id);
    default:
      return state;
  }
};
