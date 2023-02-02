import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import UilBars from "@iconscout/react-unicons/icons/uil-bars";
import UilTimes from "@iconscout/react-unicons/icons/uil-times";


const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full top-0 left-0 overflow-hidden md:h-20 bg-black ">
      <div className="flex justify-between items-center max-w-[1140px] mx-auto py-2 text-white">
        <h1
          className="w-full text-3xl font-bold text-[#6be0e9] md:ml-0 ml-8"
          onClick={() => scroll.scrollToTop()}
        >
          Portfolio
        </h1>
        <nav>
          <ul className="hidden md:flex">
            <li className="p-4">
              <Link
                to="Home"
                className="cursor-pointer hover:text-[#6be0e9]"
                smooth={true}
                duration={1000}
              >
                Home
              </Link>
            </li>
            <li className="p-4">
              <Link
                to="About"
                className="cursor-pointer hover:text-[#6be0e9]"
                smooth={true}
                duration={1000}
              >
                About
              </Link>
            </li>
            <li className="p-4">
              <Link
                to="Skills"
                className="cursor-pointer hover:text-[#6be0e9]"
                smooth={true}
                duration={1000}
              >
                Skills
              </Link>
            </li>
            <li className="p-4">
              <Link
                to="Services"
                className="cursor-pointer hover:text-[#6be0e9]"
                smooth={true}
                duration={1000}
              >
                Services
              </Link>
            </li>
            <li className="p-4 ">
              <Link
                to="Contact"
                className="cursor-pointer hover:text-[#6be0e9]"
                smooth={true}
                duration={1000}              
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div onClick={handleNav} className="block md:hidden mr-4">
          {nav ? <UilTimes size={30} /> : <UilBars size={30} />}
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[40%] bg-[#000300] ease-in-out duration-700 md:hidden"
              : "fixed left-[-100%] ease-linear duration-700"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#6be0e9] m-4 pl-4">
            Portfolio
          </h1>
          <ul className="uppercase p-4 h-screen cursor-pointer">
            <li className="p-4 ml-2 border-b border-gray-600 w-[50%] ">
              <Link
                to="Home"
                className="cursor-pointer hover:text-[#6be0e9]"
                smooth={true}
                duration={1000}
                onClick={handleNav}
              >
                Home
              </Link>
            </li>
            <li className="p-4 ml-2  border-b border-gray-600 w-[50%]">
              <Link
                to="About"
                className="cursor-pointer hover:text-[#6be0e9] "
                smooth={true}
                duration={1000}
                onClick={handleNav}
              >
                About
              </Link>
            </li>
            <li className="p-4 ml-2  border-b border-gray-600 w-[50%]">
              <Link
                to="Skills"
                className="cursor-pointer hover:text-[#6be0e9]"
                smooth={true}
                duration={1000}
                onClick={handleNav}
              >
                Skills
              </Link>
            </li>
            <li className="p-4 ml-2  border-b border-gray-600 w-[50%]">
              <Link
                to="Services"
                className="cursor-pointer hover:text-[#6be0e9]"
                smooth={true}
                duration={1000}
                onClick={handleNav}
              >
                Services
              </Link>
            </li>
            <li className="p-4 ml-2  border-b border-gray-600 w-[50%] ">
              <Link
                to="Contact"
                className="cursor-pointer hover:text-[#6be0e9]"
                smooth={true}
                duration={1000}
                onClick={handleNav}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
