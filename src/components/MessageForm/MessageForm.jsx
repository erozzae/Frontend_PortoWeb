import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import styles from "../../styles/global.module.css";
import emailJs from "@emailjs/browser";
import { useRef } from "react";
import { useToast } from "../../contexts/ToastContext";
import useFormContactUsValidation from "../../hooks/useFormContactUsValidation";

function MessageForm() {
  const form = useRef();
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const { showToast, toggleToast } = useToast();
  const {
    errors,
    validated,
    validateForm,
  } = useFormContactUsValidation();

  const sendEmail = () => {
    setIsBtnDisabled(true);

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
          toggleToast();
          setTimeout(() => {
            showToast;
            setIsBtnDisabled(false);
            console.log("success");
          }, 0);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validasi form
    if (!validateForm(event.currentTarget)) {
      return;
    }

    try {
      sendEmail();
    } catch (error) {
      // Handle error
      console.error("Error sending email:", error);
      alert("Gagal mengirim pesan. Silakan coba lagi.");
    } finally {
      form.current.reset();
    }
  };

  return (
    <div>
      <Form ref={form} onSubmit={handleSubmit} noValidate validated={validated}>
        <Row>
          <Col xs={12} lg={6}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                className="f-input"
                type="email"
                placeholder="name@example.com"
                required
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
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
                required
                maxLength={15}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              rows={3}
              required
              isInvalid={!!errors.message}
              className={styles.formTextarea}
            />
            <Form.Control.Feedback type="invalid">
              {errors.message}
            </Form.Control.Feedback>
          </Form.Group>
          <div className="px-2">
            <Button
              type="submit"
              className={`${styles.btnCustomPrimary} w-100`}
              disabled={isBtnDisabled}
            >
              Submit
            </Button>
          </div>
        </Row>
      </Form>
    </div>
  );
}

export default MessageForm;
