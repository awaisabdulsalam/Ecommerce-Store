// import { useState } from "react";

const Sidebar = ({ category, setCategory }) => {
  //   const [category, setCategory] = useState("");

  const categories = ["chair", "sofa", "mobile", "watch", "wireless"];

  return (
    <div>
      {categories.map((category, index) => {
        return (
          <div key={index} className="hero_one_btn">
            <button
              className="category_btn"
              onClick={() => setCategory(category)}
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
