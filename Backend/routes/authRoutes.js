const express = require("express");
const {
  loginController,
  regController,
  logoutController,
  checkAuth,
  profileupdateController,
} = require("../controller/authController");
const { isLoggedin } = require("../middlewares/authMiddleware");
const authRoutes = express.Router();

authRoutes.post("/login", loginController);
authRoutes.post("/logout", logoutController);
authRoutes.post("/register", regController);
authRoutes.get("/check", isLoggedin, checkAuth);
authRoutes.put("/update-profile", isLoggedin, profileupdateController);
// routes.post("/update", isLoggedin,profileupdateControlle);

module.exports = { authRoutes };


