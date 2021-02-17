import React from "react";

function SocialMedia(props) {
  return (
    <>
      <li className="social-media-icon">
        <a href={props.href} target="_blank" rel="noreferrer">
          <i className={props.icon}></i>
        </a>
      </li>
    </>
  );
}

export default SocialMedia;
