import React from "react";
import "./styles/Interests.css";

const Interests = () => {
  return (
    <div id="interests" className="interests-container">
      <h1 className="interests-header">Interests</h1>
      <div className="info-container">
        <h2>Technical Endeavors</h2>
        <ul>
          <li>Natural Language Processing</li>
          <li>Neural Networks</li>
          <li>Image/Video Processing</li>
          <li>Distributed Systems</li>
          <li>Big Data Analytics</li>
        </ul>
      </div>
      <div className="info-container">
        <h2>Personal Endeavors</h2>
        <ul>
          <li>Financial Management</li>
          <li>Trading/Stocks</li>
          <li>Critical Problem Solving</li>
          <li>Entrepreneurship</li>
          <li>Cook the perfect steak</li>
        </ul>
      </div>
      <div className="info-container">
        <h2>Reading Endeavors</h2>
        <ul>
          <li>Rich Dad, Poor Dad</li>
          <li>The Millionaire Next Door</li>
          <li>The Power of Habit</li>
          <li>Smarter, Faster, Better</li>
          <li>Our Final Invention</li>
        </ul>
      </div>
    </div>
  );
};

export default Interests;
