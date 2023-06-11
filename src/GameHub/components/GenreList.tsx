import { Button, HStack, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../../hooks/useGenres";
import GenreListImage from "./GenreListImage";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <GenreListImage genre={genre} />
            <Button
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
