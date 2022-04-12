const REGISTER_CHARACTER = 'REGISTER_CHARACTER';

const defaultState = {
  isCharacterRegistered: false,
};

const characterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REGISTER_CHARACTER:
      return {
        ...state,
        isCharacterRegistered: true,
      };

    default:
      return state;
  }
};

export const registerCharacterAC = () => ({ type: REGISTER_CHARACTER });

export default characterReducer;
