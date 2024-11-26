import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Ui/Navbar";
import Footer from "../Components/Ui/Footer";

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
