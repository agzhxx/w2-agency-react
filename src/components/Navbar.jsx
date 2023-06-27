import React from "react";
import logo from "../assets/images/logo.png";
const Navbar = () => {
  return (
    <div className="flex text-white justify-end items-center h-24 max-w-[1080px] px-4 mx-auto relative">
      <div className=" w-auto bg-white p-4 py-5 rounded-br-2xl rounded-bl-2xl absolute left-0 top-0 items-center">
        <img
          className="max-with-full h-auto"
          src={logo}
          alt=""
          style={{ width: "8vw" }}
        />
      </div>
      <ul className="flex text-lg">
        <li className="p-4">WHAT DO WE DO</li>
        <li className="p-4">OUR PROJECTS</li>
        <li className="p-4">OUR TEAM</li>
        <li className="p-4">REVIEWS</li>
        <li className="p-4"> EN </li>
      </ul>
    </div>
  );
};
export default Navbar;
