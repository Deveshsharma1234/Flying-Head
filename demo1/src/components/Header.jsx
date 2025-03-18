import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import {Logo} from '../assets/Logo';
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold flex items-center gap-2">
          <img
            src={Logo}
            alt="Logo"
            className="h-10 w-10"
          />
         Flying Head
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="#offer" className="hover:text-purple-400 transition">
              
            </Link>
          </li>
          <li>
            <Link to="/feature" className="hover:text-purple-400 transition">
              Features
            </Link>
          </li>
          <li>
            <Link to="#references" className="hover:text-purple-400 transition">
              References
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-purple-400 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="#team" className="hover:text-purple-400 transition">
              Team
            </Link>
          </li>
          <li>
            <Link to="#contact" className="hover:text-purple-400 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Social Media Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="#" className="text-xl hover:text-purple-400">
            <FaFacebook />
          </Link>
          <Link to="#" className="text-xl hover:text-purple-400">
            <FaTwitter />
          </Link>
          <Link to="#" className="text-xl hover:text-purple-400">
            <FaLinkedin />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 text-center py-4 space-y-4">
          <Link to="#offer" className="block hover:text-purple-400">
            Offer
          </Link>
          <Link to="#features" className="block hover:text-purple-400">
            Features
          </Link>
          <Link to="#references" className="block hover:text-purple-400">
            References
          </Link>
          <Link to="#about" className="block hover:text-purple-400">
            About
          </Link>
          <Link to="#team" className="block hover:text-purple-400">
            Team
          </Link>
          <Link to="#contact" className="block hover:text-purple-400">
            Contact
          </Link>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 pt-4">
            <Link to="#" className="text-xl hover:text-purple-400">
              <FaFacebook />
            </Link>
            <Link to="#" className="text-xl hover:text-purple-400">
              <FaTwitter />
            </Link>
            <Link to="#" className="text-xl hover:text-purple-400">
              <FaLinkedin />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
