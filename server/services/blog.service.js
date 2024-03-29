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
  getById: async (id) => {
    try {
      const blog = await Blog.findById(id).populate(
        "author",
        "username profilePicture"
      );

      return blog;
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
  update: async (id, title, summary, cover, content) => {
    try {
      const blog = await Blog.findById(id);

      blog.title = title;
      blog.summary = summary;
      blog.cover = cover;
      blog.content = content;

      await blog.save();

      return blog;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  delete: async (id) => {
    try {
      await Blog.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

module.exports = blogServices;
