const { jwtGenerator } = require("../helpers/utils");
const user = require("../models/user");
const bcrypt = require("bcrypt");
const { cloudinary } = require("../helpers/cloudinary");

// Login
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const loguser = await user.findOne({ email });
    if (!loguser) {
      return res
        .status(400)
        .json({
          success: false,
          message: "User not Found. Please Create account first ",
        });
    }
    const isPassword = await bcrypt.compare(password, loguser.password);
    if (!isPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Password " });
    }
    jwtGenerator(loguser._id, res);
    return res
      .status(200)
      .json({
        name: loguser.name,
        email: loguser.email,
        _id: loguser._id,
        profilePic: loguser.profilePic,
        success: true,
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Register
const regController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ success: false, message: "Password length is short" });
    }
    const log = await user.findOne({ email });
    if (log) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = new user({
      name: name,
      email: email,
      password: hashPassword,
    });

    await newUser.save();
    jwtGenerator(newUser._id, res);
    return res
      .status(201)
      .json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        profilePic: newUser.profilePic,
        createdAt: newUser.createdAt,
        success: true,
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Logout
const logoutController = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    return res
      .status(200)
      .json({ success: true, message: "Successfully logged Out" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Internal server error. Couldn't log out" });
  }
};

// Updating profile
const profileupdateController = async (req, res) => {
  try {
    const { profilePic } = req.body;
    const userId = req.user._id;

    if (!profilePic) {
      return res
        .status(400)
        .json({ success: false, message: "Profile pic is required" });
    }
    const cloudResponse = await cloudinary.uploader.upload(profilePic);
    const updatedUser = await user.findByIdAndUpdate(
      userId,
      { profilePic: cloudResponse.secure_url },
      { new: true }
    );
    return res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Internal server error. Couldn't update profile" });
  }
};

// Checking auth
const checkAuth = (req, res) => {
  try {
    return res.status(200).json(req.user);
  } catch (error) {
    console.log("Error in checkAuth controller", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  loginController,
  regController,
  logoutController,
  checkAuth,
  profileupdateController
}

