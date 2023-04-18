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

export const deleteUser = (id) => {
  return axios.delete(`${USER_API}/${id}`);
};

export const updateUser = async (id, newUser) => {
  const response = await axios.put(`${USER_API}/${id}`, newUser);
  return response.data;
};

export const recordCurrentUser = (user) => {
  return axios.post(`${USER_API}/recordCurrentUser`, user);
}

export const removeCurrentUser = () => {
  return axios.post(`${USER_API}/removeCurrentUser`);
}

export const currentUserProfile = () => {
  return axios.get(`${USER_API}/currentUserProfile`);
}