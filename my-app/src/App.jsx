// import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Products from './components/HomeProducts'
import Card from './components/Card'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {

  return (
    <>
    <BrowserRouter basename='/my-app'>
    <Header />
    <Routes>
     <Route exact path="/my-app/" element={<Home />} />
     <Route path='/my-app/products' element={<Products />} />
     <Route path='/my-app/card' element={<Card />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
