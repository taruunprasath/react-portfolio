import React from 'react';
import { motion } from 'framer-motion';
import Github from '../assets/Github.png';

const Cards = ({ item }) => {
  return (
    <motion.div
      className="border border-gray-200 rounded-lg w-[350px] lg:w-[400px] bg-red-50"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05, cursor: 'pointer' }}
      whileTap={{ scale: 0.98 }}
    >
      <img src={item.image} alt="" className="rounded-t-lg" />
      <div className="p-4">
        <h1 className="font-semibold text-xl mb-2 text-red-600">{item.title}</h1>
        <p className="text-gray-600">{item.desc}</p>
        <div className="flex gap-3 mt-4">
          <button className="bg-red-500 text-white px-3 py-2 rounded-md transition-all duration-300 hover:bg-red-600">
            <a href={item.live} target="_blank" rel="noopener noreferrer">
              Live Preview
            </a>
          </button>
          <button className="bg-black text-white px-3 py-2 rounded-md transition-all duration-300 hover:bg-gray-800">
            <a href={item.github} target="_blank" rel="noopener noreferrer" className="flex gap-1">
              <img src={Github} alt="" className="w-6" />
              Github Link
            </a>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Cards;
