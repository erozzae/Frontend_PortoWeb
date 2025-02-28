import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import styles from "../../styles/global.module.css";

function PortofolioCard({title,image,description}) {
  return (
    <Card  style={{ width: "100%" }}>
      <div className="pt-3 px-3 pb-0">
        <Card.Img className="rounded"
          src={image} 
          style={{ maxWidth:'100%', aspectRatio:'16/9', objectFit:'cover' }}
        />
      </div>
      <Card.Body className="d-flex justify-content-between">
        <div>
          <Card.Title className={`card-ttl fs-6 fw-semibold mb-0`}>
           {title}
          </Card.Title>
          <Card.Text className={`${styles.fs_normal} fw-normal mb-0`}>
           {description}
          </Card.Text>
        </div>
        <div className="d-flex flex-column justify-content-center">
          <Button size="sm">
            <i className="bx bxs-right-arrow-square"></i>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PortofolioCard;
