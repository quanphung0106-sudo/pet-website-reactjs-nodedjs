import axios from 'axios';
import { useSelector } from 'react-redux';

export const callApi = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
});

export const getItems = async () => {
  const res = await callApi.get('/items');
  if (res) return res.data
}

export const AxiosJWT = () => {
  const user = useSelector((state) => state.user.user);

  const axiosJWT = axios.create({
    baseURL: process.env.REACT_APP_SERVER,
    headers: { Authorization: user.accessToken },
  });

  return axiosJWT;
};
