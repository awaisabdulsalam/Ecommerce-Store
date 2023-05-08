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
       <h2>Eco Logo</h2>
      </div>
      <div>
        <ul>
          <li className="nav_list"><Link to="/my-app/">Home</Link></li>
          <li className="nav_list"><Link to="/my-app/products">Products</Link></li>
          <li className="nav_list"><Link to="/my-app/card">Cart {`(${cart})`}</Link></li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Header;
