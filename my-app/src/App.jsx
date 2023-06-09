import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Products from "./components/HomeProducts";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      {/* <BrowserRouter basename="/Ecommerce-Store">
        <Header />
        <Routes>
          <Route exact path="/Ecommerce-Store/" element={<Home />} />
          <Route path="/Ecommerce-Store/products" element={<Products />} />
          <Route path="/Ecommerce-Store/card" element={<Card />} />
        </Routes>
        <Footer />
      </BrowserRouter> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/card" element={<Card />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
