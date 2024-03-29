const multer = require("multer");
const path = require("path");

const blogServices = require("../services/blog.service");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/covers");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + fileExtension);
  },
});

const upload = multer({ storage: storage });

const blogController = {
  getAll: async (req, res) => {
    try {
      const blogs = await blogServices.getAll();

      return res.status(200).json({
        blogs,
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const blog = await blogServices.getById(id);

      return res.status(200).json({
        blog,
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  },
  create: [
    upload.single("cover"),
    async (req, res) => {
      try {
        const { title, summary, content } = req.body;
        console.log(req.body);
        const cover = req.file.filename;
        const author = req.user._id;

        const blog = await blogServices.create(
          title,
          summary,
          cover,
          content,
          author
        );

        return res.status(201).json({
          message: "Blog created successfully",
          blog,
        });
      } catch (error) {
        return res.status(400).json({
          message: error.message,
        });
      }
    },
  ],
  update: [
    upload.single("cover"),
    async (req, res) => {
      try {
        const { id } = req.params;
        const { title, summary, content } = req.body;
        let cover = req.body.cover;

        if (req.file) {
          cover = req.file.filename;
        }

        const blog = await blogServices.update(
          id,
          title,
          summary,
          cover,
          content
        );

        return res.status(200).json({
          message: "Blog updated successfully",
          blog,
        });
      } catch (error) {
        return res.status(400).json({
          message: error.message,
        });
      }
    },
  ],
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await blogServices.delete(id);

      return res.status(200).json({
        message: "Blog deleted successfully",
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  },
};

module.exports = blogController;
