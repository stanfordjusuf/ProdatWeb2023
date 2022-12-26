import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-50">
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
              <Link to="/about">
                <a style={{ color: "#db2877" }} href="https://www.youtube.com/">
                  About
                </a>
              </Link>
            </li>
            <li>
              <a style={{ color: "#db2877" }} href="https://prodatblog.com/">
                Prodat Blog
              </a>
            </li>
            <li>
              <a style={{ color: "#db2877" }} href="http://prodatweb.com/">
                Prodat Web
              </a>
            </li>
          </ul>
        </div>
        <Link to="/">
          <div className="w-40">
            <img src={Logo} alt="logo" />
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/about">
              <a style={{ color: "#db2877" }} href="https://www.youtube.com/">
                About
              </a>
            </Link>
          </li>
          <li>
            <a style={{ color: "#db2877" }} href="https://prodatblog.com/">
              Prodat Blog
            </a>
          </li>
          <li>
            <a style={{ color: "#db2877" }} href="http://prodatweb.com/">
              Prodat Web
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  );
}
