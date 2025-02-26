import React from "react";

function SubContentHeader({ subtitle, description }) {
  return (
    <div>
      <h2>{subtitle}</h2>
      <p>{description}</p>
    </div>
  );
}

export default SubContentHeader;
