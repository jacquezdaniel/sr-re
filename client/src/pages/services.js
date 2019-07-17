import React from "react";
import { Row } from "react-materialize";

const services = () => {
  return (
    <>
      <Row>
        <div className="col s12 m6">
          <div className="icon-block">
            <h2 className="center light-blue-text">
              <i class="material-icons">drive_eta</i>
            </h2>
            <h5 className="center">In shop services include</h5>
            <p className="light">
              <i className="material-icons">check</i>SRS
              <br></br>
              <i className="material-icons">check</i>Steering Angle
              <br></br>
              <i className="material-icons">check</i>OEM Programming And
              Calibrations Module programming.
              <br></br>
              <i className="material-icons">check</i>Nissan/Infiniti ICC System
              <br></br>
              <i className="material-icons">check</i>Windshield Camera
              <br></br>
              <i className="material-icons">check</i>Adaptive Headlamp
              <p className="light"></p>
              <i className="material-icons">check</i>BSM
              <br></br>
              <i className="material-icons">check</i>Pre Collision
              <br></br>
              <i className="material-icons">check</i>Adaptive Cruise Control
            </p>
          </div>
        </div>

        <div className="col s12 m6">
          <div className="icon-block">
            <h2 className="center light-blue-text">
              <i className="material-icons">local_shipping</i>
            </h2>
            <h5 className="center">Mobile Services</h5>
            We come to you. Call us for all your mechanical, electrical,
            alignments and tire needs. We provide exceptional customer service,
            pick up and delivery, or at your door service. We have the
            capabilities to scan all current and older model cars, any makes or
            models, reset all computer codes and get you back on the road fast!
          </div>
        </div>
      </Row>
    </>
  );
};

export default services;
