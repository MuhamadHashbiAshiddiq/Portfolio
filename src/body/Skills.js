import React from "react";
import { Parallax } from "react-parallax";

const Skills = () => {
  const skills = [
    { name: "Python", level: "Expert" },
    { name: "Java", level: "Intermediate" },
    { name: "C++", level: "Beginner" },
    // tambahkan skill lainnya di sini
  ];

  return (
    <Parallax
      bgImage="https://live.staticflickr.com/8755/16322767554_93dc22f5ac_b.jpg"
      strength={500}
    >
      <div className="container mx-auto py-12 px-4 max-w-7xl">
        <h2 className="text-4xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg px-5 py-6 text-center"
            >
              <h3 className="text-2xl font-bold mb-2">{skill.name}</h3>
              <p className="text-lg">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </Parallax>
  );
};

export default Skills;
