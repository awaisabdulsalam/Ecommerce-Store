// import { useDispatch } from "react-redux";
// import products from "../products";
// import { addItem } from "../store/slices/UserSlice";

// const SelectedProduct = ({ allProducts, inputText }) => {
//   const dispatch = useDispatch();
//   const addToCard = (product) => {
//     dispatch(addItem(product));
//     product.count = 1;
//   };

//   const filterProducts = allProducts.filter((product) => product.category === inputText);

//   return (
//     <>
//       <section className="products_section">
//         <img src="../assets/images/table.jpg" alt="" />
//         <div className="products">
//           {
//             filterProducts.length > 0 ? (
//           filterProducts.map((product) => {
//             return (
//               inputText === product.category || (
//                 <div key={product.id} className="product">
//                   <div className="product_img_cont">
//                     <img
//                       src={product.imgUrl}
//                       alt="img"
//                       className="product_img"
//                     />
//                   </div>
//                   <div>
//                     <h1>Rs. {product.price}</h1>
//                     <h2>{product.productName}</h2>
//                     <p>{product.shortDesc}</p>
//                     <button
//                       className="add_card"
//                       onClick={() => addToCard(product)}
//                     >
//                       Add to card
//                     </button>
//                   </div>
//                 </div>
//               )
//             )
//           )
//           )
//           : ()
//         }
//         </div>
//       </section>
//     </>
//   );
// };

// export default SelectedProduct;

//******************************************** */

import { useDispatch } from "react-redux";
import { addItem } from "../store/slices/UserSlice";

const SelectedProduct = ({ allProducts, inputText="Hello" }) => {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(addItem(product));
    product.count = 1;
  };
  console.log(inputText);
  const filteredProducts = allProducts.filter(
    (product) => {
      console.log(typeof product.category);
      const convert = product.category.toLowerCase();
      console.log(convert);
      return product.category.toLowerCase() === inputText.toLowerCase();
    }
  );

  return (
    <>
      <section className="products_section">
        <img src="../assets/images/table.jpg" alt="" />
        <div className="products">
          {inputText
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
