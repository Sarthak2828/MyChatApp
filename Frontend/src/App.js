import React from "react";
import Register from "./pages/Register";
import Signup from "./pages/Signup";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Setting from "./pages/Setting";
import { useThemeStore } from "./store/Theme.store.js";
import { useAuth } from "./store/Auth.store.js";
import MyNavbar from "./Component/MyNavbar.js";
import Layout from "./Component/Layout.js";

function App() {
  const { theme } = useThemeStore();
  const { onlineUsers, authUser } = useAuth();
  console.log(onlineUsers);

  return (
    <div data-theme={theme}>
      <MyNavbar />
      <Routes>
        <Route path="/signup" element={authUser ? <Home /> : <Signup />} />
        <Route path="/register" element={authUser ? <Home /> : <Register />} />
        <Route path="/profile" element={authUser ? <Profile /> : <Signup />} />
        <Route path="/" element={authUser ? <Home /> : <Signup />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </div>
  );
  // <Register />;
}

export default App;


