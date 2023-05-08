import { Link } from "react-router-dom"
const Hero = () => {
  return (
    <>
    <section className="hero_section">
    <div className="hero_content">
        <h1 className="shop_now">Shop Now</h1>
        <button className="hero_btn"><Link to="/Ecommerce-Store/products">Shop</Link></button>
    </div>
    </section>
    </>
  )
}

export default Hero