import React from "react";
import "./styles/Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  download,
  backhome,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  if (backhome) {
    return (
      <Link to="/">
        <button
          className={`btn ${checkButtonStyle} ${checkButtonSize}`}
          onClick={onClick}
          type={type}
        >
          {children}
        </button>
      </Link>
    );
  }

  if (download) {
    return (
      <a href="/Resume/Dennis_Zhang_Resume.pdf" download>
        <button
          className={`btn ${checkButtonStyle} ${checkButtonSize}`}
          onClick={onClick}
          type={type}
        >
          {children}
        </button>
      </a>
    );
  }

  return (
    <button
      type={type}
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
