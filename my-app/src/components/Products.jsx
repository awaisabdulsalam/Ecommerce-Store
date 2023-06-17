import  products  from "../products";

const Products = () => {
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
          <h1>$ {product.price}</h1>
            <h2>{product.productName}</h2>
            <p>{product.shortDesc}</p>
            <button className="add_card">Add to card</button>
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