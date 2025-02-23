import React from "react";
import {
  Container,
  Image,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  NavLink,
} from "react-bootstrap";
import Logo from "../../assets/images/monster.png";

function NavigationBar() {
  return (
    <>
      {/* <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar href="#home">React-Bootstrap</Navbar>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      <Navbar expand="lg" className="bg-body-tertiary border border-primary">
        <Container className="border border-primary">
          <Navbar.Brand className="border border-primary border border-primary">
            <Image className="me-2" style={{ width: "50px" }} src={Logo} />
            Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse className="justify-content-end border border-danger" id="basic-navbar-nav" >
            <Nav className="border border-primary">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Skills</Nav.Link>
              <Nav.Link href="#">Portofolios</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
