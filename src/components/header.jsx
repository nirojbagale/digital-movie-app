import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../images/logo.jpg";

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50 p-4 flex items-center justify-between">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="Digital Video Store" className="h-12 w-auto rounded-lg shadow-md" />
      </Link>

      {/* Navigation Links */}
      <nav className="flex items-center space-x-6 text-lg">
        <Link to="/tvShows" className="hover:text-blue-400 transition duration-300">TV Shows</Link>
        <Link to="/movies" className="hover:text-blue-400 transition duration-300">Movies</Link>

        {!isLoggedIn ? (
          <>
            <Link to="/login" className="hover:text-gray-300 transition duration-300">Login</Link>
            <Link to="/signup" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg shadow-md transition duration-300">
              Sign Up
            </Link>
          </>
        ) : (
          <button 
            onClick={handleLogout} 
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg shadow-md transition duration-300">
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
