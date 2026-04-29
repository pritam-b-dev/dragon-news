import React from "react";
import Header from "../../components/shared/Header";
import NavBar from "../../components/shared/NavBar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <NavBar />
      {children}
    </div>
  );
};

export default MainLayout;
