import React from "react";
import { Row, Card, Col } from "react-materialize";
import ScrollToTop from "react-scroll-up";

const positionStatement = () => {
  return (
    <>
      <ScrollToTop showUnder={160}>
        <i class="material-icons prefix md-36 orange600">arrow_upward</i>
        <span for="icon_prefix"></span>
      </ScrollToTop>
      <br />
      <div className="container">
        <Row>
          <Col m={12} s={12}>
            <Card
              className="black center"
              textClassName="white-text"
              title="American Honda Position Statement"
              actions={[
                <a href="positionstatement/Honda-Acura_Pos_Vehicle-Scans(7-16).pdf">
                  Honda
                </a>
              ]}
            >
              POST-COLLISION DIAGNOSTIC SCAN AND CALIBRATION
            </Card>
          </Col>
          <Col m={6} s={6}>
            <Card
              className="black"
              textClassName="white-text"
              title="Honda ADAS Systems"
              actions={[
                <a href="positionstatement/HONDAADASPresentation.pdf">
                  Honda ADAS Systems
                </a>
              ]}
            >
              Automated Driver Assist Systems
            </Card>
          </Col>{" "}
          <Col m={6} s={6}>
            <Card
              className="black"
              textClassName="white-text"
              title="INFINITI USA"
              actions={[
                <a href="positionstatement/INFINITI_Pos_Pre-Post-Scan_Revised(10-3-16).pdf">
                  INFINITI
                </a>
              ]}
            >
              INFINITI Pre Post Scan
            </Card>
          </Col>{" "}
          <Col m={12} s={12}>
            <Card
              className="black center"
              textClassName="white-text"
              title="Nissan Radar Calibration Statement"
              actions={[
                <a href="positionstatement/NISSAN RADAR CALIBRATION STATEMENT.pdf">
                  Nissan
                </a>
              ]}
            >
              Nissan Radar Calibration Statement
            </Card>
          </Col>{" "}
          <Col m={6} s={6}>
            <Card
              className="black"
              textClassName="white-text"
              title="Nissan Radar Post Repair"
              actions={[
                <a href="positionstatement/Nissan Required Radar Recalibration Post-Repair.pdf">
                  Nissan Radar Recalibration
                </a>
              ]}
            >
              Required Radar Recalibration Post-Repair
            </Card>
          </Col>
          <Col m={6} s={6}>
            <Card
              className="black"
              textClassName="white-text"
              title="Nissan Pre and Post Scanning"
              actions={[
                <a href="positionstatement/Nissan_Pos_Pre-and-Post-Scanning_2016_FINAL.pdf">
                  Nissan Pre and Post
                </a>
              ]}
            >
              Pre- and Post-Repair System Scanning
            </Card>
          </Col>
          <Col m={12} s={12}>
            <Card
              className="black center"
              textClassName="white-text"
              title="GM Service Information"
              actions={[
                <a href="positionstatement/pre-post-scan-collision-vehicles (1).pdf">
                  General Motors
                </a>
              ]}
            >
              General Motors Position Statement
            </Card>
          </Col>{" "}
          <Col m={6} s={6}>
            <Card
              className="black"
              textClassName="white-text"
              title="Subaru of America"
              actions={[
                <a href="positionstatement/Subaru_Pos_Pre-Post-Scanning(7-17).pdf">
                  Subaru
                </a>
              ]}
            >
              Subaru Position Statement
            </Card>
          </Col>{" "}
          <Col m={6} s={6}>
            <Card
              className="black"
              textClassName="white-text"
              title="Toyota Zero Point Calibration"
              actions={[
                <a href="positionstatement/toyota 0 point calibration.pdf">
                  Toyota
                </a>
              ]}
            >
              ZERO POINT Calibration
            </Card>
          </Col>{" "}
          <Col m={12} s={12}>
            <Card
              className="black center"
              textClassName="white-text"
              title="Toyota Scanning For Electrical System Faults"
              actions={[
                <a href="positionstatement/toyota Scanning-for-Electrical-System-Faults.pdf">
                  Toyota Scanning
                </a>
              ]}
            >
              APPLICABLE VEHICLES: All Toyota, Lexus and Scion Models
            </Card>
          </Col>{" "}
          <Col m={6} s={6}>
            <Card
              className="black"
              textClassName="white-text"
              title="VW Golf"
              actions={[
                <a href="positionstatement/VW ADAPTIVE CRUISE CONTROL.pdf">
                  VW Golf
                </a>
              ]}
            >
              Adaptive Cruise Control
            </Card>
          </Col>
          <Col m={6} s={6}>
            <Card
              className="black"
              textClassName="white-text"
              title="MBUSA Collision Position Statement"
              actions={[
                <a href="positionstatement/MBUSA_Pos_Diagnostic-Repairs-following-a-Collision(1-17).pdf">
                  Mercedes-Benz
                </a>
              ]}
            >
              Diagnostic Repairs Following a Collision
            </Card>
          </Col>
          <Col m={12} s={12}>
            <Card
              className="black center"
              textClassName="white-text center"
              title="Hyundai Pre-Repair and Post-Repair"
              actions={[
                <a href="positionstatement/Hyundai_Pre-Repair-and-Post-Repair-System-Scanning.pdf">
                  Hyundai Pre-Repair and Post-Repair
                </a>
              ]}
            >
              Pre-Repair and Post-Repair System Scanning
            </Card>
          </Col>{" "}
          <Col m={12} s={12}>
            <Card
              className="black center"
              textClassName="white-text center"
              title="Mazda Scanning Position Statement"
              actions={[
                <a href="positionstatement/Mazda-Scanning-Position-Statement.pdf">
                  Mazda Scanning Position Statement
                </a>
              ]}
            >
              Scanning a vehicle before and after a collision repair
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default positionStatement;
