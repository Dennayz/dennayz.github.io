import React from "react";
import "./styles/ProjectTalk.css";
import SlideShow from "./SlideShow";
import { Button } from "./Button";

const ProjectTalk = () => {
  return (
    <div className="project-talk-container">
      <h1 className="project-talk-header">
        Smart Analytics - DataPrep Project
      </h1>
      <div className="wrap">
        <div className="project-description-container">
          <h2 className="project-description-header">Description</h2>
          <p>
            This is my first full-stack project that is meaningful and
            impactful. This is an ongoing project and is non-open source. I've
            learned many things along the way even though we had just started
            building this project a couple of months ago. My interest in data
            science and artificial intelligence led me to pursue this project
            idea with my team. The project is designed to clean, prepare,
            display and visualize unstructured and structured data for data
            analysis and machine learning. There are multiple software options
            out there that perform similarily, but for this project, we are
            hoping to build new features that my team and I are going to bring
            forth to further enhance user experiences and hoping to further
            achieve users' goals.
          </p>
        </div>
        <div className="project-contribution-container">
          <h2 className="project-contribution-header">My Contribution</h2>
          <ul>
            <li>
              Managing back-end services with RESTful API, serializing and
              deserializing JSON using Java
            </li>
            <li>
              Contributed to architecting the back-end code base and utilized
              proper folder structures
            </li>
            <li>
              Applied database denormalization for efficient querying and
              management
            </li>
            <li>
              Implemented 2 dynamic D3 visualizations with user’s data for
              pattern recognition
            </li>
            <li>
              Developed 6 data transformations including data clustering using
              Levenshtein distance algorithm
            </li>
            <li>
              Wrote frontend React components with Redux and designed frontend
              class designs
            </li>
          </ul>
        </div>
      </div>
      <SlideShow />
      <div className="back-home-button">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          backhome={true}
        >
          Back To Home
        </Button>
      </div>
    </div>
  );
};

export default ProjectTalk;
