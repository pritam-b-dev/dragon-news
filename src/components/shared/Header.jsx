import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { format, compareAsc } from "date-fns";

const Header = () => {
  return (
    <div className=" flex flex-col justify-center items-center mt-6 space-y-2">
      <Image src={logo} alt="logo" width={300} height={200} />
      <p className="text-gray-500">Journalism Without Fear or Favour</p>
      {/* <p>{format(new Date(), "<strong> EEEE</strong>,MMM dd,yyyy")}</p> */}
      <p>
        <strong>{format(new Date(), "EEEE")}</strong>,{" "}
        {format(new Date(), "MMM dd,yyyy")}
      </p>
    </div>
  );
};

export default Header;
