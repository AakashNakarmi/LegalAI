import { useState } from "react";

import LawyerType from "./LawyerType";
import LawyerName from "./LawyerName";

function App() {
  const [show, setShow] = useState<boolean>(true);
  const [ButtonText, setButtonText] = useState<string>("");

  const ShowType = (type: boolean, buttonText: string) => {
    setShow(type);
    setButtonText(buttonText);
  };

  return (
    <div className="App">
      {show ? (
        <LawyerType onShowType={ShowType} />
      ) : (
        <LawyerName type={ButtonText} />
        /* You can replace this 'Other Content' with any other component or JSX you want to render when 'show' is false */
      )}
    </div>
  );
}

export default App;
