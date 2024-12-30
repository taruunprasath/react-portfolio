import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Contact1 from "../assets/Contact1.json"; // Ensure this path is correct
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const sectionRef = useRef(null);

  const handleIntersection = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsInView(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    emailjs.sendForm('service_a9tu5ux', 'template_zzfntud', e.target, 'UiOWMfz7L45LHMb7r')
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const formVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      id="contact"
      className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-20 relative"
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={formVariants}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between relative">
        <motion.div
          className="w-full md:w-1/2 mb-12 md:mb-0 mr-10 flex justify-start"
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Lottie animationData={Contact1} loop={true} autoplay={true} />
        </motion.div>

        <motion.div className="w-full md:w-1/2 text-center md:text-left">
          <div className="mb-8 relative text-center">
            <motion.h2
              className="text-3xl font-extrabold text-blue-300"
              variants={fadeUpVariants}
            >
              Get in Touch
            </motion.h2>
            <motion.p
              className="mt-4 text-xl text-gray-400"
              variants={fadeUpVariants}
              transition={{ delay: 0.1 }}
            >
              I would love to hear from you! Please fill out the form below, and
              I’ll get back to you as soon as possible.
            </motion.p>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-gray-900 p-6 rounded-lg shadow-lg relative"
            variants={formVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="grid grid-cols-1 gap-6">
              <motion.div
                className="relative"
                variants={fadeUpVariants}
                transition={{ delay: 0.5 }}
              >
                <label htmlFor="name" className="text-lg text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                  required
                />
              </motion.div>

              <motion.div
                className="relative"
                variants={fadeUpVariants}
                transition={{ delay: 0.6 }}
              >
                <label htmlFor="email" className="text-lg text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                  required
                />
              </motion.div>

              <motion.div
                className="relative"
                variants={fadeUpVariants}
                transition={{ delay: 0.7 }}
              >
                <label htmlFor="message" className="text-lg text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600 transition-all duration-300"
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>

          {isSubmitted && (
            <motion.div
              className="mt-6 text-center text-xl text-green-400"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              Thank you for reaching out! I’ll get back to you soon.
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
