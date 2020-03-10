import React from "react";
import ScrollToTop from "react-scroll-up";
import "./services.css";

const services = () => {
  return (
    <>
      <ScrollToTop showUnder={160}>
        <i class="material-icons prefix md-36 orange600">arrow_upward</i>
        <span for="icon_prefix"></span>
      </ScrollToTop>
      <br />
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <div className="card-content">
              <div className="icon-block">
                <h2 className="center light-blue-text">
                  <i class="material-icons">drive_eta</i>
                </h2>
                <h5 className="card-title">Our Services Include</h5>
                <p className="center">
                  ADAS Calibrations
                  <br />
                  SRS
                  <br />
                  Steering Angle
                  <br />
                  OEM Programming And Calibrations Module programming.
                  <br />
                  Nissan/Infiniti ICC System
                  <br />
                  Windshield Camera
                  <br />
                  Adaptive Headlamp
                  <br />
                  BSM
                  <br />
                  Pre Collision
                  <br />
                  Adaptive Cruise Control
                </p>
                <br />
              </div>
            </div>
          </div>
          <div className="col s12 m6">
            <div className="card-content">
              <div className="icon-block">
                <h2 className="center light-blue-text">
                  <i className="material-icons">local_shipping</i>
                </h2>
                <h5 className="center">Mobile Services</h5>
                <p className="center">
                  We come to you. Call us for all your mechanical, electrical,
                  alignments and tire needs.
                  <br />
                  We provide exceptional customer service, pick up and delivery,
                  or at your door service.
                  <br /> We have the capabilities to scan all current and older
                  model cars, any makes or models, reset all computer codes and
                  get you back on the road fast!
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col s12 m6 offset-m3">
              <h5 className="center">
                All Makes And Models Foreign & Domestic
              </h5>
              <br />
              <img
                className="responsive-img"
                src="/images/car-emblems.jpg"
                alt="car badges"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default services;
