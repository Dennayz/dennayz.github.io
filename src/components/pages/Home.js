import React from "react";
import "../../App.css";
import Projects from "../Projects";
import About from "../About";
import Contact from "../Contact";
import StayConnected from "../StayConnected";
import Interests from "../Interests";
import Banner from "../Banner";
import Navbar from "../Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Projects />
      <Interests />
      <Contact />
      <StayConnected />
    </>
  );
}

export default Home;
