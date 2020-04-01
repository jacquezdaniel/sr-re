import React from "react";
import "./styles/Footer.css";

export default function Footer() {
  return (
    <div className="page-footer black">
      <div className="container center">
        <p className="center">
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
      </div>
      <div className="container">
        <p className="center">
          <a
            id="facebook"
            className="grey-text text-lighten-4"
            href="https://www.facebook.com/superiorreplacement/"
            target="_parent"
          >
            <p className="fa fa-facebook"></p>
          </a>
          Facebook Page
          <a
            id="phone"
            className="grey-text text-lighten-4"
            href="tel:1-909-518-7269"
          >
            <p className="fa fa-phone"></p>
          </a>
          Call Us
        </p>
      </div>
      <div className="container">
        <div className="footer-copyright">© 2020 Superior Replacement</div>
      </div>
    </div>
  );
}
