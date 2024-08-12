import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-slate-800 text-white py-4">
      <div className="logo">
        <span className="font-bold text-xl mx-8 cursor-pointer">FunTask</span>
      </div>
      <ul className="flex gap-8 mx-16">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `cursor-pointer transition-all duration-100 ${
                isActive ? "font-bold" : "hover:font-bold"
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/your-tasks"
            className={({ isActive }) =>
              `cursor-pointer transition-all duration-100 ${
                isActive ? "font-bold" : "hover:font-bold"
              }`
            }
          >
            Your Tasks
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `cursor-pointer transition-all duration-100 ${
                isActive ? "font-bold" : "hover:font-bold"
              }`
            }
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
