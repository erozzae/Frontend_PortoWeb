import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import Logo from "../../assets/images/monster.png";
import styles from "../../styles/btnAnimNav.module.css";

function NavigationBar() {
  return (
    <Navbar
      expand="lg"
      className="border-bottom border-white p-2 border-opacity-10"
    >
      <Container className="">
        <Navbar.Brand className=" n-brand fs-1 fw-semibold">
          <Image className="me-2" style={{ width: "50px" }} src={Logo} />
          Rosyihan
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link className={`${styles.btnWrapper} me-1 rounded`} href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Home
            </Nav.Link>
            <Nav.Link className={`${styles.btnWrapper} me-1 rounded`} href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>Skills
            </Nav.Link>
            <Nav.Link className={`${styles.btnWrapper} me-1 rounded`} href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Portofolios
            </Nav.Link>
            <Nav.Link className={`${styles.btnWrapper} me-1 rounded`} href="#">
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
