import React, { useState, useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
  FaBars,
} from "react-icons/fa";

const Navbar = () => {
  const navBarMenu = [
    {
      href: "#home",
      name: "Home",
    },
    {
      href: "#gallery",
      name: "Gallery",
    },
    {
      href: "#deals",
      name: "Deals",
    },
    {
      href: "#contact",
      name: "Contact",
    },
  ];
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80">
      <ul className="hidden sm:flex px-4">
        {navBarMenu.map((con) => (
          <li key={con.name}>
            <a href={con.href}>{con.name}</a>
          </li>
        ))}
      </ul>
      <div className="flex justify-between">
        <FaFacebookF className="mx-4 cursor-pointer" />
        <FaTwitter className="mx-4 cursor-pointer" />
        <FaGooglePlusG className="mx-4 cursor-pointer" />
        <FaInstagram className="mx-4 cursor-pointer" />
      </div>
      {/* {Hambutger Icon} */}
      <div onClick={handleNav} className="sm:hidden z-10">
        {nav ? (
          <MdOutlineClose
            size={20}
            className="mr-4 cursor-pointer transition duration-700  "
          />
        ) : (
          <FaBars
            size={20}
            className="mr-4 cursor-pointer transition duration-700"
          />
        )}
      </div>
      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 h-screen bg-black/90 px-4 py-7 flex flex-col w-full"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className="h-full w-full text-center pt-12">
          {navBarMenu.map((con) => (
            <li key={con.name} className="text-2xl py-8">
              <a href={con.href}>{con.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
