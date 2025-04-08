import React, { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import styles from "../../styles/global.module.css";

function DangerToast({ show, onClose, title, message }) {
  const fixedToastStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 9999,
  };

  return (
    <div style={fixedToastStyle}>
      <Toast
        className={`${styles.iconBorderDanger}`}
        show={show}
        onClose={onClose}
      >
        <Toast.Header>
          <strong className="me-auto">{title}</strong>
          <small>Baru saja</small>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </div>
  );
}

export default DangerToast;
