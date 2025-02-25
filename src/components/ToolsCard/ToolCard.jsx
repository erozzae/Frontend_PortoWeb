import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import styles from "../../styles/global.module.css"

function ToolCard({ image, title, description }) {
  return (
    <Card className="p-2 border border-primary shadow-sm" style={{ width: "100%" }}>
      <Row className="g-0">
        <Col className="d-flex align-items-center" xs="3">
          <Image
            className="rounded"
            src={image}
            fluid
            style={{ width: "100%", aspectRatio:'1/1', objectFit: "cover" }}
          />
        </Col>
        <Col className="d-flex flex-column justify-content-center" xs="9">
          <Card.Text className={`${styles.button} px-2 mb-0 fs-6 fw-semibold`}>{title}</Card.Text>
          <Card.Text className={`${styles.button} px-2 mb-0 fs-6 fw-medium`}>
            {description}
          </Card.Text>
        </Col>
      </Row>
    </Card>
  );
}

export default ToolCard;
