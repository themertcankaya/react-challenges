import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const buttonCategories = [
  "all",
  ...new Set(items.map((item) => item.category)),
];
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const updatedItems = items.filter((item) => item.category === category);
    setMenuItems(updatedItems);
  };

  return (
    <div className="outer">
      <h2>Our Menu</h2>
      <Categories
        buttonCategories={buttonCategories}
        filterItems={filterItems}
      />
      <Menu menuItems={menuItems} />
    </div>
  );
}

export default App;
