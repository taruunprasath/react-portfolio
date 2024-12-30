import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import MernStack from "../assets/mernstack.png";
import Html from "../assets/Html.png";
import Css from "../assets/CSS.png";
import Javascript from "../assets/JS.png";
import ReactLogo from "../assets/React.png";
import ReduxLogo from "../assets/Redux.png";
import Tailwind from "../assets/Tailwind Css.png";
import Bootstrap from "../assets/Bootstrap.png";
import NodeLogo from "../assets/NodeLogo.png";
import Mongodb from "../assets/mongodb.svg";
import Express from "../assets/Express.png";
import NextJs from "../assets/NextJs.png";

const About = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            setInView(false);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={sectionRef}
      className="relative bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-12"
      id="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            className="text-lg text-blue-200 font-semibold tracking-wide uppercase text-shadow-glow"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: inView ? 1 : 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            About Me
          </motion.h1>
          <motion.p
            className="mt-2 text-4xl leading-8 font-extrabold tracking-tight glow"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: inView ? 1 : 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Hi, I'm Taruun Prasath
          </motion.p>
          <motion.p
            className="mt-4 max-w-2xl text-lg text-gray-400 lg:mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: inView ? 1 : 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            A Full-Stack Developer with expertise in MERN stack, Web
            Development, and Digital Solutions.
          </motion.p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: inView ? 1 : 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold text-blue-200 text-shadow-glow">
                My Journey
              </h3>
              <p className="mt-4 max-w-2xl text-lg text-white lg:mx-auto">
                Hello, I'm Taruun Prasath, a 3rd-year Electrical and Electronics
                Engineering student at Sri Eshwar College of Engineering. I'm
                passionate about Web Development, specializing in FullStack
                development with the MERN stack.
              </p>

              <motion.img
                src={MernStack}
                alt="MERN Stack"
                className="p-2 rounded-lg w-52 mt-4 border border-gray-300 shadow-lg bg-gradient-to-r from-white via-gray-100 to-gray-200 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:opacity-90"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: inView ? 1 : 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              />
              <div className="mt-4 flex justify-start items-start">
                <motion.div
                  className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 text-white p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: inView ? 1 : 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <p className="text-2xl font-semibold">CGPA: 8.13</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-800 border border-gray-700 rounded-lg md:p-7 py-7 flex flex-col gap-8 items-center shadow-lg"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: inView ? 1 : 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold text-blue-200 text-shadow-glow">
                Skills & Expertise
              </h3>
              <div className="flex items-center justify-center flex-wrap gap-3">
                {[
                  { img: Html, label: "HTML" },
                  { img: Css, label: "CSS" },
                  { img: Javascript, label: "JavaScript" },
                  { img: ReactLogo, label: "React" },
                  { img: ReduxLogo, label: "Redux" },
                  { img: Tailwind, label: "Tailwind CSS" },
                  { img: Bootstrap, label: "Bootstrap" },
                  { img: NodeLogo, label: "Node.js" },
                  { img: Mongodb, label: "MongoDB" },
                  { img: Express, label: "Express.js" },
                  { img: NextJs, label: "Firebase" },
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-r from-blue-700 via-blue-700 to-indigo-700 flex items-center gap-2 w-max px-4 py-2 rounded-lg shadow-md transform transition-all duration-300 ease-in-out"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: inView ? 1 : 0 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                    whileHover={{
                      scale: 1.05, 
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)", 
                    }}
                  >
                    <motion.img
                      src={skill.img}
                      alt={skill.label}
                      className="w-10 transform transition-all duration-300 ease-in-out"
                      whileHover={{
                        scale: 1.2, 
                        rotate: 15, 
                        opacity: 0.9, 
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="font-semibold text-white transform transition-all duration-300 ease-in-out hover:scale-105">
                      {skill.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        <div className="mt-12">
          <motion.h3
            className="text-2xl font-semibold text-blue-200 text-shadow-glow"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: inView ? 1 : 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            More About Me
          </motion.h3>
          <motion.p
            className="mt-4 text-lg text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: inView ? 1 : 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            I'm proficient in Frontend technologies like HTML, CSS, JavaScript,
            and React, and have experience with MongoDB, MySQL, and Firebase. I
            won the Intra College Project Expo Competition in FullStack.
            Additionally, I’m skilled in C, C++, Java, and Python, and enjoy
            problem-solving. I'm excited to showcase my skills. Thank you!
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
