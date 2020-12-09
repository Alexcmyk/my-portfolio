import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-white bg-opacity-5 fixed z-10 w-screen">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-20 text-gray-300 text-2xl font-bold roboto hover:text-white"
          >
            A.K.
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-300 hover:text-white"
            activeClassName="bg-gray-700"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-300 hover:text-white"
            activeClassName="bg-gray-700"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-300 hover:text-white"
            activeClassName="bg-gray-700"
          >
            About
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon url="https://github.com/alexcmyk" className="mr-4" target="blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
          <SocialIcon url="https://linkedin.com/in/alexanderkirts" className="mr-4" target="blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
          <SocialIcon url="https://twitter.com/alexcmyk" className="mr-4" target="blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
        </div>
      </div>
    </header>
  );
}
