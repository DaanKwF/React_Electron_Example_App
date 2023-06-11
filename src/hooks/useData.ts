import { useEffect, useState } from "react";

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      window.electronAPI
        .fetchData<T>(endpoint)
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
  }, []);

  return { data, error, isLoading };
};

export default useData;
