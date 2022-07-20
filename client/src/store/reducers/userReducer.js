import { history } from '..';

const SET_USER = 'SET_USER';
const LOG_OUT = 'LOG_OUT';
export const TRY = 'TRY';
export const LOGIN = 'LOGIN';
export const AUTHORIZE = 'AUTHORIZE';
export const REGISTRATION = 'REGISTRATION';

const defaultState = {
  user: null,
  isLogged: false,
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload.user,
        isLogged: true,
      };
    case LOG_OUT:
      // TODO: !!!
      localStorage.clear('token');
      history.push('/');
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
export const loginAC = () => ({ type: LOGIN });
export const autorizeAC = () => ({ type: AUTHORIZE });
export const registrationAC = (data) => ({
  type: REGISTRATION,
  payload: {
    email: data.email,
    password: data.password,
  },
});

export default userReducer;
