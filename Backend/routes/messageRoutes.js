const express = require("express");
const { isLoggedin } = require("../middlewares/authMiddleware");
const {
  getUsersForSidebar,
  getMessages,
  sendMessage,
} = require("../controller/messageController");

const messageRoutes = express.Router();

messageRoutes.get("/users", isLoggedin, getUsersForSidebar);
messageRoutes.get("/:id", isLoggedin, getMessages);
messageRoutes.post("/send/:id", isLoggedin, sendMessage);

module.exports = { messageRoutes };


