import React from "react";
import "./styles/Footer.css";

export default function Footer() {
  return (
    <>
      <br />
      <br />
      <footer className="page-footer black">
        <div className="container">
          <div className="footer-copyright black">
            © 2019 Superior Replacement - All Rights Reserved -
            <a
              className="grey-text text-lighten-4 right"
              href="https://www.facebook.com/superiorreplacement/"
            >
              <p className="fa fa-facebook"></p>
              <br />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
