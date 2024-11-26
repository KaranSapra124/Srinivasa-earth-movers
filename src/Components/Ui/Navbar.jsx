import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { title: "Home", path: "/" },
    { title: "About us", path: "/about-us" },
    { title: "Services", path: "/services" },
    { title: "Machineries & Equipments", path: "/machineries-equipments" },
    { title: "Case Studies", path: "/case-studies" },
    { title: "Blogs", path: "/blogs" },
    { title: "Contact Us", path: "/contact-us" },
  ];

  return (
    <>
      <nav className="flex bg-[#fff] opacity-[85%] flex-wrap justify-between items-center w-full bg-white z-50  sticky top-0 p-4  ">
        {/* Logo */}
        <img
          className="w-[30%] sm:w-[20%] md:w-[12%] h-auto"
          src={logo}
          alt="kasturi earth movers Logo"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-evenly w-full md:w-fit items-center text-white">
          {links.map((elem, index) => (
            <Link
              key={index}
              className="m-3 md:m-5 text-sm md:text-lg text-black"
              to={elem.path}
            >
              {elem.title}
            </Link>
          ))}
        </ul>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="text-black">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden absolute top-full left-0 w-full bg-white text-black text-center`}
        >
          {links.map((elem, index) => (
            <Link
              key={index}
              className="block py-2"
              to={elem.path}
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              {elem.title}
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
