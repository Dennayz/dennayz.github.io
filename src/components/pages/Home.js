import React from "react";
import "../../App.css";
import Projects from "../Projects";
import About from "../About";
import Contact from "../Contact";
import StayConnected from "../StayConnected";
import Banner from "../Banner";
import Navbar from "../Navbar";
import AlgorithmsSection from "../AlgorithmsSection";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Projects />
      <AlgorithmsSection />
      <Contact />
      <StayConnected />
    </>
  );
}

export default Home;
