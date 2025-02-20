import React from "react";

function AboutMe() {
  return (
    <div className="row">
      <div className="about_me col-12 col-sm-12 col-md-6 border border-primary">
        <h1>Hi! Iam Rosyihan Fullstack Developer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet omnis
          saepe molestiae a odit beatae fugiat excepturi ea, fugit adipisci
          soluta vitae quae, harum consectetur rem fuga expedita officiis
          quisquam quam libero blanditiis atque ipsa natus recusandae. Totam,
          quam cupiditate?
        </p>
        <button type="button" class="btn btn-primary ">
          Download CV
        </button>
      </div>

      <div className="photo col-12 col-sm-12 col-md-6 border border-primary text-center">
        <img
          src="https://images.immediate.co.uk/production/volatile/sites/3/2024/05/How-many-Pokemon-are-there-6434211.jpg?quality=90&resize=980,654"
          alt="pkn"
          style={{
            width: `300px`,
          }}
        />
      </div>
    </div>
  );
}

export default AboutMe;
