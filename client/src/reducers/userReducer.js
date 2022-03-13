const SET_USER = 'SET_USER';
const CLEAR_USER = 'CLEAR_USER';

const defaultState = {
  user: null,
  isLogged: false,
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER:
      console.log('action', action);
      return {
        ...state,
        user: action.payload.user,
        isLogged: true,
      };
    case CLEAR_USER:
      localStorage.clear('token');
      return {
        ...state,
        user: {},
        isLogged: false,
      };

    default:
      return state;
  }
};

export const setUserAC = (user) => ({ type: SET_USER, payload: user });
export const clearUserAC = () => ({ type: CLEAR_USER });

export default userReducer;
