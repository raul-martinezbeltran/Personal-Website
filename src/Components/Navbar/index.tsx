import { Link } from "react-router";

const navItemStyle =
  "px-4 py-2 text-sm font-medium rounded-full bg-gray-100 border border-gray-200 shadow-sm text-gray-700 hover:bg-gray-200 hover:text-black hover:shadow-md transform hover:-translate-y-0.5 transition";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200 hover:shadow-lg transition-shadow">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-center items-center">
        <div className="flex space-x-4">
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
      </div>
    </nav>
  );
}
