import React from "react";
import MessageForm from "./../components/MessageForm/MessageForm";
import { Col, Container, Row } from "react-bootstrap";
import SubContentHeader from "../components/SubContentHeader/SubContentHeader";
import TextButton from "../components/Buttons/textButton";

const dummySubContentHeader = {
    subtitle:"Contact Me for Collaboration",
    description: "Feel free to reach out if you're interested in collaborating on exciting projects!"
}

function ContactmeLayout() {
  return (
    <Container className="mb-3">
      <Row>
        <Col className="d-flex flex-column justify-content-between" xs={12} md={6}>
            <SubContentHeader  subtitle={dummySubContentHeader.subtitle} description={dummySubContentHeader.description}/>
            <TextButton text={"Let's Connect"}/>
        </Col>  
        <Col  xs={12} md={6}>
          <MessageForm />
        </Col>
      </Row>
    </Container>
  );
}

export default ContactmeLayout;
