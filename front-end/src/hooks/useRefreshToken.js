import { callApi } from "~/axios/axios";

const useRefreshToken = () => {
  const refresh = async () => {
    callApi.defaults.withCredentials = true;
    try {
      const response = await callApi.post('/auth/refresh-token', null, {
        withCredentials: true,
      });
      return response.data;
    } catch (err) {
      console.log('Client: Error refresh token: ', err);
    }
  };

  return refresh;
};

export default useRefreshToken;
