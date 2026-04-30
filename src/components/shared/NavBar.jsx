"use client";
import Link from "next/link";
import React from "react";
import userImage from "@/assets/user.png";
import Image from "next/image";
import NavLink from "./NavLink";

const nav = (
  <>
    <div className="text-gray-400 md:flex ">
      <li>
        <NavLink href={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink href={"/about-us"}>About</NavLink>
      </li>
      <li>
        <NavLink href={"/career"}>Career</NavLink>
      </li>
    </div>
  </>
);

const NavBar = () => {
  return (
    <div className="navbar bg-base-100  container mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
          >
            {nav}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{nav}</ul>
      </div>
      <div className="navbar-end ">
        <Image src={userImage} alt="user logo" className="mr-4" />
        <Link href={"/login"} className="bg-black text-white px-8 py-1">
          Login
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
