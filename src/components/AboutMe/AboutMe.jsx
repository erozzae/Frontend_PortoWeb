import React from "react";
import { Col, Row, Button, Image } from "react-bootstrap";

function AboutMe() {
  return (
    <Row>
      <Col className="border border-primary" sm={12} md={6}>
        <h1>Hi! Iam Rosyihan Fullstack Developer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet omnis
          saepe molestiae a odit beatae fugiat excepturi ea, fugit adipisci
          soluta vitae quae, harum consectetur rem fuga expedita officiis
          quisquam quam libero blanditiis atque ipsa natus recusandae. Totam,
          quam cupiditate?
        </p>
        <Button variant="primary">Download CV</Button>
      </Col>

      <Col className="d-flex border border-primary justify-content-center align-items-center" sm={12} md={6}>
        <Image 
          src="https://images.immediate.co.uk/production/volatile/sites/3/2024/05/How-many-Pokemon-are-there-6434211.jpg?quality=90&resize=980,654"
          style={{ width:"300px" }} rounded 
        />
      </Col>
    </Row>
  );
}

export default AboutMe;
