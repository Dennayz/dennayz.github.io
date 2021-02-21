import React from "react";
import "./styles/AlgorithmsSection.css";

const AlgorithmsSection = () => {
  return (
    <div className="codechallenges-container" id="algorithmssection">
      <h1>Algorithms</h1>
      <div className="codechallenge-cards__container">
        <div className="codechallenge-cards__wrapper">
          <ul className="codechallenge-cards__items">
            <li className="codechallenge-card-item">
              <div className="algorithm-title">
                <span className="resp-status">
                  <i className="fas fa-code"></i>
                </span>
                <a
                  href="https://github.com/Dennayz/linux-tool"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="resp-status-right">
                    <i className="fab fa-github"></i>
                  </span>
                </a>
              </div>
              <span className="status-label">Depth First Search</span>
              <p>
                Built a replica linux ls tool that uses{" "}
                <span style={{ color: "#ccd6f6" }}>depth first search</span> to
                recursively sort and access multiple sub-directories.
              </p>
              <span className="algorithm-tech-stack">C, Makefile</span>
            </li>
            <li className="codechallenge-card-item">
              <div className="algorithm-title">
                <span className="resp-status">
                  <i className="fas fa-code"></i>
                </span>
                <a
                  href="https://github.com/Dennayz/Sudoku"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="resp-status-right">
                    <i className="fab fa-github"></i>
                  </span>
                </a>
              </div>
              <span className="status-label">Backtracking Algorithm</span>
              <p>
                Built a Sudoku Solver using the{" "}
                <span style={{ color: "#ccd6f6" }}>backtracking algorithm</span>{" "}
                that solves complicated sudoku problems in milliseconds.
              </p>
              <span className="algorithm-tech-stack">Java, Java GUI</span>
            </li>
            <li className="codechallenge-card-item">
              <div className="algorithm-title">
                <span className="resp-status">
                  <i className="fas fa-code"></i>
                </span>
                <a
                  href="https://github.com/Dennayz/TicTacToe-Rule-based-AI"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="resp-status-right">
                    <i className="fab fa-github"></i>
                  </span>
                </a>
              </div>
              <span className="status-label">Minimax Algorithm</span>
              <p>
                Implemented the{" "}
                <span style={{ color: "#ccd6f6" }}>minimax algorithm</span> in a
                tic tac toe game to play with a CPU, simulating rule based AI.
              </p>
              <span className="algorithm-tech-stack">Java, Command Line</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AlgorithmsSection;
