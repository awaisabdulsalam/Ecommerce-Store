// import { Link } from "react-router-dom"
const Hero = () => {
  return (
    <>
    <main className="hero_main">
      <section className="hero_section">
        <section className="hero_section_one"></section>
        <section className="hero_section_two">
          <div>
            <h1>50% Off for First Shopping</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam provident reiciendis quae dicta. Aut, distinctio fugiat at nam dolorum ad!</p>
            <button className="hero_btn">Visit Now</button>
          </div>
          <div></div>
        </section>
      </section>
    </main>
    {/* <section className="hero_section">
    <div className="hero_content">
        <h1 className="shop_now">Buy Every Product here!</h1>
        <button className="hero_btn"><Link to="/Ecommerce-Store/products">Shop</Link></button>
    </div>
    </section> */}
    </>
  )
}

export default Hero