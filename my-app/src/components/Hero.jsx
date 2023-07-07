import {  useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import image1 from "../images/double-sofa-01.png";
import image2 from "../images/phone-05.jpg";
import image3 from "../images/watch-03.jpg";
import image4 from "../images/wireless-01.png";
import image5 from "../images/arm-chair-01.jpg";

const Hero = () => {
  const imageArray = [
    {
      img: image1,
    },
    {
      img: image2,
    },
    {
      img: image3,
    },
    {
      img: image4,
    },
    {
      img: image5,
    },
    // image3, image4, image5
  ];

  const [sliderImage, setSliderImage] = useState(0);

  const prevImage = () => {
    setSliderImage(sliderImage === 0 ? imageArray.length - 1 : sliderImage - 1);
  };
  const nextImage = () => {
    setSliderImage(sliderImage === imageArray.length - 1 ? 0 : sliderImage + 1);
  };



  return (
    <main className="hero_main" data-aos="fade-up">
      <section className="hero_section">
        <section className="hero_section_two">
          <div className="sub_hero_sec_two">
            <div className="hero_content">
              <div>
                <h1 className="hero_heading">50% Off for First Shopping</h1>
              </div>
              <div>
                <p className="hero_desc">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                  provident reiciendis quae dicta. Aut, distinctio fugiat at
                  namdolorum ad!
                </p>
              </div>
              <div>
                <Link to="/Ecommerce-Store/products">
                  <button className="hero_btn">Visit Now</button>
                </Link>
              </div>
            </div>
            {imageArray.map((item, index) => {
              return (
                sliderImage === index && (
                  <div key={index} className="image_div">
                    <img src={item.img} alt="Image" className="slider_image" />
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
