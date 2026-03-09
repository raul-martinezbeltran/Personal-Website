import { Link } from "react-router";
import { useState } from "react";

const navItemStyle =
  "w-full text-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md transition-colors hover:text-black hover:bg-gray-200";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6 py-4 relative">
        {/* Desktop Links */}
        <div className="hidden sm:flex justify-center space-x-4">
          <Link to="/" className={navItemStyle}>
            Home
          </Link>
          <Link to="/projects" className={navItemStyle}>
            Projects
          </Link>
          <Link to="/coursework" className={navItemStyle}>
            Coursework
          </Link>
          <Link to="/employment" className={navItemStyle}>
            Employment
          </Link>
        </div>

        {/* Hamburger / Close Button */}
        <button
          className="sm:hidden absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 flex justify-center items-center"
          onClick={() => setOpen(!open)}
        >
          <div className="relative w-6 h-6">
            {/* Top line */}
            <span
              className={`absolute left-0 top-1/2 w-6 h-0.5 bg-gray-800 transform transition duration-300 origin-center ${
                open ? "rotate-45" : "-translate-y-2"
              }`}
            ></span>
            {/* Middle line */}
            <span
              className={`absolute left-0 top-1/2 w-6 h-0.5 bg-gray-800 transform transition duration-300 origin-center ${
                open ? "opacity-0" : ""
              }`}
            ></span>
            {/* Bottom line */}
            <span
              className={`absolute left-0 top-1/2 w-6 h-0.5 bg-gray-800 transform transition duration-300 origin-center ${
                open ? "-rotate-45" : "translate-y-2"
              }`}
            ></span>
          </div>
        </button>

        {/* Mobile Links */}
        {open && (
          <div className="sm:hidden flex flex-col items-center gap-2 mt-4 w-full">
            <Link to="/" className={navItemStyle}>
              Home
            </Link>
            <Link to="/projects" className={navItemStyle}>
              Projects
            </Link>
            <Link to="/coursework" className={navItemStyle}>
              Coursework
            </Link>
            <Link to="/employment" className={navItemStyle}>
              Employment
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
