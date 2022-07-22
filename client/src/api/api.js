import axios from 'axios';

const MAIN_URL = 'http://localhost:5000/api';

export const authorize = async () => {
  try {
    const response = await axios.get(`${MAIN_URL}/auth/auth`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('user_token')}`,
      },
    });

    return response;
  } catch (error) {
    return false;
  }
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
