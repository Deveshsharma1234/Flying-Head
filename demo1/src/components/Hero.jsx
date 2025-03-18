import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gray-900 text-white h-screen flex items-center justify-center">
      {/* Background Image (Replace URL) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('https://via.placeholder.com/1500x800')",
        }}
      ></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-purple-400">Flying Head</span>
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover amazing features and solutions designed just for you.
        </p>
        <Link
          to="/feature"
          className="bg-purple-500 hover:bg-purple-700 text-white py-3 px-6 rounded-full text-lg transition"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default Hero;
