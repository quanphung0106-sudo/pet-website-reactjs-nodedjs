import axios from 'axios';

export const callApi = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
});
