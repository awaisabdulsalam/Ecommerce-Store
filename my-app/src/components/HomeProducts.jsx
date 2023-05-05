import { useDispatch } from "react-redux";
import  products  from "../products";
import { addItem } from "../store/slices/UserSlice";
const Products = () => {

  const dispatch = useDispatch();
  const addToCard = (product) => {
        dispatch(addItem(product));
        product.count = 1;
  }

  return (
    <>
    <section className="products_section">
      <img src="../assets/images/table.jpg" alt="" />
    <div className="products">
        {products.map((product) => {
       return (
       <div key={product.id} className="product">
        <div className="product_img_cont">
            <img src={product.imgUrl} alt="img" className="product_img"  />
        </div>
        <div>
          <h1>Rs. {product.price}</h1>
            <h2>{product.productName}</h2>
            <p>{product.shortDesc}</p>
            <button className="add_card" onClick={()=> addToCard(product)}>Add to card</button>
        </div>
        </div>
        )
        })}
    </div>
    </section>
    </>
  )
}

export default Products