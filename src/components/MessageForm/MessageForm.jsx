import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

function MessageForm() {
  return (
    <>
      <Form>
        <Row>
          <Col xs={12} lg={6}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
          </Col>
          <Col xs={12} lg={6}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <div className="px-2">
            <Button className="w-100" variant="primary">Submit</Button>
          </div>
        </Row>
      </Form>
    </>
  );
}

export default MessageForm;
