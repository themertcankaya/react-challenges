import React, { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setText(data.slice(0, Number(count)));
  };

  const handleClick = () => {};

  return (
    <div className="wrapper">
      <h2>TIRED OF BORING LOREM IPSUM?</h2>
      <form onSubmit={handleSubmit} className="form-tag">
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min={1}
          max={8}
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn">Generate</button>
        {text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </form>
    </div>
  );
}

export default App;
