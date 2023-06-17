
const Sidebar = ({ filterCategory, inputText, setInputText, categories }) => {
  // const categories = ["all", "chair", "sofa", "mobile", "watch", "wireless"];

  return (
    <div>
      {categories.map((category, index) => {
        return (
          <div key={index} className="hero_one_btn">
            <button
              className={`category_btn ? ${
                category === inputText ? "active" : ""
              }`}
              onClick={() => {
                setInputText("")
                return filterCategory(category);
              }}
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
