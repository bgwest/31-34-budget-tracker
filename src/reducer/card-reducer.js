const emptyState = {};

export default (state = emptyState, { type, payload }) => {
  let sectionId;
  let sectionCards;
  let updatedCards;
  let updatedState;

  switch (type) {
    case 'CREATE_EXPENSE':
      // IMPORTANT NOTE -- Note how this is the same name as the section reducer
      // If they are not the same name, this reducer will not be triggered
      // This reducer is needed to be triggered at the same time as section-reducer
      console.log('card reducer CREATE_EXPENSE was ran.');
      // console.log('type:');
      // console.log(type);
      // console.log('payload:');
      // console.log(payload);
      // console.log('state:');
      // console.log(state);
      return { ...state, [payload.id]: [] };
    case 'DESTROY_EXPENSE':
      console.log('card reducer DESTROY_EXPENSE was ran.');
      updatedState = { ...state };
      delete updatedState[payload.id];
      return updatedState;
    case 'CARD_CREATE':
      console.log('card reducer CARD_CREATE was ran.');
      // console.log(payload);
      // console.log(state);
      sectionId = payload.sectionId; // eslint-disable-line
      sectionCards = state[sectionId];
      updatedCards = [...sectionCards, payload];
      return { ...state, [sectionId]: updatedCards };
    case 'CARD_UPDATE':
      console.log('card reducer CARD_UPDATE was ran.');
      sectionId = payload.sectionId; // eslint-disable-line
      sectionCards = state[sectionId];
      updatedCards = sectionCards.map(card => (card.id === payload.id ? payload : card));
      return { ...state, [sectionId]: updatedCards };
    case 'CARD_REMOVE':
      console.log('card reducer CARD_REMOVE was ran.');
      sectionId = payload.sectionId; // eslint-disable-line
      sectionCards = state[sectionId];
      updatedCards = sectionCards.filter(card => card.id !== payload.id);
      return { ...state, [sectionId]: updatedCards };
    default:
      return state;
  }
};
