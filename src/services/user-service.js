import axios from 'axios';

const SERVER_ADDRESS = import.meta.env.VITE_API_SERVER;

const USER_API = `${SERVER_ADDRESS}/users`;

export const findUsers = async () => {
  const response = await axios.get(USER_API);
  const users = response.data;
  return users;
};

export const findUser = async (uid) => {
  const response = await axios.get(`${USER_API}/find/${uid}`);
  return response.data;
};

export const createUser = async (user) => {
  const response = await axios.post(`${USER_API}/signup`, user);
  return response.data;
};

export const updateUser = async (uid, newUser) => {
  const response = await axios.put(`${USER_API}/${uid}`, newUser);
  return response.data;
};
