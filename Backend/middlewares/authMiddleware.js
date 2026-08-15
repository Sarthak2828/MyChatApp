const jwt = require("jsonwebtoken");
const user = require("../models/user");

const isLoggedin = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res.json("Unauthorized access").status(401);
    }
    const isverify = jwt.verify(token, process.env.JWT_SECRET);
    if (!isverify) {
      return res.json("Unauthorized access -invalid Token").status(401);
    }
    // console.log(isverify);
    const User = await user.findById(isverify.userId).select("-password");
    if (!User) {
      return res.status(404).json("User not found");
    }
    req.user = User;

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { isLoggedin };


