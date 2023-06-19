
const Sidebar = ({ filterCategory, inputText, setInputText, categories }) => {

  return (
    <div className="sidebar_btns">
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
