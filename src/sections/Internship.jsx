import React from "react";
import { motion } from "framer-motion";
import InternshipImage1 from "../assets/Intern1.png";
import InternshipImage2 from "../assets/Intern2.jpg";
import InternshipImage3 from "../assets/Intern3.png";

const Internship = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.3, ease: "easeInOut" },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.2, ease: "easeInOut" },
    },
  };

  return (
    <section id="internship" className="bg-gradient-to-br from-black via-gray-900 to-gray-800 py-16 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h1
          className="text-5xl font-bold text-white mb-4"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          My Internship Journey
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300"
          variants={descriptionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          Explore my enriching internship experiences where I honed my skills in full-stack development, and frontend design.
        </motion.p>
      </div>

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative mb-16 border-t-2 border-blue-500 pt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div className="relative" variants={imageVariants}>
          <img
            src={InternshipImage1}
            alt="Internship"
            className="w-full h-80 object-cover rounded-lg shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          />
        </motion.div>
        <motion.div
          className="flex flex-col justify-center relative text-white"
          variants={textVariants}
        >
          <h2 className="text-4xl font-bold mb-4 tracking-wide">
            Octanet Services Internship <span className="text-blue-400">(2024)</span>
          </h2>
          <p className="text-lg mb-6 leading-relaxed">
            Submitted 2 tasks based on HTML, CSS & JavaScript with a landing page and TO DO list. These following tasks gave a confident to learn web development. A head start towards web development.  
          </p>
          <button
            onClick={() => window.open('https://drive.google.com/file/d/1mn6JK1P86LphtPuGmdt3mQ0ntTLvjgja/view?usp=drive_link', '_blank')}
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-3 py-3 text-sm rounded-md font-bold shadow-md hover:bg-blue-600 hover:scale-105 transform transition duration-300"
          >
            Certificate
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative mb-16 border-t-2 border-blue-500 pt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div
          className="flex flex-col justify-center relative text-white order-2 md:order-1"
          variants={textVariants}
        >
          <h2 className="text-4xl font-bold mb-4 tracking-wide">
            Better Tomorrow MERN Stack Internship <span className="text-blue-400">(2024)</span>
          </h2>
          <p className="text-lg mb-6 leading-relaxed">
            Had a clean overview about the frontend tools and backend tools used in MERN. Proceeded with HTML, CSS and JavaScript by creating a webpage for the famous persons. Worked on ReactJS and ExpressJS and delivered a final project.
          </p>
          <button
            onClick={() => window.open('#', '_blank')}
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-3 py-3 text-sm rounded-md font-bold shadow-md hover:bg-blue-600 hover:scale-105 transform transition duration-300"
          >
            Certificate
          </button>
        </motion.div>
        <motion.div className="relative order-1 md:order-2" variants={imageVariants}>
          <img
            src={InternshipImage2}
            alt="Internship"
            className="w-full h-80 object-cover rounded-lg shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative border-t-2 border-blue-500 pt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div className="relative" variants={imageVariants}>
          <img
            src={InternshipImage3}
            alt="Internship"
            className="w-full h-80 object-cover rounded-lg shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          />
        </motion.div>
        <motion.div
          className="flex flex-col justify-center relative text-white"
          variants={textVariants}
        >
          <h2 className="text-4xl font-bold mb-4 tracking-wide">
            Nexus Info Internship <span className="text-blue-400">(2024)</span>
          </h2>
          <p className="text-lg mb-6 leading-relaxed">
            It was an amazing internship experience from Nexus info. All the tasks from them made me learn the concepts of web development. Worked on developing a client demo website in this internship.
          </p>
          <button
            onClick={() => window.open('https://drive.google.com/file/d/1pIfYval7Jb8Iog-wqxj6x_4XNr2Pk2OL/view?usp=drive_link', '_blank')}
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-3 py-3 text-sm rounded-md font-bold shadow-md hover:bg-blue-600 hover:scale-105 transform transition duration-300"
          >
            Certificate
          </button>
        </motion.div>
      </motion.div>

      <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-t from-blue-500 to-purple-700 rounded-full blur-3xl opacity-20"></div>
    </section>
  );
};

export default Internship;
