import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp, faTimes } from "@fortawesome/free-solid-svg-icons";

const Uploader = () => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("");

  const clearImage = () => {
    setImage(null);
    setFileName("");
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
            const reader = new FileReader();
            reader.onload = () => setImage(reader.result);
            reader.readAsDataURL(files[0]);
          }
        }}
      />
      {image ? (
        <div className="image-preview">
          <img src={image} alt={fileName} className="file-preview" />
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

export default Uploader;
