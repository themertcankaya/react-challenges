import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
import "./index.css";
function App() {
  return (
    <div className="wrapper">
      <h2>Accordion Project Setup</h2>
      {data.map((item) => (
        <SingleQuestion key={item.id} {...item} />
      ))}
    </div>
  );
}

export default App;
