import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skill = () => {
  // Define your skills here
  const skills = [
    {
      title: "Project 1",
      image:
        "https://i.pinimg.com/736x/b9/7d/3c/b97d3ca896d8b6b79c52527959eddeaa.jpg",
    },
    {
      title: "Project 2",
      image:
        "https://i.pinimg.com/736x/b9/7d/3c/b97d3ca896d8b6b79c52527959eddeaa.jpg",
    },
    {
      title: "Project 1",
      image:
        "https://i.pinimg.com/736x/b9/7d/3c/b97d3ca896d8b6b79c52527959eddeaa.jpg",
    },
    {
      title: "Project 2",
      image:
        "https://i.pinimg.com/736x/b9/7d/3c/b97d3ca896d8b6b79c52527959eddeaa.jpg",
    },
    {
      title: "Project 1",
      image:
        "https://i.pinimg.com/736x/b9/7d/3c/b97d3ca896d8b6b79c52527959eddeaa.jpg",
    },
    {
      title: "Project 2",
      image:
        "https://i.pinimg.com/736x/b9/7d/3c/b97d3ca896d8b6b79c52527959eddeaa.jpg",
    },
    // Add more skills as needed
  ];

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const [ref, inView] = useInView({
    triggerOnce: true, // This ensures the animation only runs once
  });

  const [animationState, setAnimationState] = useState("hidden");

  if (inView && animationState === "hidden") {
    setAnimationState("show");
  }

  const backgroundImageUrl =
    "https://i.pinimg.com/736x/b9/7d/3c/b97d3ca896d8b6b79c52527959eddeaa.jpg";

  return (
    <motion.div
      className="flex flex-wrap justify-center items-center p-4 bg-gradient-to-r from-blue-500 to-green-500 bg-opacity-50 animate-gradient"
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={animationState}
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="m-4 bg-white rounded-lg shadow-lg overflow-hidden sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
          variants={item}
        >
          <img
            src={skill.image}
            alt={skill.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold">{skill.title}</h2>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
              View Details
            </button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Skill;
