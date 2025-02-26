import React from "react";

const btnStyle = {
  textDecoration: "none",
  color: "inherit",
};

function TextButton({ text }) {
  return (
    <div className="">
      <a className="fs-1 fw-medium" href="#" style={btnStyle}>
        {text} <i className="bx bx-right-arrow-circle align-middle"></i>
      </a>
    </div>
  );
}

export default TextButton;
