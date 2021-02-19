import React from "react";
import "./styles/Projects.css";
import CardItem from "./CardItem.js";

function Projects() {
  return (
    <div className="cards" id="projects">
      <h1>Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/project-1.png"
              text="Data preparation software from end to end (e2e) to clean, refine and transform raw data for data processing and analysis."
              tech="React, Redux, Apache Spark, Java Jersey, MYSQL"
              label="DataPrep"
              path="/DataPrep"
            />
            <CardItem
              src="images/project-2.png"
              text="An elegant data visualization web app to display your favourite professor's important data such as top ratings, difficulty levels, and top comments."
              tech="React, Charts.js, Flask, Beautiful Soup"
              label="Rate My Professors Visualizer"
              path="https://github.com/Dennayz/RateMyProfessors_Visualization"
            />
            <CardItem
              src="images/project-3.png"
              text="You're looking at it! This is my personal portfolio page all about me! You can find all my projects here that I've built using different technical skills."
              tech="HTML, CSS, JavaScript, React"
              label="Personal Website"
              path="https://github.com/Dennayz/dennayz.github.io"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/project-4.png"
              text="Developed and unit tested a 2D game project in a team of 4 for my software engineer course"
              tech="Java, Java Swing, Maven, JUnit5"
              label="Cheezy Nibbles"
              path="https://github.com/Dennayz/CMPT276"
            />
            <CardItem
              src="images/project-5.png"
              text="Created my own classic version of the old arcade game, Brick Breaker"
              tech="Java, Java Swing, Maven"
              label="Brick Breaker"
              path="https://github.com/Dennayz/BrickBreaker2D"
            />
            <CardItem
              src="images/project-6.png"
              text="Project coming soon"
              tech="React, Express, Node.js, MYSQL"
              label="New Project"
              path="https://github.com/Dennayz/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
