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

export const updateUser = (newUser) => {
  return axios.post(`${USER_API}/update/${newUser.uid}`, newUser);

  // const response = await axios.post(`${USER_API}/update/${newUser.uid}`, newUser);
  // return response.data;
};

export const recordCurrentUser = (user) => {
  return axios.post(`${USER_API}/recordCurrentUser`, user);
};

export const removeCurrentUser = () => {
  return axios.post(`${USER_API}/removeCurrentUser`);
};

export const currentUserProfile = () => {
  return axios.get(`${USER_API}/currentUserProfile`);
};

export const getUserEducation = async (uid) => {
  const response = await axios.get(`${USER_API}/getEducations/${uid}`);
  return response.data;
};

export const addUserEducation = async (uid, educationData) => {
  const response = await axios.post(
    `${USER_API}/addEducation/${uid}`,
    educationData
  );
  return response.data;
};

export const deleteUserEducation = (uid, eid) => {
  return axios.delete(`${USER_API}/deleteEducation/${eid}/${uid}`);
};

export const getUserSavedJobs = async (uid) => {
  const response = await axios.get(`${USER_API}/savedJobs/${uid}`);
  return response.data;
};
export const addUserSavedJobs = async (uid, jobData) => {
  const response = await axios.post(`${USER_API}/saveJob/${uid}`, jobData);
  return response.data;
};
export const removeUserSavedJobs = async (uid, jobData) => {
  const response = await axios.post(`${USER_API}/unsaveJob/${uid}`, jobData);
  return response.data;
};

export const getUserExperience = async (uid) => {
  const response = await axios.get(`${USER_API}/getExperiences/${uid}`);
  return response.data;
};

export const addUserExperience = async (uid, experienceData) => {
  const response = await axios.post(
    `${USER_API}/addExperience/${uid}`,
    experienceData
  );
  return response.data;
};

export const deleteUserExperience = (uid, eid) => {
  return axios.delete(`${USER_API}/deleteExperience/${eid}/${uid}`);
};

export const getUserAppliedJobs = async (uid) => {
  const response = await axios.get(`${USER_API}/appliedJobs/${uid}`);
  return response.data;
};
export const addUserAppliedJobs = async (uid, jobData) => {
  const response = await axios.post(`${USER_API}/applyJob/${uid}`, jobData);
  return response.data;
};


// router.post('/saveJob/:uid', userController.saveJob);
//     router.post('/unsaveJob/:uid', userController.unsaveJob);
