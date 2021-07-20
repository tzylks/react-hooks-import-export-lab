import React from "react";
import * as data from "../data/user.js"

function Home() {
  return (
    <div id="home">
      <h1>
        {data.username} is a Web Developer from {data.city}
      </h1>
    </div>
  );
  
}

export default Home
