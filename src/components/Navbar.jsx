import React, { useState } from "react";
import logo from "../assets/images/logo.png";
// import "./navbar.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex text-white justify-end items-center h-24 lg:max-w-[900px] xl:max-w-[1200px]  px-4 mx-auto relative md:max-w-[710px] max-w-[450px]">
      <div className="absolute left-2/4 top-0  lg:left-0 lg:top-0">
        <div className=" -left-1/2 relative w-auto bg-white p-4 py-5 rounded-br-2xl rounded-bl-2xl abolute lg:left-0 lg:top-0 items-center">
          <img className="lg:w-32 md:w-28 w-20" src={logo} alt="" />
        </div>
      </div>
      <ul className="text-lg hidden lg:flex">
        <li className="p-4">WHAT DO WE DO</li>
        <li className="p-4">OUR PROJECTS</li>
        <li className="p-4">OUR TEAM</li>
        <li className="p-4">REVIEWS</li>
        <li className="p-4"> EN </li>
      </ul>
      <div onClick={handleNav} className="block lg:hidden">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={50} />}
        {/* <AiOutlineMenu size={50} /> */}
      </div>

      <div
        className={
          nav
            ? "fixed w-full md:w-5/6 text-center z-10 left-0 top-0  border-r-gray-900 mt-24 md:mt-32 py-0  bg-black my-auto centerFixed ease-in-out duration-500"
            : "mt-24 md:mt-32 fixed left-[-100%] z-10"
        }
      >
        <ul className="">
          <li className="p-4 border-b">WHAT DO WE DO</li>
          <li className="p-4 border-b">OUR PROJECTS</li>
          <li className="p-4 border-b">OUR TEAM</li>
          <li className="p-4 border-b">REVIEWS</li>
          <li className="p-4"> EN </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
