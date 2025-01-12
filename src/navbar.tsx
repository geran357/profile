import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold">My Portfolio</div>
        <ul className="flex space-x-6">
          {[
            { to: "/", label: "Home" },
            { to: "/project", label: "Project" },
            { to: "/gallery", label: "Gallery" },
            { to: "/resume", label: "Resume" },
          ].map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `transition-all duration-300 ${
                    isActive
                      ? "font-bold border-b-2 border-white"
                      : "hover:text-gray-300"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
