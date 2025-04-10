import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import styles from "../../styles/global.module.css";
import { motion } from "motion/react";
import { Reveal } from "../Utils/Reveal";

function PortofolioCard({ title, image, description }) {
  return (
    <Card className={`${styles.cardBorderPrimary}`} style={{ width: "100%" }}>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeIn" }}
        whileHover={{ scale: 1.05 }}
        viewport={{ once: true }}
      >
        <div className="pt-3 px-3 pb-0">
          <Card.Img
            className="rounded"
            src={image}
            style={{
              maxWidth: "100%",
              aspectRatio: "16/9",
              objectFit: "cover",
            }}
          />
        </div>
      </motion.div>

      <Card.Body className="d-flex justify-content-between">
        <div>
          <Reveal>
            <Card.Title className={`card-ttl fs-6 fw-semibold mb-0`}>
              {title}
            </Card.Title>
          </Reveal>
          <Reveal>
            <Card.Text className={`${styles.fs_normal} fw-normal mb-0`}>
              {description}
            </Card.Text>
          </Reveal>
        </div>
        <div className="d-flex flex-column justify-content-center">
          <Reveal>
            <Button className={`${styles.btnCustomPrimary}`} size="sm">
              <i className="bx bxs-right-arrow-square"></i>
            </Button>
          </Reveal>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PortofolioCard;
