import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from "react-router-dom";
import "animate.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="foot_text animate__animated animate__fadeInUp">
          <h4>Eco Logo</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            sed earum autem?
          </p>
        </div>
        <div className="foot_pages animate__animated animate__fadeInUp">
          <ul>
            <li>
              {/* <Link to="/Ecommerce-Store">Home</Link> */}
              <Link to="/">Home</Link>
            </li>
            <li>
              {/* <Link to="/Ecommerce-Store/products">Products</Link> */}
              <Link to="/products">Products</Link>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div className="animate__animated animate__fadeInUp">
          <ul>
            <li>
              <a href="/">Privacy</a>
            </li>
            <li>
              <a href="/">Terms</a>
            </li>
          </ul>
        </div>
        <div>
          <div className="icons animate__animated animate__fadeInUp">
            <a href="https://twitter.com/TheAwais170" target="_blanck">
              <FaTwitter className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/awais-abdul-salam-9354b0221/"
              target="_blanck"
            >
              <FaLinkedin className="icon" />
            </a>
            <a
              href="https://www.facebook.com/awaisaliansari.ansari.75"
              target="_blanck"
            >
              <FaFacebook className="icon" />
            </a>
            <a href="https://www.instagram.com/theawais170/" target="_blanck">
              <FaInstagram className="icon" />
            </a>
          </div>
        </div>
      </footer>
      <hr />
      <div className="by_awais animate__animated animate__fadeInUp">
        <h3>Made by Awais</h3>
      </div>
      <hr />
    </>
  );
}

export default Footer