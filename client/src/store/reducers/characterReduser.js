export const MALE = 'male';
export const FEMALE = 'female';
export const REGISTER_CHARACTER = 'REGISTER_CHARACTER';
export const CHANGE_CHARACTER_GENDER = 'CHANGE_CHARACTER_GENDER';
export const CHANGE_CHARACTER_RACE = 'CHANGE_CHARACTER_CLASS';
export const CHANGE_CHARACTER_ROLE = 'CHANGE_CHARACTER_ROLE';
export const UPDATE_CHARACTER = 'UPDATE_CHARACTER';

const defaultState = {
  isCharacterRegistered: false,
  gender: null,
  race: null,
  role: null,
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
    case CHANGE_CHARACTER_RACE:
      return {
        ...state,
        race: action.payload.race,
      };
    case CHANGE_CHARACTER_ROLE:
      return {
        ...state,
        role: action.payload.role,
      };
    default:
      return state;
  }
};

export const registerCharacterAC = (isCharacterRegistered) => ({
  type: REGISTER_CHARACTER,
  payload: { isCharacterRegistered },
});
export const changeCharactersGenderAC = (gender) => ({
  type: CHANGE_CHARACTER_GENDER,
  payload: {
    gender,
  },
});
export const changeCharactersRaceAC = (race) => ({
  type: CHANGE_CHARACTER_RACE,
  payload: {
    race,
  },
});
export const changeCharactersRoleAC = (role) => ({
  type: CHANGE_CHARACTER_ROLE,
  payload: {
    role,
  },
});
export const updateCharacterAC = (gender, race, role) => ({
  type: UPDATE_CHARACTER,
  payload: {
    gender,
    race,
    role,
  },
});

export default characterReducer;
