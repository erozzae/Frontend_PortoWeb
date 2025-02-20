import React from "react";
import {
  Container,
  Image,
  Nav,
  Navbar,
  NavbarBrand,
  NavLink,
} from "react-bootstrap";
import Logo from "../../assets/images/monster.png"

function NavigationBar() {
  return (
    <>
      <Navbar className="bg-body-tertiary border border-primary">
        <Container className="d-flex justify-content-between border border-primary">
          <NavbarBrand className="border border-primary">
            <Image
              className="me-2"
              style={{ width: "50px" }}
              src={Logo}
            />
            Bootstrap
          </NavbarBrand>
          <Nav className="border border-primary ">
            <NavLink href="#">
              Home
            </NavLink>
            <NavLink href="#">
              Skills
            </NavLink>
            <NavLink href="#">
              Portofolios
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
