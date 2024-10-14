// App.js
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from './components/frontPage/FrontPage';
import Home from "./components/home/Home";
import Signup from "./components/account/Signup";
import Signin from "./components/account/Signin";
import Product from "./components/product/Product";
import ProductDetail from "./components/productDetail/ProductDetail";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";

function App() {
  const [cart, setCart] = useState([]); // Cart state

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/productDetail/:id" element={<ProductDetail cart={cart} setCart={setCart} />} />
          <Route path="/shoppingCart" element={<ShoppingCart cart={cart} setCart={setCart} />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
