import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";
import { FaUser, FaAddressCard, FaBookReader, FaDiceD6 } from "react-icons/fa";

const Menu = () => {
  return (
    <div className="pl-5">
      <div className="bg-black  bar p-6 justify-center mx-auto rounded-lg flex gap-5">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-pink-600 rounded-lg" : "bg-zinc-700 rounded-lg"
          }
          to="/"
        >
          <div className="w-24 h-24 text-center text-white rounded-lg justify-center text-xl font-bold">
            <div className="flex justify-center pt-4">
              <FaUser className="text-3xl mb-2"></FaUser>
            </div>
            Home
          </div>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-pink-600 rounded-lg" : "bg-zinc-700 rounded-lg"
          }
          to="/about"
        >
          <div className="w-24 h-24 text-center text-white rounded-lg justify-center text-xl font-bold">
            <div className="flex justify-center pt-4">
              <FaUser className="text-3xl mb-2"></FaUser>
            </div>
            About
          </div>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-pink-600 rounded-lg" : "bg-zinc-700 rounded-lg"
          }
          to="/resume"
        >
          <div className=" w-24 h-24 text-center text-white  justify-center text-xl font-bold">
            <div className="flex justify-center pt-4">
              <FaDiceD6 className="text-3xl mb-2"></FaDiceD6>
            </div>
            Resume
          </div>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-pink-600 rounded-lg" : "bg-zinc-700 rounded-lg"
          }
          to="/projects"
        >
          <div className=" w-24 h-24 text-center text-white  justify-center text-xl font-bold">
            <div className="flex justify-center pt-4">
              <FaDiceD6 className="text-3xl mb-2"></FaDiceD6>
            </div>
            Projects
          </div>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-pink-600 rounded-lg" : "bg-zinc-700 rounded-lg"
          }
          to="/blog"
        >
          <div className=" w-24 h-24 text-center text-white rounded-lg justify-center text-xl font-bold">
            <div className="flex justify-center pt-4">
              <FaBookReader className="text-3xl mb-2"></FaBookReader>
            </div>
            Blogs
          </div>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-pink-600 rounded-lg" : "bg-zinc-700 rounded-lg"
          }
          to="/contact"
        >
          <div className=" w-24 h-24 text-center text-white rounded-lg justify-center text-xl font-bold">
            <div className="flex justify-center pt-4">
              <FaAddressCard className="text-3xl mb-2"></FaAddressCard>
            </div>
            Contact
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
