import Link  from "react-router-dom";


const TextImage = () => {
  return (
    <>
      <main>
        <section className="text_img_section">
          <div className="text_img_one">
            <img src="" alt="Image" className="shop_img" />
          </div>
          <div className="text_img_two">
            <h1>Enjoy Best Offers</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis libero adipisci iste dignissimos quisquam est aperiam
              rerum eligendi quas mollitia?
            </p>
            <Link to="/Ecommerce-Store/products">
              <button className="hero_btn">Visit Now</button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default TextImage