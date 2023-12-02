import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Select,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Props {
  onChange: (form: string) => void;
}

export default function MediaObject({ onChange }: Props) {
  const [selectedValue, setSelectedValue] = useState(""); // State to track selected value

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    onChange(event.target.value); // Update the selected value
  };

  useEffect(() => {
    if (selectedValue) {
      // Check if a value is selected
      // Calculate the new scroll position (scroll down by window height)
      const windowHeight = window.innerHeight;
      const currentScrollPosition = window.scrollY;
      const newScrollPosition = currentScrollPosition + windowHeight;

      // Scroll the page to the new position smoothly
      window.scrollTo({
        top: newScrollPosition,
        behavior: "smooth",
      });
    }
  }, [selectedValue]);
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text as={"span"} position={"relative"}>
              Hi there!
            </Text>
            <br />{" "}
            <Text color={"blue.400"} as={"span"}>
              Select your required document,
            </Text>{" "}
          </Heading>

          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <FormControl>
              <Select placeholder="Select" onChange={handleSelectChange}>
                <option value={"rent"}>Rent Agreement</option>
                <option>Lease Agreement</option>
                <option>E-Arbitrator</option>
                <option>Affidavit for Death Proof</option>
                <option>Affidavit for Name Change</option>
                <option>Affidavit for Change of Address</option>
                <option>Joint Affidavit for Marriage</option>
                <option>College Admission Declaration for Bank Loan</option>
                <option>E-Objection Affidavit</option>
                <option>E-Will</option>
                <option>E-Intimation Notice</option>
                <option>E-Application Under Section 5</option>
                <option>Employment Service Agreement</option>
              </Select>
            </FormControl>
          </Stack>
          <Text fontSize={{ base: "1rem", lg: "1rem" }} color={"gray.500"}>
            After selecting, scroll down and fill out the form.
          </Text>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          }
        />
      </Flex>
    </Stack>
  );
}
