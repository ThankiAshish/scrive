const express = require("express");
const router = express.Router();

const userRoutes = require("./user.routes");
const blogRoutes = require("./blog.routes");

router.use("/auth", userRoutes);
router.use("/blog", blogRoutes);

module.exports = router;
