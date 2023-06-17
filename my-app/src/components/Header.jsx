import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const data = useSelector((state) => {
    return state.users;
  });


  const cart = data.length;

  const location = useLocation();
  const isActivated = (route) => {
    return location.pathname === route;
  };

  return (
    <>
      <nav>
        <div>
          <h2 className="logo">Eco Logo</h2>
        </div>
        <div>
          <ul>
            <li
              className={`nav_list ${
                isActivated("/Ecommerce-Store") ? "active" : ""
              }`}
            >
              <Link to="/Ecommerce-Store">Home</Link>
            </li>
            <li
              className={`nav_list ${
                isActivated("/Ecommerce-Store/products") ? "active" : ""
              }`}
            >
              <Link to="/Ecommerce-Store/products">Products</Link>
            </li>
            <li
              className={`nav_list ${
                isActivated("/Ecommerce-Store/card") ? "active" : ""
              }`}
            >
              <Link to="/Ecommerce-Store/card">
                <FaShoppingCart className="shopping-cart" />
                <span
                  className={
                    cart === 0 ? "notification_hide" : "notification_show"
                  }
                >{`${cart}`}</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
