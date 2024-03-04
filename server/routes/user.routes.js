const express = require("express");
const userController = require("../controllers/user.controller");

const userRouter = express.Router();

userRouter.post("/register", userController.registerController);
userRouter.post("/login", userController.loginController);

module.exports = userRouter;
