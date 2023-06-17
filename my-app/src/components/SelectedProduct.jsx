import { useDispatch } from "react-redux";
import { addItem } from "../store/slices/UserSlice";
import products from "../products";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const SelectedProduct = ({ inputText, allProducts }) => {

  const [useCount, setUseCount] = useState(0);
  

  const dispatch = useDispatch();
  const addToCart = (product) => {
    dispatch(addItem(product));
    setUseCount(product.count + 1)
  };

  const filteredProducts = products.filter((product) => {
    if (product.category.toLowerCase().includes(inputText)) {
      return product.category === inputText;
    }
  });

  return (
    <>
      <section className="products_section">
        <img src="../assets/images/table.jpg" alt="" />
        <div className="products">
          {inputText
            ? filteredProducts.map((product) => {
                return (
                  <div key={product.id} className="product">
                    <div className="product_img_cont">
                      <img
                        src={product.imgUrl}
                        alt="img"
                        className="product_img"
                      />
                    </div>
                    <div>
                      <h1>
                        <span className="dollar"> $ </span>
                        {product.price}
                      </h1>
                      <h2>{product.productName}</h2>
                      <p>{product.shortDesc}</p>
                      <button
                        className="add_card"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                );
              })  
              :
              allProducts.map((allProducts) => {
                return (
                  <div key={allProducts.id} className="product">
                    <div className="product_img_cont">
                      <img
                        src={allProducts.imgUrl}
                        alt="img"
                        className="product_img"
                      />
                    </div>
                    <div>
                      <h1>
                        {" "}
                        <span className="dollar"> $ </span> {allProducts.price}
                      </h1>
                      <h2>{allProducts.productName}</h2>
                      <p>{allProducts.shortDesc}</p>
                      <button
                        className="add_card"
                        onClick={() => addToCart(allProducts)}
                      > <FaPlus className="" />
                      </button>
                    </div>
                  </div>
                );
              })
            }
        </div>
      </section>
    </>
  );
};

export default SelectedProduct;
