import React from "react";
import { Row } from "react-materialize";
import "./services.css";

const services = () => {
  return (
    <>
      <br />
      <br />
      <div className="container z-depth-4">
        <Row>
          <div className="col s12">
            <div className="icon-block">
              <h2 className="center light-blue-text">
                <i class="material-icons">drive_eta</i>
              </h2>
              <h5 className="center">In shop services include</h5>
              <p className=" center light">
                <i className="material-icons">check</i>ADAS Calibrations
                <br></br>
                <i className="material-icons">check</i>SRS
                <br></br>
                <i className="material-icons">check</i>Steering Angle
                <br></br>
                <i className="material-icons">check</i>OEM Programming And
                Calibrations Module programming.
                <br></br>
                <i className="material-icons">check</i>Nissan/Infiniti ICC
                System
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
              <img
                id="carpool"
                src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/66126028_426150341570229_6214472001164148736_n.jpg?_nc_cat=104&_nc_oc=AQnXZMAno019MDqlmnJP7U2niSUcfP92BvyHw2FHPP0ZjNQFst7Q8FaQceGIGaI3axI&_nc_ht=scontent-sjc3-1.xx&oh=49f7f62c3cd28ff402fee077c8761fa9&oe=5DB3EC11"
                alt=""
              ></img>
            </div>
          </div>
        </Row>
      </div>
      <br />
      <br />
      <div id="van" className="container no-pad-bot z-depth-4">
        <Row>
          <div className="col s12">
            <div className="icon-block">
              <h2 className="center light-blue-text">
                <i className="material-icons">local_shipping</i>
              </h2>
              <h5 className="center">Mobile Services</h5>
              We come to you. Call us for all your mechanical, electrical,
              alignments and tire needs. We provide exceptional customer
              service, pick up and delivery, or at your door service. We have
              the capabilities to scan all current and older model cars, any
              makes or models, reset all computer codes and get you back on the
              road fast!
              <img
                id="vanpool"
                src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/42227756_262639067921358_7006991186372067328_n.jpg?_nc_cat=103&_nc_oc=AQlbndNTO7QYC6KEVdcMEAW1AoxCHjTA3Y3_lG5fNiS3qcFoPiSWhnbcwkRnXE5jObM&_nc_ht=scontent-sjc3-1.xx&oh=a4aff5c8461973717491b346d9ff9cd6&oe=5DACF734"
                alt=""
              ></img>
            </div>
          </div>
        </Row>
      </div>
    </>
  );
};

export default services;
