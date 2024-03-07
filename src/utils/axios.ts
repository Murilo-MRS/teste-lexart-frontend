import axios from 'axios';
import { getUser } from './localStorage.ts';

const PORT = 3001;
const api = axios.create({ baseURL: `${process.env.REACT_APP_PROTOCOL}://localhost:${process.env.REACT_APP_BACKEND_PORT || PORT}` });

export const setToken = (token: string) => {
  api.defaults.headers.common.Authorization = token;
};

export const postRequest = async (endpoint: string, body: any) => {
  const { token } = getUser() || { token: '' };
  setToken(token);
  const { data } = await api.post(endpoint, body);
  return data;
};

export const getRequest = async (endpoint: string) => {
  const { token } = getUser() || { token: '' };
  setToken(token);
  const { data } = await api.get(endpoint);
  return data;
};

export const patchRequest = async (endpoint: string, body: any) => {
  const { token } = getUser() || { token: '' };
  setToken(token);
  const { data } = await api.patch(endpoint, body);
  return data;
};

export const deleteRequest = async (endpoint: string) => {
  const { token } = getUser() || { token: '' };
  setToken(token);
  return api.delete(endpoint);
};