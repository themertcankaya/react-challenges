import React from "react";

const Menu = ({ menuItems }) => {
  // console.log(menuItems);
  return (
    <div className="menu">
      {menuItems.map(({ id, title, category, price, img, desc }) => (
        <div key={id} className="product">
          <img src={img} alt={title} />
          <div className="info">
            <div className="up">
              <h4>{title}</h4>
              <span>${price}</span>
            </div>
            <p className="desc">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
