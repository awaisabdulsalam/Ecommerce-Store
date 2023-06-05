import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import image1 from "../images/double-sofa-01.png";
import image2 from "../images/double-sofa-02.png";
import image3 from "../images/double-sofa-03.png";
import { current } from "@reduxjs/toolkit";

const Hero = () => {
  const imageArray = [image1, image2, image3];
  // const images = imageArray.map((image) => {
  //   // console.log(image);
  //   return image;
  // });
  const [sliderImage, setSliderImage] = useState(0);

  const prevImage = () => {
    setSliderImage(sliderImage === 0 ? imageArray.length - 1 : sliderImage - 1);
  };
  const nextImage = () => {
    setSliderImage(sliderImage === imageArray.length - 1 ? 0 : sliderImage + 1);
  };

  return (
    <main className="hero_main">
      <section className="hero_section">
        <section className="hero_section_one"></section>
        <section className="hero_section_two">
          <div>
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
            {imageArray.map((image, index) => {
              return (
                sliderImage === index && (
                  <div key={index}>
                    <img src={image} alt="Image" className="slider_image" />
                  </div>
                )
              );
            })}
          </div>
          <FaArrowLeft onClick={prevImage} />
          <FaArrowRight onClick={nextImage} />
        </section>
      </section>
    </main>
  );
};

export default Hero;
