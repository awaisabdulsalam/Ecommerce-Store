import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import image1 from "../images/double-sofa-01.png";
import image2 from "../images/double-sofa-02.png";
import image3 from "../images/double-sofa-03.png";

const Hero = () => {
  const imageArray = [image1, image2, image3];
  const images = imageArray.map((image) => {
    // console.log(image);
    return image;
  });
  const [count, setCount] = useState(0);
  const [sliderImage, setSliderImage] = useState(images[count]);
  console.log(count);
  console.log(sliderImage);
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
            <div>
              <img
                src={`${sliderImage}`}
                alt="Image"
                className="slider_image"
              />
            </div>
          </div>
          <FaArrowLeft onClick={() => setCount(count - 1)} />
          <FaArrowRight onClick={() => setCount()} />
        </section>
      </section>
    </main>
  );
};

export default Hero;
