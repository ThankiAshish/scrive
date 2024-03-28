import { useState } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp, faTimes } from "@fortawesome/free-solid-svg-icons";

const Uploader = ({ cover, setCover }) => {
  const [fileName, setFileName] = useState("");

  const clearImage = (e) => {
    e.stopPropagation();
    setCover(null);
    setFileName("");
    document.getElementById("cover").value = null;
  };

  return (
    <main
      className="uploader"
      onClick={() => document.querySelector(".cover").click()}
    >
      <input
        type="file"
        name="cover"
        id="cover"
        className="cover"
        accept=".jpg, .jpeg, .png"
        multiple={false}
        hidden
        onChange={({ target: { files } }) => {
          files[0] && setFileName(files[0].name);
          if (files) {
            setCover(files[0]);
          }
        }}
      />
      {cover ? (
        <div className="image-preview">
          <img
            src={URL.createObjectURL(cover)}
            alt={fileName}
            className="file-preview"
          />
          <button className="clear-button" onClick={clearImage}>
            <FontAwesomeIcon icon={faTimes} className="icon" />
          </button>
        </div>
      ) : (
        <div className="default-preview">
          <FontAwesomeIcon icon={faCloudArrowUp} className="icon" />
          <p>Upload Cover Image</p>
        </div>
      )}
    </main>
  );
};

Uploader.propTypes = {
  cover: PropTypes.object,
  setCover: PropTypes.func.isRequired,
};

export default Uploader;
