import { FaInstagram, FaTruck, FaChartLine, FaStar } from "react-icons/fa";
import "animate.css";

const Icons = () => {
  return (
    <main>
      <section className="for_icon animate__animated animate__fadeInUp">
        <div className="parent_icons">
          <div className="special_icons">
            <FaChartLine className="head_icon" />
            <h3>Growth</h3>
          </div>
          <div className="special_icons">
            <FaTruck className="head_icon" />
            <h3>Fast Delivery</h3>
          </div>
          <div className="special_icons">
            <FaInstagram className="head_icon" />
            <h3>Social Presence</h3>
          </div>
          <div className="special_icons">
            <FaStar className="head_icon" />
            <h3>Satisfaction</h3>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Icons;
