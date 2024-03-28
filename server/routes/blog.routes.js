const express = require("express");

const blogController = require("../controllers/blog.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const blogRouter = express.Router();

blogRouter.get("/", blogController.getAll);
blogRouter.get("/:id", blogController.getById);
blogRouter.post("/create", authMiddleware, blogController.create);

module.exports = blogRouter;
