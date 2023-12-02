import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";

const Logo = (props: any) => {
  return (
    <svg
      version="1.1"
      width="10rem"
      height="4rem"
      viewBox="106.616 90.972 147.23 35.164"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#"
        d="M132.564,113.44l0.616-3.08l2.66,0l0,6.44l-14,0l0-2.38l2.1-0.84l0-13.16l-2.1-0.84l0-2.38l8.54-0.14l0,2.52l-2.1,0.84l0,13.02l4.284,0z M152.71028,110.164l-9.296,0c0.168,2.24,1.456,3.556,3.388,3.556c2.324,0,4.704-1.316,4.704-1.316l1.204,2.324s-2.8,2.352-6.384,2.352c-4.816,0-7.28-2.8-7.28-7.56c0-4.9,2.772-8.12,7.476-8.12c4.172,0,6.356,2.576,6.356,6.58c0,1.064-0.168,2.1-0.168,2.184z M143.47028,107.56l5.068,0c0-1.596-0.672-2.8-2.296-2.8c-1.568,0-2.548,1.148-2.772,2.8z M162.24456,114.28l4.144,0c3.556,0,5.6,1.54,5.6,4.34c0,3.08-2.464,5.32-7.84,5.32c-4.396,0-7.224-0.98-7.224-4.06c0-2.408,2.94-3.36,2.94-3.36s-1.68-0.252-1.68-1.848c0-0.812,1.12-2.632,1.456-3.164c-0.672-0.448-2.156-1.652-2.156-4.368c0-3.836,2.884-5.74,6.72-5.74c1.624,0,2.772,0.42,3.304,0.672l4.816-0.112l0,2.24l-2.296,0.392c0.056,0.252,0.476,1.008,0.476,2.212c0,4.06-2.856,5.74-6.72,5.74c-0.756,0-1.316-0.14-1.428-0.14z M164.06456,104.284c-1.68,0-2.38,0.896-2.38,2.66c0,1.68,0.644,2.8,2.24,2.8c1.764,0,2.38-0.924,2.38-2.8c0-1.764-0.7-2.66-2.24-2.66z M165.26856,117.36l-2.94,0s-1.344,0.616-1.344,1.82c0,1.4,1.204,1.68,3.5,1.68c2.52,0,3.584-0.56,3.584-1.904c0-1.26-0.924-1.596-2.8-1.596z M185.35884,116.8l-0.504-1.82s-2.156,2.1-4.536,2.1c-2.716,0-4.368-1.596-4.368-4.396c0-3.304,2.492-4.62,6.748-4.62l1.96,0l0-1.54c0-1.428-0.756-2.044-2.156-2.044c-1.428,0-2.464,0.42-2.464,0.42l-0.42,1.764l-2.52,0l-0.196-4.144s3.388-1.12,6.076-1.12c4.256,0,5.88,1.484,5.88,5.544l0,6.916l2.1,0.504l0,2.24z M184.65884,110.444l-1.596,0c-2.184,0-3.052,0.56-3.052,1.82c0,1.064,0.588,1.68,1.652,1.68c1.484,0,2.996-1.624,2.996-1.624l0-1.876z M200.63312,113.86l2.52,0.7l0,2.24l-8.988,0l0-2.24l2.24-0.7l0-15.736l-2.24-0.56l0-2.24l6.468-0.224l0,18.76z M226.0434,114.42l0,2.38l-8.904,0l0-2.38l2.1-0.756l-0.672-2.044l-6.216,0l-0.7,2.016l2.184,0.784l0,2.38l-8.456,0l0-2.38l2.044-0.784l6.16-16.492l4.48-0.084l6.02,16.576z M217.6434,108.624l-2.1-6.636l-2.212,6.636l4.312,0z M229.24968,116.8l0-2.38l2.1-0.84l0-13.16l-2.1-0.84l0-2.38l8.54-0.14l0,2.52l-2.1,0.84l0,13.16l2.1,0.84l0,2.38l-8.54,0z"
      />
      <path fill="#" d="" />
    </svg>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function FooterContent() {
  return (
    <Box
      className="ck-reset"
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      {/* <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Product</ListHeader>
            <Box as="a" href={"#"}>
              Overview
            </Box>
            <Stack direction={"row"} align={"center"} spacing={2}>
              <Box as="a" href={"#"}>
                Features
              </Box>
              <Tag
                size={"sm"}
                bg={useColorModeValue("green.300", "green.800")}
                ml={2}
                color={"white"}
              >
                New
              </Tag>
            </Stack>
            <Box as="a" href={"#"}>
              Tutorials
            </Box>
            <Box as="a" href={"#"}>
              Pricing
            </Box>
            <Box as="a" href={"#"}>
              Releases
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Box as="a" href={"#"}>
              About Us
            </Box>
            <Box as="a" href={"#"}>
              Press
            </Box>
            <Box as="a" href={"#"}>
              Careers
            </Box>
            <Box as="a" href={"#"}>
              Contact Us
            </Box>
            <Box as="a" href={"#"}>
              Partners
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Legal</ListHeader>
            <Box as="a" href={"#"}>
              Cookies Policy
            </Box>
            <Box as="a" href={"#"}>
              Privacy Policy
            </Box>
            <Box as="a" href={"#"}>
              Terms of Service
            </Box>
            <Box as="a" href={"#"}>
              Law Enforcement
            </Box>
            <Box as="a" href={"#"}>
              Status
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Follow Us</ListHeader>
            <Box as="a" href={"#"}>
              Facebook
            </Box>
            <Box as="a" href={"#"}>
              Twitter
            </Box>
            <Box as="a" href={"#"}>
              Dribbble
            </Box>
            <Box as="a" href={"#"}>
              Instagram
            </Box>
            <Box as="a" href={"#"}>
              LinkedIn
            </Box>
          </Stack>
        </SimpleGrid>
      </Container> */}
      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Logo />
        </Flex>
        <Text pt={2} fontSize={"sm"} textAlign={"center"}>
          © 2023 LegalAI. All rights reserved
        </Text>
      </Box>
    </Box>
  );
}
