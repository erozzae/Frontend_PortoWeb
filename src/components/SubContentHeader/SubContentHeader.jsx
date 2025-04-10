import React from "react";
import { Reveal } from "../Utils/Reveal";

function SubContentHeader({ subtitle, description }) {
  return (
    <div>
      <Reveal>
        <h2>{subtitle}</h2>
      </Reveal>
      <Reveal>
        <p>{description}</p>
      </Reveal>
    </div>
  );
}

export default SubContentHeader;
