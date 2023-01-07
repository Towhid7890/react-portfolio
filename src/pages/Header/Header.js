import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">
                <a>Home</a>
              </Link>
            </li>

            <li>
              <Link to="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link to="/resume">
                <a>Resume</a>
              </Link>
            </li>
            <li>
              <Link to="/projects">
                <a>Projects</a>
              </Link>
            </li>
            <li>
              <Link to="/blog">
                <a>Blogs</a>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/">
          <a className=" text-xl pl-2 md:pl-5">My Portfolio</a>
        </Link>
      </div>

      <div className="navbar-end hidden lg:flex">
        <input type="checkbox" className="toggle" />
      </div>
    </div>
  );
};

export default Header;
