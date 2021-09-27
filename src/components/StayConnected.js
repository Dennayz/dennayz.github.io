import React from "react";
import "./styles/StayConnected.css";
import SocialMedia from "./SocialMedia";
import { animateScroll as scroll } from "react-scroll";

const StayConnected = () => {
  return (
    <footer className="stay-connected-container">
      <h2 className="stay-connected-header">Stay Connected</h2>
      <div className="social-media-container-bottom">
        <ul className="social-media-list-bottom">
          <SocialMedia
            href="https://github.com/Dennayz"
            icon="fab fa-github-square"
          />
          <SocialMedia
            href="https://www.linkedin.com/in/dennislzzhang/"
            icon="fab fa-linkedin"
          />
          <SocialMedia
            href="https://www.facebook.com/dennis.zhang.7543/"
            icon="fab fa-facebook"
          />
          <SocialMedia
            href="https://www.instagram.com/dennayzz/"
            icon="fab fa-instagram"
          />
          <SocialMedia
            href="https://twitter.com/dennaychan"
            icon="fab fa-twitter"
          />
        </ul>
      </div>
      <div className="bottom-to-top">
        <div
          className="go-top"
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          <i className="fa fa-angle-double-up"></i>
        </div>
      </div>
      <div className="updated-at">
        <span>© 2021 Dennis Zhang</span>
      </div>
    </footer>
  );
};

export default StayConnected;
