import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div
      className="flex justify-between items-center w-full p-8"
      style={{
        backgroundImage:
          "url('https://i0.wp.com/wallpapercave.com/wp/wp7864899.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-1/2">
        <div className="text-4xl font-bold text-white">About Me</div>
        <div className="text-xl mt-4 text-white">
          A brief introduction about yourself
        </div>
        <div className="mt-8">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full font-bold">
            More About Me
          </button>
        </div>
      </div>
      <div className="w-1/2 p-8">
        <Slider {...settings}>
          <div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                className="uniform-image"
                src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700125251.jpg"
                alt="Slide 1"
              />
            </motion.div>
          </div>
          <div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                className="uniform-image"
                src="https://c4.wallpaperflare.com/wallpaper/317/897/146/1920x1080-px-dark-heath-ledger-joker-monochrome-animals-frogs-hd-art-wallpaper-preview.jpg"
                alt="Slide 2"
              />
            </motion.div>
          </div>
          <div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                className="uniform-image"
                src="https://i.pinimg.com/736x/d2/33/6d/d2336dc8b29e0f44cda9191c8f449365.jpg"
                alt="Slide 3"
              />
            </motion.div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default About;
