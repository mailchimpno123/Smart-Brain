import "./ImageLinkForm.css";
import React, { useState } from "react";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  const [pippo, setPippo] = useState("");

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
            value={pippo}
            onChange={(event) => setPippo(event.target.value)}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={() => onButtonSubmit(pippo)}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;







