import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
    setIsSticky(currentScrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.3, ease: 'easeInOut' },
    },
    exit: {
      opacity: 0,
      x: 50,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, delay: 0.3, ease: 'easeInOut' },
    },
    exit: {
      opacity: 0,
      x: 50,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full bg-gradient-to-br from-black via-gray-900 to-gray-900 ${
        isSticky ? 'backdrop-blur-md' : ''
      } border-b border-gray-700 shadow-lg px-4 lg:px-6 pt-0 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <motion.div
        className="max-w-7xl mx-auto flex h-16 items-center justify-between"
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <a href="#" aria-label="Home" className="flex items-center space-x-2">
          <motion.h1
            className="text-2xl font-extrabold text-white"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            Taruun Prasath
          </motion.h1>
        </a>

        <motion.nav
          className="hidden md:flex items-center space-x-6"
          variants={navbarVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {['About', 'Projects', 'Internship', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white font-medium hover:text-blue-400 transition duration-300"
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {item}
            </motion.a>
          ))}
        </motion.nav>

        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </motion.div>

      {isOpen && (
        <motion.nav
          className="md:hidden absolute top-16 left-0 w-full bg-gray-900 shadow-md"
          variants={navbarVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            {['About', 'Projects', 'Internship', 'Contact'].map((item) => (
              <li key={item}>
                <motion.a
                  href={`#${item.toLowerCase()}`}
                  className="text-white font-medium hover:text-blue-300 transition duration-300"
                  onClick={() => setIsOpen(false)}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {item}
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </header>
  );
};

export default Navbar;
