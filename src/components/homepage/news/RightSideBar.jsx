import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSideBar = () => {
  return (
    <div className="">
      <h1 className="font-bold text-lg mb-4">Login with</h1>
      <div className="p-2">
        <p className="flex gap-3 justify-center border border-blue-200 mb-4 p-2 rounded-lg">
          <FaGoogle />
          Login with Google
        </p>
        <p className="flex gap-3 justify-center border border-blue-200 mb-4 p-2 rounded-lg">
          <FaGithub />
          Login with Github
        </p>
      </div>
    </div>
  );
};

export default RightSideBar;
