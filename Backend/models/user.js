const mongoose = require("mongoose");

const userModel = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: false },
    password: { type: String, require: true, minlength: 6 },
    profilePic: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userModel);


