import React from "react";
import {
  Container,
  Image,
  Navbar,
  NavbarBrand,
} from "react-bootstrap";
import Logo from "../../assets/images/monster.png"

function NavigationBar() {
  return (
    <>
      <Navbar className="bg-body-tertiary border border-primary">
        <Container fluid>
          <NavbarBrand className="ms-2">
            <Image
              className="me-2"
              style={{ width: "50px" }}
              src={Logo}
            />
            Bootstrap
          </NavbarBrand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
