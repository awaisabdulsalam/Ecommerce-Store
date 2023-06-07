import { useDispatch } from "react-redux";
import products from "../products";
import { addItem } from "../store/slices/UserSlice";
import Sidebar from "./Sidebar";
import SelectedProduct from "./SelectedProduct";
import { useState } from "react";

const Products = () => {
  const [category, setCategory] = useState();
  console.log(category);
  const dispatch = useDispatch();
  const addToCard = (product) => {
    dispatch(addItem(product));
    product.count = 1;
  };

  return (
    <>
      <main>
        <section className="parent_products_section">
          <section className="hero_section_one">
            <Sidebar setCategory={setCategory} />
          </section>
          <SelectedProduct category={category} />
        </section>
      </main>
    </>
  );
};

export default Products;
