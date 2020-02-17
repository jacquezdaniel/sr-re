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
import "./home.css";

class home extends Component {
  render() {
    return (
      <>
        <br />
        <br />
        <div className="container black no-pad-bot z-depth-5">
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
        <br />
        <div className="section blue darken-4 no-pad-bot z-depth-5">
          <div className="row">
            <Col m={4} s={12}>
              <Card
                header={<CardTitle image="/images/home6.jpg" />}
                actions={[<a />]}
              >
                Serving the Inland Empire, Los Angeles, San Bernardino and
                Orange Counties. For ADAS calibrations mechanical pigtail and
                wire repair A/C service.
              </Card>
            </Col>
            <Col m={4} s={12}>
              <Card
                header={<CardTitle image="/images/home5.jpg" />}
                actions={[<a />]}
              >
                At Superior Replacement we aim to provide guaranteed customer
                satisfaction. Our motive is to provide a high level quality of
                service. You can trust us to make fast turnarounds so you can be
                back on the road in no time.
              </Card>
            </Col>
            <Col m={4} s={12}>
              <Card
                header={<CardTitle image="/images/home7.jpg" />}
                actions={[<a />]}
              >
                We offer a wide range of services in our shop as well as mobile
                services.
              </Card>
            </Col>
          </div>
        </div>
        <br />
        <br />
        <div className="section">
          <Parallax />
        </div>
        <br />
        <br />
        <div className="container z-depth-3">
          <p className="center">
            <br />
            Give us a call at
            <br />
            1-909-518-7269
            <br />
            <a className="fa fa-phone" href="tel:1-909-518-7269"></a>
            <br />
            Located at 2684 Market Street, Riverside, CA 92501
            <br />
            <br />
            <a href="https://www.google.com/maps?saddr&daddr=2684+Market+Street,+Riverside,+CA+92501">
              Click for directions
            </a>
          </p>
          <br />
        </div>
        <br />
        <br />
        <div className="container z-depth-5">
          <MapContainer />
        </div>
        <br />
        <br />
      </>
    );
  }
}

export default home;
