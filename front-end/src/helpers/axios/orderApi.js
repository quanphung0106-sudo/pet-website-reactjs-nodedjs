import { axiosClient } from './axiosClient';

const axiosRequest = axiosClient()

const orderApi = {
  getAll(params) {
    const url = '/orders';
    return axiosRequest.get(url, { params });
  },
  get(id) {
    const url = `/orders/${id}`;
    return axiosRequest.get(url);
  },
  post(data) {
    const url = `/orders`;
    return axiosRequest.post(url, data);
  },
  delete(id) {
    const url = `/orders/${id}`;
    return axiosRequest.delete(url, id);
  },
};

export default orderApi;
