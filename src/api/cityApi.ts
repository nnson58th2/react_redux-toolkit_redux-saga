import { City, ListResponse } from 'models';
import axiosClient from './axiosClient';

const URL = '/cities';

const cityApi = {
  getAll(): Promise<ListResponse<City>> {
    return axiosClient.get(URL, {
      params: {
        _page: 1,
        _limit: 10,
      },
    });
  },
};

export default cityApi;
