// import { useState } from "react";

const Sidebar = ({ filterCategory }) => {
  const categories = ["all", "chair", "sofa", "mobile", "watch", "wireless"];

  return (
    <div>
      {categories.map((category, index) => {
        return (
          <div key={index} className="hero_one_btn">
            <button
              className="category_btn"
              onClick={() => filterCategory(category)}
            >
              {category}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
