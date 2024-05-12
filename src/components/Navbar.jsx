import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <div className="links">
        <h2>
          <NavLink
            className={(e) => {
              return e.isActive ? "active" : "";
            }}
            to="/"
          >
            Home
          </NavLink>
        </h2>
        <h2>
          <NavLink
            className={(e) => {
              return e.isActive ? "active" : "";
            }}
            to="/about"
          >
            About
          </NavLink>
        </h2>
        <h2>
          <NavLink
            className={(e) => {
              return e.isActive ? "active" : "";
            }}
            to="/login"
          >
            Login
          </NavLink>
        </h2>
      </div>
    </div>
  );
};

export default Navbar;
