const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userServices = {
  register: async (username, email, password, profilePicture) => {
    const existingUser = await User.findOne({ email });
    const existingUsername = await User.findOne({ username });

    if (existingUser) {
      throw new Error("User already exists");
    }

    if (existingUsername) {
      throw new Error("Username already exists");
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

    return user;
  },
  login: async (email, password) => {
    let user = await User.findOne({ email });

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      throw new Error("Invalid credentials");
    }

    const payload = {
      user: {
        _id: user._id,
      },
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    user = {
      _id: user._id,
      username: user.username,
      email: user.email,
      profilePicture: user.profilePicture,
      token,
    };

    return user;
  },
  getUser: async (id) => {
    const user = await User.findById(id).select("-password");

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  },
  updateUser: async (id, username, email) => {
    const user = await User.findById(id);

    if (!user) {
      throw new Error("User not found");
    }

    user.username = username;
    user.email = email;

    await user.save();

    return user;
  },
};

module.exports = userServices;
