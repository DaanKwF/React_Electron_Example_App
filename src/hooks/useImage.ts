import { useEffect, useState } from "react";

const placeholder = require("../assets/no-image-placeholder.webp");

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

    if (!url) {
      setImage(placeholder);
    } else {
      fetchImage();
    }
  }, []);

  return { image64, error };
};

export default useImage;
