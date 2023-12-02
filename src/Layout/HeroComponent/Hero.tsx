import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <Container className="ck-reset" maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Crafting Legal Docs{" "}
          <Text as={"span"} color={"blue.400"}>
            Made Simple
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Make legal paperwork faster and more accurate with our user-friendly
          solution. Simplify your document creation, saving time and preventing
          costly errors.
        </Text>
        <Stack spacing={6} direction={"row"} justifyContent={"center"}>
          <Link to="/DocGenerator">
            <Button
              rounded={"full"}
              px={6}
              colorScheme={"blue"}
              bg={"blue.400"}
            >
              Get started
            </Button>
          </Link>
        </Stack>
        <Flex w={"full"} justifyContent={"center"}>
          <Image
            src="src\assets\Hero.jpg" // Replace with the actual path to your image
            alt="Description of the image"
            w="70%" // Set the width of the image
          />
        </Flex>
      </Stack>
    </Container>
  );
}
