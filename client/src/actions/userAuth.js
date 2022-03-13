import axios from 'axios';
import { setUserAC } from '../reducers/userReducer';

const MAIN_URL = 'http://localhost:5000/api';

export const registration = async (email, password) => {
  try {
    await axios.post(`${MAIN_URL}/auth/registration`, {
      email,
      password,
    });
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${MAIN_URL}/auth/login`, {
        email,
        password,
      });
      dispatch(setUserAC(response.data));
      localStorage.setItem('user_token', response.data.token);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};

export const authorize = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${MAIN_URL}/auth/auth`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('user_token')}`,
        },
      });
      dispatch(setUserAC(response.data.user));
      localStorage.setItem('user_token', response.data.token);
    } catch (e) {
      // alert(e.response.data.message);
      localStorage.removeItem('user_token');
    }
  };
};
