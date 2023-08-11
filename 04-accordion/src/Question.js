import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ id, title, info }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div>
      <header style={{ marginBottom: "2rem" }}>
        <div
          style={{
            margin: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
          }}
        >
          <h3>{title}</h3>
          <button onClick={() => setShowAnswer(!showAnswer)}>
            {!showAnswer ? <AiOutlinePlus /> : <AiOutlineMinus />}
          </button>
        </div>
        {showAnswer && <p className="info">{info}</p>}
      </header>
    </div>
  );
};

export default Question;
