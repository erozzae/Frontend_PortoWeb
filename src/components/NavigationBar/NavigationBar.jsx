import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import Logo from "../../assets/images/monster.png";
import btnStyles  from "../../styles/btnAnimNav.module.css";
import navStyles from "../../styles/Navbar.module.css"

function NavigationBar() {
  return (
    <Navbar className="py-0" expand="lg">
      <Container className={`${navStyles.navWrapper} px-3 py-2 rounded w-50`}>
        <Navbar.Brand className="n-brand">
          <Image className="me-2" style={{ width: "35px" }} src={Logo} />
          <h6 className="d-none d-sm-inline-block fs-5 fw-semibold mb-0">Rosyihan</h6>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link className={`${btnStyles.btnWrapper} rounded`} href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Home
            </Nav.Link>
            <Nav.Link className={`${btnStyles.btnWrapper}  rounded`} href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>Skills
            </Nav.Link>
            <Nav.Link className={`${btnStyles.btnWrapper} rounded`} href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Portofolios
            </Nav.Link>
            <Nav.Link className={`${btnStyles.btnWrapper} rounded`} href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
