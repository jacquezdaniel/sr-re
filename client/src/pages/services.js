import React from "react";
import ScrollToTop from "react-scroll-up";
import { Button, Modal } from "react-materialize";
import "./services.css";

const services = () => {
  return (
    <>
      <ScrollToTop showUnder={160}>
        <i class="material-icons prefix md-36 orange600">arrow_upward</i>
        <span for="icon_prefix"></span>
      </ScrollToTop>
      <div id="service" className="container">
        <div className="row">
          <div className="col s12 m6">
            <div className="card-content center">
              <h5 className="card-title">Services Include</h5>
              <p className="center">(Click for more information)</p>
              <p>
                <Modal
                  actions={[
                    <Button
                      className="indigo"
                      flat
                      modal="close"
                      node="button"
                      waves="light"
                    >
                      Close
                    </Button>
                  ]}
                  bottomSheet={false}
                  fixedFooter={false}
                  header="Advanced Driver Assistance Systems"
                  id="modal-0"
                  options={{
                    dismissible: true,
                    endingTop: "10%",
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    opacity: 0.5,
                    outDuration: 250,
                    preventScrolling: true,
                    startingTop: "4%"
                  }}
                  trigger={
                    <Button className="indigo" node="button">
                      ADAS Calibration
                    </Button>
                  }
                >
                  <p>
                    An ADAS calibration is a process carried out to correctly
                    align the cameras and sensors of a car so that its ADAS
                    system can work as intended. ADAS sensor calibration is
                    required whenever a sensor’s aiming is disturbed in any way.
                    This can occur in a collision, even a minor fender bender,
                    or be a byproduct of common service work such as windshield
                    replacement, suspension repairs or wheel alignment.
                    Calibration is also called for whenever a sensor or its
                    mounting bracket is removed and replaced, there is a change
                    in tire size, a front airbag deploys and deflects off the
                    windshield, or repairs are made to a car roof that has a
                    sensor bracket mounted to it. Finally, sensor calibration is
                    necessary when there is a related DTC in the car’s computer
                    memory, or an automaker releases a technical service
                    bulletin with instructions that calibration be done as part
                    of another repair. Sensor replacement and calibration are
                    frequently part of collision repairs. Automakers recommend
                    that body shops now perform a complete diagnostic scan on
                    every vehicle before repairs are begun, and then again after
                    the job is complete. Doing so will help the auto body shop
                    better understand the scope of any problems before work
                    starts, and then confirm that all issues have been resolved,
                    ADAS sensor calibrations are complete, and the vehicle
                    control systems are communicating properly before the car is
                    returned to the customer.
                  </p>
                </Modal>
              </p>
              <p>
                <Modal
                  actions={[
                    <Button
                      className="indigo"
                      flat
                      modal="close"
                      node="button"
                      waves="light"
                    >
                      Close
                    </Button>
                  ]}
                  bottomSheet={false}
                  fixedFooter={false}
                  header="Supplemental Restraint System"
                  id="modal-0"
                  options={{
                    dismissible: true,
                    endingTop: "10%",
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    opacity: 0.5,
                    outDuration: 250,
                    preventScrolling: true,
                    startingTop: "4%"
                  }}
                  trigger={
                    <Button className="indigo" node="button">
                      Supplemental Restraint System (SRS)
                    </Button>
                  }
                >
                  <p>
                    The acronym SRS stands for Supplemental Restraint System
                    which is the proper name for the Airbag System in your
                    vehicle. This is the dash warning light that was not
                    mentioned in the prior articles on warning lights. This
                    system is considered a passive safety device, meaning that
                    it takes no action from the vehicle occupants to activate
                    the device, like a seat belt that takes action from the
                    occupant to activate the device.
                  </p>
                </Modal>
              </p>
              <p>
                <Modal
                  actions={[
                    <Button
                      className="indigo"
                      flat
                      modal="close"
                      node="button"
                      waves="light"
                    >
                      Close
                    </Button>
                  ]}
                  bottomSheet={false}
                  fixedFooter={false}
                  header="Steering Angle Sensor"
                  id="modal-0"
                  options={{
                    dismissible: true,
                    endingTop: "10%",
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    opacity: 0.5,
                    outDuration: 250,
                    preventScrolling: true,
                    startingTop: "4%"
                  }}
                  trigger={
                    <Button className="indigo" node="button">
                      Steering Angle Sensor
                    </Button>
                  }
                >
                  <p>
                    The steering angle sensor (SAS) is a critical part of the
                    ESC system that measures the steering wheel position angle
                    and rate of turn. A scan tool can be used to obtain this
                    data in degrees. The SAS is located in a sensor cluster in
                    the steering column. The cluster always has more than one
                    steering position sensor for redundancy and to confirm data.
                    The ESC module must receive two signals to confirm the
                    steering wheel position. These signals are often out of
                    phase with each other
                  </p>
                </Modal>
              </p>
              <p>
                <Modal
                  actions={[
                    <Button
                      className="indigo"
                      flat
                      modal="close"
                      node="button"
                      waves="light"
                    >
                      Close
                    </Button>
                  ]}
                  bottomSheet={false}
                  fixedFooter={false}
                  header="OEM Programming And Calibrations Module Programming"
                  id="modal-0"
                  options={{
                    dismissible: true,
                    endingTop: "10%",
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    opacity: 0.5,
                    outDuration: 250,
                    preventScrolling: true,
                    startingTop: "4%"
                  }}
                  trigger={
                    <Button className="indigo" node="button">
                      OEM Programming And Calibrations Module Programming
                    </Button>
                  }
                >
                  <p>
                    OEM-installed safety systems which are designed to assist
                    the driver in both normal driving modes and pre-collision
                    avoidance. The technologies utilized can be traced back to
                    as early as model year 2002 and have become standardized on
                    most makes and models for model year 2019 and forward. Types
                    of systems can include lane keep assist, blind spot
                    detection, active cruise control, etc. These systems rely on
                    the use of numerous specialized sensors and cameras that
                    often require some form of calibration or programming in
                    order to operate properly after any type of service
                    procedure has been completed. Examples of these sensors
                    include: lidar, radar, sonar, and forward-facing cameras.
                  </p>
                </Modal>
              </p>
              <p>
                <Modal
                  actions={[
                    <Button
                      className="indigo"
                      flat
                      modal="close"
                      node="button"
                      waves="light"
                    >
                      Close
                    </Button>
                  ]}
                  bottomSheet={false}
                  fixedFooter={false}
                  header="Nissan/Infiniti ICC System"
                  id="modal-0"
                  options={{
                    dismissible: true,
                    endingTop: "10%",
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    opacity: 0.5,
                    outDuration: 250,
                    preventScrolling: true,
                    startingTop: "4%"
                  }}
                  trigger={
                    <Button className="indigo" node="button">
                      Nissan/Infiniti ICC System
                    </Button>
                  }
                >
                  <p>
                    Intelligent Cruise Control (ICC) measures the distance from
                    the vehicle ahead and controls acceleration and deceleration
                    to automatically maintain a suitable following distance.
                    This distance is adjusted according to the speed of the
                    vehicle ahead, up to the preset speed, and the ICC speed
                    settings set by the driver.
                  </p>
                </Modal>
              </p>
              <p>
                <Modal
                  actions={[
                    <Button
                      className="indigo"
                      flat
                      modal="close"
                      node="button"
                      waves="light"
                    >
                      Close
                    </Button>
                  ]}
                  bottomSheet={false}
                  fixedFooter={false}
                  header="Windshield Camera"
                  id="modal-0"
                  options={{
                    dismissible: true,
                    endingTop: "10%",
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    opacity: 0.5,
                    outDuration: 250,
                    preventScrolling: true,
                    startingTop: "4%"
                  }}
                  trigger={
                    <Button className="indigo" node="button">
                      Windshield Camera
                    </Button>
                  }
                >
                  <p>
                    Windscreen calibration is the process of adjusting the
                    parameters of a camera lens to capture a complete image of
                    the vehicle and road, guaranteeing that in-car ADAS systems
                    receive accurate and reliable information.
                  </p>
                </Modal>
              </p>
              <p>
                <Modal
                  actions={[
                    <Button
                      className="indigo"
                      flat
                      modal="close"
                      node="button"
                      waves="light"
                    >
                      Close
                    </Button>
                  ]}
                  bottomSheet={false}
                  fixedFooter={false}
                  header="Adaptive Headlights"
                  id="modal-0"
                  options={{
                    dismissible: true,
                    endingTop: "10%",
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    opacity: 0.5,
                    outDuration: 250,
                    preventScrolling: true,
                    startingTop: "4%"
                  }}
                  trigger={
                    <Button className="indigo" node="button">
                      Adaptive Headlights
                    </Button>
                  }
                >
                  <p>
                    Adaptive headlights are an active safety feature designed to
                    make driving at night or in low-light conditions safer by
                    increasing visibility around curves and over hills. When
                    driving around a bend in the road, standard headlights
                    continue to shine straight ahead, illuminating the side of
                    the road and leaving the road ahead of you in the dark.
                    Adaptive headlights, on the other hand, turn their beams
                    according to your steering input so that the vehicle’s
                    actual path is lit up.
                  </p>
                </Modal>
              </p>
              <p>
                <Modal
                  actions={[
                    <Button
                      className="indigo"
                      flat
                      modal="close"
                      node="button"
                      waves="light"
                    >
                      Close
                    </Button>
                  ]}
                  bottomSheet={false}
                  fixedFooter={false}
                  header="Blind Spot Monitor"
                  id="modal-0"
                  options={{
                    dismissible: true,
                    endingTop: "10%",
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    opacity: 0.5,
                    outDuration: 250,
                    preventScrolling: true,
                    startingTop: "4%"
                  }}
                  trigger={
                    <Button className="indigo" node="button">
                      Blind Spot Monitor
                    </Button>
                  }
                >
                  <p>
                    The blind spot monitor is a vehicle-based sensor device that
                    detects other vehicles located to the driver’s side and
                    rear. Warnings can be visual, audible, vibrating, or
                    tactile. However, blind spot monitors are an option that may
                    do more than monitor the sides and rear of the vehicle.
                  </p>
                </Modal>
              </p>
              <p>
                <Modal
                  actions={[
                    <Button
                      className="indigo"
                      flat
                      modal="close"
                      node="button"
                      waves="light"
                    >
                      Close
                    </Button>
                  ]}
                  bottomSheet={false}
                  fixedFooter={false}
                  header="Pre-Collision System"
                  id="modal-0"
                  options={{
                    dismissible: true,
                    endingTop: "10%",
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    opacity: 0.5,
                    outDuration: 250,
                    preventScrolling: true,
                    startingTop: "4%"
                  }}
                  trigger={
                    <Button className="indigo" node="button">
                      Pre-Collision System
                    </Button>
                  }
                >
                  <p>
                    The Pre-Collision System uses radar to detect possible
                    crashes, then helps drivers slow down accordingly. Unlike
                    many systems, it can even help prevent high-speed crashes.
                    Toyota says the Pre-Collision System uses radar to detect
                    vehicles. If it detects a pending crash, the system alerts
                    drivers to brake.
                  </p>
                </Modal>
              </p>
              <p>
                <Modal
                  actions={[
                    <Button
                      className="indigo"
                      flat
                      modal="close"
                      node="button"
                      waves="light"
                    >
                      Close
                    </Button>
                  ]}
                  bottomSheet={false}
                  fixedFooter={false}
                  header="Adaptive Cruise Control"
                  id="modal-0"
                  options={{
                    dismissible: true,
                    endingTop: "10%",
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    opacity: 0.5,
                    outDuration: 250,
                    preventScrolling: true,
                    startingTop: "4%"
                  }}
                  trigger={
                    <Button className="indigo" node="button">
                      Adaptive Cruise Control
                    </Button>
                  }
                >
                  <p>
                    Adaptive cruise control (ACC) is an available cruise control
                    system for road vehicles that automatically adjusts the
                    vehicle speed to maintain a safe distance from vehicles
                    ahead. As of 2019, it is also called by 20 unique names that
                    describe that basic functionality.
                  </p>
                </Modal>
              </p>
              <br />
            </div>
          </div>
          <div className="col s12 m6">
            <div className="card-content">
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
              <p className="center">
                <img
                  className="circle responsive-img"
                  src="/images/mobileservice.jpg"
                  alt="mobile services"
                ></img>
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="divider"></div>
        <div className="container">
          <div className="row">
            <div className="col s12 m6 offset-m3">
              <h5 className="center">
                Servicing All Makes And Models Foreign & Domestic
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
    </>
  );
};

export default services;
