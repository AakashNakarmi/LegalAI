import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  Divider,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import "./LawyerName.css";
import Form from "./Form";
import LawyerType from "./LawyerType";

interface LawyerNameProps {
  type: string;
}

function LawyerName({ type }: LawyerNameProps) {
  const [back, setBack] = useState<boolean>(false);
  const [info, setInfo] = useState<any[]>([]); // Assuming info is an array of objects
  const [showForm, setShowForm] = useState<boolean>(false);
  const [showLawyerType, setShowLawyerType] = useState<boolean>(false);

  const fetchdata = async () => {
    const response = await axios.get(`http://localhost:8080/expert/${type}`);
    setInfo(response.data);
  };

  useEffect(() => {
    fetchdata();
  }, [type]);

  const handleClick = () => {
    setShowForm(true);
  };

  const handleBackClick = () => {
    setShowForm(false);
    setShowLawyerType(true);
  };

  return (
    <>
      {showLawyerType ? (
        <LawyerType onShowType={(showType) => setShowLawyerType(showType)} />
      ) : (
        <div className="outerdiv">
          <Button mt={3} onClick={handleBackClick}>
            Back
          </Button>
          <h1 className="heading1">Here is the list of {type}s!</h1>

          <div className="card">
            {info.map((item, index) => (
              <Card key={index} maxW="xs">
                <CardBody>
                  <Image
                    src={item.photo}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Heading size="md">{item.name}</Heading>
                  <Text>{item.desc}</Text>
                  <Text color="blue.600" fontSize="2xl">
                    Rs {item.price}
                  </Text>
                </CardBody>

                <Divider />
                <Button
                  variant="solid"
                  colorScheme="blue"
                  onClick={handleClick}
                >
                  Book an appointment
                </Button>
              </Card>
            ))}
          </div>

          {showForm && (
            <div className="modal-overlay">
              <div className="modal-content">
                <Form onClose={() => setShowForm(false)} />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default LawyerName;
