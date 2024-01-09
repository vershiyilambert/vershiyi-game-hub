import axios, { AxiosRequestConfig } from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "373b9f2ca2224af5aead16387fffea0d",
  },
});

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

class APIClient<T> {
  constructor(private endpoint: string) {}

  getAll = (config?: AxiosRequestConfig) => {
    return axios.get<FetchResponse<T>>(this.endpoint, config);
  };

  create = (entity: T) => {
    return axiosInstance.post<T>(this.endpoint, entity);
  };
  delete(id: number) {
    return axiosInstance.delete(this.endpoint + id);
  }
  update<T extends { id: number }>(entity: T) {
    return axiosInstance.patch(this.endpoint + entity.id, entity);
  }
}

export default APIClient;
