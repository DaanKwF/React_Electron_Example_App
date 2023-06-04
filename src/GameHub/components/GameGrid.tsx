import { useEffect, useState } from "react";
import { Game } from "../../types/renderer";
import { Text } from "@chakra-ui/react";

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const getVersion = async () => {
      window.electronAPI
        .getGames()
        .then((res) => setGames(res.results))
        .catch((err) => setError(err.message));
    };
    getVersion();
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
