import Sidebar from "./Sidebar";
import SelectedProduct from "./SelectedProduct";
import { useState } from "react";
import products from "../products";
import { FaSearch } from "react-icons/fa";

const HomeProducts = () => {
  const allCategories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  const [allProducts, setAllProducts] = useState(products);
  const [categories, setCategories] = useState(allCategories);

  const [inputText, setInputText] = useState("");

  const filterCategory = (category) => {
    if (category === "all") {
      setAllProducts(products);
      return;
    }
    const filterProduct = products.filter(
      (product) => product.category === category
    );
    setAllProducts(filterProduct);
  };

  return (
    <>
      <main>
        <section className="parent_products_section">
          <section className="hero_section_one">
            <section className="sidebar_content">
              <ul>
                <li className="nav_list search_icon_wrapper">
                  <input
                    type="text"
                    placeholder="Search"
                    className="search_input"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                  />
                  <FaSearch className="shopping_cart" />
                </li>
              </ul>
              <Sidebar
                categories={categories}
                filterCategory={filterCategory}
                inputText={inputText}
                setInputText={setInputText}
                allProducts={allProducts}
              />
            </section>
          </section>
          <section className="home_products_section">
            {inputText && <SelectedProduct inputText={inputText} />}
            {allProducts && <SelectedProduct allProducts={allProducts} />}
            {!inputText && !allProducts && <SelectedProduct />}
          </section>
        </section>
      </main>
    </>
  );
};

export default HomeProducts;
