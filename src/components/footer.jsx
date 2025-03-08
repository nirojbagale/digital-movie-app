import React from "react";
import { FaApple, FaGooglePlay, FaWindows, FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaRss } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0D1117] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* App Download Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
          <button className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg">
            <FaApple className="text-xl" /> App Store
          </button>
          <button className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg">
            <FaGooglePlay className="text-xl" /> Google Play
          </button>
          <button className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg">
            <FaWindows className="text-xl" /> Microsoft
          </button>
        </div>

        {/* Footer Sections in Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-400 text-center sm:text-left">
          {/* Watch Section */}
          <div>
            <h3 className="text-white font-semibold mb-3">Watch</h3>
            <ul>
              <li><a href="#">Spotlight</a></li>
              <li><a href="#">Movies</a></li>
              <li><a href="#">TV</a></li>
              <li><a href="#">Free</a></li>
            </ul>
          </div>

          {/* My Account Section */}
          <div>
            <h3 className="text-white font-semibold mb-3">My Account</h3>
            <ul>
              <li><a href="#">My Store</a></li>
              <li><a href="#">Account</a></li>
              <li><a href="#">Settings</a></li>
              <li><a href="#">Manage Devices</a></li>
            </ul>
          </div>

          {/* Features Section */}
          <div>
            <h3 className="text-white font-semibold mb-3">Features</h3>
            <ul>
              <li><a href="#">Lists</a></li>
              <li><a href="#">Family</a></li>
              <li><a href="#">Disc to Digital</a></li>
              <li><a href="#">Movies Anywhere</a></li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-white font-semibold mb-3">Help</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Devices</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Forums</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Jobs</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 flex justify-center space-x-4">
          <FaLinkedin className="text-2xl hover:text-blue-500 cursor-pointer" />
          <FaFacebook className="text-2xl hover:text-blue-600 cursor-pointer" />
          <FaTwitter className="text-2xl hover:text-blue-400 cursor-pointer" />
          <FaYoutube className="text-2xl hover:text-red-500 cursor-pointer" />
          <FaRss className="text-2xl hover:text-orange-500 cursor-pointer" />
        </div>

      </div>
    </footer>
  );
};

export default Footer;
