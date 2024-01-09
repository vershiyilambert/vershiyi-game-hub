/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FetchResponse, axiosInstance } from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig) => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setIsloading(true);
    axiosInstance
      .get<FetchResponse<T>>(endpoint, { ...requestConfig, signal })
      .then((res) => {
        setIsloading(false);
        setData(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return null;
        setIsloading(false);
        setError(err.message);
      });
  }, []);
  return { data, isLoading, error };
};

export default useData;
