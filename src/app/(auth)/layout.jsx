import React from "react";
import NavBar from "../../components/shared/NavBar";

const AuthLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default AuthLayout;
