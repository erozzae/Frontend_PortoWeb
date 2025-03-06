import React from "react";
import styles from "../../styles/global.module.css";
import { Col, Row, Button, Image, Container } from "react-bootstrap";

function AboutMe() {
  return (
    <Container className="" style={{ marginTop: "10rem" }}>
      <Row>
        <Col className="mb-3" sm={12} md={8}>
          <h1 style={{ fontSize:"4rem" }} className={`fw-bold`}>Hi! I am <span className={styles.spanTextCustomGradienAnim}>Rosyihan</span>, a <span >Fullstack Developer.</span></h1>
          <p>Turning digital ideas into powerful and helpful</p>
          <div className="btn-socmed d-flex text-btn">
            <Button className={`${styles.btnCustomPrimary}`}>
              Download CV
            </Button>
            <div className="socmed d-flex align-items-center">
              <div className={`${styles.iconBorderPrimary} ms-3 p-1 rounded`}>
                <a href="#" className="">
                  <i className="bx bxl-linkedin"></i>
                </a>
              </div>
              <div className={`${styles.iconBorderPrimary} ms-3 p-1 rounded`}>
                <a href="#" className="">
                  <i className="bx bxl-github"></i>
                </a>
              </div>
              <div className={`${styles.iconBorderPrimary} ms-3 p-1 rounded`}>
                <a href="#" className="">
                  <i className="bx bxl-gmail"></i>
                </a>
              </div>
            </div>
          </div>
        </Col>

        <Col
          className="d-flex justify-content-center align-items-center mb-3"
          sm={12}
          md={4}
        >
          <Image
            src="https://images.immediate.co.uk/production/volatile/sites/3/2024/05/How-many-Pokemon-are-there-6434211.jpg?quality=90&resize=980,654"
            style={{ width: "300px" }}
            rounded
          />
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
