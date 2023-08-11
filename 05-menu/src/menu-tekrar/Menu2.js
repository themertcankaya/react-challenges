import React from "react";

const Menu2 = ({ menuItems }) => {
  return (
    <div>
      {menuItems.map((item) => (
        <div
          key={item.id}
          style={{
            padding: "1rem",
            marginBottom: "2rem",
            border: "1px solid red",
          }}
        >
          <p>{item.title}</p>
          <p>{item.price}</p>
          <p>{item.desc}</p>
          <p>{item.category}</p>
        </div>
      ))}
    </div>
  );
};

export default Menu2;
