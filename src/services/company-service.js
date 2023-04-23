import axios from 'axios';

const SERVER_ADDRESS = import.meta.env.VITE_API_SERVER;

const COMPANY_API = `${SERVER_ADDRESS}/companies`;

export const findCompany = async (companyId) => {
  const response = await axios.get(`${COMPANY_API}/find/${companyId}`);
  return response.data;
};

export const updateCompany = async (newCompany) => {
  const response = await axios.post(`${COMPANY_API}/update/${newCompany.company_id}`, newCompany);
  return response.data;
};