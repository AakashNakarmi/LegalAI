import React, { useState } from "react";
import "./LawyerType.css";
import {
  Flex,
  Box,
  Image,
  Badge,
  Icon,
  chakra,
  Tooltip,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";

const lawyerTypes = [
  {
    name: "Family Lawyer",
    imageURL:
      "https://media.istockphoto.com/id/1167624029/vector/parents-and-children-embracing-together-and-smile.jpg?s=612x612&w=0&k=20&c=VgZr8tMcAESNG963s3TJYJ_vHEPx8r1-IE46y94BMCM=",
  },
  {
    name: "Government Pleader",
    imageURL:
      "https://us.123rf.com/450wm/filata/filata1902/filata190200038/125092098-flat-strong-man-court-with-hammer-judge-concept-character-justice-and-law-vector-illustration.jpg?ver=6",
  },
  {
    name: "Civil Lawyer",
    imageURL:
      "https://static.vecteezy.com/system/resources/previews/007/630/247/original/court-room-with-lawyer-jury-trial-witness-or-judges-and-the-wooden-judge-s-hammer-in-flat-cartoon-design-illustration-vector.jpg",
  },
  {
    name: "Corporate Lawyer",
    imageURL:
      "https://t4.ftcdn.net/jpg/03/29/01/45/360_F_329014594_PVwsRKeibheV3iPpyex2fAb9vWGcEOoT.jpg",
  },
  {
    name: "Criminal Lawyer",
    imageURL:
      "https://images.pond5.com/computer-forensics-digital-forensic-science-illustration-233162528_iconl_nowm.jpeg",
  },
];

interface LawyerTypeProps {
  onShowType: (type: boolean, text: string) => void;
}
function LawyerType({ onShowType }: LawyerTypeProps) {
  const [buttonText, setButtonText] = useState("");
  const [type, setType] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const text = event.currentTarget.getElementsByTagName("h4")[0].textContent;
    setButtonText(text || "");
    // console.log(button)
    setType(!type);
    onShowType(!type, text || "");
  };

  return (
    <>
      <h1 className="heading">
        Please select your desired type of Legal Counselor!
      </h1>
      <Flex justifyContent="center" flexWrap="wrap" alignItems="center">
        {lawyerTypes.map((type, index) => (
          <Box
            key={index}
            bg="white"
            maxW="sm"
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            p="2"
            textAlign="center"
            cursor="pointer"
            onClick={handleClick}
            className="myBox"
            m="1rem"
          >
            <Image
              src={type.imageURL}
              alt={`Picture of ${type.name}`}
              roundedTop="lg"
              height="20%"
            />
            <chakra.h4
              fontSize="lg"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {type.name}
            </chakra.h4>
          </Box>
        ))}
      </Flex>
      {/* <div>Selected Type: {buttonText}</div> */}
    </>
  );
}

export default LawyerType;
