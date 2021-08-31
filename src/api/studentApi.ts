import { ListParams, ListResponse, Student } from 'models';
import axiosClient from './axiosClient';

const URL = '/students';

const studentApi = {
  getAll(params: ListParams): Promise<ListResponse<Student>> {
    return axiosClient.get(URL, { params });
  },

  getById(id: string): Promise<Student> {
    return axiosClient.get(`${URL}/${id}`);
  },

  add(data: Student): Promise<Student> {
    return axiosClient.post(URL, data);
  },

  update(data: Student): Promise<Student> {
    return axiosClient.patch(URL, data);
  },

  remove(id: string): Promise<any> {
    return axiosClient.delete(`${URL}/${id}`);
  },
};

export default studentApi;
