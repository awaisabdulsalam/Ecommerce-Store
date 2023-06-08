import Sidebar from "./Sidebar";
import SelectedProduct from "./SelectedProduct";
import { useState } from "react";
import { useEffect } from "react";

const Products = () => {
  const [category, setCategory] = useState();
  const [products, setProducts] = useState(true);

  useEffect(() => {
    setProducts(false);
    console.log("Hello");
  }, [category]);

  return (
    <>
      <main>
        <section className="parent_products_section">
          <section className="hero_section_one">
            <Sidebar setCategory={setCategory} />
          </section>
          <section>
            {/* {products && <SelectedProduct />} */}
            {products === true ? (
              <SelectedProduct />
            ) : (
              <SelectedProduct category={category} />
            )}
          </section>
        </section>
      </main>
    </>
  );
};

export default Products;
