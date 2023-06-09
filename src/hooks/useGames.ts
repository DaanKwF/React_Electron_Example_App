import { useEffect, useState } from "react";
import { Game } from "../types/renderer";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGames = async () => {
      window.electronAPI
        .fetchGames()
        .then((res) => setGames(res.results))
        .catch((err) => setError(err.message));
    };
    fetchGames();
  });

  return { games, error };
};

export default useGames;
