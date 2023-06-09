import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../../hooks/useGames";
import useImage from "../../hooks/useImage";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { image64, error } = useImage(game.background_image);

  return (
    <Card borderRadius={10} overflow={"hidden"}>
      {error && <Text>{error}</Text>}
      <Image src={image64} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
