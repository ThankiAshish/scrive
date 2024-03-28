import ReactQuill from "react-quill";
import PropTypes from "prop-types";

import "react-quill/dist/quill.snow.css";

const Editor = ({ value, onChange }) => {
  return <ReactQuill value={value} onChange={onChange} theme="snow" />;
};

Editor.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Editor;
