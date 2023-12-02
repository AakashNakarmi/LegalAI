import MediaObject from "./MediaObject";
import { useState } from "react";

import RentForm from "./RentForm";

import "../App.css";

import { useOutletContext } from "react-router-dom";

interface DocGeneratorProps {
  OpenEditor: () => void;
}

const DocGenerator = () => {
  const { OpenEditor } = useOutletContext() as DocGeneratorProps;
  const [selectedForm, setSelectedForm] = useState("");

  return (
    <>
      <MediaObject onChange={(form) => setSelectedForm(form)}></MediaObject>
      {selectedForm === "rent" ? (
        <RentForm OpenEdit={OpenEditor} />
      ) : //  : selectedForm === "death" ? (
      //   <DeathForm />
      // )
      null}
    </>
  );
};

export default DocGenerator;
