import { Link } from "react-router";
import { useState } from "react";

const navItemStyle =
  "w-full text-center px-4 py-2 text-sm font-medium text-white rounded-md transition-all duration-200 hover:bg-white/10 hover:-translate-y-[1px]";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#4C5760]/95 backdrop-blur border-b border-white/10 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 relative">
        {/* Desktop Links */}
        <div className="hidden sm:flex justify-center gap-2">
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
          <Link to="/interests" className={navItemStyle}>
            Interests
          </Link>
        </div>

        {/* Hamburger / Close Button */}
        <button
          className="sm:hidden absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 flex justify-center items-center"
          onClick={() => setOpen(!open)}
        >
          <div className="relative w-6 h-6">
            <span
              className={`absolute left-0 top-1/2 w-6 h-0.5 bg-white transform transition duration-300 origin-center ${
                open ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 w-6 h-0.5 bg-white transform transition duration-300 origin-center ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 w-6 h-0.5 bg-white transform transition duration-300 origin-center ${
                open ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </div>
        </button>

        {/* Mobile Links */}
        <div
          className={`sm:hidden flex flex-col items-center gap-2 w-full overflow-hidden transition-all duration-300 ${
            open ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <Link to="/" onClick={handleClick} className={navItemStyle}>
            Home
          </Link>
          <Link to="/projects" onClick={handleClick} className={navItemStyle}>
            Projects
          </Link>
          <Link to="/coursework" onClick={handleClick} className={navItemStyle}>
            Coursework
          </Link>
          <Link to="/employment" onClick={handleClick} className={navItemStyle}>
            Employment
          </Link>
          <Link to="/interests" onClick={handleClick} className={navItemStyle}>
            Interests
          </Link>
        </div>
      </div>
    </nav>
  );
}
