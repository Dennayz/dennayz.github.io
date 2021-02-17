import React from "react";
import "./styles/Skillsbar.css";

function Skillsbar() {
  return (
    <div className="skill-bars">
      <div className="bar">
        <div className="info">
          <span>HTML</span>
        </div>
        <div className="progress-line html">
          <span></span>
        </div>
      </div>
      <div className="bar">
        <div className="info">
          <span>CSS</span>
        </div>
        <div className="progress-line css">
          <span></span>
        </div>
      </div>
      <div className="bar">
        <div className="info">
          <span>JavaScript</span>
        </div>
        <div className="progress-line javascript">
          <span></span>
        </div>
      </div>
      <div className="bar">
        <div className="info">
          <span>Python</span>
        </div>
        <div className="progress-line python">
          <span></span>
        </div>
      </div>
      <div className="bar">
        <div className="info">
          <span>Java</span>
        </div>
        <div className="progress-line java">
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Skillsbar;
