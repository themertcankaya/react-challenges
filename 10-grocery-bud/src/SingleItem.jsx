import React, { useState } from "react";

function SingleItem({ id, name, completed, removeItem, editItem }) {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={completed}
        className="single-item"
        onChange={() => editItem(id)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: completed && "line-through",
        }}
      >
        {name}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => removeItem(id)}
      >
        delete
      </button>
    </div>
  );
}

export default SingleItem;
