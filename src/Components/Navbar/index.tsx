import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold tracking-tight">RMB</h1>

        <div className="space-x-6 text-sm text-gray-600">
          <Link to="/" className="hover:text-black transition">
            Home
          </Link>
          <Link to="/coursework" className="hover:text-black transition">
            Coursework
          </Link>
          <Link to="/projects" className="hover:text-black transition">
            Projects
          </Link>
          <Link to="/employment" className="hover:text-black transition">
            Employment
          </Link>
        </div>
      </div>
    </nav>
  );
}
