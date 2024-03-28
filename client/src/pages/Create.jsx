import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Uploader from "../components/Uploader";
import Editor from "../components/Editor";

import UserStore from "../stores/UserStore";

const Create = () => {
  const { loginState } = UserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loginState) {
      toast.error("Unauthorized Access! Login to continue.");
      navigate("/login");
    }
  }, [loginState, navigate]);

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = { title, summary, content, cover };

    console.log(blog);
  };

  return (
    <div className="container">
      <section className="create-blog">
        <h1>Create Blog</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            name="summary"
            id="summary"
            placeholder="Enter Blog Summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
          <Uploader />
          <Editor value={content} onChange={setContent} />
          <button type="submit" className="btn">
            Create Blog
          </button>
        </form>
      </section>
    </div>
  );
};

export default Create;
