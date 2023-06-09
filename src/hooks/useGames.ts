import { useEffect, useState } from "react";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGames = async () => {
      window.electronAPI
        .fetchGames()
        .then((res) => setGames(res.results))
        .catch((err) => setError(err));
    };
    fetchGames();
  }, []);

  return { games, error };
};

export default useGames;
