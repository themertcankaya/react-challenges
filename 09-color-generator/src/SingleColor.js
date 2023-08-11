import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ alpha, rgb, type, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  let bcg = rgb.join(",");
  let hex = rgbToHex(...rgb);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hex);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
      {alert && (
        <p
          className="alert"
          style={{ color: `${index > 10 ? "white" : "dark"}` }}
        >
          copied to clipboard
        </p>
      )}
    </article>
  );
};

export default SingleColor;
