import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>
        Originally from Minneapolis. Young professional lived between numerous
        Midwest and East Coast cities.
      </p>
      <img
        src={image}
        alt="I made this"
      />
    </div>
  );
}

export default About;
