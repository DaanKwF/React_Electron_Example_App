import { Image } from "@chakra-ui/react";
import { Genre } from "../../hooks/useGenres";
import useImage from "../../hooks/useImage";
import getCroppedImageUrl from "../../services/image-url";

interface Props {
  genre: Genre;
}

const GenreListImage = ({ genre }: Props) => {
  const { image64, error } = useImage(
    getCroppedImageUrl(genre.image_background)
  );

  return (
    <Image boxSize="32px" objectFit="cover" borderRadius={8} src={image64} />
  );
};

export default GenreListImage;
