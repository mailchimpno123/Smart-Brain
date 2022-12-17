import "./ImageLinkForm.css";
import React, { useState } from "react";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  const [input, setInput] = useState("");

  return (
    <div>
      <p className="f3">
        {"This Magic Brain will detect faces in your pictures. Give it a try."}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={() => onButtonSubmit(input)}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;







