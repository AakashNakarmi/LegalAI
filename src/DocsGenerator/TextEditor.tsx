import { useState } from "react";
import Jodit from "jodit-react";
import JoditEditor from "jodit-react";

interface Props {
  generatedContent: string;
}

const TextEditor = ({ generatedContent }: Props) => {
  const [content, setContent] = useState(generatedContent);
  return (
    <div>
      <JoditEditor
        className="jodit-component"
        //value is required to display the html content sent from props
        value={content}
        //onchange is required for making the realtime changes in the editor
        onChange={(value) => setContent(value)}
      />
    </div>
  );
};

export default TextEditor;
