const logo = require("../../assets/logo.webp");
import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize={16} />
      <SearchBar />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
