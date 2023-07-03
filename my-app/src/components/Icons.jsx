import { FaInstagram, FaTruck, FaChartLine, FaStar } from "react-icons/fa";
const Icons = () => {
  return (
    <main>
      <section className="for_icon">
        <div className="parent_icons">
          <div className="special_icons">
            <FaInstagram className="head_icon" />
            <h3>Fast Delivery</h3>
          </div>
          <div className="special_icons">
            <FaTruck className="head_icon" />
            <h3>Fast Delivery</h3>
          </div>
          <div className="special_icons">
            <FaChartLine className="head_icon" />
            <h3>Fast Delivery</h3>
          </div>
          <div className="special_icons">
            <FaStar className="head_icon" />
            <h3>Fast Delivery</h3>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Icons;
