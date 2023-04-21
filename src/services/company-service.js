import axios from 'axios';

const SERVER_ADDRESS = import.meta.env.VITE_API_SERVER;

const COMPANY_API = `${SERVER_ADDRESS}/companies`;

export const findCompany = async (id) => {
  const response = await axios.get(`${COMPANY_API}/${id}`);
  return response.data;
};