import React from "react";
import Card from "./AakashCard";
import AakashCard from "./AakashCard";
import { Box, Center, Flex, SimpleGrid } from "@chakra-ui/react";
import AnirudhCard from "./AnirudhCard";
import HarshitCard from "./HarshitCard";
import ShobhitCard from "./ShobhitCard";
import HadyaCard from "./HadyaCard";
import JoyCard from "./JoyCard";

const AboutTeam = () => {
  return (
    <>
      <Box pr={60} pl={60}>
        {/* <Flex flexWrap="wrap" justify="space-evenly" gap={2}>
          <AakashCard />
          <HarshitCard />

          <ShobhitCard />
          <HadyaCard />
        </Flex> */}
        <SimpleGrid columns={2} spacing={4} p={4}>
          <AakashCard />
          <HarshitCard />
          <ShobhitCard />
          <HadyaCard />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default AboutTeam;
