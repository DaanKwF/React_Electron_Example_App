import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../../hooks/useGames";
import useImage from "../../hooks/useImage";

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
      </CardBody>
    </Card>
  );
};

export default GameCard;
