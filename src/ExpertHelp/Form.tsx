import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import "./Form.css";

interface FormProps {
  onClose: () => void;
}
function Form({ onClose }: FormProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleB = () => {
    alert("Your appointment has been booked!");
    setFormSubmitted(true);
    onClose(); // Close the form
  };

  return (
    <div className="form-container">
      <h2 className="Formm">Submit Your Issue</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name :</label>
          <input className="label" placeholder="Enter your details" />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Email :</label>
          <input className="label" placeholder="Enter your details" />
        </div>

        <div className="form-group">
          <label htmlFor="issue">Issue :</label>
          <textarea
            className="textArea"
            placeholder=" Please state your issue in brief"
          ></textarea>
        </div>

        <Button
          colorScheme="blue"
          size="lg"
          className="mysubmit"
          onClick={handleB}
        >
          Book
        </Button>
      </form>
    </div>
  );
}

export default Form;
