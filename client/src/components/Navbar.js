import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div class="navbar black">
        <nav>
          <div className="nav-wrapper black">
            <div className="container">
              <Link to="/" class="brand-logo">
                <img src="images/logo.jpg" width="150" height="64" alt="" />
              </Link>
              <a
                href="/"
                data-target="mobile-menu"
                className="sidenav-trigger right"
              >
                <i className="material-icons">menu</i>
              </a>
              <ul id="nav-menu" class="right hide-on-med-and-down">
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

      <ul className="sidenav" id="mobile-menu">
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
