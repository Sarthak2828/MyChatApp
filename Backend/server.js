const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const { connDB } = require("./database/db");
const { authRoutes } = require("./routes/authRoutes");
const { messageRoutes } = require("./routes/messageRoutes");
const cors = require("cors");
const path = require("path");
const { app, server } = require("./helpers/socket");
dotenv.config();
// const __dirname = path.resolve();
const PORT = process.env.PORT || 8080;

//database connect
connDB();
//frontend connectivity

app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend URL
    credentials: true, // Allow credentials (cookies)
  })
);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});
//setting upload limit
app.use(express.json({ limit: "50mb" })); // Example: Set limit to 10MB
app.use(express.urlencoded({ limit: "50mb", extended: true }));
//middleware
app.use(express.json());
app.use(cookieParser());
//authentication routes
app.use("/api/v1/auth", authRoutes);
//messages routes
app.use("/api/v1/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../Frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend", "build", "index.html"));
  });
}
server.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});


