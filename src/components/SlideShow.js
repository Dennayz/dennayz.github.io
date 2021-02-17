import React from "react";
import { Zoom } from "react-slideshow-image";
import "./styles/SlideShow.css";
import { SliderData } from "./SliderData";
import "react-slideshow-image/dist/styles.css";

const properties = {
  autoplay: false,
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};

const SlideShow = () => {
  return (
    <div className="slide-container">
      <Zoom {...properties} scale={0.4}>
        {SliderData.map((slide, index) => (
          <div className="each-slide" key={index}>
            <img
              key={index}
              style={{ width: "100%" }}
              src={slide.image}
              alt={index}
            />
            <span className="caption">{slide.caption}</span>
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default SlideShow;
