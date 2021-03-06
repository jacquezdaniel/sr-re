import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper white">
            <div className="container">
              <Link to="/">
                <img
                  src="images/logo.png"
                  className="brand-logo"
                  width="150"
                  height="55"
                  alt=""
                />
              </Link>
              <a href="/" data-target="mobile-menu" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
              <ul id="nav-menu" className="right hide-on-med-and-down">
                <li>
                  <Link to="services">Services</Link>
                </li>
                <li>
                  <Link to="gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="positionstatements">Position Statements</Link>
                </li>
                <li>
                  <Link to="contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <ul className="sidenav sidenav-close" id="mobile-menu">
        <li>
          <Link to="services">Services</Link>
        </li>
        <li>
          <Link to="gallery">Gallery</Link>
        </li>
        <li>
          <Link to="positionstatements">Position Statements</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
