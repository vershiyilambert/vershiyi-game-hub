import { Heading } from "@chakra-ui/react";
import GameQuery from "../entities/GameQuery";

const GameHeading = ({ gameQuery }: { gameQuery: GameQuery }) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading as="h2" marginY={3}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
