import axios from 'axios';

const MAIN_URL = 'http://localhost:5000/api';
const defaultEmail = 'max.kaliakin@gmail.com';
const defaultPassword = 'Aerithff7';

export const login = async () => {
  const response = await axios({
    method: 'post',
    url: `${MAIN_URL}/auth/login`,
    data: {
      email: defaultEmail,
      password: defaultPassword,
    },
  });
  return response;
};
