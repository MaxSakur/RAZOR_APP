import axios from 'axios';

const MAIN_URL = 'http://localhost:5000/api';

export const authorize = async () => {
  const response = axios.get(`${MAIN_URL}/auth/auth`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('user_token')}`,
    },
  });
  return response;
};

export const login = async ({ email, password }) => {
  const response = await axios.post(`${MAIN_URL}/auth/login`, {
    email,
    password,
  });
  return response;
};

export const registration = async ({ email, password }) => {
  const response = await axios.post(`${MAIN_URL}/auth/registration`, {
    email,
    password,
  });
  return response;
};
