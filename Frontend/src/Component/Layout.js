import React from "react";
import MyNavabar from "./MyNavbar";

const Layout = ({ children }) => {
  return (
    <>
      <MyNavabar />
      {children}
    </>
  );
};

export default Layout;


