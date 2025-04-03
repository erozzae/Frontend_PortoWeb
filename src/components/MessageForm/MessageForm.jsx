import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import styles from "../../styles/global.module.css";
import emailJs from "@emailjs/browser";
import { useRef } from "react";

function MessageForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailJs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("success!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <Form ref={form} onSubmit={sendEmail}>
        <Row>
          <Col xs={12}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                className="f-input"
                type="email"
                placeholder="name@example.com"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" name="message" rows={3} />
          </Form.Group>
          <div className="px-2">
            <Button
              type="submit"
              className={`${styles.btnCustomPrimary} w-100`}
            >
              Submit
            </Button>
          </div>
        </Row>
      </Form>
    </>
  );
}

export default MessageForm;
