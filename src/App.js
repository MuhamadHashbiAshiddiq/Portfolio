import React from "react";
import Header from "./header/Top";
import Body from "./body/mid";
import About from "./body/About";
import Project from "./body/Project";
import Footer from "./footer/footer";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Body />
      <About />
      <Project />
      <Footer />
    </>
  );
};

export default App;
