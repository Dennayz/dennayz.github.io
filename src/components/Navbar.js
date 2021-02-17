import React, { useState, useEffect } from "react";
import "./styles/Navbar.css";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

function Navbar() {
  const [click, setClick] = useState(false);
  const [navBar, setNavBar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const changeNavBackground = () => {
    if (window.scrollY >= 80) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBackground);
    return () => {
      window.removeEventListener("scroll", changeNavBackground);
    };
  });

  return (
    <>
      <nav className={navBar ? "navbar active" : "navbar"}>
        <div className="navbar-container">
          <div
            className="navbar-logo"
            onClick={() => {
              closeMobileMenu();
              scroll.scrollToTop();
            }}
          >
            <i className={navBar ? "fa fa-toggle-on" : "fa fa-toggle-off"}></i>
            DZ
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="about-me"
                spy={true}
                offset={-50}
                className="nav-links"
                onClick={closeMobileMenu}
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="projects"
                spy={true}
                offset={-50}
                className="nav-links"
                onClick={closeMobileMenu}
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="interests"
                offset={-50}
                spy={true}
                className="nav-links"
                onClick={closeMobileMenu}
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                Interests
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                spy={true}
                offset={-50}
                className="nav-links"
                onClick={closeMobileMenu}
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
