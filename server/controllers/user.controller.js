const userServices = require("../services/user.service");

const registerController = async (req, res) => {
  const { username, email, password, profilePicture } = req.body;
  try {
    await userServices.register(username, email, password, profilePicture);
    res.status(201).json({ message: "Registration Successful!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userServices.login(email, password);
    res.status(200).json({ message: "Login Successful!", user: user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getUserController = async (req, res) => {
  try {
    const user = await userServices.getUser(req.user._id);
    res.status(200).json({ user: user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateUserController = async (req, res) => {
  try {
    const { username, email, profilePicture } = req.body;
    const user = await userServices.updateUser(
      req.user._id,
      username,
      email,
      profilePicture
    );

    res.status(200).json({ user: user, message: "User Details Updated!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  registerController,
  loginController,
  getUserController,
  updateUserController,
};
