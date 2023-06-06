import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import image1 from "../images/double-sofa-01.png";
import image2 from "../images/phone-05.jpg";
import image3 from "../images/watch-03.jpg";
import image4 from "../images/wireless-01.png";
import image5 from "../images/arm-chair-01.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  const imageArray = [image1, image2, image3, image4, image5];
  const categories = ["chair", "sofa", "mobile", "watch", "wireless"];

  const [sliderImage, setSliderImage] = useState(0);
  const [category, setCategory] = useState();

  const handleType = (e) => {
    setCategory(e.target.textContent);
    console.log(category);
  };
  const prevImage = () => {
    setSliderImage(sliderImage === 0 ? imageArray.length - 1 : sliderImage - 1);
  };
  const nextImage = () => {
    setSliderImage(sliderImage === imageArray.length - 1 ? 0 : sliderImage + 1);
  };

  useEffect(() => {
    console.log(category);
  }, [category]);

  return (
    <main className="hero_main">
      <section className="hero_section">
        <section className="hero_section_one">
          {categories.map((category, index) => {
            return (
              <div key={index} className="hero_one_btn">
                <Link to="/Ecommerce-Store/categories">
                  <button className="category_btn" onClick={handleType}>
                    {category}
                  </button>
                </Link>
              </div>
            );
          })}
        </section>
        <section className="hero_section_two">
          <div className="sub_hero_sec_two">
            {/* {imageArray.map((image, index) => {
              return (
                sliderImage === index && ( */}
            {/* <> */}
            <div className="hero_content">
              <div>
                {/* <h1 className="hero_heading">{image.heading}</h1> */}
                <h1 className="hero_heading">50% Off for First Shopping</h1>
              </div>
              <div>
                {/* <p className="hero_desc">{image.desc}</p> */}
                <p className="hero_desc">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                  provident reiciendis quae dicta. Aut, distinctio fugiat at
                  namdolorum ad!
                </p>
              </div>
              <div>
                {/* <button className="hero_btn">{image.btn}</button> */}
                <button className="hero_btn">Visit Now</button>
              </div>
            </div>
            {imageArray.map((image, index) => {
              return (
                sliderImage === index && (
                  <div key={index} className="image_div">
                    <img src={image} alt="Image" className="slider_image" />
                  </div>
                )
              );
            })}
          </div>
          <div className="arrow_section">
            <FaArrowLeft onClick={prevImage} className="arrow_icon arrow_one" />
            <FaArrowRight
              onClick={nextImage}
              className="arrow_icon arrow_two"
            />
          </div>
        </section>
      </section>
    </main>
  );
};

export default Hero;
