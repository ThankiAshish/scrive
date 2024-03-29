const express = require("express");

const blogController = require("../controllers/blog.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const blogRouter = express.Router();

blogRouter.get("/", blogController.getAll);
blogRouter.get("/author/:author", blogController.getAllByAuthor);
blogRouter.get("/:id", blogController.getById);
blogRouter.post("/create", authMiddleware, blogController.create);
blogRouter.put("/:id", authMiddleware, blogController.update);
blogRouter.delete("/:id", authMiddleware, blogController.delete);

module.exports = blogRouter;
