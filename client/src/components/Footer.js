import React from "react";
import "./styles/Footer.css";

export default function Footer() {
  return (
    <div className="page-footer indigo darken-4">
      <div className="container center">
        <p className="right">
          <a
            id="apple"
            href="https://apps.apple.com/us/app/superior-replacement/id1490284985"
          >
            <img
              className="responsive-img"
              src="//news.files.bbci.co.uk/include/newsspec/19854/assets/app-project-assets/ios_app_store.svg"
              width="150"
              height="auto"
              border="0"
              alt="apple"
            ></img>
          </a>
          <a
            id="google"
            href="https://play.google.com/store/apps/details?id=com.mobilesoft.superiorreplacement&hl=en_US"
          >
            <img
              className="responsive-img"
              src="//news.files.bbci.co.uk/include/newsspec/19854/assets/app-project-assets/google_play_store.svg"
              width="150"
              height="auto"
              border="0"
              alt="google"
            ></img>
          </a>
        </p>
        <p>
          <a
            id="facebook"
            className="grey-text text-lighten-4"
            href="https://www.facebook.com/superiorreplacement/"
            target="_parent"
          >
            <p className="fa fa-facebook"></p>
          </a>
          <a
            id="phone"
            className="grey-text text-lighten-4"
            href="tel:1-909-518-7269"
          >
            <p className="fa fa-phone"></p>
          </a>
        </p>
      </div>
      <div className="container">
        <div className="footer-copyright indigo darken-4">
          <p id="footer-text">
            © 2020 Superior Replacement. All rights reserved. The
            product/service names listed in this document are marks and/or
            registered marks of their respective owners and used under license.
            Unauthorized use strictly prohibited.
          </p>
        </div>
      </div>
    </div>
  );
}
