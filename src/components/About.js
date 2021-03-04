import React from "react";
import "./styles/About.css";
import { frontendIcons, backendIcons } from "./Icons";
import { Button } from "./Button";

const About = () => {
  return (
    <div id="about-me" className="aboutme-container">
      <h1 className="aboutme-header">About Me</h1>
      <div className="aboutme-container-wrapper">
        <div className="aboutme-container-info">
          <h2>Profile</h2>
          <p>
            Hello, my name is Dennis. I am a computer science undergraduate
            student at{" "}
            <span style={{ color: "#97ffff" }}>Simon Fraser University</span>.
            I'm looking to graduate in June 2022. I for one will admit that I am
            not very good at school or academics, but I do consider myself a
            very curious person. I am currently looking for an{" "}
            <span style={{ color: "#97ffff" }}>
              internship specializing in full-stack development
            </span>{" "}
            and aspire to become a software engineer. I want to learn more about
            artificial intelligence and data science with visualizations.
          </p>
          <br />
          <p>
            Besides computer science, I enjoy culinary arts, music, photography,
            playing basketball, and learning new things. If possible, I would
            love to travel around the world and immerse myself in as many
            different cultural backgrounds as possible.
          </p>
        </div>
        <div className="aboutme-container-info">
          <h2>Skills and Experiences</h2>
          <ul className="frontend-list">
            {frontendIcons.map((icon, index) => (
              <li className="skill-item" key={index}>
                <span className="skill" style={{ color: "#ccd6f6" }}>
                  {icon.description}
                </span>
              </li>
            ))}
          </ul>
          <ul className="backend-list">
            {backendIcons.map((icon, index) => (
              <li className="skill-item" key={index}>
                <span className="skill" style={{ color: "#ccd6f6" }}>
                  {icon.description}
                </span>
              </li>
            ))}
          </ul>
          <br />
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            download={true}
          >
            Download Resume <i className="fas fa-file-pdf"></i>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
