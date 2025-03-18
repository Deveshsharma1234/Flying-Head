import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Logo } from '../assets/Logo';
import Header from './Header';
const Footer = () => {
  return (
    <footer>
      <div>
        <Header />
        {/* Copyright */}
        <div className=" text-sm text-gray-400 text-center bg-gray-900   ">
          © {new Date().getFullYear()} MyBrand. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
