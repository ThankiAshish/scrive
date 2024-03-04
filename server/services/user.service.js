const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (username, email, password, profilePicture) => {
  const existingUser = await User.findOne({ email });
  const existingUsername = await User.findOne({ username });

  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  if (existingUsername) {
    return res.status(400).json({ message: "Username already exists" });
  }

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  const user = new User({
    username,
    email,
    password: hashedPassword,
    profilePicture,
  });

  await user.save();

  return res.status(201).json({ message: "Registration Successful!" });
};

const login = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const isPasswordValid = bcrypt.compareSync(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const payload = {
    user: {
      _id: user._id,
    },
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  user = {
    _id: user._id,
    username: user.username,
    email: user.email,
    profilePicture: user.profilePicture,
    token,
  };

  return res.status(200).json({ user });
};

module.exports = {
  register,
  login,
};
