import React from "react";
import "./Category.css";

function Category({ category }) {
  console.log(category);
  return (
    <div className="category">
      <img
        src={`../assets/${category.name}/${category.images[0].photo_name}`}
        alt={category.name}
      />
      <h4>{category.name}</h4>
    </div>
  );
}

export default Category;
