import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div style={{ height: "85vh" }}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
