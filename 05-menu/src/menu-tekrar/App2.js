import React, { useState } from "react";
import menuData from "../data";
import Categories2 from "./Categories2";
import Menu2 from "./Menu2";
console.log(menuData);

const buttonCategories = [
  "all",
  ...new Set(menuData.map((item) => item.category)),
];
console.log(buttonCategories);

const App2 = () => {
  const [menuItems, setMenuItems] = useState(menuData);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menuData);
      return;
    }
    const updatedItems = menuData.filter((item) => item.category === category);
    setMenuItems(updatedItems);
  };

  return (
    <>
      <Categories2
        buttonCategories={buttonCategories}
        filterItems={filterItems}
      />
      <Menu2 menuItems={menuItems} />
    </>
  );
};

export default App2;
