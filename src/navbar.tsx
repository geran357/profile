import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaProjectDiagram,
  FaImages,
  FaFileAlt,
  FaInstagram,
} from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-3xl font-extrabold text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-300">
            MyPortfolio
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8">
          {[
            {
              to: "/",
              label: "Home",
              icon: <FaHome className="inline mr-2" />,
            },
            {
              to: "/project",
              label: "Project",
              icon: <FaProjectDiagram className="inline mr-2" />,
            },
            {
              to: "/gallery",
              label: "Gallery",
              icon: <FaImages className="inline mr-2" />,
            },
            {
              to: "/resume",
              label: "Resume",
              icon: <FaFileAlt className="inline mr-2" />,
            },
          ].map(({ to, label, icon }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `transition-all duration-300 flex items-center text-lg ${
                    isActive
                      ? "font-bold text-yellow-300 underline decoration-2"
                      : "text-white hover:text-yellow-300"
                  }`
                }
              >
                {icon} {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Instagram Link */}
        <div>
          <a
            href="https://www.instagram.com/qx.nkp_amv/profilecard/?igsh=MXV6azUzODVoMzdlMQ==" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-yellow-300 text-blue-800 font-bold rounded-full shadow-md hover:bg-yellow-400 transition duration-300"
          >
            <FaInstagram className="mr-2" />
            Follow Me on Instagram
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
