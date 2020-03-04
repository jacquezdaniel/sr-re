import React from "react";
import "./styles/Footer.css";

export default function Footer() {
  return (
    <footer className="page-footer black center">
      <div className="container">
        <p className="footer-copyright black">
          © 2019-2020 Superior Replacement - All Rights Reserved -
        </p>
        <br />
        <div className="container">
          <a
            href="https://play.google.com/store/apps/details?id=com.mobilesoft.superiorreplacement&hl=en_US"
            target="_parent"
          >
            <img
              src="//news.files.bbci.co.uk/include/newsspec/19854/assets/app-project-assets/google_play_store.svg"
              width="161"
              height="auto"
              border="0"
            ></img>
          </a>
          <br />
          <a
            href="https://apps.apple.com/us/app/superior-replacement/id1490284985"
            target="_parent"
          >
            <img
              class="news-app-promo__app-store"
              src="//news.files.bbci.co.uk/include/newsspec/19854/assets/app-project-assets/ios_app_store.svg"
              width="161"
              height="auto"
              border="0"
            ></img>
          </a>
        </div>
        <div className="container">
          <a
            className="grey-text text-lighten-4 left-align"
            href="https://www.facebook.com/superiorreplacement/"
          >
            <p className="fa fa-facebook"></p>
            Connect On Facebook
          </a>
          <a
            className="grey-text text-lighten-4 right-align"
            href="tel:1-909-518-7269"
          >
            <p className="fa fa-phone"></p>
            Call Us
          </a>
        </div>
      </div>
    </footer>
  );
}
