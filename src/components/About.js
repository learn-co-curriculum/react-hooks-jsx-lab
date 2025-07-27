// src/components/About.js
import React from "react";
// Assuming 'image' is defined as a const variable here, e.g.:
// const image = "https://i.imgur.com/mV8PQxj.gif";

function About() {
  // Use the 'image' variable that is defined in this file.
  // If it's not defined, you might need to add it or import it from src/data/user.js
  const image = "https://placehold.co/150x150/000/FFF?text=Profile"; // Placeholder: Check your starter code for actual variable or import

  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={"https://i.imgur.com/mV8PQxj.gif"} alt="I made this" />
    </div>
  );
}
// Make sure it's default exported if it's not already
export default About;