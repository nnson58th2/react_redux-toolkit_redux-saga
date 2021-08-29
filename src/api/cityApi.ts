import axiosClient from './axiosClient';

const cityApi = {
  getAllCities() {
    const url = '/cities';

    return axiosClient.get(url);
  },
};

export default cityApi;
