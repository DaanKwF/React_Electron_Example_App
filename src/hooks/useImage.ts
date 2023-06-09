import { useEffect, useState } from "react";

const useImage = (url: string) => {
  const [image64, setImage] = useState<string>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchImage = async () => {
      window.electronAPI
        .fetchImage(url)
        .then((res) => setImage(res))
        .catch((err) => setError(err));
    };
    fetchImage();
  }, []);

  return { image64, error };
};

export default useImage;
