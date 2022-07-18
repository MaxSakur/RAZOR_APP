const SET_USER = 'SET_USER';
const LOG_OUT = 'LOG_OUT';
export const TRY = 'TRY';
export const LOGIN = 'LOGIN';

const defaultState = {
  user: null,
  isLogged: false,
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER:
      console.log('SET_USER CASE==>', action.payload);
      return {
        ...state,
        user: action.payload.user,
        isLogged: true,
      };
    case LOG_OUT:
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
export const logOutAC = () => ({ type: LOG_OUT });
export const testAC = () => ({ type: TRY });
export const loginAC = () => ({ type: LOGIN });

export default userReducer;
