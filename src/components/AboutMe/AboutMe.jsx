import React from "react";
import styles from "../../styles/global.module.css";
import aboutMeStyles from "../../styles/aboutMe.module.css";
import { Col, Row, Button, Image, Container } from "react-bootstrap";
import imagesPhoto from "../../assets/images/Rosyihan.png";

// const boxImgStyle ={
//   minWidth:""
// }

function AboutMe() {
  return (
    <Container className="mb-2 d-flex flex-column justify-content-center border" style={{ minHeight: "100vh" }}>
      <Row className={`${aboutMeStyles.aboutMeMt}`}>
        <Col className="mb-3" sm={12} md={6}>
          <h1 style={{ fontSize: "3.5rem" }} className={`fw-bold`}>
            Hi! I am{" "}
            <span className={styles.spanTextCustomGradienAnim}>Rosyihan</span>,
            a <span>Fullstack Developer.</span>
          </h1>
          <p className="fs-5">
            Turning digital ideas into innovative web development projects
            creates transformative solutions
          </p>
          <div className="btn-socmed mb-4 d-flex text-btn">
            <Button className={`${styles.btnCustomPrimary} me-3`}>
              Download CV
            </Button>
            <Button className={`${styles.btnCustomSecondary}`}>
              Portofolio Projects
            </Button>
          </div>
          <div className="socmed d-flex ">
            <div className={`${styles.iconBorderPrimary} p-2 rounded`}>
              <a href="#" className="">
                <i className="bx bxl-linkedin" style={{ fontSize: "30px" }}></i>
              </a>
            </div>
            <div className={`${styles.iconBorderPrimary} ms-3 p-2 rounded`}>
              <a href="#" className="">
                <i className="bx bxl-github" style={{ fontSize: "30px" }}></i>
              </a>
            </div>
            <div className={`${styles.iconBorderPrimary} ms-3 p-2 rounded`}>
              <a href="#" className="">
                <i className="bx bxl-gmail" style={{ fontSize: "30px" }}></i>
              </a>
            </div>
          </div>
        </Col>

        <Col
          className="d-flex justify-content-center align-items-end mb-3"
          sm={12}
          md={6}
        >
          <div
            className="rounded-top position-relative"
            style={{
              width: "300px",
              height: "300px",
              background: "#101521",
              boxShadow:
                "0 0 5px rgba(33, 150, 243, 0.5), 0 0 15px rgba(33, 150, 243, 0.3)",
            }}
          >
            <div
              className="rounded-top position-absolute translate-middle-x bottom-0 start-50"
              style={{
                width: "280px",
                height: "290px",
                background: "rgba(42, 43, 56, 0.5)",
                backdropFilter: "blur(104px)",
              }}
            ></div>
            <Image
              className="position-absolute translate-middle-x bottom-0 start-50"
              src={imagesPhoto}
              style={{ width: "280px" }}             
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
