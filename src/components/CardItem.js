import React from "react";
import { Link } from "react-router-dom";

const CardItem = (props) => {
  const innerBody = (
    <>
      <figure className="cards__item__pic-wrap" data-category={props.label}>
        <img
          src={props.src}
          alt="Project Images"
          className="cards__item__img"
        />
      </figure>
      <div className="cards__item__info">
        <span style={{ color: "#97ffff" }}>{props.tech}</span>
        <br />
        <br />
        <p className="cards__item__text">{props.text}</p>
      </div>
    </>
  );

  if (props.path === "/DataPrep") {
    return (
      <>
        <li className="cards__item">
          <Link className="cards__item__link" to={props.path}>
            {innerBody}
          </Link>
        </li>
      </>
    );
  }

  return (
    <>
      <li className="cards__item">
        <a
          className="cards__item__link"
          href={props.path}
          target="_blank"
          rel="noreferrer"
        >
          {innerBody}
        </a>
      </li>
    </>
  );
};

export default CardItem;
