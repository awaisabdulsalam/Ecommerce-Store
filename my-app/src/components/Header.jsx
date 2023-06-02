import { FaShoppingCart  } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const data = useSelector((state) => {
    return state.users
  });
  const cart = data.length;
  return (
    <>
    <nav>
      <div>
       <h2 className="logo">Eco Logo</h2>
      </div>
      <div>
        <ul>
          <li className="nav_list"><Link to="/Ecommerce-Store">Home</Link></li>
          <li className="nav_list"><Link to="/Ecommerce-Store/products">Products</Link></li>
          <li className="nav_list"><Link to="/Ecommerce-Store/card">
            <FaShoppingCart  className='shopping-cart' /><span className={cart.length === 0 ? 'notification_hide' : 'notification_show'}>{`${cart}`}</span></Link></li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Header;
