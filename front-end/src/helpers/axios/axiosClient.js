import axios from 'axios';
import jwt_decode from 'jwt-decode';
import storage from '../localStorage';

export const axiosClient = () => {
  const accessToken = storage.getAccessToken();

  const axiosJWT = axios.create({
    baseURL: process.env.REACT_APP_SERVER,
    headers: { Authorization: accessToken },
  });

  const refresh = async () => {
    try {
      const response = await axios.post('/auth/refresh-token', null, {
        withCredentials: true,
      });
      return response.data;
    } catch (err) {
      console.log('Client: Error refresh token: ', err);
    }
  };

  axiosJWT.interceptors.response.use(
    (response) => {
      if ([200, 201].includes(response.status) && response.data) {
        return response;
      }
      Promise.reject(response.statusText || '');
    },
    (error) => {
      console.log({ error });
      return Promise.reject(error);
    },
  );

  axiosJWT.interceptors.request.use(
    async (config) => {
      let date = new Date();
      const decodeToken = jwt_decode(accessToken);
      if (decodeToken.exp < date.getTime() / 1000) {
        const data = await refresh();
        if (data?.newAccessToken) {
          storage.setAccessToken(data.newAccessToken);
          config.headers['Authorization'] = data.newAccessToken;
        }
      }
      return config;
    },
    (error) => {
      console.log({ requestErr: error });
    },
  );

  return axiosJWT;
};
