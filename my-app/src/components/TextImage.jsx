import { Link }  from "react-router-dom";
import "animate.css";
import img from "../images/shopping2.jpg"

const TextImage = () => {
  return (
    <>
      <main>
        <section className="text_img_section">
          <div className="text_img_one animate__animated animate__fadeInLeft">
            <img src={img} alt="Image" className="shop_img" />
          </div>
          <div className="text_img_two animate__animated animate__fadeInRight">
            <h2 className="hero_heading">Enjoy Best Offers</h2>
            <p className="hero_desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis libero adipisci iste dignissimos quisquam est aperiam
              rerum eligendi quas mollitia?
            </p>
            {/* <Link to="/Ecommerce-Store/products"> */}
            <Link to="/products">
              <button className="hero_btn">Visit Now</button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default TextImage