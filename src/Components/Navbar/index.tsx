import { Link } from "react-router";
import { useState } from "react";

const navItemStyle =
  "block px-4 py-2 text-sm font-medium rounded-full bg-gray-100 border border-gray-200 shadow-sm text-gray-700 hover:bg-gray-200 hover:text-black hover:shadow-md transform hover:-translate-y-0.5 transition";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6 py-4 relative">
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

        <button
          className="sm:hidden absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
        </button>

        {open && (
          <div className="sm:hidden flex flex-col items-center gap-3 mt-4">
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
