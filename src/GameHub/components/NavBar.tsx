import { HStack, Image } from "@chakra-ui/react";

import SearchBar from "./SearchBar";
import ColorModeSwitch from "./ColorModeSwitch";

const logo = require("../../assets/logo.webp");

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize={16} />
      <SearchBar onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
