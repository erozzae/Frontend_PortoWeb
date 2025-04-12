import React, { useState } from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import styles from "../../styles/global.module.css";
import emailJs from "@emailjs/browser";
import { useRef } from "react";
import { useToast } from "../../contexts/ToastContext";
import useFormContactUsValidation from "../../hooks/useFormContactUsValidation";
import { Reveal } from "../Utils/Reveal";
import { motion } from "motion/react";

function MessageForm() {
  const form = useRef();
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { showPrimaryToast, showDangerToast } = useToast();
  const { errors, validated, validateForm } = useFormContactUsValidation();

  const sendEmail = () => {
    setIsBtnDisabled(true);
    setIsLoading(true);

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
          showPrimaryToast();

          setTimeout(() => {
            setIsBtnDisabled(false);
            setIsLoading(false);
            console.log("success");
          }, 0);
        },
        (error) => {
          showDangerToast();
          setIsLoading(false);
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
      // showPrimaryToast()
    } finally {
      // form.current.reset();
    }
  };

  return (
    <div>
      <Form ref={form} onSubmit={handleSubmit} noValidate validated={validated}>
        <Row>
          <Col xs={12} lg={6}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Reveal>
                <Form.Label>Email address</Form.Label>
              </Reveal>
              <motion.div
                initial={{ opacity: 0, y: 75 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeIn" }}
                viewport={{ once: true }}
              >
                <Form.Control
                  name="email"
                  className="f-input"
                  type="email"
                  placeholder="name@example.com"
                  required
                  isInvalid={!!errors.email}
                />
              </motion.div>

              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col xs={12} lg={6}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Reveal>
                <Form.Label>Name</Form.Label>
              </Reveal>
              <motion.div
                initial={{ opacity: 0, y: 75 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeIn" }}
                viewport={{ once: true }}
              >
                <Form.Control
                  name="name"
                  className="f-input"
                  type="text"
                  placeholder="name"
                  required
                  maxLength={15}
                  isInvalid={!!errors.name}
                />
              </motion.div>

              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
            <Reveal>
              <Form.Label>Message</Form.Label>
            </Reveal>
            <motion.div
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeIn" }}
              viewport={{ once: true }}
            >
              <Form.Control
                as="textarea"
                name="message"
                rows={3}
                required
                isInvalid={!!errors.message}
                className={styles.formTextarea}
              />
            </motion.div>
            <Form.Control.Feedback type="invalid">
              {errors.message}
            </Form.Control.Feedback>
          </Form.Group>
          <div className="px-2">
            <Reveal>
              <Button
                type="submit"
                className={`${styles.btnCustomPrimary} w-100`}
                disabled={isBtnDisabled}
              >
                Submit  {isLoading && <Spinner animation="border" size="sm" />}
              </Button>
              
            </Reveal>
          
          </div>
        </Row>
      </Form>
    </div>
  );
}

export default MessageForm;
