// src/components/Home.js
import React from "react";
// Assuming 'Name' and 'City' are defined as const variables here, e.g.:
// const name = "Liza";
// const city = "New York";

function Home() {
  // Use the 'name' and 'city' variables that are defined in this file.
  // If they are not defined, you might need to add them or import them from src/data/user.js
  // For example, if your starter code has:
  const Name = "Your Name"; // Check your actual starter code for the variable names and values
  const City = "Your City"; // Check your actual starter code for the variable names and values

  return (
    <div id="home">
      <h1 style={{ color: "firebrick" }}>
        'Name is a Web Developer from City'
      </h1>
    </div>
  );
}
// Make sure it's default exported if it's not already
export default Home;
