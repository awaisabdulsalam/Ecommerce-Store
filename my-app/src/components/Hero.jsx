import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { buttonFilter } from "../store/slices/UserSlice";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { Link } from "react-router-dom";
import image1 from "../images/double-sofa-01.png";
import image2 from "../images/phone-05.jpg";
import image3 from "../images/watch-03.jpg";
import image4 from "../images/wireless-01.png";
import image5 from "../images/arm-chair-01.jpg";
import Sidebar from "./Sidebar";

const Hero = () => {
  const imageArray = [image1, image2, image3, image4, image5];

  const [sliderImage, setSliderImage] = useState(0);
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();
  const handleType = (e) => {
    setCategory(e.target.textContent);
    const buttonText = e.target.textContent;
    dispatch(buttonFilter(buttonText));
  };
  // console.log(category);
  const prevImage = () => {
    setSliderImage(sliderImage === 0 ? imageArray.length - 1 : sliderImage - 1);
  };
  const nextImage = () => {
    setSliderImage(sliderImage === imageArray.length - 1 ? 0 : sliderImage + 1);
  };

  useEffect(() => {
    // console.log(category);
  }, [category]);

  return (
    <main className="hero_main">
      <section className="hero_section">
        {/* <section className="hero_section_one">
          <Sidebar />
        </section> */}
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
