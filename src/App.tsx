import { Grid, GridItem, Show } from "@chakra-ui/react";

import NavBar from "./GameHub/components/NavBar";
import GenreList from "./GameHub/components/GenreList";
import GameGrid from "./GameHub/components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GenreList />
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
