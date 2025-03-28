import React from "react";

const btnStyle = {
  textDecoration: "none",
  color: "inherit",
};

function TextButton({ text }) {
  return (
    <div className="text-btn">
      <a className="fs-1 fw-medium" href="https://www.linkedin.com/in/rosyihan-m" target="_blank" style={btnStyle}>
        {text} <i className="bx bx-right-arrow-circle align-middle"></i>
      </a>
    </div>
  );
}

export default TextButton;
