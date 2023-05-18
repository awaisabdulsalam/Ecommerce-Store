import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FiShoppingCart } from 'react-icons/fa';

const Header = () => {
  const data = useSelector((state) => {
    return state.users
  });
  const cart = data.length;
  return (
    <>
    <nav>
      <div>
       <h2>Eco Logo</h2>
      </div>
      <div>
        <ul>
          <li className="nav_list"><Link to="/Ecommerce-Store/">Home</Link></li>
          <li className="nav_list"><Link to="/Ecommerce-Store/products">Products</Link></li>
          <li className="nav_list"><Link to="/Ecommerce-Store/card"><FiShoppingCart className='icon' />{`(${cart})`}</Link></li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Header;
