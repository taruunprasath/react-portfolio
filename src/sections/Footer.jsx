import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8 relative z-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row justify-between items-center relative z-20">
        <div className="mb-6 md:mb-0 relative">
          <ul className="flex flex-wrap flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-center">
            <li>
              <a
                href="#home"
                className="text-gray-400 hover:text-blue-500 hover:underline hover:scale-105 transition-all duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-400 hover:text-blue-500 hover:underline hover:scale-105 transition-all duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#project"
                className="text-gray-400 hover:text-blue-500 hover:underline hover:scale-105 transition-all duration-300"
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#internship"
                className="text-gray-400 hover:text-blue-500 hover:underline hover:scale-105 transition-all duration-300"
              >
                Internship
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-400 hover:text-blue-500 hover:underline hover:scale-105 transition-all duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center md:text-right mt-6 md:mt-0 relative">
          <p className="text-gray-400 text-sm md:text-base">
            &copy; {currentYear}{" "}
            <span className="text-blue-500 font-semibold animate-pulse">
              Taruun Prasath
            </span>
            . My-Portfolio
          </p>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-gray-800 opacity-40 blur-sm z-0"></div>
    </footer>
  );
};

export default Footer;
