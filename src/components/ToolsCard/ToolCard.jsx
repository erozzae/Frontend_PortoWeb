import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import styles from "../../styles/global.module.css";
import { Reveal } from "../Utils/Reveal";
import { motion } from "motion/react";

function ToolCard({ image, title, description }) {
  return (
    <Card
      className={`${styles.cardBorderPrimary} p-2`}
      style={{ width: "100%" }}
    >
      <Row className="g-0">
        <Col className={`d-flex align-items-center`} xs="3">
          <motion.div
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeIn" }}
            whileHover={{ scale: 1.1 }}
            viewport={{ once: true }}
          >
            <Image
              className="rounded"
              src={image}
              fluid
              style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover" }}
            />
          </motion.div>
        </Col>
        <Col className="d-flex flex-column justify-content-center" xs="9">
          <Reveal>
            <Card.Text className="fs-6 px-2 mb-0 fw-semibold">
              {title}
            </Card.Text>
          </Reveal>
          <Reveal>
            <Card.Text className={`${styles.fs_normal} px-2 mb-0 fw-medium`}>
              {description}
            </Card.Text>
          </Reveal>
        </Col>
      </Row>
    </Card>
  );
}

export default ToolCard;
