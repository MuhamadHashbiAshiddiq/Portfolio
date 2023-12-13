import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Body = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('https://wallpaper.dog/large/5462979.jpg')",
          transform: `translateY(${offsetY * 0.5}px)`,
        }}
      />
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center p-8">
        <div className="flex justify-between items-center w-full">
          <div>
            <div
              className="text-4xl font-bold text-white animate-typing"
              style={{ transform: `translateY(${offsetY * -0.3}px)` }}
            >
              Hello, I'm Muhamad Hashbi Ashiddiq
            </div>
            <div
              className="text-xl text-white mt-4"
              style={{ transform: `translateY(${offsetY * -0.2}px)` }}
            >
              A brief introduction about yourself
            </div>
            <div className="mt-8">
              <button className="bg-white text-blue-500 px-6 py-2 rounded-full font-bold">
                More About Me
              </button>
            </div>
          </div>
          <motion.img
            src="https://cdn.pixabay.com/photo/2023/10/18/22/37/anime-8325187_1280.png" // Replace with your image URL
            className="mt-8 w-1/2 h-1/2 object-cover" // Adjust the size here
            alt="Your Name"
            style={{ transform: `translateY(${offsetY * -0.1}px)` }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Body;
