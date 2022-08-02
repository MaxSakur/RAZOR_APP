import axios from 'axios';

const MAIN_URL = 'http://localhost:5000/api';
axios.defaults.baseURL = 'http://localhost:5000/api';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(
  'user_token',
)}`;

export const authorize = async () => {
  try {
    const response = await axios.get('/auth/auth');
    console.log('authorize', response);
    return response;
  } catch (error) {
    return false;
  }
};

export const login = async ({ email, password }) => {
  const response = await axios.post('/auth/login', {
    email,
    password,
  });
  console.log('login', response);
  return response;
};

export const registration = async ({ email, password }) => {
  const response = await axios.post('/auth/registration', {
    email,
    password,
  });
  console.log('registration', response);
  return response;
};

export const characterRegistration = async ({ gender, race, role }) => {
  const response = await axios.post('/user/registerCharacter', {
    gender,
    race,
    role,
  });
  console.log('characterRegistration', response);
  return response;
};
