import React from "react";
import Header from "./header/Top";
import Body from "./body/mid";
import About from "./body/About";
import Project from "./body/Project";
import Skill from "./body/Skill";
import Skills from "./body/Skills";
import Footer from "./footer/footer";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Body />
      <About />
      <Project />
      <Skill />
      <Skills />
      <Footer />
    </>
  );
};

export default App;
