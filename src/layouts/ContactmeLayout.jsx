import React from "react";
import MessageForm from "./../components/MessageForm/MessageForm";
import { Col, Container, Row } from "react-bootstrap";
import SubContentHeader from "../components/SubContentHeader/SubContentHeader";
import TextButton from "../components/Buttons/textButton";

const dummySubContentHeader = {
    subtitle:"Contact me for Collaboration",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi fugit quis atque magnam."
}

function ContactmeLayout() {
  return (
    <Container className="mt-1">
      <Row>
        <Col className="d-flex flex-column justify-content-between border border-primary" xs={12} md={6}>
            <SubContentHeader  subtitle={dummySubContentHeader.subtitle} description={dummySubContentHeader.description}/>
            <TextButton text={"Let's Connect"}/>
        </Col>  
        <Col className="border border-primary" xs={12} md={6}>
          <MessageForm />
        </Col>
      </Row>
    </Container>
  );
}

export default ContactmeLayout;
