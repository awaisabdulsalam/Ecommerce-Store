// import { useState } from 'react'
import "./App.css";
import Home from "./components/Home";
import Products from "./components/HomeProducts";
import Card from "./components/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import products from "./products";
import { useState } from "react";

function App() {
  const [data, setData] = useState();
  const filterItems = (category) => {
    const filterData = products.filter((item) => item.category === category);
    setData(filterData);
  };
  console.log(data + "DFGHJ");

  return (
    <>
      <BrowserRouter basename="/Ecommerce-Store">
        <Header />
        <Routes>
          <Route exact path="/Ecommerce-Store/" element={<Home />} />
          <Route path="/Ecommerce-Store/products" element={<Products />} />
          <Route path="/Ecommerce-Store/card" element={<Card />} />
          <Route
            path="/Ecommerce-Store/categories"
            element={<Categories filterItems={filterItems} data={data} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
