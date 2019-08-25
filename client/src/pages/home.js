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
            <Slide
              image={
                <img
                  src="https://photos.smugmug.com/2019/Work/Events/Superior-Replacement-Opening/n-CmLxvs/i-3CCQ52x/0/781c7acf/4K/i-3CCQ52x-4K.jpg"
                  alt=""
                />
              }
            >
              <Caption>
                {/* <h3>Superior Replacement</h3> */}
                <p className="light grey-text text-lighten-3"></p>
              </Caption>
            </Slide>
            <Slide
              image={
                <img
                  src="https://photos.smugmug.com/2019/Work/Events/Superior-Replacement-Opening/n-CmLxvs/i-CVBQJsS/0/f04ca74b/4K/i-CVBQJsS-4K.jpg"
                  alt=""
                />
              }
            >
              <Caption placement="left">
                {/* <h3>Superior Replacement</h3> */}
                <p className="light grey-text text-lighten-3"></p>
              </Caption>
            </Slide>
            <Slide
              image={
                <img
                  src="https://photos.smugmug.com/2019/Work/Events/Superior-Replacement-Opening/n-CmLxvs/i-5n4JdMh/0/d52324bd/4K/i-5n4JdMh-4K.jpg"
                  alt=""
                />
              }
            >
              <Caption placement="right">
                {/* <h3>Superior Replacement</h3> */}
                <p className="light grey-text text-lighten-3"></p>
              </Caption>
            </Slide>
            <Slide
              image={
                <img
                  src="https://photos.smugmug.com/2019/Work/Events/Superior-Replacement-Opening/n-CmLxvs/i-C6HDDxh/0/c5058666/4K/i-C6HDDxh-4K.jpg"
                  alt=""
                />
              }
            >
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
                header={
                  <CardTitle image="https://photos.smugmug.com/2019/Work/Events/Superior-Replacement-Opening/n-CmLxvs/i-KxbGDnR/0/1d2842cf/4K/i-KxbGDnR-4K.jpg" />
                }
                actions={[<a />]}
              >
                Serving the Inland Empire, Los Angeles, San Bernardino and
                Orange Counties. For ADAS calibrations mechanical pigtail and
                wire repair A/C service.
              </Card>
            </Col>
            <Col m={4} s={12}>
              <Card
                header={
                  <CardTitle image="https://photos.smugmug.com/2019/Work/Events/Superior-Replacement-Opening/n-CmLxvs/i-sTv4rmd/0/717d8252/4K/i-sTv4rmd-4K.jpg" />
                }
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
                header={
                  <CardTitle image="https://photos.smugmug.com/2019/Work/Events/Superior-Replacement-Opening/n-CmLxvs/i-8DD79S4/0/daf33f3f/X5/i-8DD79S4-X5.jpg" />
                }
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

        <div className="section z-depth-3">
          <p className="center">
            <br />
            Give us a call at 1-909-518-7269
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
      </>
    );
  }
}

export default home;
