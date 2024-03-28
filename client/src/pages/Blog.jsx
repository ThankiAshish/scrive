import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Blog = () => {
  const [blog, setBlog] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  if (!location.state) {
    navigate("/");
  }

  const id = location.state.id;

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await fetch(`api/blog/${id}`);

      if (response.status === 200) {
        const data = await response.json();
        setBlog(data.blog);
      } else {
        toast.error("An error occurred. Please try again later.");
      }
    };

    fetchBlog();
  }, [id]);

  return (
    blog &&
    blog.author && (
      <div className="container">
        <div className="blog-container">
          <div className="blog-header">
            <h1 className="blog-title">{blog.title}</h1>
            <div className="blog-author">
              <img
                src={blog.author.profilePicture + blog.author.username}
                alt="avatar"
              />
              <div className="blog-details">
                <h4>{blog.author.username}</h4>
                <p>
                  {new Date(blog.createdAt).getMonth() + 1}/
                  {new Date(blog.createdAt).getDate()}/
                  {new Date(blog.createdAt).getFullYear()}
                </p>
              </div>
            </div>
          </div>
          <img
            src={`${import.meta.env.VITE_API_URL}/uploads/covers/${blog.cover}`}
            alt="article"
            className="blog-image"
          />
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </div>
    )
  );
};

export default Blog;
