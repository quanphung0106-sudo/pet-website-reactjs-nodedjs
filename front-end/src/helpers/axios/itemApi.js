import { axiosClient } from './axiosClient';

const axiosRequest = axiosClient()

const itemApi = {
  getAll(params) {
    const url = '/items';
    return axiosRequest.get(url, { params });
  },
  get(id) {
    const url = `/items/${id}`;
    return axiosRequest.get(url);
  },
  post(data) {
    const url = `/items`;
    return axiosRequest.post(url, data);
  },
  delete(id) {
    const url = `/items/${id}`;
    return axiosRequest.delete(url, id);
  },
};

export default itemApi;
