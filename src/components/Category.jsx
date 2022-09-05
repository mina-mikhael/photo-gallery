import React from "react";
import "./Category.css";

function Category({ category, clickHandler }) {
  return (
    <div className="category" onClick={() => clickHandler(category.name)}>
      <img
        src={`../assets/${category.name}/${category.images[1].photo_name}`}
        alt={category.name}
      />
      <h4>{category.name}</h4>
    </div>
  );
}

export default Category;
