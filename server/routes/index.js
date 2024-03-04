const express = require("express");
const router = express.Router();

const userRoutes = require("./user.routes");
const articleRoutes = require("./article.routes");

router.use("/auth", userRoutes);
// router.use("/articles", articleRoutes);

module.exports = router;
