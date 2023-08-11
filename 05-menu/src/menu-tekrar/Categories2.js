import React from "react";

const Categories2 = ({ buttonCategories, filterItems }) => {
  return (
    <div>
      {buttonCategories.map((item, index) => (
        <button onClick={() => filterItems(item)} key={index}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default Categories2;
