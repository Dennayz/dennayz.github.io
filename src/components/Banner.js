import React, { useEffect, useRef } from "react";
import "../App.css";
import "./styles/Banner.css";
import Typed from "react-typed";
import { Button } from "./Button";
import SocialMedia from "./SocialMedia";
import lottie from "lottie-web";

const Banner = () => {
  const animate_code = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animate_code.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./animate_code.json"),
    });
  }, []);

  return (
    <div className="banner-container-wrapper">
      <div className="banner-container" id="banner-container">
        <h3 className="intro-text">Hello, my name is</h3>
        <h1 className="myname">Dennis Zhang</h1>
        <p>
          I am a{" "}
          <span className="typed-text">
            {
              <Typed
                strings={[
                  "Student",
                  "Programmer",
                  "Developer",
                  "Learner",
                  "Sleeper",
                ]}
                typeSpeed={80}
                backSpeed={80}
                loop
              />
            }
          </span>
        </p>
        <div className="banner-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            download={true}
          >
            Download Resume <i className="fas fa-file-pdf"></i>
          </Button>
        </div>
        <div className="two-social-media-container">
          <ul className="social-media-list">
            <SocialMedia
              href="https://github.com/Dennayz"
              icon="fab fa-github-square"
            />
            <SocialMedia
              href="https://www.linkedin.com/in/dennislzzhang/"
              icon="fab fa-linkedin"
            />
          </ul>
        </div>
      </div>
      <div className="animate-container" ref={animate_code}></div>
    </div>
  );
};

export default Banner;
