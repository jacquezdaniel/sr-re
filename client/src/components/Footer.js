import React from "react";
import "./styles/Footer.css";

export default function Footer() {
  return (
    <footer className="page-footer black center">
      <div className="container">
        <div className="footer-copyright black">
          © 2019-2020 Superior Replacement - All Rights Reserved -
        </div>
        <div className="container">
          <a
            className="grey-text text-lighten-4"
            href="https://www.facebook.com/superiorreplacement/"
          >
            <p className="fa fa-facebook"></p>
            Connect On Facebook
          </a>
          <a className="grey-text text-lighten-4" href="tel:1-909-518-7269">
            <p className="fa fa-phone"></p>
            Call Us
          </a>
        </div>
      </div>
    </footer>
  );
}
