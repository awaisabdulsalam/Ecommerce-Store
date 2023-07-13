import { Link } from "react-router-dom";
import "animate.css";

const CallAction = () => {
  return (
    <main>
      <section className="call_action">
        <div className="call_first animate__animated animate__fadeInUp">
          <h1 className="call_heading">Enjoy Best Offers</h1>
          {/* <Link to="/Ecommerce-Store/products"> */}
          <Link to="/products">
            <button className="call_btn">Shop Now</button>
          </Link>
        </div>
        <div></div>
      </section>
    </main>
  );
};

export default CallAction;
