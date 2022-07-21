export const MALE = 'male';
export const FEMALE = 'female';
const REGISTER_CHARACTER = 'REGISTER_CHARACTER';
const CHANGE_CHARACTER_GENDER = 'CHANGE_CHARACTER_GENDER';

const defaultState = {
  isCharacterRegistered: false,
  gender: null,
};

const characterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REGISTER_CHARACTER:
      return {
        ...state,
        isCharacterRegistered: true,
      };
    case CHANGE_CHARACTER_GENDER:
      return {
        ...state,
        gender: action.payload.gender,
      };
    default:
      return state;
  }
};

export const registerCharacterAC = () => ({ type: REGISTER_CHARACTER });
export const changeCharactersGenderAC = (gender) => ({
  type: CHANGE_CHARACTER_GENDER,
  payload: {
    gender,
  },
});

export default characterReducer;
