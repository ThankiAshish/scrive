const { register, login } = require("../services/user.service");

const registerController = async (req, res) => {
  const { username, email, password, profilePicture } = req.body;
  try {
    await register(username, email, password, profilePicture);
    res.status(201).json({ message: "Registration Successful!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await login(email, password);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { registerController, loginController };
