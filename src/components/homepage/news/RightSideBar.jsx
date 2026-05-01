"use client";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { authClient } from "../../../lib/auth-client";

const RightSideBar = () => {
  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  const handleGithubSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  };
  return (
    <div className="">
      <h1 className="font-bold text-lg mb-4">Login with</h1>
      <div className="p-2">
        {/* Google Login Button */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="btn btn-outline border-blue-200 w-full flex gap-3 justify-center items-center mb-4 rounded-lg hover:bg-slate-50 transition"
        >
          <FaGoogle className="text-red-500 text-lg" />
          Login with Google
        </button>

        {/* GitHub Login Button */}
        <button
          type="button"
          onClick={handleGithubSignIn}
          className="btn btn-outline border-blue-200 w-full flex gap-3 justify-center items-center mb-4 rounded-lg hover:bg-slate-50 transition"
        >
          <FaGithub className="text-black text-lg" />
          Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default RightSideBar;
