import React from "react";
import "./styles/Projects.css";
import CardItem from "./CardItem.js";

const Projects = () => {
  return (
    <div className="cards" id="projects">
      <h1>Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/project-1.png"
              text="A software solution for cleaning, refining and transforming raw data for data processing and analysis. Users are able to ensure data accuracy and manipulate tools to enrich their data."
              tech="React, Redux, Apache Spark, Java Jersey, MySQL"
              label="Smart Analytics"
              path="/DataPrep"
            />
            <CardItem
              src="images/project-2.png"
              text="An elegant data visualization web app to display your favourite professor's important data such as top ratings, difficulty levels, and top comments."
              tech="React, Chart.js, Flask, Beautiful Soup, MySQL"
              label="Rate My Professors Visualizer"
              path="https://github.com/Dennayz/RateMyProfessors_Visualization"
            />
            <CardItem
              src="images/project-3.png"
              text="A project that will parse the skills listed in your resume and compare them with the listed job requirements to see if you meet the requirements of the job."
              tech="React, Flask, Parse API"
              label="JobSync"
              path="https://github.com/Dennayz/jobsync"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/project-4.png"
              text="You're looking at it! This is my personal portfolio page all about me! You can find all my projects here that I've built using different technical skills."
              tech="HTML, CSS, JavaScript, React"
              label="Personal Website"
              path="https://github.com/Dennayz/dennayz.github.io"
            />
            <CardItem
              src="images/project-5.png"
              text="A top-down 2D stealth game where users avoid prey and traps to collect all rewards and bonus rewards before defeating the game"
              tech="Java, Java Swing, Maven, JUnit5"
              label="Cheezy Nibbles"
              path="https://github.com/Dennayz/CMPT276"
            />
            <CardItem
              src="images/project-6.png"
              text="Created my own classic version of the old arcade game, Brick Breaker"
              tech="Java, Java Swing, Maven"
              label="Brick Breaker"
              path="https://github.com/Dennayz/BrickBreaker2D"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
