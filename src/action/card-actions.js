export const createCard = ({ content, sectionId }) => {
  console.log('CARD_CREATE CALLED.');
  // console.log(content);
  // console.log(sectionId);
  return {
    type: 'CARD_CREATE',
    payload: {
      content,
      sectionId,
      id: Math.random(),
      timestamp: new Date(),
    },
  };
};

export const updateCard = (card) => {
  return {
    type: 'CARD_UPDATE',
    payload: card,
  };
};

export const removeCard = (card) => {
  return {
    type: 'CARD_REMOVE',
    payload: card,
  };
};
