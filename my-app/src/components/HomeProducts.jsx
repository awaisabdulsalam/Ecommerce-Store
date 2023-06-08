import Sidebar from "./Sidebar";
import SelectedProduct from "./SelectedProduct";
import { useState } from "react";
import { useEffect } from "react";
import products from "../products";

const Products = () => {
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
      <main>
        <section className="parent_products_section">
          <section className="hero_section_one">
            <Sidebar categories={categories} filterCategory={filterCategory} />
          </section>
          <section>
            {/* <SelectedProduct category={category} /> */}
            <SelectedProduct allProducts={allProducts} />
          </section>
        </section>
      </main>
    </>
  );
};

export default Products;
