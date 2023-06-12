import Sidebar from "./Sidebar";
import SelectedProduct from "./SelectedProduct";
import { useState } from "react";
import products from "../products";

const HomeProducts = ({ inputText }) => {
  const allCategories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];
  
  const [allProducts, setAllProducts] = useState(products);
  const [categories, setCategories] = useState(allCategories);


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
      {/* //     {inputText === allProducts.category || */}(
      <main>
        <section className="parent_products_section">
          <section className="hero_section_one">
            <Sidebar categories={categories} filterCategory={filterCategory}  />
          </section>
          <section>
            <SelectedProduct allProducts={allProducts} inputText={inputText} />
          </section>
        </section>
      </main>
      ){/* // } */}
    </>
  );
};

export default HomeProducts;
