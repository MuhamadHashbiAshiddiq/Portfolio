import React, { useState } from "react";
import Slider from "react-slick";
import { Parallax } from "react-parallax";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Project() {
  const [activeSlide, setActiveSlide] = useState(0);
  const projects = [
    {
      title: "Proyek 1",
      description: "Ini adalah deskripsi proyek 1.",
      imgSrc:
        "https://png.pngtree.com/thumb_back/fw800/background/20230611/pngtree-anime-girl-in-red-and-on-fire-hd-wallpaper-image_2921079.jpg",
    },
    {
      title: "Proyek 2",
      description: "Ini adalah deskripsi proyek 2.",
      imgSrc:
        "https://i.pinimg.com/736x/b9/7d/3c/b97d3ca896d8b6b79c52527959eddeaa.jpg",
    },
    {
      title: "Proyek 3",
      description: "Ini adalah deskripsi proyek 2.",
      imgSrc:
        "https://png.pngtree.com/thumb_back/fw800/background/20230607/pngtree-image-of-an-anime-character-who-is-in-a-red-coat-image_2903561.jpg",
    },
    {
      title: "Proyek 4",
      description: "Ini adalah deskripsi proyek 2.",
      imgSrc:
        "https://i.pinimg.com/736x/f4/33/75/f43375880638d6072965aa11c11f04fa.jpg",
    },
    {
      title: "Proyek 5",
      description: "Ini adalah deskripsi proyek 2.",
      imgSrc:
        "https://e1.pxfuel.com/desktop-wallpaper/20/689/desktop-wallpaper-anime-girl-cute-anime-attitude-girl.jpg",
    },
    // dan seterusnya...
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "100px",
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Parallax
      bgImage="https://live.staticflickr.com/8755/16322767554_93dc22f5ac_b.jpg"
      strength={500}
    >
      <div className="mx-auto py-24">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center justify-center bg-black bg-opacity-60 shadow-lg rounded-2xl p-4 w-64 h-100 mx-auto ${
                activeSlide === index ? "activeSlide z-10" : "opacity-30 z-0"
              } my-12 shadow-2xl`}
            >
              <img
                src={project.imgSrc}
                alt={project.title}
                className="w-[460px] h-[300px] object-contain rounded-lg justify-center"
              />
              <h2 className="text-lg font-bold mt-4 text-white z-10">
                {project.title}
              </h2>
              <p className="text-white z-10">{project.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </Parallax>
  );
}

export default Project;
