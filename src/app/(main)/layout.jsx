import React from "react";
import Header from "../../components/shared/Header";
import NavBar from "../../components/shared/NavBar";
import BreakingNews from "../../components/shared/BreakingNews";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <BreakingNews />
      <NavBar />
      {children}
    </div>
  );
};

export default MainLayout;
