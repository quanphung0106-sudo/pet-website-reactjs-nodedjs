import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useRefreshToken from './useRefreshToken';
import jwt_decode from 'jwt-decode';
import { saveNewRefreshToken } from '~/redux/userSlice';
import axios from 'axios';

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const user = useSelector((state) => state.user.user);
  const accessToken = user.accessToken;
  const dispatch = useDispatch();
  let axiosJWT = axios.create();

  useEffect(() => {
    axiosJWT.interceptors.request.use(async (config) => {
      let date = new Date();
      const decodeToken = jwt_decode(accessToken);
      if (decodeToken.exp < date.getTime() / 1000) {
        const data = await refresh();
        if (data?.newAccessToken) {
          dispatch(saveNewRefreshToken(data.newAccessToken));
          config.headers['Authorization'] = data.newAccessToken;
        }
      }
      return config;
    });
  }, [dispatch, accessToken, refresh, axiosJWT]);

  return axiosJWT;
};

export default useAxiosPrivate;
