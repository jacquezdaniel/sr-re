import React from "react";
import { Row } from "react-materialize";
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
      <br />
      <div className="container z-depth-4">
        <Row>
          <div className="col s12">
            <div className="icon-block">
              <h2 className="center light-blue-text">
                <i class="material-icons">drive_eta</i>
              </h2>
              <h5 className="center">Our Services Include</h5>

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
              {/* <p className="center light">
                The Effects of Wheel Alignment on ADASA great majority of
                collisions can cause some type of suspension damage, which means
                a wheel alignment will be necessary. The list of additional
                steps after a wheel alignment keeps growing with the addition of
                advanced driver assistance systems (ADAS). These systems need to
                know what direction the vehicle is travelling down the road in
                order to accurately make safety corrections and predictions.
                However, there are still questions on what is required when ADAS
                and wheel alignments are concerned. Vehicles equipped with ADAS,
                especially lane keep assist and collision braking, need to be
                properly aligned with how the vehicle is traveling down the
                road. Cameras and sensors use different inputs from the vehicle,
                such as inputs from the steering angle sensor. If the steering
                angle sensor is adjusted during a wheel alignment, the forward
                facing camera, which controls the lane departure warning, may
                think the steering wheel is turned. This can signal the vehicle
                to correct the steering to stay on the road, even though the
                vehicle is traveling between the lines. There are numerous OEMs
                that require the ADAS to be calibrated when a wheel alignment is
                performed. Some even go to the extent of requiring that the
                vehicle be placed on an alignment rack during calibration.
                Others have a wheel alignment as a step in the calibration
                process. RTS’s OEM Calibration Requirements Search has
                information on requirements for many different make and models.
                In order to find out if a calibration will be required after a
                wheel alignment, or if a wheel alignment is required as a step
                in a calibration procedure, you should always consult the OEM
                repair information. Also, many wheel alignment systems will warn
                you that calibrations may need to be performed after the wheel
                alignment is completed.
              </p> */}
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
              <p className="center">
                We come to you. Call us for all your mechanical, electrical,
                alignments and tire needs. We provide exceptional customer
                service, pick up and delivery, or at your door service. We have
                the capabilities to scan all current and older model cars, any
                makes or models, reset all computer codes and get you back on
                the road fast!
              </p>
              <br />
              <br />
            </div>
          </div>
        </Row>
      </div>
      <br />
    </>
  );
};

export default services;
