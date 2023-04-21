import axios from 'axios';

const SERVER_ADDRESS = import.meta.env.VITE_API_SERVER;

const JOB_API = `${SERVER_ADDRESS}/jobs`;

export const getAllJobs = async () => {
  const response = await axios.get(JOB_API);
  const jobs = response.data;
  return jobs;
};

export const getJob = async (jid) => {
  const response = await axios.get(`${JOB_API}/find/${jid}`);
  return response.data;
};
