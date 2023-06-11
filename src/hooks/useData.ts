import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      setLoading(true);
      const fetchData = async () => {
        window.electronAPI
          .fetchData<T>(endpoint, requestConfig)
          .then((res) => {
            setData(res.results);
            setLoading(false);
          })
          .catch((err) => {
            setError(err);
            setLoading(false);
          });
      };
      fetchData();
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;
