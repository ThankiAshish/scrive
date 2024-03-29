const Blog = require("../models/blog.model");

const blogServices = {
  getAll: async () => {
    try {
      const blogs = await Blog.find()
        .populate("author", "username profilePicture")
        .sort({ createdAt: -1 });

      return blogs;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  create: async (title, summary, cover, content, author) => {
    try {
      const newBlog = new Blog({
        title,
        summary,
        cover,
        content,
        author,
      });

      const blog = await newBlog.save();

      return blog;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

module.exports = blogServices;
