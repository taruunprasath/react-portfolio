import React from 'react';
import { motion } from 'framer-motion';
import ToCook from '../assets/ToCook.png';
import TALK from '../assets/TALK.jpeg';
import Chat from '../assets/Chat.png';
import Explore from '../assets/Explore.png';
import Elearn from '../assets/E-Learn.png';
import Client from '../assets/Client.png';
import Cards from './Cards';

const Projects = () => {
  const projectJson = [
    {
      title: 'To Cook',
      desc: "It is a food recipe book website which contains the recipes related to different cuisines i.e., Indian, American, British, and so on. Various components are used to build this website. It is completely a JavaScript and CSS project. It comprises several libraries to create the UI for this project.",
      image: ToCook,
      live: "https://tocook-taruun-prasaths-projects.vercel.app/",
      github: "https://github.com/taruunprasath/tocook"
    },
    {
      title: 'TALK',
      desc: 'TALK - A Podcast Website is a platform designed to elevate your podcast experience. With a sleek, user-friendly interface built using React, Firebase, and Redux, TALK enables users to effortlessly create and manage their own podcasts.',
      image: TALK,
      live: "https://talk-taruun-prasaths-projects.vercel.app/",
      github: "https://github.com/taruunprasath/talk-podcast"
    },
    {
      title: 'Chatify',
      desc: 'It is a real-time chat application that enables you to chat with people. With the help of user login, the user can chat with another user who has logged in using their name. Firebase is used for cloud storage and authentication. Zustand is used as state management to have a proper track on chats.',
      image: Chat,
      live: "#",
      github: "https://github.com/taruunprasath/chat-application"
    },
    {
      title: 'ExploreXP',
      desc: 'It is a travel and tourism guide which suggests different and famous places to users to visit. The customers can view the description about the places and explore them. We also provided a review page for getting their experience on that place.',
      image: Explore,
      live: "#",
      github: "https://github.com/taruunprasath/exploreXP"
    },
    {
      title: 'E-Learn',
      desc: 'The e-learning management system will provide a platform for the creation, delivery, and management of online courses, assessments, and other educational content.',
      image: Elearn,
      live: "#",
      github: "https://github.com/taruunprasath/e-learn"
    },
    {
      title: 'Client-Demo',
      desc: 'An application designed to showcase how clients can interact with a product or service through a simple, user-friendly interface. It serves as a prototype for testing and presenting the features of a real-world application.',
      image: Client,
      live: "https://melodic-marigold-766f7f.netlify.app/",
      github: "https://github.com/taruunprasath/client"
    },
  ];

  return (
    <motion.section
      id="projects"
      className="relative bg-gradient-to-r from-black via-gray-900 to-gray-800 py-16 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-16 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4">
          My Projects
        </h2>
        <p className="text-xl text-gray-400 mb-12">
          Here are some of the projects I have worked on. Click the links below to explore the live previews and GitHub repositories.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {projectJson.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Cards item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
