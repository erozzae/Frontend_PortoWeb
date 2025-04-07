import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import styles from "../../styles/global.module.css";
import emailJs from "@emailjs/browser";
import { useRef } from "react";
import { useToast } from "../../contexts/ToastContext";

function MessageForm() {
  const form = useRef();
  const { showToast, toggleToast } = useToast();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailJs
    //   .sendForm(
    //     import.meta.env.VITE_EMAILJS_SERVICE_ID,
    //     import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    //     form.current,
    //     {
    //       publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    //     }
    //   )
    //   .then(
    //     () => {
    //       console.log("success!");
    //     },
    //     (error) => {
    //       console.log("FAILED...", error.text);
    //     }
    //   );
  };
  return (
    <div>
      <Form ref={form} onSubmit={sendEmail}>
        <Row>
          <Col xs={12} lg={6}>
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
          <Col xs={12} lg={6}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                className="f-input"
                type="text"
                placeholder="name"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" name="message" rows={3} />
          </Form.Group>
          <div className="px-2">
            <Button
              type="button"
              className={`${styles.btnCustomPrimary} w-100`}
              onClick={toggleToast}
            >
              {showToast ? "Sembunyikan Toast" : "Tampilkan Toast"}
            </Button>
          </div>
        </Row>
      </Form>
    </div>
  );
}

export default MessageForm;
