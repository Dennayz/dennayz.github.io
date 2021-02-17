import React from "react";
import "./styles/About.css";
// import Skillsbar from "./Skillsbar";
import { Button } from "./Button";
import { frontendIcons, backendIcons } from "./Icons";

function About() {
  return (
    <div id="about-me" className="about-container">
      <h1 className="about-header">About Me</h1>
      <div className="about-container-info">
        <h2>Profile</h2>
        <p>
          Hello, my name is Dennis. I am a computer science undergraduate
          student at Simon Fraser University. I'm looking to graduate in June
          2022. I for one will admit that I am not very good at school or
          academics, but I do consider myself a very curious person. I am
          currently looking for an internship specializing in full-stack
          development and aspire to become a software engineer. I want to learn
          more about artificial intelligence and data science with
          visualizations. Besides computer science, I enjoy culinary arts,
          music, photography, playing basketball, and learning new things. If
          possible, I would love to travel around the world and immerse myself
          in as many different cultural backgrounds as possible.
        </p>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          download={true}
        >
          Download Resume <i className="fas fa-file-pdf"></i>
        </Button>
        <div className="small-interests-container">
          <ul className="small-interests-list">
            <li className="small-interests-icon">
              <i className="fa fa-camera-retro fa-lg"></i>
            </li>
            <li className="small-interests-icon">
              <i className="fab fa-spotify"></i>
            </li>
            <li className="small-interests-icon">
              <i className="fa fa-code" />
            </li>
            <li className="small-interests-icon">
              <i className="fas fa-book-reader"></i>
            </li>
            <li className="small-interests-icon">
              <i className="fas fa-basketball-ball"></i>
            </li>
            <li className="small-interests-icon">
              <i className="fas fa-hamburger"></i>
            </li>
          </ul>
        </div>
      </div>
      <div className="about-container-info">
        <h2>Skills and Experiences</h2>
        <div className="skills-container">
          <h3>Front-End Technologies</h3>
          <br />
          <ul className="frontend-list">
            {frontendIcons.map((icon, index) => (
              <li className="skills-icon" key={index}>
                <div className="skills-icon-div">
                  <img alt={icon.alt} src={icon.src} />
                  <span className="icon-description">{icon.description}</span>
                </div>
              </li>
            ))}
          </ul>
          <h3>Back-End Technologies</h3>
          <br />
          <ul className="backend-list">
            {backendIcons.map((icon, index) => (
              <li className="skills-icon" key={index}>
                <div className="skills-icon-div">
                  <img alt={icon.alt} src={icon.src} />
                  <span className="icon-description">{icon.description}</span>
                </div>
              </li>
            ))}
          </ul>
          <a
            className="icons8-link"
            href="https://icons8.com"
            target="_blank"
            rel="noreferrer"
          >
            Icons8's Website link
          </a>
        </div>
        {/* <Skillsbar /> */}
      </div>
    </div>
  );
}

export default About;
