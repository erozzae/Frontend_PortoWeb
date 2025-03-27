import React from "react";
import { Col, Container, Row } from "react-bootstrap";

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
          <Col md={6} className="mb-3 mb-md-0">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Your Name. All Rights Reserved.
            </p>
          </Col>
          <Col md={6}>
            <p className="mb-0">
              <a className="text-light me-3" style={linkStyle} onClick={onAboutClick}>
                Home
              </a>
              <a className="text-light me-3" style={linkStyle} onClick={onSkillsClick}>
                Skills
              </a>
              <a className="text-light me-3" style={linkStyle} onClick={onPortofoliosClick}>
                Portofolios
              </a>
              <a className="text-light" style={linkStyle} onClick={onContactClick}>
                Contact Me
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
