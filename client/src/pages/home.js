import React, { Component } from "react";
import MapContainer from "../components/Map";
import Parallax from "../components/Parallax";
import {
  Slider,
  Caption,
  Slide,
  Card,
  CardTitle,
  Col
} from "react-materialize";
import ScrollToTop from "react-scroll-up";
import "./home.css";

class home extends Component {
  render() {
    return (
      <>
        <ScrollToTop showUnder={160}>
          <i class="material-icons prefix md-36 orange600">arrow_upward</i>
          <span for="icon_prefix"></span>
        </ScrollToTop>
        <div id="slider" className="container no-pad-bot">
          <Slider>
            <Slide image={<img src="/images/home1.jpg" alt="" />}>
              <Caption>
                {/* <h3>Superior Replacement</h3> */}
                <p className="light grey-text text-lighten-3"></p>
              </Caption>
            </Slide>
            <Slide image={<img src="/images/home2.jpg" alt="" />}>
              <Caption placement="left">
                {/* <h3>Superior Replacement</h3> */}
                <p className="light grey-text text-lighten-3"></p>
              </Caption>
            </Slide>
            <Slide image={<img src="/images/home3.jpg" alt="" />}>
              <Caption placement="right">
                {/* <h3>Superior Replacement</h3> */}
                <p className="light grey-text text-lighten-3"></p>
              </Caption>
            </Slide>
            <Slide image={<img src="/images/home4.jpg" alt="" />}>
              <Caption>
                {/* <h3>Superior Replacement</h3> */}
                <p className="light grey-text text-lighten-3"></p>
              </Caption>
            </Slide>
          </Slider>
        </div>
        <br />
        <div className="section">
          <div className="row">
            <Col m={4} s={12}>
              <Card
                className="z-depth-5"
                header={<CardTitle image="/images/home6.jpg" />}
              >
                Serving the Inland Empire, Los Angeles, San Bernardino and
                Orange Counties. For ADAS calibrations, mechanical pigtail, wire
                repair, and A/C service.
              </Card>
            </Col>
            <Col m={4} s={12}>
              <Card
                className="z-depth-5"
                header={<CardTitle image="/images/home5.jpg" />}
              >
                At Superior Replacement we aim to provide guaranteed customer
                satisfaction. Our motive is to provide a high level quality of
                service. You can trust us to make fast turnarounds so you can be
                back on the road in no time.
              </Card>
            </Col>
            <Col m={4} s={12}>
              <Card
                className="z-depth-5"
                header={<CardTitle image="/images/home7.jpg" />}
              >
                We offer a wide range of services in our shop as well as mobile
                services.
              </Card>
            </Col>
          </div>
          <br />
          <div className="container">
            <div id="app-download" className="container">
              <div className="card z-depth-5 indigo darken-4">
                <div className="row">
                  <div className="card-content white-text">
                    <p className="col s6 center">
                      Call Us At
                      <br />
                      1-909-518-7269
                      <br />
                      <br />
                      <a className="material-icons" href="tel:1-909-518-7269">
                        <i class="material-icons md-48">local_phone</i>
                      </a>
                      <br />
                      <br />
                    </p>
                    <p className="col s6 center">
                      2684 Market Street
                      <br />
                      Riverside, CA 92501
                      <br />
                      <br />
                      <a
                        className="black-text icon-block"
                        href="https://www.google.com/maps?saddr&daddr=2684+Market+Street,+Riverside,+CA+92501"
                      >
                        <i className="material-icons md-48">navigation</i>
                      </a>
                    </p>
                  </div>
                  <div className="row">
                    <div className="card-content white-text">
                      <p className="col s12 center">
                        Download Our App
                        <br />
                        <br />
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
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div id="parallax" className="container z-depth-5">
            <Parallax />
          </div>
        </div>
        <br />
        <div id="map" className="container z-depth-5">
          <MapContainer />
        </div>
        <br />
        <br />
      </>
    );
  }
}

export default home;
