import { Link, } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for hamburger menu
import logo from "../images/logo.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // For mobile menu toggle

  return (
    <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50 p-4">
      <div className="flex items-center justify-between max-w-8xl mx-auto">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Digital Video Store" className="h-12 w-auto rounded-lg shadow-md" />
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button 
          className="md:hidden text-white text-2xl focus:outline-none" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <nav className={`absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent p-4 md:p-0 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 text-lg transition-transform duration-300 ${menuOpen ? "block" : "hidden md:flex"}`}>
          <Link to="/tvShows" className="hover:text-blue-400 transition duration-300">TV Shows</Link>
          <Link to="/movies" className="hover:text-blue-400 transition duration-300">Movies</Link>
              <Link to="/login" className="hover:text-gray-300 transition duration-300">Login</Link>
              <Link to="/signup" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg shadow-md transition duration-300">
                Sign Up
              </Link>         
        </nav>
      </div>
    </header>
  );
};

export default Header;
