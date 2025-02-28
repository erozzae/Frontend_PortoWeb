import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import Logo from "../../assets/images/monster.png";

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
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Skills</Nav.Link>
            <Nav.Link href="#">Portofolios</Nav.Link>
            <Nav.Link href="#">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
