import React from "react";
import { FaGithub } from "react-icons/fa";
import hero from "../assets/Hero.png";
import reactLogo from "../assets/React.png";
import reduxLogo from "../assets/Redux.png";
import tailwind from "../assets/Tailwind Css.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Particle from "./Particle";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      className="relative bg-gradient-to-br from-black via-gray-900 to-gray-800 min-h-[90vh] py-12 pb-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      id="home"
    >
      <div className="absolute inset-0 z-0">
        <Particle />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between">
          <motion.div
            className="md:w-1/2 flex flex-col space-y-6 px-6 lg:px-0 mt-16 lg:mt-0"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.h1
              className="lg:text-6xl text-4xl font-extrabold lg:leading-tight text-center md:text-left animate-fadeInUp text-white"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Hello There, <br />
              I'm{" "}
              <span className="text-blue-500 text-shadow-glow">
                Taruun Prasath
              </span>
            </motion.h1>
            <motion.p
              className="md:text-3xl text-lg text-red-500 text-center md:text-left animate-fadeInUp text-gradient"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Full Stack Developer
            </motion.p>
            <motion.p
              className="text-gray-300 md:text-lg text-base text-center md:text-left animate-fadeInUp"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              My passion lies in Web Development. <br />
              I've worked on projects specializing in Full Stack development,
              particularly with the MERN stack.
            </motion.p>
            <motion.div
              className="flex space-x-6 justify-center md:justify-start mt-8 animate-fadeInUp"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <a
                href="https://drive.google.com/file/d/1oYX4BTk0s0z53mH4mwEjO8sPqlsten9w/view?usp=drive_link"
                target="_blank"
                className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white px-6 py-3 rounded-md shadow-md font-medium text-sm transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 flex items-center space-x-2"
              >
                <span className="text-shadow-glow1">My Resume</span>
              </a>
              <a
                href="https://github.com/taruunprasath"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-gray-700 via-gray-800 to-black text-white px-6 py-3 rounded-md shadow-md font-medium text-sm transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 flex items-center space-x-2"
              >
                <FaGithub className="text-lg text-white" />
                <span className="text-shadow-glow1">GitHub</span>
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            className="md:w-1/2 relative flex justify-center items-end mt-8 md:mt-0 animate-fadeInUp"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <img
              src={hero}
              alt="Hero"
              className="lg:h-[90vh] h-96 object-cover rounded-md"
            />
            <img
              src={reactLogo}
              alt="React Logo"
              className="absolute w-10 top-36 left-0 rounded-full md:hidden"
            />
            <img
              src={reduxLogo}
              alt="Redux Logo"
              className="absolute w-10 top-0 right-5 md:hidden"
            />
            <img
              src={tailwind}
              alt="Tailwind CSS Logo"
              className="absolute w-10 bottom-36 right-0 rounded-full md:hidden"
            />
          </motion.div>
        </div>
        <motion.div
          className="absolute top-40 right-0 hidden md:flex flex-col gap-6 p-4 items-center justify-center rounded-full hover:scale-105 transition-transform duration-300 animate-fadeInUp"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <motion.a
            href="https://www.facebook.com/taruun.prasath"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaFacebook className="text-white text-4xl cursor-pointer hover:text-blue-500 transition duration-300 transform hover:scale-125 hover:rotate-12" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/taruun_prasath_21/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaInstagram className="text-white text-4xl cursor-pointer hover:text-pink-500 transition duration-300 transform hover:scale-125 hover:rotate-12" />
          </motion.a>
          <motion.a
            href="https://x.com/taruunprasath21"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaXTwitter className="text-white text-4xl cursor-pointer hover:text-neutral-200 transition duration-300 transform hover:scale-125 hover:rotate-12" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/taruun-prasath-g-s-17022624b/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin className="text-white text-4xl cursor-pointer hover:text-blue-700 transition duration-300 transform hover:scale-125 hover:rotate-12" />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
