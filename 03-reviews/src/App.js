import React from "react";
import Review from "./Review";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import { useState } from "react";
function App() {
  const [index, setIndex] = useState(0);
  console.log(index);

  const checkRandom = (x) => {
    if (x < 0) {
      return reviews.length - 1;
    }
    if (x > reviews.length - 1) {
      return 0;
    }
    return x;
  };

  const prevPerson = () => {
    if (index === 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const nextPerson = () => {
    if (index === reviews.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const handleRandom = () => {
    const rand = Math.floor(Math.random() * reviews.length);
    if (rand === index) {
      setIndex(checkRandom(index + 1));
    } else {
      setIndex(rand);
    }
  };
  const { name, job, image, text } = reviews[index];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div>
        <h2 style={{ textAlign: "center" }}>Reviews Project Setup</h2>

        <div
          style={{
            textAlign: "center",
            background: "white",
            padding: "1rem 2rem",
            maxWidth: "700px",
            position: "relative",
          }}
        >
          <img
            src={image}
            alt={name}
            style={{
              display: "block",
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              objectFit: "cover",
              margin: "1rem auto",
            }}
          />
          <div>
            <p>{name}</p>
            <p>{job}</p>
            <p>{text}</p>
          </div>
          <div
            className="buttons"
            style={{ display: "flex", gap: "1rem", justifyContent: "center" }}
          >
            <button
              className="btn"
              onClick={prevPerson}
              style={{ cursor: "pointer", padding: "0.5rem" }}
            >
              <FaChevronLeft />
            </button>
            <button
              className="btn"
              onClick={nextPerson}
              style={{ cursor: "pointer", padding: "0.5rem" }}
            >
              <FaChevronRight />
            </button>
            <span
              style={{
                position: "absolute",
                top: "8%",
                left: "42%",
                fontSize: "1rem",
                color: "white",
                background: "blueviolet",
                borderRadius: "50%",
                padding: "0.4rem",
              }}
            >
              <FaQuoteLeft />
            </span>
          </div>
          <button
            className="btn-random"
            onClick={handleRandom}
            style={{ padding: "0.5rem 1rem", marginTop: "1rem" }}
          >
            Random Review
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
