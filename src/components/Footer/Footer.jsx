import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Reveal } from "../Utils/Reveal";
import styles from "../../styles/global.module.css"

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
  cursor: "pointer",
};

function Footer({
  onAboutClick,
  onSkillsClick,
  onPortofoliosClick,
  onContactClick,
}) {
  return (
    <footer className="bg-dark text-light py-4">
      <Container className="text-center">
        <Row>
          <Col
            md={6}
            className="mb-3 mb-md-0 d-flex justify-content-center"
          >
            <Reveal>
              <p className="mb-0 ">
                &copy; {new Date().getFullYear()} Rosyihan. All Rights Reserved.
              </p>
            </Reveal>
          </Col>
          <Col md={6}>
            <div className="mb-0 d-flex justify-content-center flex-wrap">
              <Reveal>
                <div>
                  <a
                    className={`${styles.fs_normal} text-light me-3`}
                    style={linkStyle}
                    onClick={onAboutClick}
                  >
                    Home
                  </a>
                </div>
              </Reveal>
              <Reveal>
                <div>
                  <a
                    className={`${styles.fs_normal} text-light me-3`}
                    style={linkStyle}
                    onClick={onSkillsClick}
                  >
                    Skills
                  </a>
                </div>
              </Reveal>
              <Reveal>
                <div>
                  <a
                   className={`${styles.fs_normal} text-light me-3`}
                    style={linkStyle}
                    onClick={onPortofoliosClick}
                  >
                    Portofolios
                  </a>
                </div>
              </Reveal>
              <Reveal>
                <div>
                  <a
                   className={`${styles.fs_normal} text-light me-3`}
                    style={linkStyle}
                    onClick={onContactClick}
                  >
                    Contact Me
                  </a>
                </div>
              </Reveal>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
