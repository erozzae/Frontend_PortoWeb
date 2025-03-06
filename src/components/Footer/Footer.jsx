import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

function Footer() {
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
              <a href="#" className="text-light me-3" style={linkStyle}>
               Home
              </a>
              <a href="#" className="text-light me-3" style={linkStyle}>
              Skills
              </a>
              <a href="#" className="text-light me-3" style={linkStyle}>
               Portofolios
              </a>
              <a href="#" className="text-light" style={linkStyle}>
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
