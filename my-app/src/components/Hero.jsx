import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import products from "../products";

const Hero = () => {
  const firstProduct = products[0]; // Access the first product in the array

  return (
    <main className="hero_main">
      <section className="hero_section">
        <section className="hero_section_one"></section>
        <section className="hero_section_two">
          {/* <div> */}
          <div className="hero_content">
            <div>
              <h1 className="hero_heading">50% Off for First Shopping</h1>
            </div>
            <div>
              <p className="hero_desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                provident reiciendis quae dicta. Aut, distinctio fugiat at nam
                dolorum ad!
              </p>
            </div>
            <div>
              <button className="hero_btn">Visit Now</button>
            </div>
          </div>
          <div>
            <img
              src={firstProduct.imgUrl}
              alt="Image"
              className="slider_image"
            />
          </div>
          {/* </div> */}
          <FaArrowLeft />
          <FaArrowRight />
        </section>
      </section>
    </main>
  );
};

export default Hero;
