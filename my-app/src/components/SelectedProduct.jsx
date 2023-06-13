import { useDispatch } from "react-redux";
import { addItem } from "../store/slices/UserSlice";
import { useEffect } from "react";
import { useRef } from "react";


export const  getInputText = (input) => {

  const sectionRef = useRef(null);

  console.log(sectionRef.current);
  // useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollY(<SelectedProduct input={input} />);
    }
  // }
  // , [input])
}

const SelectedProduct = ({ allProducts, input }) => {
  const dispatch = useDispatch();
  // const sectionRef = useRef(null);

  const addToCart = (product) => {
    dispatch(addItem(product));
    product.count = 1;
  };


  const filteredProducts = allProducts.filter(
    (product) => {
      return product.category.toLowerCase() === input.toLowerCase();
    }
  );

  return (
    <>
      <section className="products_section">
        <img src="../assets/images/table.jpg" alt="" />
        <div className="products">
          {input
            ? filteredProducts.map((product) =>{
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
                    <h1>Rs. {product.price}</h1>
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
              )})
            : allProducts.map((product) => {
            return  (
                <div key={product.id} className="product">
                  <div className="product_img_cont">
                    <img
                      src={product.imgUrl}
                      alt="img"
                      className="product_img"
                    />
                  </div>
                  <div>
                    <h1>Rs. {product.price}</h1>
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
              )})}
        </div>
      </section>
    </>
  );
};

export default SelectedProduct;
