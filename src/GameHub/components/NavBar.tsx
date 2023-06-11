const logo = require("../../assets/logo.webp");
import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={10}>
      <Image src={logo} boxSize={16} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
