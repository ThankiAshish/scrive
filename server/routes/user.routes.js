const express = require("express");

const userController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const userRouter = express.Router();

userRouter.post("/register", userController.register);
userRouter.post("/login", userController.login);
userRouter.get("/user", authMiddleware, userController.getUser);
userRouter.put("/user", authMiddleware, userController.updateUser);
userRouter.delete("/user", authMiddleware, userController.deleteUser);
userRouter.post("/forgot-password", userController.forgotPassword);
userRouter.post("/reset-password", userController.resetPassword);

module.exports = userRouter;
