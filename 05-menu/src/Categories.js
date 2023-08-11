import React from "react";

const Categories = ({ buttonCategories, filterItems }) => {
  return (
    <div className="categories">
      {buttonCategories.map((item, index) => (
        <button onClick={() => filterItems(item)} className="btn" key={index}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default Categories;
