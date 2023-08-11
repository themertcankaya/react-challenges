import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, tours, setTours }) => {
  const [readMore, setReadMore] = useState(false);
  console.log(readMore);
  const handleDelete = (id) => {
    const updatedTours = tours.filter((item) => item.id !== id);
    setTours(updatedTours);
  };

  return (
    <div className="item" style={{ position: "relative" }}>
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
        }}
      />
      <div className="info">
        <h3>{name}</h3>
        <p>
          {!readMore ? info.substring(0, 200) : info}
          <span
            onClick={() => setReadMore(!readMore)}
            style={{ color: "green", fontSize: "1.2rem", cursor: "pointer" }}
          >
            ...Read more
          </span>
        </p>
      </div>
      <button
        onClick={() => handleDelete(id)}
        style={{
          width: "100%",
          position: "absolute",
          bottom: "-1rem",
          left: "50%",
          transform: "translateX(-50%)",
          background: "salmon",
          border: "none",
          padding: "0.2rem 0.5rem",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
      <p
        style={{
          position: "absolute",
          right: "0",
          top: "0",
          background: "green",
          color: "white",
          fontSize: "1.5rem",
        }}
      >
        ${price}
      </p>
    </div>
  );
};

export default Tour;
