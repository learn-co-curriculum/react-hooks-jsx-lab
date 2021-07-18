import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  
  return <div>Home
    <div id="home">
    <h1 style={{ color : "firebrick"  }}>
    {name} is a Web Developer from {city}
    </h1>
  </div>
  </div>;
}

export default Home;