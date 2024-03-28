import { useEffect } from "react";

import Blog from "../components/Blog";

import { BlogState } from "../context/BlogContext";

const Home = () => {
  const { blogs, setBlogs } = BlogState();

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch("api/blog");

      if (response.status === 200) {
        const data = await response.json();
        setBlogs(data.blogs);
      } else {
        setBlogs([]);
      }
    };

    fetchBlogs();
  }, [setBlogs]);

  return (
    <div className="container">
      <main className="home">
        {blogs.length > 0 ? (
          blogs.map((blog) => <Blog key={blog._id} blog={blog} />)
        ) : (
          <p>No blogs available</p>
        )}
      </main>
    </div>
  );
};

export default Home;
